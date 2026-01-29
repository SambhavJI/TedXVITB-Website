import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const TrueFocus = ({
  sentence = 'True Focus',
  separator = ' ',
  manualMode = false,
  blurAmount = 5,
  borderColor = 'green',
  glowColor = 'rgba(0, 255, 0, 0.6)',
  animationDuration = 2,
  pauseBetweenAnimations = 1
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setAnimationPhase(prev => {
            const nextPhase = (prev + 1) % 3;
            if (nextPhase === 0) {
              setCurrentIndex(prevIdx => (prevIdx + 1) % words.length);
            }
            return nextPhase;
          });
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const parentLeft = parentRect.left;
    const parentTop = parentRect.top;

    if (animationPhase === 1) {
      // Phase 1: cover both current and next word
      const nextIndex = (currentIndex + 1) % words.length;
      const rect1 = wordRefs.current[currentIndex].getBoundingClientRect();
      const rect2 = wordRefs.current[nextIndex].getBoundingClientRect();

      // Calculate bounding box that covers both words
      const left = Math.min(rect1.left, rect2.left) - parentLeft;
      const right = Math.max(rect1.right, rect2.right) - parentLeft;
      const top = Math.min(rect1.top, rect2.top) - parentTop;
      const bottom = Math.max(rect1.bottom, rect2.bottom) - parentTop;

      setFocusRect({
        x: left,
        y: top,
        width: right - left,
        height: bottom - top
      });
    } else {
      // Phase 0 and 2: cover only current word
      const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

      setFocusRect({
        x: activeRect.left - parentLeft,
        y: activeRect.top - parentTop,
        width: activeRect.width,
        height: activeRect.height
      });
    }
  }, [currentIndex, animationPhase, words.length]);

  const handleMouseEnter = index => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      className="relative flex gap-4 justify-center items-center flex-wrap"
      ref={containerRef}
      style={{ outline: 'none', userSelect: 'none' }}
    >
      {words.map((word, index) => {
        let blurValue = 0;
        
        if (manualMode) {
          blurValue = index === currentIndex ? 0 : blurAmount;
        } else {
          const nextIndex = (currentIndex + 1) % words.length;
          
          if (animationPhase === 0 || animationPhase === 2) {
            blurValue = index === currentIndex ? 0 : index === nextIndex ? blurAmount : blurAmount;
          } else if (animationPhase === 1) {
            blurValue = (index === currentIndex || index === nextIndex) ? 0 : blurAmount;
          }
        }

        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={el => (wordRefs.current[index] = el)}
            className="relative text-[4rem] font-black cursor-pointer"
            style={{
              filter: `blur(${blurValue}px)`,
              '--border-color': borderColor,
              '--glow-color': glowColor,
              transition: `filter ${animationDuration}s ease`,
              outline: 'none',
              userSelect: 'none'
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0
        }}
        transition={{
          duration: animationDuration
        }}
        style={{
          '--border-color': borderColor,
          '--glow-color': glowColor
        }}
      >
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
