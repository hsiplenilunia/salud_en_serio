import { useEffect, useRef, useState } from 'react';

const patrocinadores = [
  {
    imgUrl: '/img/patrocinadores/pfizer.webp',
    alt: 'Pfizer',
  },
  {
    imgUrl: '/img/patrocinadores/medica_sur.webp',
    alt: 'Medica Sur',
  },
  {
    imgUrl: '/img/patrocinadores/biomerieux.webp',
    alt: 'BIOMERIUX',
  },
  {
    imgUrl: '/img/patrocinadores/sufacide.webp',
    alt: 'Sufacide',
  },
  {
    imgUrl: '/img/patrocinadores/tecsalud.webp',
    alt: 'TecSalud',
  },
  {
    imgUrl: '/img/patrocinadores/nipro_tecnicare_vm.webp',
    alt: 'Nipro Tecnicare',
  },
  {
    imgUrl: '/img/patrocinadores/salud_aurea_patrocinador.webp',
    alt: 'Salud Aurea',
  },
  {
    imgUrl: '/img/patrocinadores/asp.webp',
    alt: 'ASP',
  },
  {
    imgUrl: '/img/patrocinadores/vantive.webp',
    alt: 'Vantive',
  },
  {
    imgUrl: '/img/patrocinadores/sanieren.webp',
    alt: 'Sanieren',
  },
  {
    imgUrl: '/img/patrocinadores/vitalmex.webp',
    alt: 'Vitalmex',
  },
  {
    imgUrl: '/img/patrocinadores/inimed.webp',
    alt: 'Inimed',
  },
];

export default function PatrocinadoresIsland() {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShowAll(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5">
        <div className="flex w-full min-h-[120px] max-h-[120px] items-center justify-center">
          <img
            src={patrocinadores[0].imgUrl}
            alt={patrocinadores[0].alt}
            loading="lazy"
            width={180}
            height={120}
            className="object-contain w-full h-full rounded-md"
          />
        </div>
        {showAll && patrocinadores.slice(1).map((patrocinador, idx) => (
          <div key={idx} className="flex w-full min-h-[120px] max-h-[120px] items-center justify-center">
            <img
              src={patrocinador.imgUrl}
              alt={patrocinador.alt}
              loading="lazy"
              width={180}
              height={120}
              className="object-contain w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
