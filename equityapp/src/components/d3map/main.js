import L from 'leaflet';

// Initialize Leaflet map
let map;

export function initializeMap() {
    // Check if the map is already initialized
    if (!map) {
        // Initialize Leaflet map
        map = L.map('map').setView([46.2306, -119.0922], 10);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Load GeoJSON data for Tri-Cities boundaries
        fetch('tricities.geojson')
            .then(response => response.json())
            .then(data => {
                L.geoJSON(data, {
                    style: function(feature) {
                        return {
                            color: 'purple', // Boundary color
                            weight: 2, // Boundary weight
                            fillOpacity: 0.1 // Boundary fill opacity
                        };
                    }
                }).addTo(map);
            });
    }

    return map;
}
