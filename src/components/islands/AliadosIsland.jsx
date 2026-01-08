import { useEffect, useRef, useState } from 'react';

const asociados = [
  {
    imgUrl: '/img/asociados/logo_colegio_nacional_quim.webp',
    alt: 'Colegio Nacional de Químicos',
  },
  {
    imgUrl: '/img/asociados/logo_amein.webp',
    alt: 'AMEIN',
  },
  {
    imgUrl: '/img/asociados/logo_ampre.webp',
    alt: 'AMPE',
  },
  {
    imgUrl: '/img/asociados/logo_funsalud.webp',
    alt: 'FUNSALUD',
  },
  {
    imgUrl: '/img/asociados/logo_growingup.webp',
    alt: 'GrowingUp Foundation',
  },
  {
    imgUrl: '/img/asociados/logo_amimc.webp',
    alt: 'AMIMC',
  },
  {
    imgUrl: '/img/asociados/logo_MexY-PIDN.webp',
    alt: 'MexY-PIDN',
  },
  {
    imgUrl: '/img/asociados/logo_sepsis.webp',
    alt: 'SepsisMX',
  },
  {
    imgUrl: '/img/asociados/logo_somib.webp',
    alt: 'SOMIB',
  },
  {
    imgUrl: '/img/asociados/logo_u-nursing-latam.webp',
    alt: 'U-nursing LATAM',
  },
  {
    imgUrl: '/img/asociados/logo_sociacion_mexicana_por_la_calidad_en_salud_y_seguridad_del_paciente.webp',
    alt: 'Asociación Mexicana por la Calidad en Salud y Seguridad del Paciente',
  },
];

export default function AliadosIsland() {
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
      <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-6">
        <div className="flex w-full min-h-[120px] max-h-[120px] items-center justify-center">
          <img
            src={asociados[0].imgUrl}
            alt={asociados[0].alt}
            loading="lazy"
            width={180}
            height={120}
            className="object-contain w-full h-full rounded-md"
          />
        </div>
        {showAll && asociados.slice(1).map((asociado, idx) => (
          <div key={idx} className="flex w-full min-h-[120px] max-h-[120px] items-center justify-center">
            <img
              src={asociado.imgUrl}
              alt={asociado.alt}
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
