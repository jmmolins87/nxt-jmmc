



import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
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
                "I'm a passionate web developer with experience creating engaging and functional websites and applications. My journey in web development began 10 years ago, when I started working with my father as a graphic designer at his printing company. What began as an immersion in the world of visual design evolved over time into my true passion: web application development, a field in which I've managed to combine creativity and technology to build innovative digital solutions.",
            "about.description2":
                "Since then, I've worked on various projects that have allowed me to hone my skills and knowledge. I specialize in front-end technologies such as Angular, React, Next.js, Bootstrap, and Tailwind CSS, but I also have experience with back-end and databases, which allows me to develop complete and functional projects.",
            "about.description3":
                "When I'm not coding, I enjoy spending time with my friends, traveling, playing sports, spending time with my family, and socializing with new people—activities that help me maintain a healthy work-life balance. staff.", 
            "about.contactMe": "Contact Me",
            // Timeline About Section
            "about.job.actuality":
                "Present",
            "about.job1.title":
                "Front-end Developer at Eeveris",
            "about.job1.description":
                "Development of Jazztel's online store. I was almost 100% dedicated to the website design and layout, performing tasks alongside the development side.",
            "about.job2.title":
                "Front-end Developer at Nateevo",
            "about.job2.description":
                "At this company, I worked on several projects, including the FC Barcelona online store, the Almirall website, and projects for Mapfre. I was primarily involved in layout and functionality for the sites, even though most were built with a CMS.",
            "about.job3.title":
                "Front-end Developer at Dimatica",
            "about.job3.description":
                "In this case, I worked on projects for companies that were owned by the company itself.They were CMS projects, so I was also involved in the design and functionality of the front- end.I also did some interviews and managed a team.",
            "about.job4.title":
                "Front Developer at IBM",
            "about.job4.description":
                "This time, I was involved in the design of the Banco Santander app.I also created components in Angular, giving them functionality, and reading data from the back end.",
            "about.job5.title":
                "Front Developer at Accenture",
            "about.job5.description":
                "For supplier reasons, I changed companies, but I'm still working on the same Banco Santander project, but creating reusable components in StencilJS for the rest of the project's Squads.I'm currently working on the front-end side, calculating rates, loans, leasing, and guarantees.",

            // Projects Section
            "projects.title": "My Projects",
            "projects.ecommerce.title": "E-commerce Platform",
            "projects.ecommerce.description":
                "A complete e-commerce platform with shopping cart, payments and product management.",
            "projects.dashboard.title": "Analytics Dashboard",
            "projects.dashboard.description":
                "Control panel to visualize business data with interactive charts and custom reports.",
            "projects.fitness.title": "Fitness App",
            "projects.fitness.description": "Mobile application for tracking workouts, nutrition and physical progress.",
            "projects.education.title": "Educational Platform",
            "projects.education.description": "Learning management system with courses, assessments and certifications.",
            "projects.social.title": "Social Network",
            "projects.social.description":
                "Social network platform with profiles, posts, messaging and real-time notifications.",
            "projects.weather.title": "Weather App",
            "projects.weather.description":
                "Weather forecast application with real-time data and interactive visualizations.",
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

            // Form Validation
            "validation.nameMin": "Name must be at least 2 characters",
            "validation.companyMin": "Company must be at least 2 characters",
            "validation.messageMin": "Message must be at least 10 characters",

            // Footer
            "footer.rights": "All rights reserved.",

            // Theme
            "theme.toggle": "Toggle theme",
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
                "Soy un desarrollador web apasionado con experiencia en la creación de sitios web y aplicaciones atractivas y funcionales. Mi viaje en el desarrollo web comenzó hace 10 años, cuando empecé trabajando con mi padre como diseñador gráfico en su imprenta.Lo que comenzó como una inmersión en el mundo del diseño visual evolucionó con el tiempo hacia mi verdadera pasión: el desarrollo de aplicaciones web, un campo en el que he logrado combinar creatividad y tecnología para construir soluciones digitales innovadoras.",
            "about.description2":
                "Desde entonces, he trabajado en diversos proyectos que me han permitido perfeccionar mis habilidades y conocimientos. Me especializo en tecnologías frontend como Angular, React, Next.js, Bootstrap y Tailwind CSS, pero también tengo experiencia con backend y bases de datos, lo que me permite desarrollar proyectos completos y funcionales.",
            "about.description3":
                "Cuando no estoy codificando, disfruto pasar tiempo con mis amigos, viajar, hacer deporte, estar con mi familia y socializar con gente nueva, actividades que me ayudan a mantener un equilibrio saludable entre el trabajo y la vida personal.",
            "about.contactMe": "Contactar",
            // Timeline About Section
            "about.job.actuality":
                "Actualidad",
            "about.job1.title":
                "Desarrollador front-end en Eeveris.",
            "about.job1.description":
                "Desarrollo de la tienda online de Jazztel. Me dedicaba casi al 100% en el tema del diseño y maquetación de la web, desempeñando tareas conjuntamente con la parte del desarrollo.",
            "about.job2.title":
                "Desarrollador front-end en Nateevo",
            "about.job2.description":
                "En esta empresa, trabajé en varios proyectos, incluyendo la tienda online del FC Barcelona, ​​la web de Almirall y proyectos para Mapfre. Me dedicaba sobre todo el la parte de maquetación y darle funcionalidad a los sitios, aún que la mayoría estban hechos con CMS.",
            "about.job3.title":
                "Desarrollador front-end en Dimatica",
            "about.job3.description":
                "En este caso, trabajé en proyectos para empresas que pertenecían a la propia empresas. Eran proyectos con CMS así que también estuve dedicado con el sector del diseño y funcionalidad por parte del Front-End. También me dedicaba a hacer alguna entrevista y manejar un equipo.",
            "about.job4.title":
                "Desarrollador front-end en IBM",
            "about.job4.description":
                "En esta ocasión estuve dedicado en la parte de diseño de la App del Banco Santander. También creando componentes en Angular y dándoles funcionalidad y leyendo datos de parte del Back-End",
            "about.job5.title":
                "Desarrollador front-end en Accenture",
            "about.job5.description":
                "Por motivos de proveedores, me cambié de empresa pero sigo en el mismo proyecto del Banco Santander, pero haciendo componentes reutilizables en StencilJS para el resto de Squads del proyecto. Acutalmente estoy en la parte de Front-End calculando tasas, créditos, leasing y avales",

            // Projects Section
            "projects.title": "Mis Proyectos",
            "projects.ecommerce.title": "Plataforma E-commerce",
            "projects.ecommerce.description":
                "Una plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de productos.",
            "projects.dashboard.title": "Dashboard Analytics",
            "projects.dashboard.description":
                "Panel de control para visualizar datos de negocio con gráficos interactivos y reportes personalizados.",
            "projects.fitness.title": "App de Fitness",
            "projects.fitness.description":
                "Aplicación móvil para seguimiento de entrenamientos, nutrición y progreso físico.",
            "projects.education.title": "Plataforma Educativa",
            "projects.education.description": "Sistema de gestión de aprendizaje con cursos, evaluaciones y certificaciones.",
            "projects.social.title": "Red Social",
            "projects.social.description":
                "Plataforma de red social con perfiles, publicaciones, mensajería y notificaciones en tiempo real.",
            "projects.weather.title": "Aplicación de Clima",
            "projects.weather.description":
                "Aplicación de pronóstico del tiempo con datos en tiempo real y visualizaciones interactivas.",
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

            // Form Validation
            "validation.nameMin": "El nombre debe tener al menos 2 caracteres",
            "validation.companyMin": "La empresa debe tener al menos 2 caracteres",
            "validation.messageMin": "El mensaje debe tener al menos 10 caracteres",

            // Footer
            "footer.rights": "Todos los derechos reservados.",

            // Theme
            "theme.toggle": "Cambiar tema",
        },
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: "es", // default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
