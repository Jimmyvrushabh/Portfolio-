'use client';
import { useEffect } from 'react';

export default function Oneko() {
  useEffect(() => {
    // avoid duplicate cats on hot-reload / route changes
    if (document.getElementById('oneko')) return;

    const script = document.createElement('script');
    script.src = '/oneko.js';
    script.setAttribute('data-cat', '/oneko.gif');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      document.getElementById('oneko')?.remove();
    };
  }, []);

  return null;
}