import { useEffect, useRef } from "react";
import { TECH_ICONS as techIcons } from "@/lib/constants/tech-icons";

export function FallingParticlesAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const particles: { 
            x: number, 
            y: number, 
            speed: number, 
            icon: typeof techIcons[0],
            size: number,
            rotation: number 
        }[] = [];
        
        const numberOfParticles = 30;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        for (let i = 0; i < numberOfParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: Math.random() * 1 + 0.5,
                icon: techIcons[Math.floor(Math.random() * techIcons.length)],
                size: Math.random() * 15 + 15, 
                rotation: Math.random() * Math.PI * 2
            });
        }

        const drawIcon = (particle: typeof particles[0]) => {
            ctx.save();
            ctx.globalAlpha = 0.45; 
            ctx.translate(particle.x, particle.y);
            ctx.rotate(particle.rotation);
            
            const path = new Path2D(particle.icon.path);
            const scale = particle.size / 24;
            ctx.translate(-particle.size/2, -particle.size/2);
            ctx.scale(scale, scale);
            ctx.fillStyle = particle.icon.color;
            ctx.fill(path);
            
            ctx.restore();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.y += particle.speed;
                particle.rotation += 0.025;

                if (particle.y > canvas.height) {
                    particle.y = -50;
                    particle.x = Math.random() * canvas.width;
                }
                
                drawIcon(particle);
            });

            requestAnimationFrame(animate);
        }
        animate();

        return () => window.removeEventListener("resize", resizeCanvas);
    }, []);

    return (
        <canvas 
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none -z-0"
        />
    );
}