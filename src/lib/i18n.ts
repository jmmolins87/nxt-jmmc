



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
                "I'm a passionate web developer with experience in creating attractive and functional websites and applications.",
            "about.description2":
                "My journey in web development began X years ago, and since then I've worked on various projects that have allowed me to perfect my skills and knowledge.",
            "about.description3":
                "I specialize in frontend technologies like React, Next.js and Tailwind CSS, but I also have experience with backend and databases.",
            "about.description4":
                "When I'm not coding, I enjoy [your hobbies or interests], which helps me maintain a healthy work-life balance.",
            "about.viewExperience": "View Experience",
            "about.contactMe": "Contact Me",
            "about.experience": "Professional Experience",
            "about.seniorDev": "Senior Developer",
            "about.webDev": "Web Developer",
            "about.frontendDev": "Frontend Developer",
            "about.present": "Present",
            // Timeline About Section
            "about.job.actuality":
                "Present",
            "about.job1.title":
                "Front-end Developer at Eeveris",
            "about.job1.description":
                "Development of the Jazztel online store",
            "about.job2.title":
                "Front-end Developer at Nateevo",
            "about.job2.description":
                "At this company, I worked on various projects, including the FC Barcelona online store, the Almirall website, and projects for Mapfre",
            "about.job3.title":
                "Front-end Developer at Dimatica",
            "about.job3.description":
                "In this case, I worked on projects for companies that belonged to the company I was working for. working",
            "about.job4.title":
                "Front Developer at IBM",
            "about.job4.description":
                "Santander Bank App",
            "about.job5.title":
                "Front Developer at Accenture",
            "about.job5.description":
                "I continue developing the Banco Santander App,",

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
                "Soy un desarrollador web apasionado con experiencia en la creación de sitios web y aplicaciones atractivas y funcionales.",
            "about.description2":
                "Mi viaje en el desarrollo web comenzó hace X años, y desde entonces he trabajado en diversos proyectos que me han permitido perfeccionar mis habilidades y conocimientos.",
            "about.description3":
                "Me especializo en tecnologías frontend como React, Next.js y Tailwind CSS, pero también tengo experiencia con backend y bases de datos.",
            "about.description4":
                "Cuando no estoy codificando, disfruto de [tus hobbies o intereses], lo que me ayuda a mantener un equilibrio saludable entre el trabajo y la vida personal.",
            // Timeline About Section
            "about.job.actuality":
                "Actualidad",
            "about.job1.title":
                "Desarrollador front-end en Eeveris",
            "about.job1.description":
                "Desarrollo de la tienda online de Jazztel",
            "about.job2.title":
                "Desarrollador front-end en Nateevo",
            "about.job2.description":
                "En esta empresa, trabajé en varios proyectos, incluyendo la tienda online del FC Barcelona, ​​la web de Almirall y proyectos para Mapfre",
            "about.job3.title":
                "Desarrollador front-end en Dimatica",
            "about.job3.description":
                "En este caso, trabajé en proyectos para empresas que pertenecían a la empresa para la que trabajaba",
            "about.job4.title":
                "Desarrollador front-end en IBM",
            "about.job4.description":
                "App del Banco Santander",
            "about.job5.title":
                "Desarrollador front-end en Accenture",
            "about.job5.description":
                "Sigo desarrollando la app del Banco Santander",

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
