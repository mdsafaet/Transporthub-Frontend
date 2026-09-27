import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Info } from "lucide-react";

import {
  geoUrl,
  labels,
  countryToRegionMap,
} from "../common/mapData";

export default function GlobalNetwork() {
  const [activeRegion, setActiveRegion] = useState(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [focusedRegion, setFocusedRegion] = useState(null);

  const previewRegion = hoveredRegion ?? focusedRegion;

  return (
    <section
      aria-label="Global network"
      className="coast-network bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-lg bg-[#edf4ff] px-4 py-3 text-xs leading-5 text-[#18324f] sm:text-sm">
            <Info
              size={18}
              aria-hidden="true"
              className="shrink-0 text-[#8b3f80]"
            />

            <span>Hover to explore. Click to select a region.</span>
          </div>
        </div>

        <div
          role="region"
          aria-label="World map. Scroll horizontally on smaller screens."
          tabIndex={0}
          className="coast-map-viewport"
        >
          <div className="coast-map-canvas">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 140,
                center: [12, 22],
              }}
              width={1000}
              height={500}
              className="coast-world-map"
              aria-label={
                activeRegion
                  ? `World map. Selected region: ${activeRegion}`
                  : "World map with no region selected"
              }
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies
                    .filter(
                      (geo) => geo.properties.name !== "Antarctica",
                    )
                    .map((geo) => {
                      const countryName = geo.properties.name;
                      const region =
                        countryToRegionMap.get(countryName);

                      const isSelected =
                        Boolean(region) && region === activeRegion;

                      const isHovered =
                        Boolean(region) && region === previewRegion;

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          tabIndex={-1}
                          aria-label={countryName}
                          className={[
                            "coast-map-country",
                            region ? "is-selectable" : "",
                            isHovered ? "is-hovered" : "",
                            isSelected ? "is-selected" : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          onMouseEnter={() =>
                            setHoveredRegion(region ?? null)
                          }
                          onMouseLeave={() => setHoveredRegion(null)}
                          onClick={() => {
                            if (region) setActiveRegion(region);
                          }}
                        />
                      );
                    })
                }
              </Geographies>

              {labels.map(({ name, coordinates }) => {
                const isSelected = activeRegion === name;

                return (
                  <Marker
                    key={name}
                    coordinates={coordinates}
                    onMouseEnter={() => setHoveredRegion(name)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => setActiveRegion(name)}
                    className="coast-map-marker"
                  >
                    {isSelected && (
                      <circle
                        cy={-15}
                        r={5}
                        className="coast-map-pin"
                      />
                    )}

                    <text
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`coast-map-label ${
                        isSelected ? "is-selected" : ""
                      }`}
                    >
                      {name}
                    </text>
                  </Marker>
                );
              })}
            </ComposableMap>
          </div>
        </div>

        <div
          role="group"
          aria-label="Select a region"
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {labels.map(({ name }) => (
            <button
              key={name}
              type="button"
              aria-pressed={activeRegion === name}
              onMouseEnter={() => setHoveredRegion(name)}
              onMouseLeave={() => setHoveredRegion(null)}
              onFocus={() => setFocusedRegion(name)}
              onBlur={() => setFocusedRegion(null)}
              onClick={() => setActiveRegion(name)}
              className="coast-region-button"
            >
              {name}
            </button>
          ))}
        </div>

        <p role="status" className="sr-only">
          {activeRegion
            ? `${activeRegion} selected`
            : "No region selected"}
        </p>
      </div>
    </section>
  );
}