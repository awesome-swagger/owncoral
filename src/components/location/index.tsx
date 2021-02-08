// @ts-nocheck
import React from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "../../assets/map-marker.png";

const AnyReactComponent = () => (
  <div>
    <img style={{ width: "35px" }} src={MapMarker} alt="marker" />
  </div>
);

interface LocationProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const Location: React.FC<LocationProps> = ({ center, zoom }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Location;
