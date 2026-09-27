import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Info } from "lucide-react";
// import { geoUrl } from "../common/mapData";
import { geoUrl, regionColors, stateColors, labels, countryToRegionMap } from "../common/mapData";

export default function GlobalNetwork() {
  const [activeRegion, setActiveRegion] = useState("North Europe");
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const handleRegionSelect = (region) => {
    if (!region) return;
    setActiveRegion(region);
  };

  const getGeographyFillColor = (region) => {
    if (!region) return regionColors.default;
    if (region === activeRegion) return stateColors.activeFill;
    if (region === hoveredRegion) return stateColors.hoverFill;
    return regionColors[region];
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20 exo-font">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Top Info Banner Box matching reference */}
        <div className="relative z-20 mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-100 bg-[#f0f6ff] px-5 py-2.5 text-xs font-medium text-slate-700 shadow-sm sm:text-sm">
            <Info className="size-4 shrink-0 text-blue-500" />
            <span>Click on any region for a more detailed map</span>
          </div>
        </div>

        {/* World Map Container */}
        <div className="relative mx-auto w-full max-w-[1300px] overflow-hidden bg-white">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 140,
              center: [12, 22],
            }}
            width={1000}
            height={500}
            className="h-auto w-full"
          >
            <Geographies geography={geoUrl
            }>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryName = geo.properties.name;
                  const region = countryToRegionMap.get(countryName);
                  const isOperational = !!region;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => isOperational && setHoveredRegion(region)}
                      onMouseLeave={() => setHoveredRegion(null)}
                      onClick={() => isOperational && handleRegionSelect(region)}
                      className="outline-none transition-all duration-200 ease-in-out focus:outline-none"
                      style={{
                        default: {
                          fill: getGeographyFillColor(region),
                          stroke: isOperational ? stateColors.stroke : stateColors.strokeNonOperational,
                          strokeWidth: 0.5,
                          cursor: isOperational ? "pointer" : "default",
                        },
                        hover: {},
                        pressed: {},
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {/* Region Labels & Active Pin */}
            {labels.map((label) => {
              const isActive = activeRegion === label.name;
              const isHovered = hoveredRegion === label.name;

              return (
                <Marker
                  key={label.name}
                  coordinates={label.coordinates}
                  onClick={() => handleRegionSelect(label.name)}
                  onMouseEnter={() => setHoveredRegion(label.name)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="cursor-pointer pointer-events-auto outline-none"
                >
                  {/* Active Pin Dot (like the magenta dot on North Europe in your reference) */}
                  {isActive && (
                    <g transform="translate(0, -14)">
                      <circle cx="0" cy="0" r="4.5" fill="#8B3F80" stroke="#FFFFFF" strokeWidth="1.5" />
                    </g>
                  )}

                  {/* Text Label */}
                  <text
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-['Exo',sans-serif] font-bold outline-none select-none"
                    style={{ 
                      fontSize: "11px",
                      fill: isActive ? "#000000" : "#1E293B",
                    }}
                  >
                    {label.name}
                  </text>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>

      </div>
    </section>
  );
}