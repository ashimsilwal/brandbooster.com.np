import { useState, useEffect, useRef } from 'react';

export default function LazySection({ children, minHeight = '200px' }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '300px', // Load slightly before it scrolls into view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        minHeight: minHeight,
        width: '100%',
        display: 'block'
      }}
    >
      {isIntersecting ? children : null}
    </div>
  );
}
