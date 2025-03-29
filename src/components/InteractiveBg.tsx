import React, { useEffect, useRef } from 'react';

const InteractiveBg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let drops: { x: number; y: number; speed: number; length: number; char: string }[] = [];
    let mouse = { x: 0, y: 0 };
    let animationFrameId: number;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}/*-+~';
    const fontSize = 14;
    const columns = Math.floor(window.innerWidth / fontSize);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createDrops();
    };

    const createDrops = () => {
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops.push({
          x: i * fontSize,
          y: Math.random() * canvas.height,
          speed: 1 + Math.random() * 3,
          length: 5 + Math.floor(Math.random() * 15),
          char: characters[Math.floor(Math.random() * characters.length)]
        });
      }
    };

    const drawDrop = (drop: typeof drops[0], index: number) => {
      const dx = mouse.x - drop.x;
      const dy = mouse.y - drop.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        // Repel from mouse
        drop.x += dx * 0.1;
        drop.y += dy * 0.1;
      }

      for (let i = 0; i < drop.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const alpha = 1 - (i / drop.length);
        
        ctx.fillStyle = `rgba(139, 92, 246, ${alpha * 0.5})`;
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        ctx.fillText(char, drop.x, drop.y - i * fontSize);
      }

      // Update position
      drop.y += drop.speed;
      
      // Reset when off screen
      if (drop.y > canvas.height + drop.length * fontSize) {
        drop.y = -drop.length * fontSize;
        drop.x = index * fontSize; // Reset x position to original column
        drop.char = characters[Math.floor(Math.random() * characters.length)];
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop, index) => {
        drawDrop(drop, index);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    // Initialize
    resize();
    animate();

    // Event listeners
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ zIndex: 1, opacity: 0.8 }}
    />
  );
};

export default InteractiveBg;
