import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

export const MapBox = () => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYW1pcnNhZWVkOTIiLCJhIjoiY2tuNmF1YnF3MDRrbTJ2bXpjM3JzOGgzYiJ9.BAfIT9ieSFZCFd_-_M1xmw';

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current || '',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
    return () => map.remove();
  }, []);

  return <div style={{ width: '100%', height: '80vh' }} ref={mapContainer}></div>;
};
