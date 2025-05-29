



import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

const resources: Record<string, { translation: Record<string, string> }> = {
    en: {
        translation: {
            // Navigation
            "nav.home": "Home",
            "nav.about": "About",
            "nav.projects": "Projects",
            "nav.skills": "Skills",
            "nav.contact": "Contact",
            "nav.menu": "Menu",

            // Hero Section
            "hero.greeting": "Hi, I'm",
            "hero.role": "Web Developer & Designer",
            "hero.description":
                "I create attractive and functional digital experiences that help businesses achieve their goals.",
            "hero.viewProjects": "View Projects",
            "hero.contact": "Contact",

            // About Section
            "about.title": "About Me",
            "about.description1":
                "I'm a passionate web developer with experience creating engaging and functional websites and applications. My journey in web development began 13 years ago, when I started working with my father as a graphic designer at his printing company. What began as an immersion in the world of visual design evolved over time into my true passion: web application development, a field in which I've managed to combine creativity and technology to build innovative digital solutions.",
            "about.description2":
                "Since then, I've worked on various projects that have allowed me to hone my skills and knowledge. I specialize in front-end technologies like Angular, React, Next.js, Bootstrap, and Tailwind CSS, but I also have experience with back-end technologies and databases like MongoDB and MSQL, allowing me to develop complete and functional projects.",
            "about.description3":
                "When I'm not coding, I enjoy spending time with my friends, traveling, playing sports, spending time with my family, and socializing with new people—activities that help me maintain a healthy work-life balance. staff.", 
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
            "meta.title": "Juanma MC | Web Developer & Designer Portfolio",
            "meta.description": "Professional web developer and designer specializing in creating attractive and functional digital experiences.",
            "meta.siteName": "Juanma MC Portfolio",
            "meta.ogAlt": "Juanma MC Portfolio",
            "meta.twitterTitle": "Juanma MC | Web Developer & Designer Portfolio",
            "meta.twitterDescription": "Professional web developer and designer specializing in creating attractive and functional digital experiences.",

            // Downladin Button
            "download.button": "Downloading",
        },
    },
    es: {
        translation: {
            // Navigation
            "nav.home": "Inicio",
            "nav.about": "Sobre Mí",
            "nav.projects": "Proyectos",
            "nav.skills": "Habilidades",
            "nav.contact": "Contacto",
            "nav.menu": "Menú",

            // Hero Section
            "hero.greeting": "Hola, soy",
            "hero.role": "Desarrollador Web & Diseñador",
            "hero.description":
                "Creo experiencias digitales atractivas y funcionales que ayudan a las empresas a alcanzar sus objetivos.",
            "hero.viewProjects": "Ver Proyectos",
            "hero.contact": "Contactar",

            // About Section
            "about.title": "Sobre Mí",
            "about.description1":
                "Soy un desarrollador web apasionado con experiencia en la creación de sitios web y aplicaciones atractivas y funcionales. Mi viaje en el desarrollo web comenzó hace 13 años, cuando empecé trabajando con mi padre como diseñador gráfico en su imprenta. Lo que comenzó como una inmersión en el mundo del diseño visual evolucionó con el tiempo hacia mi verdadera pasión: el desarrollo de aplicaciones web, un campo en el que he logrado combinar creatividad y tecnología para construir soluciones digitales innovadoras.",
            "about.description2":
                "Desde entonces, he trabajado en diversos proyectos que me han permitido perfeccionar mis habilidades y conocimientos. Me especializo en tecnologías frontend como Angular, React, Next.js, Bootstrap y Tailwind CSS, pero también tengo experiencia con el backend y bases de datos como MongoDB y MSQL, lo que me permite desarrollar proyectos completos y funcionales.",
            "about.description3":
                "Cuando no estoy codificando, disfruto pasar tiempo con mis amigos, viajar, hacer deporte, estar con mi familia y socializar con gente nueva, actividades que me ayudan a mantener un equilibrio saludable entre el trabajo y la vida personal.",
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
                "projects.servegraf.title": "Servegraf Imprenta",
                "projects.servegraf.subtitle": "E-commerce de imprenta",
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
            "meta.title": "Juanma MC | Desarrollador Web & Portfolio",
            "meta.description": "Desarrollador y diseñador web profesional especializado en crear experiencias digitales atractivas y funcionales.",
            "meta.siteName": "Portfolio de Juanma MC",
            "meta.ogAlt": "Portfolio de Juanma MC",
            "meta.twitterTitle": "Juanma MC | Desarrollador Web & Portfolio",
            "meta.twitterDescription": "Desarrollador y diseñador web profesional especializado en crear experiencias digitales atractivas y funcionales.",

            // Downladin Button
            "download.button": "Descargando",
        },
    },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    resources,
    lng: "es", // default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
})

export function getMetadataTranslation(lang: string, key: string, defaultValue: string) {
    // Si el idioma no existe, usa fallbackLng
    const lng = resources[lang] ? lang : "en";
    return resources[lng]?.translation?.[key] || defaultValue;
}

export default i18n
