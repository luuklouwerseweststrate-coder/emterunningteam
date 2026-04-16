'use client';

import { useEffect, useRef, useState } from 'react';
import type L from 'leaflet';
import { decodePolyline } from '@/lib/strava/polyline';

interface ActivityMapProps {
  polyline: string;
  center: [number, number];
  height?: string;
}

export default function ActivityMap({ polyline, center, height = '100%' }: ActivityMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !mapRef.current) return;

    let map: L.Map | null = null;

    // Dynamische import van Leaflet (werkt niet bij SSR)
    const initMap = async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      if (!mapRef.current) return;

      const points = decodePolyline(polyline);
      if (points.length === 0) return;

      map = L.map(mapRef.current, {
        zoomControl: false,
        attributionControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map);

      const latLngs = points.map((p) => L.latLng(p[0], p[1]));
      const routeLine = L.polyline(latLngs, {
        color: '#f5c518',
        weight: 3,
        opacity: 0.9,
      }).addTo(map);

      L.circleMarker(latLngs[0], {
        radius: 4,
        color: '#1a5632',
        fillColor: '#237a47',
        fillOpacity: 1,
        weight: 2,
      }).addTo(map);

      L.circleMarker(latLngs[latLngs.length - 1], {
        radius: 4,
        color: '#d4a800',
        fillColor: '#f5c518',
        fillOpacity: 1,
        weight: 2,
      }).addTo(map);

      map.fitBounds(routeLine.getBounds(), { padding: [10, 10] });
    };

    initMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [mounted, polyline, center]);

  if (!mounted) {
    return <div style={{ height, width: '100%' }} className="rounded-t-2xl bg-emte-gray-100" />;
  }

  return <div ref={mapRef} style={{ height, width: '100%' }} className="rounded-t-2xl" />;
}
