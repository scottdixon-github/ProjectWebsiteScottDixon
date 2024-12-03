import React, { useEffect, useRef } from 'react';
import { Smartphone } from 'lucide-react';

interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
  pulse: number;
}

interface Phone {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  speed: number;
  amplitude: number;
  offset: number;
}

interface Circle {
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

export const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phonesContainerRef = useRef<HTMLDivElement>(null);
  const circlesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stars: Star[] = [];
    const phones: Phone[] = [];
    const circles: Circle[] = [];
    const numStars = 150;
    const numPhones = 8;
    const numCircles = 6;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2,
          color: Math.random() > 0.5 ? 'rgba(255, 77, 77, 0.8)' : 'rgba(77, 148, 255, 0.8)',
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    const createPhones = () => {
      const container = phonesContainerRef.current;
      if (!container) return;

      container.innerHTML = '';

      for (let i = 0; i < numPhones; i++) {
        const phone = document.createElement('div');
        phone.className = 'absolute transition-transform duration-100 ease-out floating-phone';
        
        const icon = document.createElement('div');
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-blue-600 opacity-90"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`;
        
        phone.appendChild(icon);
        container.appendChild(phone);

        phones.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          rotation: Math.random() * 360,
          scale: Math.random() * 0.7 + 0.8,
          speed: Math.random() * 0.7 + 0.3,
          amplitude: Math.random() * 100 + 50,
          offset: Math.random() * Math.PI * 2,
        });
      }
    };

    const createCircles = () => {
      const container = circlesContainerRef.current;
      if (!container) return;

      container.innerHTML = '';

      const colors = [
        'rgb(59, 130, 246)',
        'rgb(239, 68, 68)',
        'rgb(16, 185, 129)',
        'rgb(217, 70, 239)',
      ];

      for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement('div');
        const size = Math.random() * 300 + 200;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 4;

        circle.className = 'circle';
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.setProperty('--circle-color', color);
        circle.style.animationDelay = `${delay}s`;

        container.appendChild(circle);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.pulse += 0.03;
        const currentOpacity = star.opacity * (0.7 + 0.3 * Math.sin(star.pulse));
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentOpacity;
        ctx.fill();
        
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.globalAlpha = currentOpacity * 0.7;
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.globalAlpha = 1;

        star.y += star.speed;

        if (star.y > canvas.height) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
      });

      const phoneElements = phonesContainerRef.current?.children;
      if (phoneElements) {
        phones.forEach((phone, index) => {
          const element = phoneElements[index] as HTMLElement;
          if (!element) return;

          const time = Date.now() / 1000;
          phone.y += phone.speed;
          const x = phone.x + Math.sin(time + phone.offset) * phone.amplitude;

          if (phone.y > window.innerHeight) {
            phone.y = -50;
            phone.x = Math.random() * window.innerWidth;
          }

          element.style.transform = `translate(${x}px, ${phone.y}px) rotate(${phone.rotation + Math.sin(time) * 20}deg) scale(${phone.scale})`;
        });
      }

      requestAnimationFrame(animate);
    };

    setCanvasSize();
    createStars();
    createPhones();
    createCircles();
    animate();

    const handleResize = () => {
      setCanvasSize();
      stars.length = 0;
      phones.length = 0;
      createStars();
      createPhones();
      createCircles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none star-canvas"
        style={{ zIndex: -1 }}
      />
      <div
        ref={phonesContainerRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none phone-container"
        style={{ zIndex: -1 }}
      />
      <div
        ref={circlesContainerRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: -2 }}
      />
    </>
  );
};