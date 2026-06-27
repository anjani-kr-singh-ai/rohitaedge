import React, { useEffect, useRef } from 'react';
import './CursorGlow.css';

const CursorGlow = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) {
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
      }
      requestAnimationFrame(animate);
    };

    const handleClick = () => {
      if (dot) dot.classList.add('click');
      setTimeout(() => dot && dot.classList.remove('click'), 300);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('click', handleClick);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default CursorGlow;
