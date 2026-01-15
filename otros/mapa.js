graph TD
    %% Estilos para los nodos
    classDef central fill:#f9f,stroke:#333,stroke-width:4px,color:black,font-size:18px,font-weight:bold;
    classDef ramaProceso fill:#d4e6f1,stroke:#2874a6,color:black;
    classDef ramaNaturaleza fill:#d5f5e3,stroke:#239b56,color:black;
    classDef ramaImportancia fill:#fcf3cf,stroke:#b7950b,color:black;
    classDef ramaEmocion fill:#ebdef0,stroke:#76448a,color:black;
    classDef nota fill:#fff,stroke:none,font-style:italic,color:#555;

    %% Nodo Central
    CENTRO[EL SENTIMIENTO]:::central

    %% RAMA 1: PROCESO
    CENTRO -->|Se desarrolla a través de un| PROCESO(PROCESO EVOLUTIVO):::ramaProceso
    PROCESO --> P1(1. Cercanía):::ramaProceso
    P1 -->|Genera disposición a la| P1a[Resonancia / Fortalecimiento]:::ramaProceso
    PROCESO --> P2(2. Contacto):::ramaProceso
    P2 -->|Experiencia de| P2a[Ser tocado]:::ramaProceso
    PROCESO --> P3(3. Conmoción):::ramaProceso
    P3 -->|Vivencia de| P3a[Movimiento interior]:::ramaProceso
    PROCESO --> P4(4. Cualidad de Calidez):::ramaProceso
    P4 -->|Conexión personal| P4a[Esto tiene que ver conmigo]:::ramaProceso

    %% RAMA 2: NATURALEZA Y FUNCIÓN
    CENTRO -->|Se define por su| NATURALEZA(NATURALEZA Y FUNCIÓN):::ramaNaturaleza
    NATURALEZA -->|Es una| N1(PERCEPCIÓN INMEDIATA):::ramaNaturaleza
    N1 -->|Capta la| N1a[Importancia para la propia vida y fuerza vital]:::ramaNaturaleza
    NATURALEZA -->|Contiene un| N2(IMPULSO):::ramaNaturaleza
    N2 -->|Hacia| N2a[Atracción + o Repulsión -]:::ramaNaturaleza
    NATURALEZA -->|Funciona como| N3(ÓRGANO DE VALORES):::ramaNaturaleza
    N3 -->|Donde hay sentimiento hay| N3a[VALOR: Descubrimos lo importante]:::ramaNaturaleza

    %% RAMA 3: IMPORTANCIA
    CENTRO -->|Es trascendental para| IMPORTANCIA(IMPORTANCIA VITAL):::ramaImportancia
    IMPORTANCIA --> I1(Calidad de Vida):::ramaImportancia
    IMPORTANCIA --> I2(Realización Personal):::ramaImportancia
    I2 -.- I2nota(Sin sentimiento no hay posibilidad de vivenciar la realización):::nota

    %% RAMA 4: CLASIFICACIÓN (EMOCIÓN)
    CENTRO -->|Se manifiesta específicamente como| EMOCION(LA EMOCIÓN):::ramaEmocion
    EMOCION -- Def --> EDEF[Sentir referido a valores personales]:::ramaEmocion
    
    EMOCION -->|Tipo 1| EPRIM(EMOCIÓN PRIMARIA):::ramaEmocion
    EPRIM -->|Características| EPRIM1[Espontánea / Primer sentimiento]:::ramaEmocion
    EPRIM -->|Ligada a| EPRIM2[Impresión directa / Situación actual]:::ramaEmocion
    
    EMOCION -->|Tipo 2| EINT(EMOCIÓN INTEGRADA):::ramaEmocion
    EINT -->|Despegada de| EINT1[La impresión directa]:::ramaEmocion
    EINT -->|En sintonía con| EINT2[Conjunto de valores y autoimagen]:::ramaEmocion
    EINT -->|Función| EINT3[Fundamento de acciones auténticas / Formadora de personalidad]:::ramaEmocion
    
    EINT -.-> Razón(Rol de la Racionalidad/Sensatez):::nota
    Razón --> R1[Aporta aspectos importantes pero NO sustituye el proceso emocional]:::nota

    %% Enlaces entre ramas (opcional para mayor coherencia)
    P4a -.->|Consolida la| N1