import { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';

// @ts-ignore
import mapboxgl from 'mapbox-gl';

import AddressPin from '../../assets/AddressPin.png';

export const MapBox = ({ address }: { address: any }) => {
  const apiToken = process.env.SNOWPACK_PUBLIC_MAPBOX_TOKEN as string;
  const styleUrl = process.env.SNOWPACK_PUBLIC_MAPBOX_STYLE_URL as string;

  mapboxgl.accessToken = apiToken;

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapContainer = <Box ref={mapContainerRef} w="100%" h="25em" />;

  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);

  useEffect(() => {
    const getLocation = async () => {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/` +
          `${address.line1}%20${address.cityLocality}%20${address.stateRegion}%20${address.country}` +
          `.json?access_token=${apiToken}`,
      );
      const data = await response.json();
      setLng(data.features[0].center[0]);
      setLat(data.features[0].center[1]);
    };

    getLocation();
  }, [address, apiToken]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current || '',
      style: styleUrl,
      center: [lng, lat],
      zoom: 12,
    });
    map.resize();

    map.on('idle', function () {
      map.resize();
    });
    map.scrollZoom.disable();

    map.on('load', function () {
      map.loadImage(AddressPin, function (error: any, image: any) {
        if (error) throw error;

        map.addImage('AddressMarker', image);

        map.addSource('point', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: { name: 'Property' },
                geometry: {
                  type: 'Point',
                  coordinates: [lng, lat],
                },
              },
            ],
          },
        });

        map.addLayer({
          id: 'points',
          type: 'symbol',
          source: 'point',
          layout: {
            'icon-image': 'AddressMarker',
            'icon-size': 0.3,
          },
        });
      });
    });

    return () => map.remove();
  }, [lng, lat, styleUrl]);

  return mapContainer;
};
