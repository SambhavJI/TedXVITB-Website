import { useEffect } from 'react';

export default function useScrollAnimation() {
    useEffect(() => {
        // Elements to animate
        const animatedElements = document.querySelectorAll(
            '.scroll-text, .scroll-image, .scroll-card, .scroll-section, .scroll-left, .scroll-right, .scroll-scale'
        );

        // Add initial hidden state
        animatedElements.forEach(el => {
            el.classList.add('scroll-hidden');
        });

        // IntersectionObserver for revealing elements
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('scroll-visible');
                        entry.target.classList.remove('scroll-hidden');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Observe all animated elements
        animatedElements.forEach(el => observer.observe(el));

        // Cleanup
        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);
}
