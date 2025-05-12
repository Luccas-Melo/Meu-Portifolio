import React, { useEffect, useRef } from 'react';

const InteractiveBg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let ripples: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      maxRadius: number;
    }> = [];
    let lastRippleTime = 0;
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createRipple = () => {
      const now = Date.now();
      if (now - lastRippleTime > 80) { 
        ripples.push({
          x: mouse.x,
          y: mouse.y,
          radius: 2,
          alpha: 0.3, 
          maxRadius: 70 + Math.random() * 20 
        });
        lastRippleTime = now;
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ripples = ripples.filter(r => r.alpha > 0.01);
      
      ripples.forEach(ripple => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(139, 92, 246, ${ripple.alpha})`;
        ctx.lineWidth = 1.5; 
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        ripple.radius += (ripple.maxRadius - ripple.radius) * 0.04; 
        ripple.alpha *= 0.97; 
      });

      ctx.beginPath();
      ctx.fillStyle = 'rgba(139, 92, 246, 0.25)';
      ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const oldX = mouse.x;
      const oldY = mouse.y;
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      if (Math.abs(oldX - mouse.x) > 6 || Math.abs(oldY - mouse.y) > 6) { 
        createRipple();
      }
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default InteractiveBg;
