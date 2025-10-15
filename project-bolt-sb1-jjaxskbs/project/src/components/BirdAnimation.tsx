import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min.js';

export default function BirdAnimation() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current || vantaEffect.current) return;

    try {
      vantaEffect.current = BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0f0f0f,
        color1: 0x10b981,
        color2: 0x14b8a6,
        colorMode: 'variance',
        birdSize: 1.5,
        wingSpan: 30.00,
        speedLimit: 5.00,
        separation: 40.00,
        alignment: 30.00,
        cohesion: 25.00,
        quantity: 4.00,
        backgroundAlpha: 0.0
      });
    } catch (error) {
      console.error('Error loading Vanta:', error);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 w-full h-full"
      style={{
        zIndex: 1
      }}
    />
  );
}
