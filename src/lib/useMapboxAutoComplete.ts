import { useCallback, useEffect, useState } from 'react';

// @ts-ignore
import mapboxgl from 'mapbox-gl';

const apiToken = process.env.SNOWPACK_PUBLIC_MAPBOX_TOKEN as string;
mapboxgl.accessToken = apiToken;

type Suggestions = {
  id: string;
  place_name: string;
}
interface HookReturn {
  ready: boolean;
  value: string;
  setValue: (val: string, shouldFetchData?: boolean) => void;
  suggestions: Array<Suggestions>;
  clearSuggestions: () => void;
  init: () => void;
}

export const usePlacesAutocomplete = ({
  debounce = 300,
  defaultValue = "",
}: UseAutoCompleteProsT): HookReturn => {

  const [searchVal, setVal] = useState<string>(defaultValue);
  const [fetchData, setFetchData] = useState<boolean>(true);
  const [suggestions, setSuggestions] = useState<Array<Suggestions>>([]);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const getLocation = async () => {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchVal}.json?access_token=${apiToken}`,
      );
      const data = await response.json();
      setSuggestions(data.features);
      setReady(true);
    };

    setReady(false);

    // Stop the previous setTimeout if there is one in progress
    // if (timeoutId) clearTimeout(timeoutId);

    // Launch a new request in debounce(ms)
    const timeoutId = setTimeout(() => {
      if (searchVal?.trim() !== "" && fetchData) getLocation();
    }, debounce);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [searchVal, debounce, fetchData]);

  var setValue = (val: string, shouldFetchData?: boolean) => {
    setFetchData(shouldFetchData ?? false);
    setVal(val);
  }

  const clearSuggestions = () => {
    setReady(true);
    setSuggestions([]);
  }

  const init = () => {
    setValue(defaultValue, false);
    setSuggestions([]);
    setReady(false);
  }

  return {
    ready,
    value: searchVal,
    setValue,
    suggestions,
    clearSuggestions,
    init,
  };
};

export type UseAutoCompleteProsT = {
  debounce?: number;
  defaultValue?: string;
};

export const getFormattedAddress = async (address: string) => {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json` +
    `?country=US&limit=10&types=region,postcode,place,locality` +
    `&access_token=${apiToken}`,
  ).then(res => res.json());

  const data = response.features;

  const getComponents = (key: string) =>
    data.find((d: any) => d.place_type.includes(key))?.text || "";

  return {
    Apt: getComponents('place'),
    City: getComponents('locality'),
    State: getComponents('region'),
    PostalCode: getComponents('postcode'),
  }
}
