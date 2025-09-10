
export const headerData = {
    logo: 'blogimg',
    navlinks: [
        {
            url: '/#about',
            title: 'About',
        },
        {
            url: '/#services',
            title: 'Services',
        },
        {
            url: '/#portfolio',
            title: 'Portfolio',
        },
        {
            url: '/#awards',
            title: 'Awards',
        },
        {
            url: '/#testimonial',
            title: 'Testimonial',
        },
        {
            url: '/#blog',
            title: 'Blog',
        },
        {
            url: '/#contact',
            title: 'Contact',
        },
    ],
};

export const awardsData = {
    mainData: {
        title: "Milestones",
        title2: "My",
        title2Span: " Education",
    },
    awards: [
        {
            title: 'Credit Contract Courses',
            date: 'February 2025 - June 2025',
            description: 'Currently enrolled under a credit contract, focusing on AI and Interactive Motion.',
        },
        
        {
            title: 'B.a Multimedia and Creative technologies',
            date: 'september 2021 - february 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        },
        {
            title: 'Publicity Graphics',
            date: 'september 2014 - june 2021',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et',
        },

    ]
};

export const contactData = {
    mainData: {
        title: "Contact",
        title2: "Let's",
        title2Span: "Talk",
        phone: "+123 456 7890",
        email: "contact@flatheme.net",
    }
};

export const footerData = {
    copyWriteText: 'Bieke Bellot, All Rights Reserved.',
};


export const servicesData = {
    mainData: {
        title: "Services",
        title2: "What I",
        title2Span: "Do",
    },
    services: [
        {
            number: '01',
            bootstrapIcon: 'bi bi-code-slash',
            title: 'Web Development',
            description: 'Building seamless web experiences with modern frameworks like React, Next.js, and Vue for the frontend, combined with powerful backend solutions for scalability and performance.',
            },
        {
            number: '02',
            bootstrapIcon: 'bi bi-brush',
            title: 'Graphic Design',
            description: 'Creating stunning visuals with Adobe Suite and Canva. From UI/UX design to motion graphics and high-quality visuals for web and social media.',
        },

        {
            number: '03',
            bootstrapIcon: 'bi bi-laptop',
            title: 'Marketing',
            description: 'Strategic marketing solutions that blend creativity with performance. From high-quality visuals to conversion-driven campaigns.',
        },
    ]
};






export const projects = [
  {
    id: "1",
    title: "Mix and Move",
        category: "Client Project",

    description:
      "A full creative package for Mix and Move, including a custom website, promotional video, logo design, and graphic assets for both digital and print use.",
    cover: "/images/mixandmove/mixandmovehero.png",
    gallery: [
      "/images/mixandmove/menu2.jpg",
      "/images/mixandmove/menu.jpg",
      "/images/mixandmove/mix&move_logo_White_background.png",
    ],
    video: "/images/squidgame/TelenetSquidGame_gameplay-video.mp4",
    date: "2025-03-01",
    technologies: ["React", "Next.js", "TailwindCSS", "Adobe After Effects", "Illustrator"],
    role: "Full-stack & Creative Designer",
    link: "https://mixandmove.be", 
    caseStudy: `
For Mix and Move, I handled the complete creative direction.  
The project included designing and developing their promotional website, creating a dynamic launch video, and producing both digital and print graphics to unify their brand identity.  

The website was built in Next.js with a clean, modern UI to match their energetic branding.  
The promotional video was edited in After Effects, featuring animated typography and bold transitions.  
Additionally, I designed their logo and social media templates to ensure brand consistency across all platforms.  

This holistic approach helped Mix and Move launch with a strong, recognizable visual identity and digital presence.
    `,
        stack: ["Three.js", "React", "WebGL"],

  },
  {
    id: "2",
    title: "Noir Soir: Rouge Clues",
    category: "bachelor project",

    description: 'I developed Noir Soir: Rouge Clues, a 1950s murder mystery game, as my final project. Players solve the murder of a mafia boss by gathering clues and interrogating suspects. ',

    cover: "images/noirsoir/noirsoir1920x1080.png",
    gallery: [
      "https://picsum.photos/600/400?random=21",
      "https://picsum.photos/600/400?random=22",
      "https://picsum.photos/600/400?random=23",
    ],
    video: "https//youtu.be/mWUtJOmzCDQ",
    date: "2024-06-01",
    technologies: ["Python", "FastAPI", "Hugging Face", "PostgreSQL"],
    role: "Backend Developer",
    link: "https://noirsoir.onrender.com/",
    caseStudy: `
Using React, Three.js, and Blender, I created a dynamic, film noir-inspired experience. The game combines intellectual challenges with an engaging story, offering an affordable, immersive alternative to costly modern games. This project reflects my passion for storytelling, game design, and innovative technology.
    `,
    stack: ["Three.js", "React", "WebGL"],

  },
  {
    id: "3",
    title: "final show 23",
    category: "Website",

    description: 'The Final Show is an annual event that takes place on the Kaai campus of Erasmus',

    cover: "images/finalshow/finalshow1920x1080.png",
    gallery: [
      "https://picsum.photos/600/400?random=21",
      "https://picsum.photos/600/400?random=22",
      "https://picsum.photos/600/400?random=23",
    ],
    video: "/images/finalshow/finalshow.mp4",
    date: "2023-06-01",
    technologies: ["Python", "FastAPI", "Hugging Face", "PostgreSQL"],
    role: "Backend Developer",
    link: "https://www.finalshow.be",
    caseStudy: `
The chatbot was designed to reduce support tickets for the client by 40%.  
I developed the backend using FastAPI, integrated NLP models from Hugging Face, and connected everything to a PostgreSQL database.  
End result: faster customer service and happier clients.
    `,
    stack: ["Three.js", "React", "WebGL"],

  },
    {
    id: "4",
    title: "Telenet squid game",
    category: "Website",

    description: 'I developed Noir Soir: Rouge Clues, a 1950s murder mystery game, as my final project. Players solve the murder of a mafia boss by gathering clues and interrogating suspects. Using React, Three.js, and Blender, I created a dynamic, film noir-inspired experience. The game combines intellectual challenges with an engaging story, offering an affordable, immersive alternative to costly modern games. This project reflects my passion for storytelling, game design, and innovative technology.',

    cover: "images/squidgame/squidgame1920x1080.png",
    gallery: [
      "https://picsum.photos/600/400?random=21",
      "https://picsum.photos/600/400?random=22",
      "https://picsum.photos/600/400?random=23",
    ],
    video: "/images/squidgame/TelenetSquidGame_gameplay-video.mp4",
    date: "2024-12-13",
    technologies: ["Python", "FastAPI", "Hugging Face", "PostgreSQL"],
    role: "Backend Developer",
    link: "https://www.finalshow.be",
    caseStudy: `
The chatbot was designed to reduce support tickets for the client by 40%.  
I developed the backend using FastAPI, integrated NLP models from Hugging Face, and connected everything to a PostgreSQL database.  
End result: faster customer service and happier clients.
    `,
    stack: ["Three.js", "React", "WebGL"],

  },
];
