'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { RunRoute } from '@/data/routes';

// Custom beer marker icon
const beerIcon = new L.DivIcon({
  html: '<div style="font-size: 24px; text-align: center;">🍺</div>',
  className: '',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

// Start marker icon
const startIcon = new L.DivIcon({
  html: '<div style="font-size: 20px; text-align: center;">🏃</div>',
  className: '',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

interface RouteMapProps {
  routes: RunRoute[];
  selectedRoute: RunRoute | null;
  onSelectRoute: (route: RunRoute | null) => void;
}

function FlyToRoute({ route }: { route: RunRoute | null }) {
  const map = useMap();

  useEffect(() => {
    if (route && route.coordinates.length > 0) {
      const bounds = L.latLngBounds(route.coordinates);
      map.flyToBounds(bounds, { padding: [50, 50], duration: 1 });
    } else {
      // Default: center on Walcheren
      map.flyTo([51.52, 3.50], 12, { duration: 1 });
    }
  }, [route, map]);

  return null;
}

export default function RouteMap({
  routes,
  selectedRoute,
  onSelectRoute,
}: RouteMapProps) {
  return (
    <MapContainer
      center={[51.52, 3.50]}
      zoom={12}
      scrollWheelZoom={true}
      className="h-[500px] w-full rounded-2xl lg:h-[600px]"
      style={{ zIndex: 1 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FlyToRoute route={selectedRoute} />

      {/* Start marker at Westkapelle lighthouse */}
      <Marker position={[51.5282, 3.4370]} icon={startIcon}>
        <Popup>
          <strong>Startpunt: Vuurtoren Westkapelle</strong>
          <br />
          Hier beginnen (en eindigen) de meeste runs.
        </Popup>
      </Marker>

      {/* Route polylines */}
      {routes.map((route) => {
        const isSelected = selectedRoute?.id === route.id;
        const isAnySelected = selectedRoute !== null;

        return (
          <Polyline
            key={route.id}
            positions={route.coordinates}
            pathOptions={{
              color: route.color,
              weight: isSelected ? 5 : 3,
              opacity: isAnySelected ? (isSelected ? 1 : 0.25) : 0.7,
              dashArray: isSelected ? undefined : '8 4',
            }}
            eventHandlers={{
              click: () => onSelectRoute(isSelected ? null : route),
            }}
          />
        );
      })}

      {/* Pub stop markers */}
      {routes.map((route) => {
        const isSelected = selectedRoute?.id === route.id;
        const isAnySelected = selectedRoute !== null;

        if (isAnySelected && !isSelected) return null;

        return (
          <Marker
            key={`pub-${route.id}`}
            position={[route.pubStop.lat, route.pubStop.lng]}
            icon={beerIcon}
          >
            <Popup>
              <strong>{route.pubStop.name}</strong>
              <br />
              <span style={{ fontSize: '0.85em' }}>
                {route.pubStop.description}
              </span>
              <br />
              <em style={{ fontSize: '0.8em', color: '#666' }}>
                Route: {route.name} ({route.distance})
              </em>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
