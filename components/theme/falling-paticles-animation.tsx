import { useEffect, useRef } from "react";

export function FallingParticlesAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const particles: { x: number, y: number, radius: number, speed: number }[] = [];
        const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
        const numberOfParticles = 75;

        const resiveCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resiveCanvas();
        window.addEventListener("resize", resiveCanvas);

        for (let i = 0; i < numberOfParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                speed: Math.random() * 2 + 1
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.y += particle.speed;

                if (particle.y > canvas.height) {
                    particle.y = 0;
                    particle.x = Math.random() * canvas.width;
                }
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }
        animate();

        return () => window.removeEventListener("resize", resiveCanvas);
    }, []);

    return (
        <canvas 
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none -z-0"
        />
    )
}