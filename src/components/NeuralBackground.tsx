import { useEffect, useRef } from "react";

interface Dot { x: number; y: number; vx: number; vy: number; r: number }

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const MAX_DIST = 130;
    let dots: Dot[] = [];
    let raf: number;

    const initDots = (w: number, h: number) => {
      const COUNT = w < 768 ? 25 : 50;
      dots = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.8,
      }));
    };

    const resize = () => {
      // Use clientWidth/clientHeight which reflect CSS sizing reliably
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      canvas.width = w;
      canvas.height = h;
      initDots(w, h);
    };

    // Defer first resize so the browser has completed layout
    const initRaf = requestAnimationFrame(resize);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const frame = () => {
      const { width: w, height: h } = canvas;
      if (!w || !h) { raf = requestAnimationFrame(frame); return; }

      const dark = document.documentElement.classList.contains("dark");
      ctx.clearRect(0, 0, w, h);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = dark ? "rgba(99,102,241,0.75)" : "rgba(99,102,241,0.55)";
        ctx.fill();
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const a = (1 - dist / MAX_DIST) * (dark ? 0.28 : 0.18);
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${a})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(initRaf);
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default NeuralBackground;
