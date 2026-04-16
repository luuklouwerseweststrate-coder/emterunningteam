'use client';

import { useEffect, useRef } from 'react';
import { decodePolyline } from '@/lib/strava/polyline';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface ActivityMapProps {
  polyline: string;
  center: [number, number];
  height?: string;
}

export default function ActivityMap({ polyline, center, height = '100%' }: ActivityMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Decode de polyline naar lat/lng punten
    const points = decodePolyline(polyline);
    if (points.length === 0) return;

    // Maak de kaart
    const map = L.map(mapRef.current, {
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
    });

    mapInstance.current = map;

    // Donkere kaart stijl (past bij EMTE green thema)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Teken de route
    const latLngs = points.map((p) => L.latLng(p[0], p[1]));
    const routeLine = L.polyline(latLngs, {
      color: '#f5c518', // emte-yellow
      weight: 3,
      opacity: 0.9,
    }).addTo(map);

    // Start punt (groen)
    L.circleMarker(latLngs[0], {
      radius: 4,
      color: '#1a5632',
      fillColor: '#237a47',
      fillOpacity: 1,
      weight: 2,
    }).addTo(map);

    // Eind punt (geel)
    L.circleMarker(latLngs[latLngs.length - 1], {
      radius: 4,
      color: '#d4a800',
      fillColor: '#f5c518',
      fillOpacity: 1,
      weight: 2,
    }).addTo(map);

    // Zoom naar de route
    map.fitBounds(routeLine.getBounds(), { padding: [10, 10] });

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, [polyline, center]);

  return <div ref={mapRef} style={{ height, width: '100%' }} className="rounded-t-2xl" />;
}
