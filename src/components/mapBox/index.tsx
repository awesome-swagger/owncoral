import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import AddressPin from '../../assets/AddressPin.png';

export const MapBox = ({
  propertyLng,
  propertyLat,
}: {
  propertyLng: number;
  propertyLat: number;
}) => {
  mapboxgl.accessToken = process.env.SNOWPACK_PUBLIC_MAPBOX_TOKEN as string;

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [lng, setLng] = useState(propertyLng);
  const [lat, setLat] = useState(propertyLat);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current || '',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
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
            'icon-size': 0.25,
          },
        });
      });
    });

    return () => map.remove();
  }, []);

  return <div style={{ width: '100%', height: '60vh' }} ref={mapContainer}></div>;
};
