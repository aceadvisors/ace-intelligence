"use client";

import { useEffect, useRef, useState } from "react";
import techCursor from "../images/cursor.png";
import Image from "next/image";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [mouseMoved, setMouseMoved] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const params = {
      pointsNumber: 10,
      widthFactor: 0.5,
      spring: 0.4,
      friction: 0.5,
    };

    const trail = Array.from({ length: params.pointsNumber }, () => ({
      x: pointer.x,
      y: pointer.y,
      dx: 0,
      dy: 0,
    }));

    const updateMousePosition = (x: number, y: number) => {
      pointer.x = x;
      pointer.y = y;
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
    setMouseMoved(true);
    const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const y = "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
    updateMousePosition(x, y);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const update = (t: number) => {
      void t;
      if (!mouseMoved) return requestAnimationFrame(update);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.forEach((p, i) => {
        const prev = i === 0 ? pointer : trail[i - 1];
        const spring = i === 0 ? 0.4 * params.spring : params.spring;

        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);
      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.lineCap = "round";
        ctx.strokeStyle = "#4ADE80";
        ctx.stroke();
      }

      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      requestAnimationFrame(update);
    };

    resize();
    update(0);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, [mouseMoved]);

  return (
    <>
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-screen h-screen z-[9999] pointer-events-none"
        />
        <div
            ref={dotRef}
            className="fixed z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
            >
            <Image
                src={techCursor}  
                alt="Tech Cursor"
                width={24}
                height={24}
            />
        </div>

    </>

  );
}
