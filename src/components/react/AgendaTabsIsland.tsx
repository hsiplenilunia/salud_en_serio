import React, { useState } from "react";

const agendaData = [
  {
    label: "Día 1",
    id: "agenda-dia1",
    events: [
      {
        time: "09:00 - 09:30",
        title: "Acto Inaugural",
        desc:
          `Dra. María Enriqueta Baridó Murguía, Coordinadora de la Comisión de Infectología Quirúrgica de la Asociación Mexicana de Cirugía General. 
          <br/ >Dr. Samuel Ponce de León Rosales, Coordinador Programa Universitario de Investigación sobre Riesgos Epidemiológicos y Emergentes (PUIREE)
          <br/ >Dr. José Ignacio Santos Preciado, Presidente Comité Normativo Nacional de Consejos de Especialidades Médicas
          <br />Dr. Luis Fernando Pérez González, Jefe del Departamento de Pediatría UASLP.
          <br />Dr. Octavio González Chon, Director General de Médica Sur.
          <br />Mtra. Maribel Ramírez Coronel, Directora General de Hospitales sin infecciones.`
      },
      {
        time: "09:35 - 10:05",
        title: "Epidemiología de la Resistencia Antimicrobiana",
        desc: "Dra. Rosa María Wong, presidenta de la Asociación Mexicana de Infectología y Microbiología Clínica",
      },
      {
        time: "10:10 - 10:40",
        title: "Vacunación: un pilar en la lucha contra la resistencia bacteriana y las infecciones",
        desc: "Dr. Rafael Franco Cendejas, Subdirector de Investigación Biomédica del Instituto Nacional de Rehabilitación Luis Guillermo Ibarra Ibarra, INRLGII",
      },
      {
        time: "10:45 - 11:30",
        title: "Los beneficios de invertir en prevención en el ámbito hospitalario, y más allá.",
        desc: ` 
        <br/>Dr. Jorge Azpiri, Director de Desarrollo y Expansión de TecSalud,
        <br/>Dr. Octavio González Chon, Director General de Médica Sur,
        <br/><strong>Modera:</strong> Dr. Alfredo Merino, maestro en Gestión de Negocios en Salud, ex director del CMN 20 de Noviembre`,
      },
      {
        time: "11:35 - 11:55",
        title: "Networking",
        desc: ``,
      },
      {
        time: "12:00 - 12:45",
        title: "Panel: El papel de la enfermería en la prevención de infecciones intrahospitalarias",
        desc: `Mtra. María de los Ángeles Franco Martínez, Jefe de Carrera de la Lic. en Enfermería, Universidad La Salle, 
        <br/>Universidad Panamericana 
        <br/>Mtra. Monserrat Lourdes Puntunet Bates, Maestra en Administración de Operaciones de Salud de la Universidad Panamericana
        <br/><strong>Modera:</strong> Mtra. Margarita Torres, Presidenta Asociación Mexicana para el Estudio de las Infecciones Nosocomiales, AMEIN.`

      },
      {
        time: "12:45 - 13:25",
        title: "Panel: Limpieza, desinfección y esterilización",
        desc: `Dra. Roxana Trejo, presidenta Asociación Mexicana para el Procesamiento Estéril, AMEXPE
<br/>IB. Marco Guerrero, experto en desinfección UV-C
<br/>Mtra. Lili Frías, Unidad de Vigilancia Epidemiológica Médica Sur
<br/><strong>Modera:</strong> Mtra. Martha Huertas, subdirectora de enfermería del Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán`,
      },
      {
        time: "13:25 - 14:10",
        title: "Panel: El incremento de infecciones fúngicas durante y después de  COVID",
        desc: `Dr. Alexandro Bonifaz, jefe depto. de micología Hospital General de México Dr. Eduardo Liceaga
        <br />Dra. Fernanda González Lara, Jefa del laboratorio de microbiología del Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán.
        <br /><strong>Modera:&nbsp;</strong>Dr. Alfredo Ponce de León, jefe de infectología del Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán`,
      },
      {
        time: "14:15 - 14:45",
        title: "Networking",
        desc: ``,
      },
      {
        time: "14:50 - 15:35",
        title: "Panel: Defunciones por IAAS: la necesidad de hacerlas visibles",
        desc: `Dra. Isabel Villegas, Directora de la unidad de especialidades médicas Capacyt Cancún. 
        <br/> Dr. Alejandro Sassoé,  Jefe de departamento de vigilancia de IAAS IMSS-Bienestar 
        <br/> <strong>Modera:</strong>Mtra. Maribel Ramírez Coronel`,
      },
      {
        time: "15:40 - 16:10",
        title: "Conferencia: NOM 045, Actualización y retos",
        desc: "Dr. Miguel Ángel Lezana, titular Dirección General de Epidemiología de la Secretaría de Salud",
      },
      {
        time: "16:15",
        title: "Conclusiones y cierre",
        desc: "Hospital sin infecciones",
      },
    ],
  },
  {
    label: "Día 2",
    id: "agenda-dia2",
    events: [
      {
        time: "08:30 - 09:00",
        title: "Registro y bienvenida",
        desc: ``,
      },
      {
        time: "09:00 - 09:30",
        title: "Conferencia: Desafío del Manejo del Paciente con Sepsis",
        desc: `Dr. Miguel Ángel Flores, especialista en Soporte Multiorgánico`,
      },
      {
        time: "09:45 - 10:30",
        title: "Panel: Detección de brotes y manejo de resistencias bacterianas utilizando soluciones IT",
        desc:
          `Dr. Edgar González Villalobos, Profesor del Departamento de Salud Pública de la Facultad de Medicina de la UNAM
          <br/><strong>Modera:</strong> Dra. Liliana Vargas Neri, jefa del Departamento de Investigación Epidemiológica.
          <br/>Hospital Infantil de México Federico Gómez`,
      },
      {
        time: "10:35 - 11:05",
        title: "Conferencia: Investigación y prevención de infecciones de sitio quirúrgico en países de bajos y medianos ingresos",
        desc:
          "Dr. Antonio Ramos-De la Medina, Director de Investigación del Centro México del Global Surgery Unit del Instituto Nacional de Investigación en Salud del Reino Unido (NIHR).",
      },
      {
        time: "11:05 - 11:30",
        title: "Networking",
        desc: "",
      },
      {
        time: "11:35 - 12:20",
        title: "Panel: Infecciones invisibles, consecuencias visibles: la amenaza creciente de la resistencia bacteriana.",
        desc: `Dra. Patricia Rodríguez Zulueta, Jefa de infectología, Hospital General Dr. Manuel Gea González.

<br/>Dr. Paulo Castañeda, Jefe de infectología, Hospital Médica Sur.

<br/><strong>Modera:</strong> Mtra. Juanita Jiménez, Representante de la Red Latinoamericana de Enfermería de la Secretaría de Salud`,
      },
      {
        time: "12:25 - 12:55",
        title: "Conferencia: Uso y prescripción de antibióticos en consultorios externos.",
        desc: `Dra. Daniela de la Rosa, Líder de Resistencia Antimicrobiana del Centro Nacional de Prevención y Control de Enfermedades, CENAPRECE`,
      },
      {
        time: "13:00 - 13:30",
        title: "Conferencia: Plan de Acción Mundial y Marco de Monitoreo sobre Prevención y Control de Infecciones",
        desc: `Prof. Victor D. Rosenthal, MD, PhD, Fundador y presidente del Consorcio Internacional de Infecciones Hospitalarias`,
      },
      {
        time: "13:35 - 14:05",
        title: "Networking",
        desc: ``,
      },
      {
        time: "14:05 - 14:35",
        title: "Conferencia: Aguas residuales como elemento para estrategias de detección oportuna de brotes.",
        desc: `Dra. Celia Alpuche, Investigadora del Instituto Nacional de Salud Pública.`,
      },
      {
        time: "14:40 - 15:25",
        title: "Panel: El equilibrio de la microbiota intestinal y su impacto en el desarrollo de infecciones",
        desc: `Dra. Rosa Salgado Brito, Directora de la Facultad de Ciencia y Tecnología Universidad Simón Bolivar,
        <br/>Dr. Max Julio Schmulson Wasserman, Jefe de Unidad de Medicina Experimental, Hospital General de México
        <br/><strong>Modera:</strong>  Dr. Santiago March, Coordinador del Consejo Promotor de Nuevas Tecnologías FUNSALUD`,
      },
      {
        time: "15:30",
        title: "Acto de clausura",
        desc:
          "",
      },

    ],
  },
];

export default function AgendaTabsIsland() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedPanels, setExpandedPanels] = useState(
    agendaData.map((day) => day.events.map(() => true))
  );
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  const handleTabClick = (idx: number) => {
    if (idx === activeTab) return;
    setFadeState('out');
    setTimeout(() => {
      setActiveTab(idx);
      setExpandedPanels(agendaData.map((day) => day.events.map(() => true)));
      setFadeState('in');
    }, 250); // Duración del fadeOut
  };

  const handleToggle = (eventIdx: number) => {
    setExpandedPanels((prev) => {
      const newPanels = prev.map((dayPanels, i) =>
        i === activeTab
          ? dayPanels.map((expanded, j) =>
            j === eventIdx ? !expanded : expanded
          )
          : dayPanels
      );
      return newPanels;
    });
  };

  return (
    <section className="font-sans p-8 text-black-text" id="hsi-agenda">
      <header className="mb-8">
        <h2 className="font-bold text-center text-5xl mb-4">Programa Preliminar</h2>
        <nav
          aria-label="Selector de día"
          className="flex justify-center gap-4 mb-6 flex-wrap"
          role="tablist"
        >
          {agendaData.map((tab, idx) => (
            <button
              key={tab.id}
              aria-controls={tab.id}
              aria-selected={activeTab === idx}
              className={`bg-[#002b5c] text-white border-none px-6 py-3 text-3xl rounded cursor-pointer transition-colors ${activeTab === idx ? "bg-[#3b7d42]" : "hover:bg-celeste-hsi"
                }`}
              id={`tab-${tab.id}`}
              role="tab"
              onClick={() => handleTabClick(idx)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>
      <div className="relative">
        {/* Only render the active tab's content with fade transition */}
        <section
          aria-labelledby={`tab-${agendaData[activeTab].id}`}
          className={`block transition-opacity duration-300 ${fadeState === 'in' ? 'opacity-100' : 'opacity-0'}`}
          id={agendaData[activeTab].id}
          role="tabpanel"
        >
          {agendaData[activeTab].events.map((event, eventIdx) => (
            <article
              key={`${activeTab}-${eventIdx}`}
              className="border-l-4 border-[#56c4f2] bg-[#f9fbfc] mb-4 p-3 rounded"
            >
              <button
                aria-controls={`panel-${agendaData[activeTab].id}-${eventIdx}`}
                aria-expanded={expandedPanels[activeTab] ? expandedPanels[activeTab][eventIdx] : false}
                className="w-full text-left cursor-pointer bg-transparent border-none p-0 md:pointer-events-none"
                onClick={() => handleToggle(eventIdx)}
              >
                <time className="block font-bold text-[#002b5c] text-2xl">
                  {event.time}
                </time>
                <h3 className="text-[#002b5c] text-xl font-semibold my-1">
                  {event.title}
                </h3>
              </button>
              <div
                className={`pt-2 md:block ${expandedPanels[activeTab] && expandedPanels[activeTab][eventIdx] ? 'block' : 'hidden'} md:!block`}
                id={`panel-${agendaData[activeTab].id}-${eventIdx}`}
              >
                <p
                  className="text-base leading-relaxed m-0"
                  dangerouslySetInnerHTML={{ __html: event.desc }}
                />
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
