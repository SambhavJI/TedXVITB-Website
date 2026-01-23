import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
    const [isPointer, setIsPointer] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    //animation for the trailing circle
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        if (window.matchMedia("(pointer: fine)").matches) {
            setIsPointer(true);
            document.body.classList.add('custom-cursor-active');
        }

        return () => {
            document.body.classList.remove('custom-cursor-active');
        };
    }, []);

    useEffect(() => {
        if (!isPointer) return;

        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const checkHover = (e) => {
            const target = e.target;
            const isInteractive = (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                target.type === 'submit' ||
                target.classList.contains('cursor-pointer')
            );

            setIsHovered(!!isInteractive);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', checkHover);

        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', checkHover);
            document.body.style.cursor = 'auto';
        };
    }, [isPointer, mouseX, mouseY]);

    if (!isPointer) return null;

    return (
        <>
            {/* Main small dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-red-500 rounded-full pointer-events-none z-[9999] mix-blend-screen"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovered ? 0.5 : 1,
                }}
                transition={{ duration: 0.2 }}
            />

            {/* Trailing larger circle/glow - Reacts to hover */}
            <motion.div
                className="fixed top-0 left-0 border border-red-500 rounded-full pointer-events-none z-[9998] mix-blend-screen"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 32,
                    height: 32,
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    opacity: isHovered ? 1 : 0.6,
                    backgroundColor: isHovered ? 'rgba(239, 68, 68, 0.1)' : 'transparent',
                    borderColor: isHovered ? 'rgba(239, 68, 68, 0.8)' : 'rgba(239, 68, 68, 1)',
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            />

            {/* Soft glow behind cursor */}
            <motion.div
                className="fixed top-0 left-0 w-24 h-24 bg-red-500 rounded-full pointer-events-none z-[9997] blur-2xl opacity-20"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.3 : 0.2
                }}
            />
        </>
    );
}
