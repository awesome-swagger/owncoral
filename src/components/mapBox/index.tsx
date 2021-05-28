import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import AddressPin from '../../assets/AddressPin.png';

export const MapBox = ({ propertyDetail }: { propertyDetail: any }) => {
  const address = propertyDetail.address;
  const apiToken = process.env.SNOWPACK_PUBLIC_MAPBOX_TOKEN as string;

  mapboxgl.accessToken = apiToken;

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);

  const getLocation = async () => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address.line1}%20${address.cityLocality}%20${address.stateRegion}%20${address.country}.json?access_token=${apiToken}`,
    );
    const data = await response.json();
    console.log('Data ===>', data);
    setLng(data.features[0].center[0]);
    setLat(data.features[0].center[1]);
  };

  useEffect(() => {
    getLocation();
    const map = new mapboxgl.Map({
      container: mapContainer.current || '',
      style: 'mapbox://styles/amirsaeed92/ckp7azb790prj18qtw1aoj1uu',
      center: [lng, lat],
      zoom: 18,
    });

    map.on('load', function () {
      map.loadImage(AddressPin, function (error, image: any) {
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
    map.resize();

    return () => map.remove();
  }, [lng, lat]);

  return <div ref={mapContainer} style={{ width: '100%', height: '60vh' }}></div>;
};
