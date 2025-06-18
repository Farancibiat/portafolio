

export const translations = {
  es: {
    general:{
      name: "Felipe Arancibia Torres",
      title: "Desarrollador Full Stack",
      languages: [
        {
          id: "es",
          language: "Español",
          level: "Nativo",
          filename: "Felipe Arancibia Esp.pdf"	
        },
        {
          id: "en",
          language: "Inglés",
          level: "C2",
          filename: "Felipe Arancibia Eng.pdf"
        }
      ],  
      descarga: "Descargar"
    },
    navigationBar: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    sideBar: {
      languagesTitle: "Idiomas",
      techStackTitle: "Stack Tecnológico",
      techStack:[
        {
          id: "frontend",
          title: "Frontend",
          description: "HTML, CSS, Javascript, React, Next.js, TypeScript, Tanstack, Redux, Tailwind, Ant Design, Material UI, Bootstrap, Shadcn, Jest, React Testing Library"
        },
        {
          id: "backend",
          title: "Backend",
          description: "Java, Spring Boot, Express.js, Prisma, Node.js, Python, Flask, SQLAlchemy, REST API's, PostgresSQL"
        },
        {
          id: "deploys",
          title: "Despliegue",
          description: "Azure, Jenkins, Vercel, Netlify"
        },
        {
          id: "methodologies",
          title: "Metodologías y Herramientas",
          description: "Git, Github, Bitbucket, NPM, Webpack, Jenkins, Azure, Agile, Scrum, Kanban"
        },
      ],
      cvTitle: "Curriculum Vitae",
    },
    aboutPage: {
      pageTitle: "Inicio",
      heroSubtitle: "Desarrollador Full Stack enfocado en transformar las necesidades del negocio en soluciones web modernas y multiplataforma.",
      heroViewProjects: "Ver Proyectos",
      heroContact: "Contacto",
      skillsTitle: "Habilidades",
      skillsDisclaimer: "* Ver perfil técnico completo en",
      skillsDisclaimerLink: "Experiencia",
      skills:[
        {
          title: "Frontend",
          description: "React, Next.js, TypeScript"
        },
        {
          title: "Backend",
          description: "Spring, Express.js, PostgresSQL"
        },
        {
          title: "Herramientas",
          description: "Git, Jenkins, Azure"
        },
        {
          title: "Metodologías",
          description: "Agile, Scrum, Kanban"
        }
      ],
      cards:[
        {
          id: "experience",	
          title: "Experiencia",
          text: "Amplia experiencia en desarrollo de aplicaciones web, metodologías ágiles y trabajo en equipo. Revisa mi CV completo en inglés y español.",
          button: "Ver Experiencia"
        },
        {
          id: "projects",
          title: "Proyectos",
          text: "Portfolio de proyectos desarrollados con diversas tecnologías. Incluye creación de APIs, implementación de soluciones y herramientas de código abierto.",
          button: "Ver Proyectos"
        },
        {
          id: "contact",
          title: "Contacto",
          text: "¿Interesado en trabajar juntos? Estoy disponible para proyectos freelance y nuevas oportunidades laborales.",
          button: "Contáctame"
        }
      ],
    },
    experiencePage: {
      pageTitle: "Experiencia Profesional",
      navItems:["Perfil", "Carrera Desarrollo TI", "Carrera Administración", "Educación", "Habilidades", "CV"],
      sectionContent:{
        profile:{
          title: "Perfil",
          description: "Desarrollador web con experiencia en la industria financiera, turismo y acuicultura. Su capacidad para conectar aspectos técnicos con objetivos de negocio le permite ofrecer soluciones con una visión integral de desarrollo. Destaca por su trabajo en equipo y comunicación, complementado con un enfoque analítico y meticuloso.",
        },
        itExperience:{
          title: "Carrera TI",
          exp: [
            {
              id: "sii-group-2022",
              startDate: "Agosto 2022",
              endDate: "Enero 2025",
              location: "Remoto",
              title: "Consultor Full Stack",
              company: "SII Group",
              description: "Scotiabank:",
              tasks: [
                "Migración y mejora de plataforma hipotecaria desde código VBA6 a React con TypeScript, con restricción estricta de librerías, en continua interacción con usuarios.",
                "Migración incluye pruebas, usando múltiples herramientas de análisis de código: Sonarqube, Fortify, Checkmarx y Blackduck.",
                "Desarrollo de conexiones MS/BFF en Java Spring Boot conectando a bases de datos Sybase, SQL Server y sistema AS400.",
                "Manejo de Build/Deploy en ambientes de desarrollo.",
              ],
            },
            {
              id: "afp-uno-2022",
              startDate: "Mayo 2022",
              endDate: "Julio 2022",
              location: "Remoto",
              title: "Desarrollador Frontend",
              company: "AFP UNO",
              description: "",
              tasks: [
                "Desarrollo continuo de plataformas públicas y de clientes.",
                "Implementación completa de Google Tag Manager desde cero en contacto con agencia de marketing externa y Equipo Comercial, optimizando el proceso conjuntamente.",
                "Trabajo continuo con Equipo QA en base a una rigurosa rutina Scrum Agile.",
                "Diseños estrictos basados en Figma, trabajando conjuntamente con Equipo de Marketing y Comercial."
              ],
            },
            {
              id: "moveapps-2021",
              startDate: "Mayo 2021",
              endDate: "Abril 2022",
              location: "Remoto",
              title: "Desarrollador Full Stack",
              company: "MoveApps",
              description: "Desarrollo de plataforma web multicliente (Chile Converge / Workafe) y plataforma para transporte de pacientes críticos (Movicare).",
              tasks: [
                "Desarrollo de plataforma web multicliente para capacitación de clientes, para accesos tanto Administrativos como de usuarios.",
                "Incluye vistas informativas, mantenedores, formularios, logins, landings y layouts/componentes reutilizables.",
                "Desarrollo de API con ORM SailsJs, con envío masivo de correos.",
                "Desarrollo de plataforma para transporte de pacientes críticos.",
                "Levantamiento de requerimientos en contacto directo con el cliente, optimizando el proceso de gestión de transportes."
              ],
            }
          ],
        },
        adminExperience: {
          title: "Carrera Administrativa",
          exp: [
            {
              id: "wendtfish",
              startDate: "Junio 2020",
              endDate: "Marzo 2021",
              location: "Chile",
              title: "Administrador",
              company: "Pesquera Wendtfish",
              tasks: [
                "Desarrollo y operación de sistema de control financiero.",
                "Análisis y gestión de brechas administrativas.",
                "Implementación de sistema G-suite para mejora de procesos.",
                "Negociación y gestión de proveedores.",
                "Supervisión de equipos operativos y administrativos.",
              ],
            },
            {
              id: "chiloe-bureau",
              startDate: "Agosto 2019",
              endDate: "Noviembre 2019",
              location: "Chiloé, Chile",
              title: "Director Ejecutivo",
              company: "Corporación Chiloé Convention Bureau",
              tasks: [
                "Evaluación de desempeño de proyectos.",
                "Regularización de brechas para rendición de Fondos Públicos (PROFO).",
                "Rendición anual de fondos.",
                "Coordinación de actividades de promoción turística.",
              ],
            },
            {
              id: "turismo-pehuen",
              startDate: "Junio 2019",
              endDate: "Mayo 2020",
              location: "Chile",
              title: "Jefe de Desarrollo y Finanzas",
              company: "Turismo Pehuén",
              tasks: [
                "Desarrollo, proyección y control de gestión financiera y contable.",
                "Rediseño de sistema de gestión administrativa.",
                "Jefe de proyecto web y digitalización de procesos.",
                "Elaboración y mantención de manual de operación institucional.",
                "Estructuración departamental de la empresa.",
                "Encargado de gestión de Recursos Humanos.",
              ],
            }
          ],
        },
        education: {
          title: "Educación",
          exp: [
            {
              id: "4geeks",
              startDate: "Diciembre 2020",
              endDate: "Mayo 2021",
              title: "Desarrollador Web Full Stack",
              institution: "4Geeks Academy",
              
            },
            {
              id: "uach",
              startDate: "2013",
              endDate: "2016",
              title: "Administrador de Empresas | Licenciado en Turismo",
              institution: "Universidad Austral de Chile",
              
            },
            {
              id: "utfsm",
              startDate: "2009",
              endDate: "2013",
              title: "Ingeniería Comercial",
              institution: "Universidad Técnica Federico Santa María",
              statusIncomplete: "Incompleta",
              
            }
          ],
        },
        skills: {
          title: "Habilidades",
          skillsData: {
            Frontend: ["HTML5", "CSS3", "Javascript", "Typescript", "ReactJs", "NextJS", "CRA", "React Router"],
            "CSS & Estilos": ["Bootstrap", "MaterialUI", "Ant Design", "Tailwind", "Sass/SCSS", "Stylus", "Less", "PostCss"],
            "Manejo de Estado (React)": ["React Redux", "Flux", "React Context API", "Tanstack (React Query)", "Zustand"],
            Backend: ["Python", "Java", "SailsJs", "Flask", "Java Spring Boot", "SQLAlchemy"],
            "Bases de Datos": ["PostgresSQL", "MySQL", "Sybase", "MSServer"],
            Testing: ["Jest", "React Testing Library"],
            "Seguridad & Calidad": ["SonarQube", "Blackduck", "Fortify"],
            "DevOps, Build & Versionado": ["Git", "Github", "Bitbucket", "NPM", "Webpack", "Jenkins"],
            Deploy: ["Github Pages", "Netlify", "Vercel"],
            "Gestión & Metodologías": ["Jira"],
            Idiomas: ["Español: Nativo", "Inglés: C2"],
          },
        },
        cv: {
          title: "Descargar CV",
        },
      },
    },

    projectsPage: {
      pageTitle: "Mis Proyectos",
      pageDescriptionParagraph1: "Selección de proyectos desarrollados utilizando diferentes tecnologías y frameworks.",
      pageDescriptionParagraph2: "Todos los proyectos están disponibles en",
      viewProjectButton: "Ver Proyecto",
      viewRepoButton: "Ver Repositorio",
      noDemoButton: "Repo Privado",
      projects:[
        {
          id: "caac",
          title: "Club Aguas Abiertas Chiloé",
          description: "Proyecto de sitio web para el club de aguas abiertas de Chiloé. Monorepo con API REST, Manejo de BD con Prisma y Frontend con Next.js.",
          liveDemo: "https://www.aguasabiertaschiloe.cl/",
          repoUrl: "https://github.com/farancibiat/desafio-quinched",
        },
        {
          id: "swim-app",
          title: "Swim App MVP",
          description: "WebApp para natación, ambiente de desarrollo, API Spring Boot aún no desplegada.",
          liveDemo: "https://swim.farancibiat.cl/",
          repoUrl: "https://github.com/farancibiat/swimmate-app",
        },
        {
          id: "pokeapi-test",
          title: "Pokeapi Test",
          description: "Este sitio es una Pokedex simple, utiliza la API \"pokeapi.co\", tiene función de búsqueda y guarda favoritos, desplegada en Netlify.",
          liveDemo: "https://pokemon.farancibiat.cl/",
          repoUrl: "https://github.com/Farancibiat/pokemon-site",
        },
        {
          id: "shopping-cart",
          title: "Carrito de Compras Películas",
          description: "Este proyecto es un carrito de compras básico y responsivo hecho con HTML, CSS y full Vanilla Javascript, desplegado en Netlify.",
          liveDemo: "https://shoppingcart.farancibiat.cl/",
          repoUrl: "https://github.com/Farancibiat/ShopingCart-FullVanilla",
        },
        {
          id: "star-wars-blog",
          title: "Blog Star Wars",
          description: "Blog de ejercicio para practicar la manipulación de datos usando fetch, react y flux/context.",
          repoUrl: "https://github.com/Farancibiat/exercise-starwars-blog-reading-list",
        },
        {
          id: "todolist",
          title: "Lista de Tareas",
          description: "Aplicación web para practicar la manipulación de datos en React y la modificación de datos en una API externa (CRUD).",
          repoUrl: "https://github.com/farancibiat/todolist-fetch",
        },
        {
          id: "pichangapp",
          title: "Pichangapp",
          description: "Aplicación web en desarrollo para arriendo de canchas de fútbol en Chile.",
          repoUrl: "https://github.com/farancibiat/pichangapp",
        },
      
      
        {
          id: "user-dashboard",
          title: "Agenda Dashboard",
          description: "Este es un dashboard básico hecho con ANT DESIGN, lee información de contactos desde una API fake gratuita. Desplegado en Netlify.",
          liveDemo: "https://user-dashboard.farancibiat.cl/",
          repoUrl: "https://github.com/farancibiat/agenda-dashboard",
        }       
      ],
    },
    contactPage: {
      pageTitle: "Contacto",
      pageSubtitle: "¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a transformar tus ideas en soluciones web.",
      formFullNamePlaceholder: "Tu nombre completo",
      formEmailPlaceholder: "Tu dirección de correo electrónico",
      formMessagePlaceholder: "Escribe aquí tu mensaje. ¿Cómo puedo ayudarte?",
      formSubmitButton: "Enviar mensaje",
      formSubmitNote: "Al enviar este formulario, recibirás una copia en el correo electrónico proporcionado.",
      validation: {
        nameRequired: "El nombre es requerido.",
        emailInvalid: "Dirección de correo inválida.",
        emailRequired: "El correo es requerido.",
        messageRequired: "No olvides agregar tu mensaje."
      }
    },
    footer: {
      copyrightText: "Desarrollado por Felipe Arancibia, 2025."
    },
  },
  en: {
    general:{
      name: "Felipe Arancibia Torres",
      title: "Full Stack Developer",
      languages: [
        {
          id: "es",
          language: "Spanish",
          level: "Native",
          filename: "Felipe Arancibia Esp.pdf"	
        },
        {
          id: "en",
          language: "English",
          level: "C2",
          filename: "Felipe Arancibia Eng.pdf"
        }
      ],  
      descarga: "Download"
    },
    navigationBar: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    sideBar: {    
      languagesTitle: "Languages",
      techStackTitle: "Tech Stack",
      techStack:[
        {
          id: "frontend",
          title: "Frontend",
          description: "HTML, CSS, Javascript, React, Next.js, TypeScript, Tanstack, Redux, Tailwind, Ant Design, Material UI, Bootstrap, Shadcn, Jest, React Testing Library"
        },
        {
          id: "backend",
          title: "Backend",
          description: "Java, Spring Boot, Express.js, Prisma, Node.js, Python, Flask, SQLAlchemy, REST API's, PostgresSQL"
        },
        {
          id: "deploys",
          title: "Deploy",
           description: "Azure, Jenkins, Vercel, Netlify"
        },
        {
          id: "methodologies",
          title: "Methodologies & Tools",
          description: "Git, Github, Bitbucket, NPM, Webpack, Jenkins, Azure, Agile, Scrum, Kanban"
        },
      ],
      cvTitle: "Curriculum Vitae",
    },
    aboutPage: {
      pageTitle: "Home",
      heroSubtitle: "Full Stack Developer focused on transforming business needs into modern, cross-platform web solutions.",
      heroViewProjects: "View Projects",
      heroContact: "Contact",
      skillsTitle: "Skills",
      skillsDisclaimer: "* See full technical profile in",
      skillsDisclaimerLink: "Experience",
      skills:[
        {
          title: "Frontend",
          description: "React, Next.js, TypeScript"
        },
        {
          title: "Backend",
          description: "Spring, Express.js, PostgresSQL"
        },
        {
          title: "Tools",
          description: "Git, Jenkins, Azure"
        },
        {
          title: "Methodologies",
          description: "Agile, Scrum, Kanban"
        }
      ],
      cards:[
        {
          id: "experience",
          title: "Experience",
          text: "Extensive experience in web application development, agile methodologies, and teamwork. Review my full CV in English and Spanish.",
          button: "View Experience"
        },
        {
          id: "projects",
          title: "Projects",
          text: "Portfolio of projects developed with various technologies. Includes API creation, solution implementation, and open-source tools.",
          button: "View Projects"
        },
        {
          id: "contact",
          title: "Contact",
          text: "Interested in working together? I am available for freelance projects and new job opportunities.",
          button: "Contact Me"
        }
      ]
    },
    experiencePage: {
      pageTitle: "Professional Experience",
      navItems:["Profile", "IT Development", "Administration", "Education", "Skills", "CV"],
      sectionContent:{
        profile:{
          title: "Profile",
          description: "Web developer with experience in the financial, tourism, and aquaculture industries. His ability to connect technical aspects with business objectives allows him to offer solutions with a comprehensive development vision. He stands out for his teamwork and communication, complemented by an analytical and meticulous approach."
        },
        itExperience:{
          title: "IT Development Career",
          exp:[
            {
              id: "sii-group-2022",
              startDate: "August 2022",
              endDate: "January 2025",
              location: "Remote",
              title: "Full Stack Consultant",
              company: "SII Group",
              description: "Scotiabank:",
              tasks: [
                "Migration and improvement of a mortgage platform from VBA6 code to React with TypeScript, with strict library restrictions, in continuous interaction with users.",
                "Migration includes testing, using multiple code analysis tools: Sonarqube, Fortify, Checkmarx, and Blackduck.",
                "Development of MS/BFF connections in Java Spring Boot connecting to Sybase, SQL Server databases, and AS400 system.",
                "Build/Deploy management in development environments.",
              ],
            },
            {
              id: "afp-uno-2022",
              startDate: "May 2022",
              endDate: "July 2022",
              location: "Remote",
              title: "Frontend Developer",
              company: "AFP UNO",
              description: "",
              tasks: [
                "Continuous development of public and client platforms.",
                "Full implementation of Google Tag Manager from scratch in contact with an external marketing agency and Commercial Team, optimizing the process jointly.",
                "Continuous work with QA Team based on a rigorous Scrum Agile routine.",
                "Strict designs based on Figma, working conjuntly with Marketing and Commercial Team."
              ],
            },
             {
              id: "moveapps-2021",
              startDate: "May 2021",
              endDate: "April 2022",
              location: "Remote",
              title: "Full Stack Developer",
              company: "MoveApps",
              description: "Development of a multi-client web platform (Chile Converge / Workafe) and a platform for critical patient transport (Movicare).",
              tasks: [
                "Development of a multi-client web platform for client training, for both Administrative and user access.",
                "Includes informational views, maintainers, forms, logins, landings, and reusable layouts/components.",
                "API development with ORM SailsJs, with mass email sending.",
                "Development of a platform for critical patient transport.",
                "Requirements gathering in direct contact with the client, optimizing the transport management process."
              ],
            }
          ]
        },
        adminExperience:{
          title: "Administrative Career",
          exp:[
            {
              id: "wendtfish",
              startDate: "June 2020",
              endDate: "March 2021",
              location: "Chile",
              title: "Administrator",
              company: "Pesquera Wendtfish",
              tasks: [
                "Development and operation of financial control system.",
                "Analysis and management of administrative gaps.",
                "Implementation of G-suite system for process improvement.",
                "Negotiation and management of suppliers.",
                "Supervision of operational and administrative teams.",
              ],
            },
            {
              id: "chiloe-bureau",
              startDate: "August 2019",
              endDate: "November 2019",
              location: "Chiloé, Chile",
              title: "Executive Director",
              company: "Chiloé Convention Bureau Corporation",
              tasks: [
                "Project performance evaluation.",
                "Gap regularization for Public Funds reporting (PROFO).",
                "Annual funds reporting.",
                "Coordination of tourism promotion activities.",
              ],
            },
            {
              id: "turismo-pehuen",
              startDate: "June 2019",
              endDate: "May 2020",
              location: "Chile",
              title: "Head of Development and Finance",
              company: "Turismo Pehuén",
              tasks: [
                "Development, projection, and control of financial and accounting management.",
                "Redesign of administrative management system.",
                "Web project manager and process digitalization.",
                "Development and maintenance of institutional operation manual.",
                "Departmental structuring of the company.",
                "Responsible for Human Resources management.",
              ],
            }
          ]
        },
        education:{
          title: "Education",
          exp:[
            {
              id: "fourgeeks",
              startDate: "December 2020",
              endDate: "May 2021",
              title: "Full Stack Web Developer",
              institution: "4Geeks Academy",
            },
           {
              id: "uach",
              startDate: "2013",
              endDate: "2016",
              title: "Business Administrator | Bachelor in Tourism",
              institution: "Universidad Austral de Chile",
            },
           {
              id: "utfsm",
              startDate: "2009",
              endDate: "2013",
              title: "Commercial Engineering",
              institution: "Universidad Técnica Federico Santa María",
              statusIncomplete: "Incomplete",
            }
          ]
        },
        skills:{
          title: "Technical Skills",
          skillsData: {
            Frontend: ["HTML5", "CSS3", "Javascript", "Typescript", "ReactJs", "NextJS", "CRA", "React Router"],
            "CSS & Styling": ["Bootstrap", "MaterialUI", "Ant Design", "Tailwind", "Sass/SCSS", "Stylus", "Less", "PostCss"],
            "State handlers (React)": ["React Redux", "Flux", "React Context API", "Tanstack (React Query)", "Zustand"],
            Backend: ["Python", "Java", "SailsJs", "Flask", "Java Spring Boot", "SQLAlchemy"],
            "Databases": ["PostgresSQL", "MySQL", "Sybase", "MSServer"],
            Testing: ["Jest", "React Testing Library"],
            "Security & Quality": ["Sonar", "Blackduck", "Fortify"],
            "DevOps, Build & Versioning": ["Git", "Github", "Bitbucket", "NPM", "Webpack", "Jenkins"],
            Deploy: ["Github Pages", "Netlify", "Vercel"],
            "Management & Methodologies": ["Jira"],
            Languages: ["Spanish: Native", "English: C2"],
          },
        },
        cv: {
          title: "Download CV",
        }
      },
    },
    projectsPage: {
      pageTitle: "My Projects",
      pageDescriptionParagraph1: "Selection of projects developed using different technologies and frameworks.",
      pageDescriptionParagraph2: "All projects are available on",
      viewProjectButton: "View Project",
      viewRepoButton: "View Repository",
      noDemoButton: "Private Repo",
      projects:[
        {
          id: "caac",
          title: "Chiloé Open Water Club",
          description: "Website project for the Chiloé open water club. Monorepo with API REST, handle DB using Prisma and  Next.js frontend.",
          liveDemo: "https://www.aguasabiertaschiloe.cl/",
          repoUrl: "https://github.com/farancibiat/desafio-quinched",
        },
        {
          id: "swim-app",
          title: "Swim App MVP",
          description: "WebApp for swimming, development environment, Spring Boot API not yet deployed.",
          liveDemo: "https://swim.farancibiat.cl/",
          repoUrl: "https://github.com/farancibiat/swimmate-app",
        },
        {
          id: "pokeapi-test",
          title: "Pokeapi Test",
          description: "This site is a simple Pokedex, it uses the \"pokeapi.co\" API, has a search function and saves favorites, deployed on Netlify.",
          liveDemo: "https://pokemon.farancibiat.cl/",
          repoUrl: "https://github.com/farancibiat/pokemon-site",
        },
        {
          id: "shopping-cart",
          title: "Movie Shopping Cart",
          description: "This project is a basic, responsive shopping cart made with HTML, CSS, and full Vanilla Javascript, deployed on Netlify.",
          liveDemo: "https://shoppingcart.farancibiat.cl/",
          repoUrl: "https://github.com/Farancibiat/ShopingCart-FullVanilla",
        },
        {
          id: "user-dashboard",
          title: "Agenda Dashboard",
          description: "This is a basic dashboard made with ANT DESIGN, it reads contact information from a free fake API. Deployed on Netlify.",
          liveDemo: "https://user-dashboard.farancibiat.cl/",
          repoUrl: "https://github.com/farancibiat/agenda-dashboard",
        },
        {
          id: "star-wars-blog",
          title: "Star Wars Blog",
          description: "Exercise blog to practice data manipulation using fetch, react, and flux/context.",
          repoUrl: "https://github.com/Farancibiat/exercise-starwars-blog-reading-list",
        },
        {
          id: "to-do-list",
          title: "To Do List",
          description: "This is a simple to-do list made with HTML, CSS, and full Vanilla Javascript, deployed on Netlify.",
          repoUrl: "https://github.com/farancibiat/todolist-fetch",
        },    {
          id: "pichangapp",
          title: "Pichangapp",
          description: "Web application under development for renting football pitches in Chile.",
          repoUrl: "https://github.com/farancibiat/pichangapp",
        },
      ]
    },
    contactPage: {
      pageTitle: "Contact",
      pageSubtitle: "Have a project in mind? Let's talk about how I can help you transform your ideas into web solutions.",
      formFullNamePlaceholder: "Your full name",
      formEmailPlaceholder: "Your email address",
      formMessagePlaceholder: "Write your message here. How can I help you?",
      formSubmitButton: "Send message",
      formSubmitNote: "By submitting this form, you will receive a copy at the email address provided.",
      validation: {
        nameRequired: "Name is required.",
        emailInvalid: "Invalid email address.",
        emailRequired: "Email is required.",
        messageRequired: "Don't forget to add your message."
      }
    },
    footer: {
      copyrightText: "Developed by Felipe Arancibia, 2025."
    },
  },
}; 
