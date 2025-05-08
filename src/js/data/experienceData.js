import React from 'react';
import { Award, Translate, Tools, PersonBadge, Calendar, Download, GeoAlt, Building, Mortarboard, CodeSquare } from "react-bootstrap-icons";
import cvEsp from "../../assets/Felipe Arancibia Esp.pdf";
import cvEng from "../../assets/Felipe Arancibia Eng.pdf";

// Texto para la sección Perfil / Sobre Mí - ahora una clave de traducción
export const profileDataKey = "experiencePage.profileParagraph1";

export const itExperienceData = [
  {
    id: "sii-group-2022",
    startDate: "Agosto 2022",
    endDate: "Enero 2024",
    location: "Remoto",
    titleKey: "experiencePage.itExperience.siiGroup.title",
    company: "SII Group",
    descriptionKey: "experiencePage.itExperience.siiGroup.description",
    responsibilitiesKeys: [
        "experiencePage.itExperience.siiGroup.resp1",
        "experiencePage.itExperience.siiGroup.resp2",
        "experiencePage.itExperience.siiGroup.resp3",
        "experiencePage.itExperience.siiGroup.resp4",
    ],
  },
  {
    id: "afp-uno-2022",
    startDate: "Mayo 2022",
    endDate: "Julio 2022",
    location: "Remoto",
    titleKey: "experiencePage.itExperience.afpUno.title",
    company: "AFP UNO",
    descriptionKey: "experiencePage.itExperience.afpUno.description",
    responsibilitiesKeys: [
        "experiencePage.itExperience.afpUno.resp1",
        "experiencePage.itExperience.afpUno.resp2",
        "experiencePage.itExperience.afpUno.resp3",
        "experiencePage.itExperience.afpUno.resp4",
    ],
  },
  {
    id: "moveapps-2021",
    startDate: "Mayo 2021",
    endDate: "Abril 2022",
    location: "Remoto",
    titleKey: "experiencePage.itExperience.moveApps.title",
    company: "MoveApps",
    descriptionKey: "experiencePage.itExperience.moveApps.description",
    responsibilitiesKeys: [
      "experiencePage.itExperience.moveApps.resp1",
      "experiencePage.itExperience.moveApps.resp2",
      "experiencePage.itExperience.moveApps.resp3",
      "experiencePage.itExperience.moveApps.resp4",
      "experiencePage.itExperience.moveApps.resp5",
    ],
  },
];

export const adminExperienceData = [
 {
    id: "wendtfish",
    startDate: "Jun 2020",
    endDate: "Mar 2021",
    location: "Chile",
    titleKey: "experiencePage.adminExperience.wendtfish.title",
    company: "Pesquera Wendtfish",
    responsibilitiesKeys: [
      "experiencePage.adminExperience.wendtfish.resp1",
      "experiencePage.adminExperience.wendtfish.resp2",
      "experiencePage.adminExperience.wendtfish.resp3",
      "experiencePage.adminExperience.wendtfish.resp4",
      "experiencePage.adminExperience.wendtfish.resp5",
    ],
  },
  {
    id: "chiloe-bureau",
    startDate: "Ago 2019",
    endDate: "Nov 2019",
    location: "Chiloé, Chile",
    titleKey: "experiencePage.adminExperience.chiloeBureau.title",
    company: "Corporación Chiloé Convention Bureau",
    responsibilitiesKeys: [
      "experiencePage.adminExperience.chiloeBureau.resp1",
      "experiencePage.adminExperience.chiloeBureau.resp2",
      "experiencePage.adminExperience.chiloeBureau.resp3",
      "experiencePage.adminExperience.chiloeBureau.resp4",
    ],
  },
  {
    id: "turismo-pehuen",
    startDate: "Oct 2016",
    endDate: "Oct 2018",
    location: "Chile",
    titleKey: "experiencePage.adminExperience.turismoPehuen.title",
    company: "Turismo Pehuén",
    responsibilitiesKeys: [
      "experiencePage.adminExperience.turismoPehuen.resp1",
      "experiencePage.adminExperience.turismoPehuen.resp2",
      "experiencePage.adminExperience.turismoPehuen.resp3",
      "experiencePage.adminExperience.turismoPehuen.resp4",
      "experiencePage.adminExperience.turismoPehuen.resp5",
      "experiencePage.adminExperience.turismoPehuen.resp6",
    ],
  },
];

export const educationData = [
  {
    id: "4geeks-2020",
    startDate: "Dic 2020",
    endDate: "Mayo 2021",
    titleKey: "experiencePage.education.fourGeeks.title",
    institutionKey: "experiencePage.education.fourGeeks.institution",
    detailsKeys: []
  },
   {
    id: "uach-2013",
    startDate: "2013",
    endDate: "2016",
    titleKey: "experiencePage.education.uach.title",
    institutionKey: "experiencePage.education.uach.institution",
    detailsKeys: []
  },
  {
    id: "utfsm-2009",
    startDate: "2009",
    endDate: "2013",
    titleKey: "experiencePage.education.utfsm.title",
    institutionKey: "experiencePage.education.utfsm.institution",
    statusKey: "experiencePage.education.utfsm.statusIncomplete",
    detailsKeys: []
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
    descriptionKey: "experiencePage.cvInfo.cvEspDescription",
    icon: <Award className="text-warning" size={44} />,
    downloadLink: cvEsp,
    downloadFilename: "Felipe_Arancibia_CV_Esp.pdf",
    buttonTextKey: "experiencePage.cvInfo.cvEspButton",
  },
  {
    id: "cv-eng",
    language: "English",
    descriptionKey: "experiencePage.cvInfo.cvEngDescription",
    icon: <Translate className="text-warning" size={44} />,
    downloadLink: cvEng,
    downloadFilename: "Felipe_Arancibia_CV_Eng.pdf",
    buttonTextKey: "experiencePage.cvInfo.cvEngButton",
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