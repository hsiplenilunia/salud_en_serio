import React, { useEffect, useRef, useState, useCallback } from "react";

export type Speaker = {
  url: string;
  alt: string;
};

interface SpeakerSliderProps {
  maxShowed: number;
  time: number; // ms
  speakers: Speaker[];
  imgWidth?: number | string;
  imgHeight?: number | string;
  className?: string;
}

const SpeakerSlider: React.FC<SpeakerSliderProps> = ({
  maxShowed,
  time,
  speakers,
  imgWidth = 220,
  imgHeight = 273,
  className = ""
}) => {
  // Detectar si es móvil (simple, usando window.innerWidth)
  const [isMobile, setIsMobile] = useState(false);
  const [sliderInView, setSliderInView] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const totalPages = Math.ceil(speakers.length / maxShowed);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setSliderInView(entry.isIntersecting);
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sliderRef.current) observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-slide logic
  useEffect(() => {
    if (!paused && visible) {
      timerRef.current = setTimeout(() => {
        setPage((prev) => (prev + 1) % Math.ceil(speakers.length / maxShowed));
      }, time);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [paused, visible, page, time, maxShowed, speakers.length]);

  // Pause on hover
  const handleMouseEnter = useCallback(() => setPaused(true), []);
  const handleMouseLeave = useCallback(() => setPaused(false), []);

  // Manual navigation
  const handlePrev = () => {
    setPage((prev) => (prev - 1 + Math.ceil(speakers.length / maxShowed)) % Math.ceil(speakers.length / maxShowed));
  };
  const handleNext = () => {
    setPage((prev) => (prev + 1) % Math.ceil(speakers.length / maxShowed));
  };

  // Lazy load images: only load first, then rest when visible
  const startIdx = page * maxShowed;
  const endIdx = Math.min(startIdx + maxShowed, speakers.length);
  // Para el desplazamiento vertical en móviles, calcular cuántas imágenes hay en la página actual
  const imagesInPage = Math.min(maxShowed, speakers.length - startIdx);
  // Para el slider, mostramos todas las imágenes pero desplazamos el contenedor
  // para lograr la transición suave

  return (
    <div
      ref={sliderRef}
      className={`relative w-full flex flex-col items-center group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="overflow-hidden w-full"
        style={isMobile
          ? { maxHeight: `${maxShowed * Number(imgHeight) + (maxShowed - 1) * 4}px`, minWidth: typeof imgWidth === "number" ? `${imgWidth}px` : imgWidth, position: 'relative' }
          : { maxWidth: `${maxShowed * Number(imgWidth) + (maxShowed - 1) * 4}px` }}
      >
        {/* Botones a los costados en móviles */}
        {isMobile && (
          <>
            <div className={
              sliderInView
                ? "fixed left-2 top-1/2 -translate-y-1/2 z-50"
                : "absolute left-2 top-1/2 -translate-y-1/2 z-10"
            }>
              <button
                className="bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
                onClick={handlePrev}
                aria-label="Anterior"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
            </div>
            <div className={
              sliderInView
                ? "fixed right-2 top-1/2 -translate-y-1/2 z-50"
                : "absolute right-2 top-1/2 -translate-y-1/2 z-10"
            }>
              <button
                className="bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
                onClick={handleNext}
                aria-label="Siguiente"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
              </button>
            </div>
          </>
        )}
        <div
          className={
            isMobile
              ? "flex flex-col gap-4 transition-transform duration-700 items-center justify-center"
              : "flex gap-4 transition-transform duration-700"
          }
          style={isMobile
            ? {
                transform: `translateY(-${
                  page === totalPages - 1
                    ? (speakers.length - maxShowed) * 285
                    : page * maxShowed * 285
                }px)`
              }
            : {
                transform: `translateX(-${
                  page === totalPages - 1 && speakers.length % maxShowed !== 0
                    ? (speakers.length - maxShowed) * 232
                    : page * maxShowed * 232
                }px)`
              }
          }
        >
          {speakers.map((speaker, idx) => (
            <img
              key={speaker.url}
              src={visible || idx === 0 ? speaker.url : undefined}
              alt={speaker.alt}
              className="object-center mx-auto"
              loading={idx === 0 ? "eager" : "lazy"}
              style={{
                width: typeof imgWidth === "number" ? `${imgWidth}px` : imgWidth,
                height: typeof imgHeight === "number" ? `${imgHeight}px` : imgHeight,
                opacity: visible || idx === 0 ? 1 : 0.2,
                transition: "opacity 0.7s"
              }}
            />
          ))}
        </div>
      </div>
      {/* Botones en desktop */}
      {!isMobile && (
        <>
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <button
              className="bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
              onClick={handlePrev}
              aria-label="Anterior"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <button
              className="bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
              onClick={handleNext}
              aria-label="Siguiente"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SpeakerSlider;
