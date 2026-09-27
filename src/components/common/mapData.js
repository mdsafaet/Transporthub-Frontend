// mapData.js

export const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Exact soft pink/magenta palette matching your reference image
export const regionColors = {
  "North America": "#EFA8D2",
  "Latin America": "#EFA8D2",
  "North Europe": "#EFA8D2",
  "Mediterranean": "#EFA8D2",
  "Africa": "#EFA8D2",
  "Middle East": "#EFA8D2",
  "Asia": "#EFA8D2",
  "Oceania": "#EFA8D2",
  "default": "#E2E8F0", // Light grey for non-operational countries
};

export const stateColors = {
  activeFill: "#D752A5", // Deeper magenta pink when clicked/active
  hoverFill: "#E27BBA",
  stroke: "#FFFFFF",
  strokeNonOperational: "#CBD5E1",
};

export const regions = {
  "North America": ["Canada", "United States of America", "Mexico", "Greenland"],
  "Latin America": ["Brazil", "Argentina", "Chile", "Peru", "Colombia", "Venezuela", "Ecuador", "Bolivia", "Paraguay", "Uruguay", "Guyana", "Suriname", "Panama", "Costa Rica", "Nicaragua", "Honduras", "Guatemala", "Belize", "El Salvador", "Cuba", "Dominican Republic", "Haiti", "Jamaica"],
  "North Europe": ["United Kingdom", "Ireland", "Norway", "Sweden", "Finland", "Denmark", "Iceland", "Estonia", "Latvia", "Lithuania", "Belgium", "Netherlands", "Germany", "Poland"],
  "Mediterranean": ["France", "Spain", "Portugal", "Italy", "Greece", "Turkey", "Croatia", "Slovenia", "Bosnia and Herzegovina", "Montenegro", "Albania", "Cyprus", "Malta", "Tunisia", "Morocco", "Algeria"],
  "Africa": ["Nigeria", "Ghana", "Senegal", "Mali", "Mauritania", "Guinea", "Sierra Leone", "Liberia", "Ivory Coast", "Burkina Faso", "Niger", "Chad", "Cameroon", "Central African Republic", "South Sudan", "Sudan", "Ethiopia", "Kenya", "Uganda", "Tanzania", "Somalia", "Democratic Republic of the Congo", "Republic of the Congo", "Angola", "Zambia", "Zimbabwe", "Mozambique", "Namibia", "Botswana", "South Africa", "Madagascar", "Gabon", "Egypt", "Libya"],
  "Middle East": ["Saudi Arabia", "United Arab Emirates", "Oman", "Yemen", "Qatar", "Kuwait", "Bahrain", "Jordan", "Israel", "Lebanon", "Iraq", "Iran", "Syria"],
  "Asia": ["China", "India", "Bangladesh", "Pakistan", "Nepal", "Bhutan", "Sri Lanka", "Myanmar", "Thailand", "Vietnam", "Cambodia", "Laos", "Malaysia", "Singapore", "Indonesia", "Philippines", "Japan", "South Korea", "North Korea", "Mongolia", "Kazakhstan", "Uzbekistan", "Turkmenistan", "Kyrgyzstan", "Tajikistan", "Afghanistan"],
  "Oceania": ["Australia", "New Zealand", "Papua New Guinea", "Fiji", "Solomon Islands", "Vanuatu"],
};

export const labels = [
  { name: "North America", coordinates: [-100, 48] },
  { name: "Latin America", coordinates: [-60, -18] },
  { name: "North Europe", coordinates: [18, 55] },
  { name: "Mediterranean", coordinates: [8, 32] },
  { name: "Africa", coordinates: [18, -2] },
  { name: "Middle East", coordinates: [45, 20] },
  { name: "Asia", coordinates: [88, 30] },
  { name: "Oceania", coordinates: [135, -26] },
];

export const countryToRegionMap = new Map();
Object.entries(regions).forEach(([regionName, countries]) => {
  countries.forEach(country => {
    countryToRegionMap.set(country, regionName);
  });
});