"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const { resolvedTheme } = useTheme();
  const themeRef = useRef(resolvedTheme);

  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: -1000, y: -1000, radius: 220 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Doubled the number of molecules (divided by 8000 instead of 16000)
    const particleCount = Math.floor((width * height) / 12000);
    
    interface WaterMolecule {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number; 
      angle: number;  
      spin: number;   
    }

    const molecules: WaterMolecule[] = [];
    for (let i = 0; i < particleCount; i++) {
      molecules.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Doubled speed again
        vx: (Math.random() - 0.5) * 1.6,
        vy: (Math.random() - 0.5) * 1.6,
        // Increased atom size by 1.5x
        radius: (Math.random() * 2 + 3) * 1.875, 
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.03, // Slightly faster tumbling to match speed
      });
    }

    const animate = () => {
      const isLight = themeRef.current === "light";

      // Background
      ctx.fillStyle = isLight ? "#f8fafc" : "#020617";
      ctx.fillRect(0, 0, width, height);

      // Thermal "giggling" timer
      const time = Date.now() * 0.035;

      for (let i = 0; i < molecules.length; i++) {
        let m = molecules[i];

        m.x += m.vx;
        m.y += m.vy;
        m.angle += m.spin; 

        // Bounce off walls
        if (m.x < 0 || m.x > width) m.vx *= -1;
        if (m.y < 0 || m.y > height) m.vy *= -1;

        // Mouse interaction (repulsion)
        const dx = mouse.x - m.x;
        const dy = mouse.y - m.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          m.x -= Math.cos(angle) * force * 5;
          m.y -= Math.sin(angle) * force * 5;
        }

        // NOTE: Intermolecular connecting lines have been completely removed here.

        // 1. Calculate Water Molecule Geometry with increased bond distance
        const thermalJitter = Math.sin(time + i * 100) * 0.15;
        const currentAngle = m.angle + thermalJitter;

        const rO = m.radius; 
        const rH = rO * 0.6; 
        
        // Increased distance between Oxygen and Hydrogen (was 1.6, now 2.2)
        const bondLength = rO * 2.2;

        const h1Angle = currentAngle - 0.911;
        const h2Angle = currentAngle + 0.911;

        const h1x = m.x + Math.cos(h1Angle) * bondLength;
        const h1y = m.y + Math.sin(h1Angle) * bondLength;

        const h2x = m.x + Math.cos(h2Angle) * bondLength;
        const h2y = m.y + Math.sin(h2Angle) * bondLength;

        // 2. Draw Intramolecular O-H Bonds (the sticks connecting the atoms)
        ctx.beginPath();
        ctx.moveTo(h1x, h1y);
        ctx.lineTo(m.x, m.y);
        ctx.lineTo(h2x, h2y);
        ctx.strokeStyle = isLight ? "#94a3b8" : "#cbd5e1"; 
        ctx.lineWidth = 2.5; // Slightly thicker to match the larger atoms
        ctx.stroke();

        // 3. Draw Atoms (Red Oxygen, White Hydrogens)
        
        // Draw H1
        ctx.beginPath();
        ctx.arc(h1x, h1y, rH, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? "#ffffff" : "#e2e8f0";
        ctx.fill();
        ctx.strokeStyle = isLight ? "#cbd5e1" : "#475569"; 
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw H2
        ctx.beginPath();
        ctx.arc(h2x, h2y, rH, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? "#ffffff" : "#e2e8f0";
        ctx.fill();
        ctx.stroke();

        // Draw Oxygen (Red)
        ctx.beginPath();
        ctx.arc(m.x, m.y, rO, 0, Math.PI * 2);
        ctx.fillStyle = "#ef4444"; 
        ctx.fill();
        ctx.strokeStyle = isLight ? "#b91c1c" : "#7f1d1d";
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-50"
    />
  );
}
