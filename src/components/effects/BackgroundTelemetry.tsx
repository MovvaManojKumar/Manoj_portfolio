import React, { useEffect, useRef } from 'react';
import styles from './BackgroundTelemetry.module.css';

interface Packet {
  x: number;
  y: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  color: string;
}

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export const BackgroundTelemetry: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let isMouseMoving = false;
    let mouseTimeout: number;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      window.clearTimeout(mouseTimeout);
      mouseTimeout = window.setTimeout(() => {
        isMouseMoving = false;
      }, 2000);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize Telemetry Nodes & Grid
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    const nodeCount = Math.min(Math.floor((width * height) / 30000), 45);

    const initNodes = () => {
      nodes = [];
      packets = [];
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1.5,
          alpha: Math.random() * 0.5 + 0.3
        });
      }
    };

    initNodes();

    // Spawn data packet along connected nodes
    const spawnPacket = () => {
      if (nodes.length < 2 || packets.length > 15) return;
      const startIndex = Math.floor(Math.random() * nodes.length);
      const startNode = nodes[startIndex];
      
      // Find nearest neighbor
      let nearestIndex = -1;
      let minDistance = 220;

      for (let i = 0; i < nodes.length; i++) {
        if (i === startIndex) continue;
        const dx = nodes[i].x - startNode.x;
        const dy = nodes[i].y - startNode.y;
        const dist = Math.hypot(dx, dy);
        if (dist < minDistance) {
          minDistance = dist;
          nearestIndex = i;
        }
      }

      if (nearestIndex !== -1) {
        const endNode = nodes[nearestIndex];
        const isAmber = Math.random() > 0.4;
        packets.push({
          x: startNode.x,
          y: startNode.y,
          startX: startNode.x,
          startY: startNode.y,
          targetX: endNode.x,
          targetY: endNode.y,
          progress: 0,
          speed: Math.random() * 0.012 + 0.008,
          color: isAmber ? '#F5A524' : '#38BDF8'
        });
      }
    };

    let packetInterval = window.setInterval(spawnPacket, 600);

    const isLightMode = () => document.documentElement.getAttribute('data-theme') === 'light';

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const light = isLightMode();
      const gridColor = light ? 'rgba(0, 0, 0, 0.035)' : 'rgba(255, 255, 255, 0.035)';
      const crossColor = light ? 'rgba(0, 0, 0, 0.07)' : 'rgba(245, 165, 36, 0.12)';
      const lineColor = light ? 'rgba(0, 0, 0, 0.05)' : 'rgba(56, 189, 248, 0.08)';
      const nodeColor = light ? '#B86E00' : '#F5A524';

      // 1. Draw subtle cross-hatch micro grid points
      const gridSize = 64;
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          // Draw tiny micro plus at intersections
          ctx.strokeStyle = crossColor;
          ctx.beginPath();
          ctx.moveTo(x - 3, y);
          ctx.lineTo(x + 3, y);
          ctx.moveTo(x, y - 3);
          ctx.lineTo(x, y + 3);
          ctx.stroke();
        }
      }

      // 2. Interactive mouse spotlight on canvas
      if (isMouseMoving) {
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 280);
        gradient.addColorStop(0, light ? 'rgba(184, 110, 0, 0.05)' : 'rgba(245, 165, 36, 0.08)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 280, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Update & Draw Telemetry Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Gentle floating drift
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Subtle mouse repulsion
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 140) {
          const angle = Math.atan2(dy, dx);
          node.x -= Math.cos(angle) * 0.8;
          node.y -= Math.sin(angle) * 0.8;
        }

        // Draw Node
        ctx.fillStyle = nodeColor;
        ctx.globalAlpha = light ? node.alpha * 0.6 : node.alpha;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const distance = Math.hypot(other.x - node.x, other.y - node.y);
          if (distance < 180) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.globalAlpha = (1 - distance / 180) * (light ? 0.35 : 0.6);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      // 4. Update & Draw Traveling Data Packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        p.x = p.startX + (p.targetX - p.startX) * p.progress;
        p.y = p.startY + (p.targetY - p.startY) * p.progress;

        // Draw packet head & trailing pulse
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.sin(p.progress * Math.PI) * 0.9;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.clearInterval(packetInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.canvasContainer} aria-hidden="true">
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />
      <div className={styles.radarSweep} />
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};
