import { IconType } from 'react-icons';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1 } from 'react-icons/di';
import { FaLinkedin, FaGithub, FaEnvelope, FaReact, FaNodeJs } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { SiBootstrap, SiExpress, SiGnubash, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiMicrosoftword, SiMongodb, SiMui, SiNextdotjs, SiPostman, SiReacthookform, SiReactquery, SiRedux, SiSwagger, SiTailwindcss, SiTypescript, SiWordpress } from 'react-icons/si';

type Navlink = {
    label: string;
    path: string;
}

export const navlinks: Navlink[] = [
    {
        "label": "Home",
        "path": "#home"
    },
    {
        "label": "Skills",
        "path": "#skills"
    },
    {
        "label": "Projects",
        "path": "#projects"
    },
    {
        "label": "About",
        "path": "#about"
    },
    {
        "label": "Hire Me",
        "path": "#hire-me"
    },
    // {
    //     "label": "Contact Me",
    //     "path": "#contact-me"
    // }
]

type NavIcons = {
    name: string;
    icon: IconType; // This should be IconType if using react-icons
    link: string;
};

export const navIcons: NavIcons[] = [
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        link: "https://linkedin.com/in/harsh-singh-a1598623a"
    },
    {
        name: "GitHub",
        icon: FaGithub,
        link: "https://github.com/Harshsingh9324"
    },
    {
        name: "Gmail",
        icon: FaEnvelope,
        link: "mailto:singhharsh2042002@gmail.com"
    }
];

type TechCategory = {
    name: string;
    icon: IconType;
};

type TechStack = {
    Frontend: TechCategory[];
    Backend: TechCategory[];
    Libraries: TechCategory[];
    Tools: TechCategory[];
};

export const techStack: TechStack = {
    Frontend: [
        { name: "React JS", icon: FaReact },
        { name: "Next JS", icon: SiNextdotjs },
        { name: "JavaScript", icon: DiJavascript1 },
        { name: "TypeScript", icon: SiTypescript },
        { name: "HTML", icon: AiFillHtml5 },
        { name: "CSS", icon: DiCss3 }
    ],
    Backend: [
        { name: "Node JS", icon: FaNodeJs },
        { name: "Express JS", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: GrMysql },
    ],
    Libraries: [
        { name: "RTK", icon: SiRedux },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "React Hook Form", icon: SiReacthookform },
        { name: "MUI", icon: SiMui },
        { name: "Tanstack", icon: SiReactquery },
        { name: "Bootstrap", icon: SiBootstrap },
    ],
    Tools: [
        { name: "Github", icon: AiFillGithub },
        { name: "Git Bash", icon: SiGnubash },
        { name: "Postman", icon: SiPostman },
        { name: "Swagger", icon: SiSwagger },
        { name: "Wordpress", icon: SiWordpress },
        //   { name: "MS PowerPoint", icon: SiMicrosoftpowerpoint },
        //   { name: "MS Excel", icon: SiMicrosoftexcel },
        //   { name: "MS Word", icon: SiMicrosoftword }
    ]
};


//https://kishanjaiswar.github.io/KJ-s-Food/project/index.html:C:\Users\KISHAN\Pictures\Screenshots\kjsfood.png
//https://kishanjaiswar.github.io/eco/:C:\Users\KISHAN\Pictures\Screenshots\ecogas.png
//https://kishanjaiswar.github.io/Hit-the-Bug/Hit%20the%20bug/hitme.html:C:\Users\KISHAN\Pictures\Screenshots\hitthebug.png

//kjsfood: C:\Users\KISHAN\Pictures\Screenshots\kjsfood.png
//rednews: C:\Users\KISHAN\Pictures\Screenshots\rednews.png
//ecogas: C:\Users\KISHAN\Pictures\Screenshots\ecogas.png
//crud: C:\Users\KISHAN\Pictures\Screenshots\crud.png
//hit the bug: C:\Users\KISHAN\Pictures\Screenshots\hitthebug.png 

type Project = {
    name: string;
    image: string;
    technologies: string[],
    url: string,
    description: string
}

export const projects: Project[] = [
    {
        name: "KJs food",
        image: "/images/kjsfood.png",
        technologies: ['javascript', 'html', 'css'],
        url: "https://kishanjaiswar.github.io/KJ-s-Food/project/index.html",
        description: 'It typically includes features such as a front-page, menu-page with price and search bar, the contact page is made with the help of google sheet, and there is a location of the restaurant. And Database is yet to be made'
    },
    {
        name: "Rednews",
        image: "/images/rednews.png",
        technologies: ['react js', 'javascript', 'bootstrap', 'html', 'css'],
        url: "",
        description: 'It typically includes features such as a Reuseable components, and uses an API to fetch news of multiple types and displays them.'
    },
    {
        name: "Ecogas",
        image: "/images/ecogas.png",
        technologies: ['react js', 'javascript', 'react hook form', 'react slick', 'html', 'css'],
        url: "https://kishanjaiswar.github.io/eco",
        description: 'EcoGas is a website for a company offering plumbing, electrical, CCTV installations, and more. Built with React JS, Node JS, and Express JS, and styled with Bootstrap, HTML, and CSS for a seamless user experience.'
    },
    {
        name: "Crud",
        image: "/images/crud.png",
        technologies: ['react js', 'javascript', 'node js', 'express js', 'bootstarp', 'html', 'css'],
        url: "",
        description: 'CRUD Option is a web application for managing data using React JS for the frontend, JavaScript for interactive features, and Node JS with Express JS for backend operations. Styled with Bootstrap, HTML, and CSS for a responsive and intuitive interface.'
    },
    {
        name: "Hit the bug",
        image: "/images/hitthebug.png",
        technologies: ['javascript', 'html', 'css'],
        url: "https://kishanjaiswar.github.io/Hit-the-Bug/Hit%20the%20bug/hitme.html",
        description: 'It is a game developed as a mini project on html css and javascript. it typically runs for one minute and when the bug appears on the screen you have to hit it and on hit the score increases.'
    }
];

type ProfessionalStack = {
    [key: string]: {
        name: string,
        description: string
    }
}

export const aboutData: ProfessionalStack = {
    frontendDevelopment: {
        name: "Frontend Development",
        description: "Proficient in React JS, Next JS, and JavaScript for creating dynamic and engaging user interfaces."
    },
    backendDevelopment: {
        name: "Backend Development",
        description: "Skilled in Node JS and Express JS to build robust server-side solutions."
    },
    styling: {
        name: "Styling",
        description: "Experienced in using Bootstrap, HTML, and CSS to craft visually appealing and responsive designs."
    },
    librariesAndTools: {
        name: "Libraries and Tools",
        description: "Knowledgeable in RTK, Tailwind CSS, React Hook Form, and other tools to enhance application functionality and performance."
    }
}

type HireMe = {
    label: string,
    value: string
}

export const hireMeData: HireMe[] = [
    {
        label: "Responsive Design",
        value: "Crafting user-friendly, responsive websites that perform well across all devices."
    },
    {
        label: "Dynamic Web Applications",
        value: "CDeveloping powerful and efficient web applications with a seamless user experience."
    },
    {
        label: "Team Collaboration",
        value: "Working closely with cross-functional teams to ensure the project aligns with business objectives and delivers value to users."
    },
]