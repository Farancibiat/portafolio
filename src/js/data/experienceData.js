import React from 'react';
import { Award, Translate, Tools, PersonBadge, Calendar, Download, GeoAlt, Building, Mortarboard, CodeSquare } from "react-bootstrap-icons";
import cvEsp from "../../assets/Felipe Arancibia Esp.pdf";
import cvEng from "../../assets/Felipe Arancibia Eng.pdf";

// Texto para la sección Perfil / Sobre Mí
export const profileData = [
    "Desarrollador web con experiencia en las industrias financiera, turística y acuícola. Su habilidad para conectar aspectos técnicos con objetivos empresariales le permite ofrecer soluciones con una visión integral del desarrollo. Destaca por su trabajo en equipo y comunicación, lo que complementa con un enfoque analítico y meticuloso."
];

export const itExperienceData = [
  {
    id: "sii-group-2022",
    startDate: "Agosto 2022",
    endDate: "Enero 2024",
    location: "Remoto",
    title: "Consultor Full Stack",
    company: "SII Group",
    description: "Scotiabank:",
    responsibilities: [
        "Migración y mejora de plataforma hipotecaria en base a código VBA6 a React con Typescript, con restricción rigurosa de librerías, en interacción continua con usuarios.",
        "Migración incluye testing, utilizando múltiples herramientas de análisis de código: Sonarqube, Fortify, Checkmarx y Blackduck.",
        "Desarrollo de conexiones MS/BFF en Java Spring Boot conectando bases de datos Sybase, SQL Server y sistema AS400.",
        "Manejo de Build/Deploy en entornos de desarrollo.",
    ],
  },
  {
    id: "afp-uno-2022",
    startDate: "Mayo 2022",
    endDate: "Julio 2022",
    location: "Remoto",
    title: "Desarrollador Front End",
    company: "AFP UNO",
    description: "",
    responsibilities: [
        "Desarrollo continuo de plataformas pública y de clientes.",
        "Implementación completa de Google Tag Manager desde cero en contacto con agencia de marketing externa y Equipo Comercial, optimizando proceso en conjunto.",
        "Trabajo continuo con Equipo de QA en base a rutina Scrum Agile rigurosa.",
        "Diseños estrictos en base a Figma, trabajando en conjunto con Equipo de Marketing y Comercial."
    ],
  },
  {
    id: "moveapps-2021",
    startDate: "Mayo 2021",
    endDate: "Abril 2022",
    location: "Remoto",
    title: "Desarrollador Full Stack",
    company: "MoveApps",
    description: "Desarrollo de plataforma web multicliente (Chile Converge / Workafe) y plataforma para traslado de pacientes críticos (Movicare).",
    responsibilities: [
      "Desarrollo de plataforma web multicliente para capacitación de clientes, tanto Administrativa como acceso de usuarios.",
      "Incluye vistas informativas, mantenedores, formularios, logins, landings y layouts/componentes reutilizables.",
      "Desarrollo de API con ORM SailsJs, con envío de correos masivos.",
      "Desarrollo de plataforma para traslado de pacientes críticos.",
      "Levantamiento de requerimientos en contacto directo con cliente, optimizando proceso de gestión de traslados."
    ],
  },
];

export const adminExperienceData = [
 {
    id: "wendtfish",
    startDate: "Jun 2020",
    endDate: "Mar 2021",
    location: "Chile",
    title: "Administrador",
    company: "Pesquera Wendtfish",
    responsibilities: [
      "Desarrollo y operación de sistema de control financiero.",
      "Análisis y gestión de brechas administrativas.",
      "Implementación de sistema G-suite para mejora de procesos.",
      "Negociación y gestión de proveedores.",
      "Supervisión de equipos operativos y administrativos.",
    ],
  },
  {
    id: "chiloe-bureau",
    startDate: "Ago 2019",
    endDate: "Nov 2019",
    location: "Chiloé, Chile",
    title: "Director Ejecutivo",
    company: "Corporación Chiloé Convention Bureau",
    responsibilities: [
      "Evaluación de desempeño del proyecto.",
      "Regularización de brechas para rendición de Fondos Públicos (PROFO).",
      "Rendición anual de fondos.",
      "Coordinación de actividades de promoción turística.",
    ],
  },
  {
    id: "turismo-pehuen",
    startDate: "Oct 2016",
    endDate: "Oct 2018",
    location: "Chile",
    title: "Jefe de Desarrollo y Finanzas",
    company: "Turismo Pehuén",
    responsibilities: [
      "Desarrollo, proyección y control de la gestión financiera y contable.",
      "Rediseño de sistema de gestión administrativa.",
      "Gestor de proyecto web y digitalización de procesos.",
      "Desarrollo y mantención de Manual de operación institucional.",
      "Estructuración departamental de la empresa.",
      "Responsable de gestión de Recursos Humanos.",
    ],
  },
];

export const educationData = [
  {
    id: "4geeks-2020",
    startDate: "Dic 2020",
    endDate: "Mayo 2021",
    title: "Desarrollador Web Full Stack",
    institution: "4Geeks Academy",
    details: [],
  },
   {
    id: "uach-2013",
    startDate: "2013",
    endDate: "2016",
    title: "Administrador de Empresas | Licenciatura en Turismo",
    institution: "Universidad Austral de Chile",
    details: [],
  },
  {
    id: "utfsm-2009",
    startDate: "2009",
    endDate: "2013",
    title: "Ingeniería Comercial",
    institution: "Universidad Técnica Federico Santa María",
    details: [],
    status: "Incompleta",
  },
];

export const skillsData = {
  Frontend: ["HTML5", "CSS3", "Javascript", "Typescript", "ReactJs", "NextJS", "CRA", "React Router"],
  "CSS & Estilos": ["Bootstrap", "MaterialUI", "Ant Design", "Tailwind", "Sass/SCSS", "Stylus", "Less", "PostCss"],
  "Manejo de Estado (React)": ["React Redux", "Flux", "React Context API", "Tanstack (React Query)", "Zustand"],
  Backend: ["Python", "Java", "SailsJs", "Flask", "Java Spring Boot", "SQLAlchemy"],
  "Bases de Datos": ["PostgresSQL", "MySQL", "Sybase", "MSServer"],
  Testing: ["Jest", "React Testing Library"],
  "Seguridad & Calidad": ["Sonar", "Blackduck", "Fortify"],
  "DevOps, Build & Versionado": ["Git", "Github", "Bitbucket", "NPM", "Webpack", "Jenkins"],
  Deploy: ["Github Pages", "Netlify", "Vercel"],
  "Gestión & Metodologías": ["Jira"],
  Idiomas: ["Español: Nativo", "Inglés: C2"],
};

export const cvData = [
  {
    id: "cv-esp",
    language: "Español",
    description: "Versión completa en español de mi currículum vitae",
    icon: <Award className="text-warning" size={44} />,
    downloadLink: cvEsp,
    downloadFilename: "Felipe_Arancibia_CV_Esp.pdf",
    buttonText: "Descargar",
  },
  {
    id: "cv-eng",
    language: "English",
    description: "Full English version of my curriculum vitae",
    icon: <Translate className="text-warning" size={44} />,
    downloadLink: cvEng,
    downloadFilename: "Felipe_Arancibia_CV_Eng.pdf",
    buttonText: "Download",
  },
];

export const sectionIcons = {
    profile: PersonBadge,
    careerDev: CodeSquare,
    careerAdmin: Building,
    education: Mortarboard,
    skills: Tools,
    download: Download,
}

export const detailIcons = {
    calendar: Calendar,
    location: GeoAlt,
} 