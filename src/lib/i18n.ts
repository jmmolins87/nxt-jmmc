



import i18n from "i18next";


export const resources: Record<string, { translation: Record<string, string> }> = {
    en: {
        translation: {
            // ProjectCard Show More/Less
            "projects.showMore": "Read more",
            "projects.showLess": "Show less",
            // Navigation
            "nav.home": "Home",
            "nav.about": "About",
            "nav.projects": "Projects",
            "nav.skills": "Skills",
            "nav.aiagency": "AI Agency",
            "nav.contact": "Contact",
            "nav.menu": "Menu",

            // Hero Section
            "hero.greeting": "Hi, I'm",
            "hero.role": "Fullstack Developer, AI & Automation Builder",
            "hero.description":
                "I build fullstack digital products, AI-driven solutions, and automations that help businesses move faster and create real value.",
            "hero.viewProjects": "View Projects",
            "hero.contact": "Contact",

            // About Section
            "about.title": "About Me",
            "about.description1":
                "I'm a fullstack developer with 13+ years of experience building digital products from idea to delivery. I started in graphic design at my father's print shop, and that visual foundation evolved into a broader profile where I connect product thinking, development, and execution.",
            "about.description2":
                "Over the years I've worked across the full stack, contributing to interfaces, business logic, integrations, and scalable product experiences. Today I also bring strong applied AI skills, designing automations and intelligent workflows that make products more useful, efficient, and competitive. I enjoy turning complex needs into clear digital solutions, with a practical approach that balances technical quality, usability, and business impact.",
            "about.description3":
                "I enjoy working where design, engineering, and practical innovation meet. I'm especially motivated by projects that require structure, initiative, and the ability to connect ideas with execution. Outside work, I value travel, sports, family, and meaningful conversations, which help me stay curious, balanced, and creative.", 
            "about.snapshot": "Professional Snapshot",
            "about.mobileHeading": "Fullstack development shaped by design, product thinking, applied AI, and useful automations.",
            "about.timelineEyebrow": "Career Path",
            "about.timelineTitle": "Experience Timeline",
            "about.timelineDescription": "A progression from visual design into fullstack product development, reusable systems, automations, and applied AI solutions.",
            "about.stats.years": "Years building",
            "about.stats.roles": "Key roles",
            "about.stats.focus": "Profile",
            "about.contactMe": "Contact Me",

            // Timeline About Section
            "about.job.actuality":
                "Present",
            "about.freelance.title":
                "Freelance.",
            "about.freelance.description":
                "This was the beginning of my professional career. I started working with my father at his printing shop, where I was in charge of graphic design and layout of the projects. Over time, I acquired knowledge in web development, which allowed me to combine both disciplines.",
            "about.servegraf.title":
                "Graphic designer at Servegraf.",
            "about.servegraf.description":
                "I designed graphic materials and branding for various clients. I also handled the layout of designs for printing. And of course, I continued learning about web development.",
            "about.everis.title":
                "Front-end Developer at Eeveris",
            "about.everis.description":
                "Development of Jazztel's online store. I was almost 100% dedicated to the website design and layout, performing tasks alongside the development side.",
            "about.nateevo.title":
                "Front-end Developer at Nateevo",
            "about.nateevo.description":
                "At this company, I worked on several projects, including the FC Barcelona online store, the Almirall website, and projects for Mapfre. I was primarily involved in layout and functionality for the sites, even though most were built with a CMS.",
            "about.dimatica.title":
                "Front-end Developer at Dimatica",
            "about.dimatica.description":
                "In this case, I worked on projects for companies that were owned by the company itself.They were CMS projects, so I was also involved in the design and functionality of the front- end.I also did some interviews and managed a team.",
            "about.ibm.title":
                "Front Developer at IBM",
            "about.ibm.description":
                "This time, I was involved in the design of the Banco Santander app.I also created components in Angular, giving them functionality, and reading data from the back end.",
            "about.accenture.title":
                "Front Developer at Accenture",
            "about.accenture.description":
                "For supplier reasons, I changed companies, but I'm still working on the same Banco Santander project, but creating reusable components in StencilJS for the rest of the project's Squads.I'm currently working on the front-end side, calculating rates, loans, leasing, and guarantees.",
            "about.custos.title":
                "Fullstack Developer at Custos Mobiel",
            "about.custos.description":
                "I lead the frontend side of the company's applications, working in a fullstack environment with a fast delivery mindset and a vibe coding approach focused on shipping useful product increments.",

            // Projects Section
            "projects.title": "My Projects",
            "projects.moreInfo1": "* There are some projects that cannot be shown the code for confidentiality reasons",
            "projects.moreInfo2": "* In projects where the code is shown but not the site, it is because the site is deprecated, it no longer exists on the network",
            "projects.florLoto.title": "Flor de Loto",
            "projects.florLoto.subtitle": "Flower E-commerce",
            "projects.florLoto.description":
                "Application created with Angular and hosted on Netlify. It's a showcase for a flower shop. In addition to the shopping cart and in-store purchases, purchases can be made through other platforms such as Glovo or Uber.",
            "projects.eleia.title": "Eleia",
            "projects.eleia.subtitle": "Energy Distributor",
            "projects.eleia.description":
                "Website created with WordPress and hosted on Azure. It is an energy distributor that offers solar panel installation and maintenance services.",
            "projects.dimatica.title": "Dimatica",
            "projects.dimatica.subtitle": "Technology Consulting",
            "projects.dimatica.description":
                "Website created with WordPress and hosted on Azure. It is a technology consultancy that offers software development and digital transformation services.",
            "projects.sermicro.title": "Sermicro",
            "projects.sermicro.subtitle": "Technology Consulting",
            "projects.sermicro.description":
                    "Website created with Wordpress, Microsoft .NET, Java, PHP, Angular, and CMS. Additionally, the site has an employee portal accessible from a subpath (/PORTAL/loginEmpresa.jsp). Technologies such as Java and JSP are used for internal management.",
            "projects.api.title": "API Movilidad",
            "projects.api.subtitle": "Infrastructure Construction",
            "projects.api.description":
                "Website created with WordPress and hosted on Azure. API Movilidad S.A. is a Spanish company specialized in civil engineering, focused on the construction, maintenance, and upkeep of road infrastructure and street furniture.",
            "projects.almirall.title": "Almirall",
            "projects.almirall.subtitle": "Almirall, S.A. is a Spanish pharmaceutical company",
            "projects.almirall.description":
                "It's a pharmaceutical company built with XHTML 1.0 and CSS, following Web 2.0 design criteria that include content syndication and graphic elements that facilitate navigation. Additionally, Almirall uses web analytics tools such as Google Analytics.",
            "projects.jazztel.title": "Jazztel",
            "projects.jazztel.subtitle": "Telecommunications e-commerce",
            "projects.jazztel.description":
                "Website created with Angular, TypeScript, and Sass on the front end. Unit tests were performed with Karma. The back end was created with Java and Spring Boot. The database is Oracle, as is the content injector so the client can edit text and images.",
            "projects.fcbarcelona.title": "FC Barcelona Store",
            "projects.fcbarcelona.subtitle": "FC Barcelona E-commerce",
            "projects.fcbarcelona.description":
                "This website was created with Shopify. The main website is hosted on Amazon Web Services (AWS) and uses a specialized CMS called Ubiquo Sports.",
            "projects.lamasia_fcb.title": "La Masia - FC Barcelona",
            "projects.lamasia_fcb.subtitle": "Website dedicated to the FC Barcelona youth team",
            "projects.lamasia_fcb.description":
                "This website was created with Shopify. This time, I started the project but didn't finish it. It was initially created with Pug (rendered HTML5), Sass, and Gulp",
            "projects.mapfre.title": "Mapfre",
            "projects.mapfre.subtitle": "Insurance E-commerce",
            "projects.mapfre.description": 
                "Website created the old-fashioned way. Pure HTML5, CSS3, and jQuery. I assume it's up to date since I worked on it years ago.",
            "projects.esmuc.title": "ESMUC",
            "projects.esmuc.subtitle": "E-commerce and educational platform",
            "projects.esmuc.description":
                "Website created entirely in WordPress. It has a membership for the school's students and a platform where they can purchase courses, both in person and online.",
            "projects.jmmcLegacy.title": "JMMC Legacy",
            "projects.jmmcLegacy.subtitle": "My old portfolio",
            "projects.jmmcLegacy.description":
                "This is a website created years ago, using HTML, CSS3, Bootstrap, JS (jQuery), and PHP. It's a static website. On this website, you'll have the opportunity to see some of my work as a graphic designer.",
            "projects.bsantander.title": "Banco Santander",
            "projects.bsantander.subtitle": "Digital Banking Platform",
            "projects.bsantander.description":
                "In this project, I started in the Stock Exchanges and Markets department, and I also worked on the retail side. Then, I worked on creating reusable components in StencilJS. These components are used in various bank applications, improving development efficiency and consistency. These components were also displayed in a library created with Storybook, where all the developed components are displayed so that the Squads can see which components are most beneficial depending on the development they need to do. I was also involved in creating components for calculating rates, loans, leasing, and guarantees.",
            "projects.unicaja.title": "Unicaja",
            "projects.unicaja.subtitle": "Digital Banking Platform",
            "projects.unicaja.description":
                "In my current project, I am building reusable components for Unicaja developers. These components are developed in React and styled with Styled Components, and they are used across various banking applications, improving both development efficiency and consistency.",
            "projects.servegraf.title": "Servegraf Printing",
            "projects.servegraf.subtitle": "Printing E-commerce",
            "projects.servegraf.description":
                "This project is an online printing shop built with WordPress. It allows users to customize and order print products such as business cards, brochures, posters, magazines, books, and signage. It was one of my first web development projects, where I learned how to integrate graphic design with web functionality.",
            "projects.pmbalaguer.title": "Balaguer Madridista Supporters Club",
            "projects.pmbalaguer.subtitle": "Portal for the Balaguer Madridista Supporters Club",
            "projects.pmbalaguer.description":
                "Project created entirely in WordPress. It was created for the Balaguer Madridista Supporters Club, where you can see the latest news about the team, as well as past and upcoming matches.",
            "projects.jmmcdev.title": "JMMC Dev",
            "projects.jmmcdev.subtitle": "My current portfolio",
            "projects.jmmcdev.description":
                "This project is built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It's a portfolio where I showcase my projects and skills as a web developer.",
            "projects.demo": "Demo",
            "projects.code": "Code",

            // Skills Section
            "skills.title": "My Skills",
            "skills.frontend": "Frontend",
            "skills.backend": "Backend",
            "skills.tools": "Tools",

            // Contact Section
            "contact.title": "Contact",
            "contact.subtitle": "Let's talk!",
            "contact.description":
                "I'm interested in freelance opportunities or full-time positions. If you have any questions or want to discuss a project, don't hesitate to contact me.",
            "contact.form.name": "Name",
            "contact.form.company": "Company Name",
            "contact.form.message": "Message",
            "contact.form.namePlaceholder": "Your name",
            "contact.form.companyPlaceholder": "Your company name",
            "contact.form.messagePlaceholder": "Your message...",
            "contact.form.send": "Send Message",
            "contact.form.sending": "Sending Message",
            "contact.form.success": "Message sent successfully!",
            "contact.form.error": "Oops! The email was not sent",
            "contact.form.errorDescription": "Please try again in a few minutes",

            // Form Validation
            "validation.nameMin": "Name must be at least 2 characters",
            "validation.companyMin": "Company must be at least 2 characters",
            "validation.messageMin": "Message must be at least 10 characters",

            // Footer
            "footer.rights": "All rights reserved.",

            // Theme
            "theme.toggle": "Toggle theme",
            "theme.dark": "Dark",
            "theme.light": "Light",
            "theme.system": "System",

            //Metadata
            "meta.title": "Juanma MC | Fullstack Developer, AI & Automation Builder",
            "meta.description": "Fullstack developer building digital products, scalable systems, AI-driven solutions, and automations for modern businesses.",
            "meta.siteName": "Juanma MC Portfolio",
            "meta.ogAlt": "Juanma MC Portfolio",
            "meta.twitterTitle": "Juanma MC | Fullstack Developer, AI & Automation Builder",
            "meta.twitterDescription": "Fullstack developer building digital products, scalable systems, AI-driven solutions, and automations for modern businesses.",

            // Downladin Button
            "download.button": "Downloading",

            // AI Agency Section
            "aiagency.title": "AI Products",
            "aiagency.live": "Production Ready",
            "aiagency.description": "I build final web platforms and AI-powered applications designed to be used by real customers, not just shown in a pitch. The goal is simple: useful products, solid automations, and scalable experiences that solve business problems.",
            "aiagency.service1.title": "AI Automations",
            "aiagency.service1.description": "Automate repetitive operations, internal workflows, and customer processes with reliable AI-assisted systems.",
            "aiagency.service2.title": "Business Applications",
            "aiagency.service2.description": "Create final web apps and internal tools focused on usability, efficiency, and measurable business impact.",
            "aiagency.service3.title": "Custom AI Solutions",
            "aiagency.service3.description": "Design tailored AI features, assistants, and workflows aligned with your product, operations, and growth goals.",
            "aiagency.visit": "Visit Clinvetia",
            "aiagency.status": "Clinvetia is a real product already online, built as a final customer-facing web experience, not a demo concept.",
        },
    },
    es: {
        translation: {
            // ProjectCard Show More/Less
            "projects.showMore": "Leer más",
            "projects.showLess": "Mostrar menos",
            // Navigation
            "nav.home": "Inicio",
            "nav.about": "Sobre Mí",
            "nav.projects": "Proyectos",
            "nav.skills": "Habilidades",
            "nav.aiagency": "Agencia de IA",
            "nav.contact": "Contacto",
            "nav.menu": "Menú",

            // Hero Section
            "hero.greeting": "Hola, soy",
            "hero.role": "Desarrollador Fullstack, IA y Automatizaciones",
            "hero.description":
                "Construyo productos digitales fullstack, soluciones impulsadas por IA y automatizaciones que ayudan a las empresas a avanzar más rápido y generar valor real.",
            "hero.viewProjects": "Ver Proyectos",
            "hero.contact": "Contactar",

            // About Section
            "about.title": "Sobre Mí",
            "about.description1":
                "Soy un desarrollador fullstack con más de 13 años de experiencia creando productos digitales de principio a fin. Empecé en el mundo del diseño gráfico en la imprenta de mi padre, y esa base visual evolucionó hacia un perfil más completo donde conecto visión de producto, desarrollo y ejecución.",
            "about.description2":
                "Con los años he trabajado en todo el stack, participando en interfaces, lógica de negocio, integraciones y experiencias de producto escalables. Hoy también aporto un muy buen manejo aplicado de la IA, diseñando automatizaciones y flujos inteligentes para hacer los productos más útiles, eficientes y competitivos. Me gusta transformar necesidades complejas en soluciones digitales claras, con un enfoque práctico que equilibra calidad técnica, usabilidad e impacto de negocio.",
            "about.description3":
                "Me gusta trabajar en el punto donde se cruzan diseño, ingeniería e innovación práctica. Me motivan especialmente los proyectos que exigen estructura, iniciativa y capacidad para conectar ideas con ejecución real. Fuera del trabajo valoro viajar, hacer deporte, estar con mi familia y mantener conversaciones que me ayuden a seguir curioso, equilibrado y creativo.",
            "about.snapshot": "Perfil profesional",
            "about.mobileHeading": "Desarrollo fullstack con base en diseño, visión de producto, IA aplicada y automatizaciones útiles.",
            "about.timelineEyebrow": "Trayectoria",
            "about.timelineTitle": "Línea de experiencia",
            "about.timelineDescription": "Una evolución desde el diseño visual hacia el desarrollo fullstack de producto, sistemas reutilizables, automatizaciones y soluciones aplicadas con IA.",
            "about.stats.years": "Años creando",
            "about.stats.roles": "Etapas clave",
            "about.stats.focus": "Perfil",
            "about.contactMe": "Contactar",

            // Timeline About Section
            "about.job.actuality":
                "Actualidad",
            "about.freelance.title":
                "Freelance.",
            "about.freelance.description":
                "Este fue el comienzo de mi carrera profesional. Empecé trabajando con mi padre en su imprenta, donde me encargaba del diseño gráfico y la maquetación de los trabajos. Con el tiempo, fui adquiriendo conocimientos en desarrollo web, lo que me permitió combinar ambas disciplinas.",
            "about.servegraf.title":
                "Diseñador gráfico en Servegraf.",
            "about.servegraf.description":
                "Diseño de materiales gráficos y branding para diversos clientes. Además, me encargaba de la maquetación de los diseños para su impresión. Y por supuesto seguí aprendiendo sobre el desarrollo web.",
            "about.everis.title":
                "Desarrollador front-end en Eeveris.",
            "about.everis.description":
                "Desarrollo de la tienda online de Jazztel. Me dedicaba casi al 100% en el tema del diseño y maquetación de la web, desempeñando tareas conjuntamente con la parte del desarrollo.",
            "about.nateevo.title":
                "Desarrollador front-end en Nateevo",
            "about.nateevo.description":
                "En esta empresa, trabajé en varios proyectos, incluyendo la tienda online del FC Barcelona, ​​la web de Almirall y proyectos para Mapfre. Me dedicaba sobre todo el la parte de maquetación y darle funcionalidad a los sitios, aún que la mayoría estban hechos con CMS.",
            "about.dimatica.title":
                "Desarrollador front-end en Dimatica",
            "about.dimatica.description":
                "En este caso, trabajé en proyectos para empresas que pertenecían a la propia empresas. Eran proyectos con CMS así que también estuve dedicado con el sector del diseño y funcionalidad por parte del Front-End. También me dedicaba a hacer alguna entrevista y manejar un equipo.",
            "about.ibm.title":
                "Desarrollador front-end en IBM",
            "about.ibm.description":
                "En esta ocasión estuve dedicado en la parte de diseño de la App del Banco Santander. También creando componentes en Angular y dándoles funcionalidad y leyendo datos de parte del Back-End",
            "about.accenture.title":
                "Desarrollador front-end en Accenture",
            "about.accenture.description":
                "Por motivos de proveedores, me cambié de empresa pero sigo en el mismo proyecto del Banco Santander, pero haciendo componentes reutilizables en StencilJS para el resto de Squads del proyecto. Acutalmente estoy en la parte de Front-End calculando tasas, créditos, leasing y avales",
            "about.custos.title":
                "Desarrollador fullstack en Custos Mobiel",
            "about.custos.description":
                "Me encargo de la parte frontal de todas las aplicaciones de la empresa, trabajando dentro de un entorno fullstack con un ritmo ágil de entrega y un enfoque de vibe coding orientado a sacar producto útil.",

            // Projects Section
            "projects.title": "Mis Proyectos",
            "projects.moreInfo1": "* Hay algunos proyectos que no se puede mostrar el código por motivos de confidencialidad",
            "projects.moreInfo2": "* En los proyectos que se muestra el código pero no el sitio, es porque éste está deprecado, ya no existe en la red",
            "projects.florLoto.title": "Flor de Loto",
            "projects.florLoto.subtitle": "E-commerce de flores",
            "projects.florLoto.description":
                "Aplicación creada con Angular y alojamiento en Netlify. Es un escaparate de una tienda de flores. Pendiente del carrito de compra y compras en la propia tienda, se pueden realizar compras a través de otras plataformas como Glovo o Uber.",
            "projects.eleia.title": "Eleia",
            "projects.eleia.subtitle": "Destribuidora de energía",
            "projects.eleia.description":
                "Web creada con Wordpress y alojamiento en Azure. Es una distribuidora de energía que ofrece servicios de instalación y mantenimiento de placas solares.",
            "projects.dimatica.title": "Dimatica",
            "projects.dimatica.subtitle": "Consultoría tecnológica",
            "projects.dimatica.description":
                "Web creada con Wordpress y alojamiento en Azure. Es una consultoría tecnológica que ofrece servicios de desarrollo de software y transformación digital.",
            "projects.sermicro.title": "Sermicro",
            "projects.sermicro.subtitle": "Consultoría Tecnológica",
            "projects.sermicro.description":
                "Web creada con Wordpress, Microsoft .NET, Java, PHP, Angular y CMS. Además, el sitio cuenta con un portal del empleado accesible desde una subruta (/PORTAL/loginEmpresa.jsp) se usa tecnologías como Java y JSP para la gestión interna.",
            "projects.api.title": "API Movilidad",
            "projects.api.subtitle": "Construcción de infraestructuras",
            "projects.api.description":
                "Web creada con Wordpress y alojamiento en Azure. API Movilidad S.A. es una empresa española especializada en ingeniería civil, centrada en la construcción, conservación y mantenimiento de infraestructuras viarias y mobiliario urbano.",
            "projects.almirall.title": "Almirall",
            "projects.almirall.subtitle": "Almirall, S.A. es una compañía farmacéutica.",
            "projects.almirall.description":
                "Es una web que está construida con XHTML 1.0 y CSS, siguiendo criterios de diseño Web 2.0 que incluyen sindicación de contenidos y elementos gráficos que facilitan la navegación. Además, Almirall utiliza herramientas de análisis web como Google Analytics.",
            "projects.jazztel.title": "Jazztel",
            "projects.jazztel.subtitle": "E-commerce de telecomunicaciones",
            "projects.jazztel.description":
                "Web creada con Angular, TypeScript y Sass en la parte del Front-End. Los test unitarios se realizaron con Karma. La parte del Back-End fue creada con Java y Spring Boot. La base de datos es Oracle al igual que el inyector de contenido para que el propio cliente pueda cambiar textos e imagenes.",
            "projects.fcbarcelona.title": "Store FC Barcelona",
            "projects.fcbarcelona.subtitle": "E-commerce del FC Barcelona",
            "projects.fcbarcelona.description":
                "Esta web fue creada con Shopify. El sitio web principal está alojado en Amazon Web Services (AWS) y utiliza un CMS especializado llamado Ubiquo Sports.",
            "projects.lamasia_fcb.title": "La masia - FC Barcelona",
            "projects.lamasia_fcb.subtitle": "Web dedicada a la cantera del FC Barcelona",
            "projects.lamasia_fcb.description":
                "Esta web fue creada con Shopify. En esta ocasión, emepecé el proyecto pero no llegué a terminarlo. Se empezó a crear con Pug (HTML5 procesado) Sass y Gulp",
            "projects.mapfre.title": "Mapfre",
            "projects.mapfre.subtitle": "E-commerce de Seguros",
            "projects.mapfre.description":
                "Web creada a la vieja auzanza. HTML5 puro, CSS3 y jQuery, supongo que estará actualizada ya que hace años que trabajé en ella.",
            "projects.esmuc.title": "ESMUC",
            "projects.esmuc.subtitle": "E-commerce y plataforma educativa",
            "projects.esmuc.description":
                "Web creada en Wordpress integramente. Tiene una membresía para los alumnos de la escuela y una plataforma dónde se pueden comprar estudios, tanto presenciales como on-line",
            "projects.jmmcLegacy.title": "JMMC Legacy",
            "projects.jmmcLegacy.subtitle": "Mi portfolio antiguo",
            "projects.jmmcLegacy.description":
                "Es una web creada hace años, la creé con HTML, CSS3, Bootstrap, JS (jQuery) y PHP. Es una web estática. En esta Web tendrás la oportunidad de ver algunos de mis trabajos como diseñador gráfico.",
            "projects.bsantander.title": "Banco Santander",
            "projects.bsantander.subtitle": "Plataforma de banca digital",
            "projects.bsantander.description":
                "En este proyecto empecé en el apartado de Bolsas y Mercados, también estuve en la parte de particulares. Luego, trabajé en la creación de componentes reutilizables en StencilJS. Estos componentes se utilizan en diversas aplicaciones del banco, mejorando la eficiencia y consistencia del desarrollo. Así como, dichos componentes se mostraban en una librería creada con Storybook, dónde están todos los componentes desarrollados para que los Squads vean que componentes les beneficia más según el desarrllo que tengan que hacer. También estuve involucrado en la creación de componentes para el cálculo de tasas, créditos, leasing y avales.",
            "projects.unicaja.title": "Unicaja",
            "projects.unicaja.subtitle": "Plataforma de banca digital",
            "projects.unicaja.description":
                "En este caso, es el proyecto en el que estoy actualmente, creando componentes reutilizables para los desarrollades de Unicaja. Estos componentes están hechos en React y los estilos con Styled Components y se utilizan en diversas aplicaciones del banco, mejorando la eficiencia y consistencia del desarrollo.",
            "projects.servegraf.title": "Servegraf Imprenta",
            "projects.servegraf.subtitle": "E-commerce de artea gráficas",
            "projects.servegraf.description":   
                "Este proyecto es una imprenta online creada con WordPress. Permite a los usuarios personalizar y pedir productos de impresión como tarjetas de visita, folletos, carteles, revistas, libros y cartelería. Fue uno de mis primeros proyectos de desarrollo web, donde aprendí a integrar el diseño gráfico con la funcionalidad web.",
            "projects.pmbalaguer.title": "Peña Madridista Balaguer",
            "projects.pmbalaguer.subtitle": "Portal para la Peña Madridista Balaguer",
            "projects.pmbalaguer.description":
                "Proyecto creado integramente en Wordpress. Fue creado para la Peña Madridista Balaguer, dónde se pueden ver las últimas noticias del equipo, así como los partidos que se han jugado y los próximos partidos que se jugarán.",
            "projects.jmmcdev.title": "JMMC Dev",
            "projects.jmmcdev.subtitle": "Mi portfolio actual",
            "projects.jmmcdev.description":
                "Este proyecto está creado con Next.js, TypeScript, Tailwind CSS y Framer Motion. Es un portfolio donde muestro mis proyectos y habilidades como desarrollador web.",
            "projects.demo": "Demo",
            "projects.code": "Código",

            // Skills Section
            "skills.title": "Mis Habilidades",
            "skills.frontend": "Frontend",
            "skills.backend": "Backend",
            "skills.tools": "Herramientas",

            // Contact Section
            "contact.title": "Contacto",
            "contact.subtitle": "¡Hablemos!",
            "contact.description":
                "Estoy interesado en oportunidades freelance o posiciones a tiempo completo. Si tienes alguna pregunta o quieres discutir un proyecto, no dudes en contactarme.",
            "contact.form.name": "Nombre",
            "contact.form.company": "Empresa",
            "contact.form.message": "Mensaje",
            "contact.form.namePlaceholder": "Tu nombre",
            "contact.form.companyPlaceholder": "Nombre empresa",
            "contact.form.messagePlaceholder": "Tu mensaje...",
            "contact.form.send": "Enviar Mensaje",
            "contact.form.sending": "Enviando Mensaje",
            "contact.form.success": "Mensaje enviado con éxito!",
            "contact.form.error": "¡Vaya! El correo no se ha enviado",
            "contact.form.errorDescription": "Pruebalo de nuevo en unos minutos",

            // Form Validation
            "validation.nameMin": "El nombre debe tener al menos 2 caracteres",
            "validation.companyMin": "La empresa debe tener al menos 2 caracteres",
            "validation.messageMin": "El mensaje debe tener al menos 10 caracteres",

            // Footer
            "footer.rights": "Todos los derechos reservados.",

            // Theme
            "theme.toggle": "Cambiar tema",
            "theme.dark": "Oscuro",
            "theme.light": "Claro",
            "theme.system": "Sistema",

            //Metadata
            "meta.title": "Juanma MC | Desarrollador Fullstack, IA y Automatizaciones",
            "meta.description": "Desarrollador fullstack enfocado en productos digitales, sistemas escalables, soluciones con IA y automatizaciones.",
            "meta.siteName": "Portfolio de Juanma MC",
            "meta.ogAlt": "Portfolio de Juanma MC",
            "meta.twitterTitle": "Juanma MC | Desarrollador Fullstack, IA y Automatizaciones",
            "meta.twitterDescription": "Desarrollador fullstack enfocado en productos digitales, sistemas escalables, soluciones con IA y automatizaciones.",

            // Downladin Button
            "download.button": "Descargando",

            // AI Agency Section
            "aiagency.title": "Productos con IA",
            "aiagency.live": "Listo para producción",
            "aiagency.description": "Construyo plataformas web finales y aplicaciones impulsadas por IA pensadas para ser usadas por clientes reales, no solo para enseñarlas en una presentación. El objetivo es claro: productos útiles, automatizaciones sólidas y experiencias escalables que resuelvan problemas de negocio.",
            "aiagency.service1.title": "Automatizaciones con IA",
            "aiagency.service1.description": "Automatiza operaciones repetitivas, flujos internos y procesos de cliente con sistemas fiables asistidos por IA.",
            "aiagency.service2.title": "Aplicaciones de Negocio",
            "aiagency.service2.description": "Desarrollo web apps finales y herramientas internas centradas en usabilidad, eficiencia e impacto real en negocio.",
            "aiagency.service3.title": "Soluciones IA a Medida",
            "aiagency.service3.description": "Diseño funcionalidades, asistentes y flujos con IA alineados con tu producto, tu operativa y tus objetivos de crecimiento.",
            "aiagency.visit": "Visitar Clinvetia",
            "aiagency.status": "Clinvetia ya está online como producto real, construido como una experiencia web final para cliente, no como una demo conceptual.",
        },
    },
}

export function getMetadataTranslation(lang: string, key: string, defaultValue: string) {
    const lng = resources[lang] ? lang : "es";
    return resources[lng]?.translation?.[key] || defaultValue;
}

export default i18n
