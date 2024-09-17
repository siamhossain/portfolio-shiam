
import AppDevelopment from '../Static/icons/App-Development.png';
import graphic from '../Static/icons/ic_graphic.png';
import WebDevelopment from '../Static/icons/Web-Development.png';
import eDorpon from '../Static/images/logos/eDorpon.jpg';
import joomShaper from '../Static/images/logos/joomShaper.png';
import radiusTheme from '../Static/images/logos/radiusTheme.png';

import Apps from "../Static/images/Skills/Apps.png";
import Graphic from "../Static/images/Skills/Graphic-Design.png";
import Marketing from "../Static/images/Skills/Marketing.png";
import Next from "../Static/images/Skills/Next-js.png";
import reactImg from "../Static/images/Skills/React.png";
import UI from "../Static/images/Skills/UI-Design.png";

import { StaticData } from './staticData.d';

const staticData: StaticData = {

    header_section: {
        logo_letter: "S",
    },

    short_introduction: {
        name: "Hello! I'am ",
        title: "Shiam Hossain",
        sub_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    about_section: {
        section_title: "About Me",
        description: "Hello! I’m Shiam Hossain, a Web Developer with extensive experience in creating responsive and interactive user interfaces. Skilled in HTML, CSS, JavaScript, React, and various front-end technologies, I specialize in front-end development. I also have backend experience with PHP, Laravel(begginer), and API integration. Proficient in tools like Git, GitHub, Figma, and Photoshop, I am passionate about delivering high-quality web solutions.<br><br>Driven by a commitment to continuous learning and improvement, I stay updated with the latest industry trends and technologies to deliver the best possible solutions for clients and projects.",
        client: 350,
        experience: 10,
        awards: 35,
    },

    skills: {
        section_title: "My Skills",
        data: {
            categories: [
                {
                    key: "Web",
                    initial: true,
                    title: "Web",
                    items: [
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: reactImg,
                            title: "React"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "Next.JS"
                        },
                        {
                            color: "light-green",
                            progress: "90%",
                            icon: UI,
                            title: "Wordpress"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "javaScript"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "PHP"
                        },
                    ],
                },
                {
                    key: "Frontend",
                    initial: false,
                    title: "Front-end",
                    items: [
                        {
                            color: "light-blue",
                            progress: "80%",
                            icon: reactImg,
                            title: "React"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "javaScript"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "jQuery"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "Next.JS"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "HTML"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "CSS"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "SCSS"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "Tailwind"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "Bootstrap"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "Flexbox"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "Material UI"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "Ant Design"
                        },
                    ],
                },
                {
                    key: "Backend",
                    initial: false,
                    title: "Back-end",
                    items: [
                        {
                            color: "light-blue",
                            progress: "80%",
                            icon: Graphic,
                            title: "PHP"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "Laravel (Beginner)"
                        },
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Apps,
                            title: "API development and integration"
                        },
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Apps,
                            title: "MySQL"
                        },
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Apps,
                            title: "Firebase"
                        },
                    ],
                },
                {
                    key: "tools",
                    initial: false,
                    title: "tools",
                    items: [
                        {
                            color: "light-green",
                            progress: "90%",
                            icon: UI,
                            title: "Git"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: reactImg,
                            title: "Github"
                        },
                        {
                            color: "light-blue",
                            progress: "80%",
                            icon: Graphic,
                            title: "Postman"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "Figma,"
                        },
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Apps,
                            title: "Photoshop"
                        },
                    ],
                },
                {
                    key: "Others",
                    initial: false,
                    title: "Others",
                    items: [
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Apps,
                            title: "Mobile App Design"
                        },
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Marketing,
                            title: "SEO Marketing"
                        },
                    ],
                },
            ],
        }
    },

    education_section: {
        section_title: "Education",
        data: [
            {
                year: "2013 - 2017",
                degree_title: "BSc. in Computer Science and Engineering",
                institution: "City University (Bangladesh)",
                icon: null,
                color: "light-green",
            },
            {
                year: "July 2015 - October 2015",
                degree_title: "Training on Mobile Application Development",
                institution: "Basis Institute of Technology and Management",
                icon: null,
                color: "light-blue",
            },
        ],
    },

    experience_section: {
        section_title: "Experience",
        sub_title: "",
        data: [
            {
                year: "Oct 2022 - Present",
                title: "RadiusTheme",
                designation: "Frontend Developer / Wordpress Developer",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used web designs.",
                logo: radiusTheme,
            },
            {
                year: "Jan 2012 - Jun 2022",
                title: "eDorpon",
                designation: "Frontend Developer",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text",
                logo: eDorpon,
            },
            {
                year: "Jun 2019 - Sep 2019",
                title: "JoomShaper",
                designation: "Software Engineer - Frontend (Intern)",
                description: "Lorem ipsum, or lipsum as it is sometimes known",
                logo: joomShaper,
            },
        ],
    },

    service_section: {
        section_title: "My Services",
        sub_title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat inventore, non. A adipisci, assumenda facilis minima omnis quisquam totam.",
        data: [
            {
                icon: graphic,
                title: "Graphic Design",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error fugit molestiae mollitia natus, optio quis reprehenderit",
                button: {
                    title: "Learn More",
                    href: "http://google.com",
                },
            },
            {
                icon: AppDevelopment,
                title: "Web Design",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error fugit molestiae mollitia natus, optio quis reprehenderit",
                button: {
                    title: "Learn More",
                    href: "http://google.com",
                },
            },
            {
                icon: WebDevelopment,
                title: "App Development",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error fugit molestiae mollitia natus, optio quis reprehenderit",
                button: {
                    title: "Learn More",
                    href: "http://google.com",
                },
            },
            {
                icon: WebDevelopment,
                title: "Wev Development",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error fugit molestiae mollitia natus, optio quis reprehenderit",
                button: {
                    title: "Learn More",
                    href: "http://google.com",
                },
            },
        ]
    },

    portfolio_section: {
        section_title: "My Portfolio",
        data: {
            categories: [
                {
                    key: "web",
                    initial: true,
                    title: "Web",
                    items: [
                        {
                            name: "Insureti",
                            description: "Insureti is a comprehensive, responsive WordPress theme developed for the insurance industry.",
                            githubLink: "https://github.com/siamhossain",
                            portfolioLink: "https://www.radiustheme.com/demo/wordpress/themes/insureti",
                            technologies: [
                                {
                                    name: "WordPress",
                                },
                                {
                                    name: "PHP",
                                },
                                {
                                    name: "JavaScript",
                                },
                                {
                                    name: "HTML",
                                },
                                {
                                    name: "CSS",
                                },
                                {
                                    name: "SCSS",
                                },
                            ]
                        },
                        {
                            name: "Portfolio",
                            description: "React Portfolio is a personal website and collection of records that reflect your accomplishments,skills and experiences.",
                            githubLink: "https://github.com/siamhossain/portfolio-react",
                            portfolioLink: "https://portfolio-react-black.vercel.app",
                            technologies: [
                                {
                                    name: "React",
                                },
                                {
                                    name: "Typescript",
                                },
                                {
                                    name: "JSX",
                                },
                                {
                                    name: "React-Bootstrap",
                                },
                                {
                                    name: "SCSS",
                                },
                            ]
                        },
                        {
                            name: "React E-Commerce",
                            description: "React e-commerce website with the ability to add products to the cart, view products and detail information for each product.",
                            githubLink: "https://github.com/siamhossain/react-e-commerce",
                            portfolioLink: "https://siamhossain.github.io/react-e-commerce",
                            technologies: [
                                {
                                    name: "React",
                                },
                                {
                                    name: "javaScript",
                                },
                                {
                                    name: "Context-API",
                                },
                                {
                                    name: "JSX",
                                },
                                {
                                    name: "CSS",
                                },
                            ]
                        },
                    ],
                },
                {
                    key: "templates",
                    initial: false,
                    title: "Templates",
                    items: [
                        {
                            name: "PetsList",
                            description: "Petslist is an outstanding pet listing theme template created for offering pet-related services and pet-related advertisements.",
                            githubLink: "https://github.com/siamhossain/petslist",
                            portfolioLink: "https://siamhossain.github.io/petslist",
                            technologies: [
                                {
                                    name: "JavaScript",
                                },
                                {
                                    name: "jQuery",
                                },
                                {
                                    name: "Bootstrap",
                                },
                                {
                                    name: "SCSS",
                                },
                            ]
                        },
                        {
                            name: "Indigo Template",
                            description: "Indigo template for all kinds of businesses, corporate firms, and creative agencies. (Associated with JoomShaper)",
                            githubLink: "https://github.com/siamhossain/indigo-template",
                            portfolioLink: "https://siamhossain.github.io/indigo-template",
                            technologies: [
                                {
                                    name: "HTML",
                                },
                                {
                                    name: "CSS",
                                },
                                {
                                    name: "JavaScript",
                                },
                                {
                                    name: "jQuery",
                                },
                            ]
                        },
                        {
                            name: "quiklearn",
                            description: "Quiklearn is a Education and learning platform. It is a education institute theme template for online learning websites. ",
                            githubLink: "https://github.com/siamhossain/quiklearn",
                            portfolioLink: "https://siamhossain.github.io/quiklearn",
                            technologies: [
                                {
                                    name: "HTML",
                                },
                                {
                                    name: "CSS",
                                },
                                {
                                    name: "SCSS",
                                },
                                {
                                    name: "JavaScript",
                                },
                            ]
                        },
                        {
                            name: "Docfi",
                            description: "Documentation and Knowledge Base theme template designed to streamline the process of organizing documentation.",
                            githubLink: "https://github.com/siamhossain/docfi",
                            portfolioLink: "https://siamhossain.github.io/docfi/",
                            technologies: [
                                {
                                    name: "HTML",
                                },
                                {
                                    name: "CSS",
                                },
                                {
                                    name: "SCSS",
                                },
                                {
                                    name: "JavaScript",
                                },
                            ]
                        },
                        {
                            name: "Obitore",
                            description: "Obitore is a fresh and clean funeral home and funeral listing theme template.",
                            githubLink: "https://github.com/siamhossain/memoir",
                            portfolioLink: "https://siamhossain.github.io/memoir",
                            technologies: [
                                {
                                    name: "HTML",
                                },
                                {
                                    name: "CSS",
                                },
                                {
                                    name: "SCSS",
                                },
                                {
                                    name: "JavaScript",
                                },
                            ]
                        },
                        {
                            name: "Docfind",
                            description: "Obitore is a doctor listing and details theme template.",
                            githubLink: "https://github.com/siamhossain/docfind",
                            portfolioLink: "https://siamhossain.github.io/docfind",
                            technologies: [
                                {
                                    name: "HTML",
                                },
                                {
                                    name: "CSS",
                                },
                                {
                                    name: "SCSS",
                                },
                                {
                                    name: "JavaScript",
                                },
                            ]
                        },
                    ],
                },
                {
                    key: "javascript",
                    initial: false,
                    title: "JavaScript",
                    items: [
                        {
                            name: "Todo List",
                            description: "Simple javaScript Todo List",
                            githubLink: "https://github.com/siamhossain/js-todo-list",
                            portfolioLink: "https://siamhossain.github.io/js-todo-list/",
                            technologies: [
                                {
                                    name: "JavaScript",
                                },
                                {
                                    name: "HTML",
                                },
                                {
                                    name: "CSS",
                                },
                            ]
                        },
                        {
                            name: "Tic Tac Toe",
                            description: "Tic Tac Toe is a classic two-player game",
                            githubLink: "https://github.com/siamhossain/tic-tac-toe",
                            portfolioLink: "https://siamhossain.github.io/tic-tac-toe/",
                            technologies: [
                                {
                                    name: "JavaScript",
                                },
                                {
                                    name: "HTML",
                                },
                                {
                                    name: "CSS",
                                },
                            ]
                        },
                        {
                            name: "Password Generator",
                            description: "Strong and unique password generator.",
                            githubLink: "https://github.com/siamhossain/password-generator/",
                            portfolioLink: "https://siamhossain.github.io/password-generator",
                            technologies: [
                                {
                                    name: "JavaScript",
                                },
                                {
                                    name: "HTML",
                                },
                                {
                                    name: "CSS",
                                },
                            ]
                        },
                        {
                            name: "Piano",
                            description: "Basic Notes piano play",
                            githubLink: "https://github.com/siamhossain/js-piano/",
                            portfolioLink: "https://siamhossain.github.io/js-piano/",
                            technologies: [
                                {
                                    name: "JavaScript",
                                },
                                {
                                    name: "HTML",
                                },
                                {
                                    name: "CSS",
                                },
                            ]
                        },
                        {
                            name: "Quiz App",
                            description: "Basic vanilla javaScript quiz app",
                            githubLink: "https://github.com/siamhossain/js-quiz-app/",
                            portfolioLink: "https://siamhossain.github.io/js-quiz-app/",
                            technologies: [
                                {
                                    name: "JavaScript",
                                },
                                {
                                    name: "HTML",
                                },
                                {
                                    name: "CSS",
                                },
                            ]
                        },
                    ],
                },
            ],
        }
    },

    testimonial_section: {
        section_title: "Testimonial",
        data: [
            {
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam aspernatur at aut consectetur doloribus eius eos, eveniet facilis impedit neque nostrum                                 perferendis quam quo reiciendis, saepe sed vel veritatis! Dolor illum quas recusandae totam voluptatibus?",
                name: "Jackson Roy",
                designation: "Web designer",
            },
        ]
    },

    contact_section: {
        section_title: "Contact with me",
        phone: [
            "(+88) 01521205615",
            "(+88) 01671772792",
        ],
        email: [
            "shiamhossain1995@gmail.com",
            "siam.hossain1994@gmail.com",
        ],
        location: [
            "Dhaka, Bangladesh",
        ],
    },

    blog_section: {
        section_title: "My Blogs",
        sub_title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
        data: [
            {
                image: "path/to/image",
                date: "August 30, 2022",
                title: "Market Place UI/UX"
            },
            {
                image: "path/to/image",
                date: "September 30, 2021",
                title: "Branding Supharman"
            },
            {
                image: "path/to/image",
                date: "October 30, 2021",
                title: "The Day for Happines"
            },
        ]
    },

    footer_section: {
        topCard: {
            title: "Let's Make Something Together",
            subtitle: "Start a Conversation",
            hireButton: {
                title: "Hire Me Now",
                href: "http://google.com",
            },
        },
        logo_letter: "S",
        description: "Lorem ipsum dolor sit amet, ing elit, sed do eiusmod tempor incididunt ut sed do labore et dolore magna aliqua.eiusmod",
        service_links: [
            {
                href: "",
                title: "Strategy",
            },
            {
                href: "",
                title: "Design",
            },
            {
                href: "",
                title: "Content",
            },
            {
                href: "",
                title: "Technology",
            },
        ],
        about_links: [
            {
                href: "",
                title: "Case Studies",
            },
            {
                href: "",
                title: "Career",
            },
            {
                href: "",
                title: "Contact Us",
            },
            {
                href: "",
                title: "Privacy Policy",
            },
        ],
        contact_info: {
            phone: "+7 928-101-23-45",
            email: "olux.moore@gmail.com",
            address: "374 William S Canning Blvd",
        },
        showSocialIcons: true,
    },

    social_links: {
        facebook: {
            title: "",
            href: "",
            icon: null,
        },
        twitter: {
            title: "",
            href: "",
            icon: null,
        },
    },
};

export { staticData };
