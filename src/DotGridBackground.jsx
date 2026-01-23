import { useEffect, useRef } from 'react';

export default function DotGridBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let mouseX = -1000;
        let mouseY = -1000;
        let isFinePointer = window.matchMedia("(pointer: fine)").matches;

        const colors = [
            'rgba(100, 100, 110, 0.5)',  // Grey
            'rgba(120, 120, 130, 0.4)',  // Lighter Grey
            'rgba(80, 80, 90, 0.45)',    // Dark Grey
            'rgba(140, 140, 150, 0.4)',  // Light Grey
            'rgba(220, 80, 80, 0.5)',    // Soft Red
            'rgba(200, 60, 60, 0.45)',   // Darker Red
            'rgba(180, 50, 50, 0.5)',    // Deep Red
            'rgba(230, 100, 100, 0.4)',  // Light Red
        ];

        const globalDriftX = 0.15;
        const globalDriftY = -0.1;

        class Particle {
            constructor(x, y) {
                this.originX = x;
                this.originY = y;
                this.x = x;
                this.y = y;
                this.vx = 0;
                this.vy = 0;

                //dots
                this.size = Math.random() * 1.5 + 1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.angle = Math.random() * Math.PI * 2;

                //physics constants
                this.friction = 0.88;
                this.returnForce = 0.0082;
            }

            update() {
                //mouse repulsion
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const repulsionRadius = 200;

                if (isFinePointer && dist < repulsionRadius && dist > 0) {
                    //quadratic falloff for smooth repulsion
                    const force = Math.pow((repulsionRadius - dist) / repulsionRadius, 2);
                    const angle = Math.atan2(dy, dx);
                    const repulsionStrength = 3;

                    this.vx -= Math.cos(angle) * repulsionStrength * force;
                    this.vy -= Math.sin(angle) * repulsionStrength * force;

                    this.angle = angle + Math.PI;
                }

                //global drift
                this.vx += globalDriftX * 0.01;
                this.vy += globalDriftY * 0.01;

                //return force towards origin
                const returnDx = this.originX - this.x;
                const returnDy = this.originY - this.y;
                this.vx += returnDx * this.returnForce;
                this.vy += returnDy * this.returnForce;

                //damping friction
                this.vx *= this.friction;
                this.vy *= this.friction;

                //stop completely if velocity is very small
                const velocityThreshold = 0.05;
                if (Math.abs(this.vx) < velocityThreshold && Math.abs(this.vy) < velocityThreshold) {
                    const distFromOrigin = Math.sqrt(
                        (this.x - this.originX) ** 2 + (this.y - this.originY) ** 2
                    );
                    if (distFromOrigin < 1) {
                        this.vx = 0;
                        this.vy = 0;
                        this.x = this.originX;
                        this.y = this.originY;
                    }
                }

                //update position
                this.x += this.vx;
                this.y += this.vy;

                //update angle based on velocity (if moving)
                const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                if (speed > 0.3) {
                    //rotate towards movement direction
                    const targetAngle = Math.atan2(this.vy, this.vx);
                    const angleDiff = targetAngle - this.angle;
                    const normalizedDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
                    this.angle += normalizedDiff * 0.1;
                }
            }

            draw(ctx) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);

                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }

        let particles = [];
        const density = 0.00016;

        const initParticles = () => {
            particles = [];
            const count = Math.floor(canvas.width * canvas.height * density);

            for (let i = 0; i < count; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push(new Particle(x, y));
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        handleResize();

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
}
