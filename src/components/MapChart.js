import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

import places from '../travel_data.json'

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MapChart = () => {
  return (
    <div>
      <ComposableMap projection="geoMercator" className="mapContainer">
        <ZoomableGroup center={[0, 0]} zoom={1} translateExtent={[[-50,-50],[850,650]]}>
            <Geographies geography={geoUrl}>
            {({ geographies }) =>
                geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} className="worldMap"/>
                ))
            }
            </Geographies>

            {/* {places.map((place) => (
                <Marker coordinates={[{{place.longitude}}, {{place.latitude}}]}>
                    <a href="/arm">
                        <circle r={3} fill="red"/>
                    </a>
                </Marker>
            ))} */}

          <Marker coordinates={[121, 31]}>
            <a href="/arm">
                <circle r={3} fill="white"/>
            </a>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;