// Data for the portfolio
const portfolioData = {
    name: "Koushik Mukherjee",
    title: "Software Engineer",
    summary: "I'm a final year Computer Science student passionate about building scalable, high-impact software. I have a strong command of Data Structures, Algorithms, and System Design, and am proficient in languages like Python, Go, and Java, along with frameworks like React and Spring Boot. I'm always looking for ways to contribute to the open source community and apply my skills to solve real world challenging problems.",
    contact: {
        email: "koushik.20.01.2004@gmail.com",
        address: "Durgapur, West Bengal",
        github: "https://github.com/Koushik-Mukherjee",
        linkedin: "https://www.linkedin.com/in/koushik-mukherjee-760946275",
    },
    education: {
        degree: "Bachelor of Technology in Computer Science and Design",
        university: "Dr. B. C. Roy Engineering College",
        location: "Durgapur, West Bengal",
        period: "08/2022-Present",
    },
    skills: {
        "Core Concepts": ["Data Structures", "Algorithms", "Software Design Patterns", "System Design", "Scalability", "Distributed Systems", "Automation"],
        "Front-End": ["HTML5", "CSS3", "React.js", "Next.js", "Angular", "Tailwind CSS", "Responsive Design"],
        "Back-End": ["Node.js", "Express.js", "Spring Boot"],
        "Databases": ["PostgreSQL", "MongoDB"],
        "Authentication": ["JWT", "OAuth2"],
        "Cloud Platforms": ["AWS", "Azure", "Google Cloud"],
        "DevOps & CI/CD": ["Docker", "Git", "GitHub", "CI/CD", "Vercel", "Netlify"],
        "Developer Tools & Testing": ["Linux", "Unix", "Kafka", "Maven", "Jest", "Cypress"],
        "Design & SEO": ["Figma (Basic)", "SEO Basics"],
        "Programming Languages": ["C/C++", "Python", "JavaScript (ES6+)", "Java", "Go", "PHP", "TypeScript"],
        "Paradigms & Methodologies": ["Object-Oriented Programming (OOP)", "REST API Design", "Agile", "Scrum"],
        "Soft Skills": ["Problem-Solving", "Cross-functional Collaboration", "Team Communication", "Time Management", "Client Communication"],
    },
    experience: [
        {
            title: "Frontend Developer Intern",
            company: "Infosys Springboard",
            location: "Remote",
            period: "10/2024-12/2024",
            description: [
                "Engineered responsive user interfaces with dynamic role-based access control and secure authentication.",
                "Integrated RESTful APIs and advanced search, filter, and sorting features to enhance UX by 40%.",
                "Collaborated in an agile team, delivering milestone-driven modules with focus on performance and security.",
            ],
            techStack: "Angular, Node.js, HTML5, CSS3, TypeScript, JWT, MongoDB, Git, GitHub, Netlify.",
        },
        {
            title: "Software Development Virtual Intern",
            company: "Deloitte",
            location: "Remote",
            period: "06/2025-07/2025",
            description: [
                "Designed a telemetry dashboard to monitor 36+ machines, improving operational oversight across multiple factory sites.",
                "Applied data structures and algorithms to simulate real-world development scenarios, increasing problem-solving efficiency by 40%.",
                "Delivered client-focused design proposals with clear technical documentation, reducing onboarding time for new features by 15%.",
            ],
            techStack: "Python, JavaScript, Data Visualization.",
        },
        {
            title: "Software Engineering Virtual Intern",
            company: "JPMorgan Chase & Co.",
            location: "Remote",
            period: "06/2025-07/2025",
            description: [
                "Simulated a financial transaction backend using Spring Boot and Kafka, handling 10,000+ transactions per minute.",
                "Developed secure transaction processing logic, reducing fraud detection time by 40%, and created real-time data visualizations.",
            ],
            techStack: "Java, Spring Boot, REST APIs, Kafka, Maven, SQL.",
        },
        {
            title: "Web Development Intern",
            company: "Pinnacle Lab",
            location: "Remote",
            period: "07/2025-08/2025",
            description: [
                "Developed a personal portfolio website using HTML, CSS, and JavaScript to showcase projects and skills.",
                "Built a task management web application enabling users to create, update, and manage to-do lists with persistent storage.",
                "Designed an advanced calculator suite with 18+ functionalities including Scientific, GST, BMI, Currency, Investment, and Loan calculators, along with converters and calculation history.",
            ],
            techStack: "HTML, CSS, JavaScript, Bootstrap.",
},

    ],
    projects: [
        {
            name: "Buddy Board",
            period: "10/2024-12/2024",
            description: [
                "Developed a full-stack web app for study cards, enabling 50+ users to create, share and organize decks.",
                "Enabled real-time interaction features, increasing daily active sessions by 45%.",
                "Improved page load speed by 30% for better user retention.",
            ],
            techStack: "Angular, Node.js, HTML5, CSS3, TypeScript, JWT, MongoDB, Git, GitHub, Netlify, REST API, Agile.",
        },
        {
            name: "Translator",
            period: "01/2025-02/2025",
            description: [
                "Built a web-based translator with a Python backend and a responsive frontend.",
                "Implemented seamless text input/output handling with real-time translation responses.",
                "Optimized API integration and structured codebase for scalability and easy deployment.",
            ],
            techStack: "Python, FastAPI, HTML5, CSS3, JavaScript, REST API, Git, GitHub.",
        },
        {
            name: "Advanced Calculator",
            period: "03/2025-4/2025",
            description: [
                "Developed a multi-functional calculator web app supporting basic, scientific, and advanced calculations.",
                "Integrated specialized tools including Age, BMI, Date, Discount, Loan, GST, and Investment calculators.",
                "Implemented unit converters for length, mass, speed, volume, temperature, currency, and numeral systems.",
                "Designed an intuitive UI with history tracking for efficient user experience and quick navigation.",
            ],
            techStack: "JavaScript, HTML5, CSS3, Bootstrap, Git, GitHub.",
        },
        {
            name: "Online Ecommerce Website",
            period: "05/2025-07/2025",
            description: [
                "Built a robust e-commerce platform for 100+ products with secure cart, checkout, and order tracking.",
                "Integrated advanced search and dynamic filters, enhancing product discovery by 50%.",
                "Implemented secure payment flows with 100% success rate during test phases.",
            ],
            techStack: "HTML5, CSS3, JavaScript (ES6+), React.js, Node.js with Express.js, MongoDB, Git + GitHub, AWS, Vercel.",
        },
    ],
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5603AQHhUp3TCM90pQ/profile-displayphoto-scale_400_400/B56ZhNlKZ1G4Ag-/0/1753648246108?e=1756339200&v=beta"
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });

    // Populate Skills Section
    const skillsGrid = document.getElementById('skills-grid');
    Object.entries(portfolioData.skills).forEach(([category, skills]) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'card sr-item sr-slide-up';
        skillCard.innerHTML = `
            <h3 class="text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4 flex items-center justify-center">
                <i data-lucide="code" class="w-5 h-5 sm:w-6 sm:h-6 mr-2"></i> ${category}
            </h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm sm:text-base space-y-1">
                ${skills.map(skill => `
                    <li class="flex items-center">
                        <i data-lucide="star" class="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 mr-2 flex-shrink-0"></i>
                        ${skill}
                    </li>
                `).join('')}
            </ul>
        `;
        skillsGrid.appendChild(skillCard);
    });

    // Populate Experience Section
    const experienceList = document.getElementById('experience-list');
    portfolioData.experience.forEach((exp) => {
        const experienceCard = document.createElement('div');
        experienceCard.className = 'card sr-item sr-slide-up';
        experienceCard.innerHTML = `
            <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">${exp.title}</h3>
            <p class="text-blue-600 text-lg mb-1">${exp.company} - ${exp.location}</p>
            <p class="text-gray-500 dark:text-gray-400 text-md mb-4">${exp.period}</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm sm:text-base space-y-2">
                ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
            <p class="text-gray-600 dark:text-gray-400 text-sm mt-4 font-medium">
                <span class="font-semibold">Tech Stack:</span> ${exp.techStack}
            </p>
        `;
        experienceList.appendChild(experienceCard);
    });

    // Populate Projects Section
    const projectsList = document.getElementById('projects-list');
    portfolioData.projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'card sr-item sr-slide-up';
        projectCard.innerHTML = `
            <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">${project.name}</h3>
            <p class="text-gray-500 dark:text-gray-400 text-md mb-4">${project.period}</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm sm:text-base space-y-2">
                ${project.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
            <p class="text-gray-600 dark:text-gray-400 text-sm mt-4 font-medium">
                <span class="font-semibold">Tech Stack:</span> ${project.techStack}
            </p>
        `;
        projectsList.appendChild(projectCard);
    });

    // Re-initialize Lucide icons after dynamic content is added
    lucide.createIcons();

    // Initialize ScrollReveal
    ScrollReveal().reveal('.sr-item', {
        duration: 1000,
        delay: 200,
        distance: '50px',
        easing: 'cubic-bezier(.17,.67,.83,.67)',
        origin: 'bottom',
        reset: false
    });

    // Hero section animations
    ScrollReveal().reveal('.sr-hero-left', {
        origin: 'left',
        distance: '100px',
        interval: 100,
        easing: 'ease-out',
        duration: 1200
    });

    ScrollReveal().reveal('.sr-hero-right', {
        origin: 'right',
        distance: '100px',
        easing: 'ease-out',
        delay: 500,
        duration: 1200
    });

    // Section headings
    ScrollReveal().reveal('.section-heading', {
        origin: 'top',
        distance: '20px',
        opacity: 0,
        duration: 900,
        delay: 150,
        easing: 'ease-out'
    });

    // Cards and content blocks
    ScrollReveal().reveal('.sr-slide-up', {
        origin: 'bottom',
        distance: '40px',
        duration: 1000,
        delay: 100,
        easing: 'ease-out',
        interval: 80
    });

    // Fade-in elements
    ScrollReveal().reveal('.sr-fade-in', {
        opacity: 0,
        distance: '0px',
        duration: 1200,
        delay: 100,
        easing: 'ease-in'
    });

    // Contact form elements with staggered animation
    ScrollReveal().reveal('#contactForm > *', {
        opacity: 0,
        distance: '20px',
        duration: 800,
        delay: (el, i) => 100 + i * 100,
        easing: 'ease-out',
        origin: 'bottom',
        interval: 100
    });

    // Active section highlighting in navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    const sunIconMobile = themeToggleMobile.querySelector('.sun-icon');
    const moonIconMobile = themeToggleMobile.querySelector('.moon-icon');

    // Function to set theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
            sunIconMobile.classList.add('hidden');
            moonIconMobile.classList.remove('hidden');
        } else {
            document.body.classList.remove('dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
            sunIconMobile.classList.remove('hidden');
            moonIconMobile.classList.add('hidden');
        }
        localStorage.setItem('theme', theme);
    };

    // Check for saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // A single function to handle the theme toggle logic
    const toggleTheme = () => {
        const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        lucide.createIcons(); // Re-render icons after theme change
    };

    // Add the same event listener to both desktop and mobile buttons
    themeToggle.addEventListener('click', toggleTheme);
    themeToggleMobile.addEventListener('click', toggleTheme);


    // Contact form submission with EmailJS
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        
        // Hide any previous messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending... <i data-lucide="loader" class="w-5 h-5 ml-2 animate-spin"></i>';
        lucide.createIcons();
        
        try {
            // --- CORRECTED CODE ---
            // Prepare the email parameters with the correct names
            const emailParams = {
                user_name: formData.get('name'),      // Changed from 'from_name'
                user_email: formData.get('email'),    // Changed from 'from_email'
                subject: formData.get('subject'),
                message: formData.get('message'),
                reply_to: formData.get('email')
            };
            // --- END OF CORRECTION ---
            
            // Send the email using EmailJS
            await emailjs.send(
                'service_emzfrqy', // Your EmailJS Service ID
                'template_ctccr2x', // Your EmailJS Template ID
                emailParams
            );
            
            // Show success message
            successMessage.style.display = 'block';
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
            
        } catch (error) {
            console.error('Error sending email:', error);
            errorMessage.style.display = 'block';
            
            // Hide error message after 5 seconds
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 5000);
            
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message <i data-lucide="send" class="w-5 h-5 ml-2"></i>';
            lucide.createIcons();
        }
    });
});