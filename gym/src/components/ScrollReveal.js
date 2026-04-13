import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    if (typeof children !== 'string') {
      return children;
    }

    return children.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof children !== 'string') return undefined;

    const scroller = scrollContainerRef?.current || window;
    const wordElements = el.querySelectorAll('.word');

    const rotationTween = gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const opacityTween = gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

    let blurTween = null;
    if (enableBlur) {
      blurTween = gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
    }

    return () => {
      rotationTween.scrollTrigger?.kill();
      rotationTween.kill();
      opacityTween.scrollTrigger?.kill();
      opacityTween.kill();
      blurTween?.scrollTrigger?.kill();
      blurTween?.kill();
    };
  }, [children, scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={textClassName}>{splitText}</p>
    </div>
  );
};

export default ScrollReveal;