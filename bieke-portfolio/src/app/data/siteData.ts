
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
    video: "/https://youtu.be/HXWy4Ry9hLY?feature=shared",
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
    pdf: "/images/magazine.pdf",

    cover: "/images/noirsoir/noirsoir1920x1080.png",
    gallery: [
      "/images/noirsoir/ns1.png",
      "/images/noirsoir/ns2.png",
      "/images/noirsoir/ns3.png",
        "/images/noirsoir/ns4.png",

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
    title: "Final Show 23",
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
    technologies: ["Three.js", "React", "WebGL", "Blender", "After Effects"],
    role: "Motion Designer & Frontend Developer",
    link: "https://www.finalshow.be",
    caseStudy: `
The Final Show 23 was a three-week group project with four team members, created to promote the annual event on the Kaai campus of Erasmus.  

My main responsibilities were twofold:  
- **Motion Design**: I designed and produced the animated assets that gave the website its dynamic and engaging feel.  
- **Main 3D Page**: I built the interactive homepage featuring a full 3D building scene, modeled and implemented in Three.js and React.  

The collaboration required close coordination between design and development, ensuring a smooth user experience while showcasing the creative spirit of the event. The final result was an immersive web experience that successfully highlighted the essence of the Final Show.

    `,  
    stack: ["Three.js", "React", "WebGL"],

  },
    {
    id: "4",
    title: "Telenet squid game",
    category: "Website",

    description: 'An immersive online game inspired by the popular Squid Game series, developed to celebrate the launch of its second season.',

    cover: "/images/squidgame/squidgame1920x1080.png",
    gallery: [
      "/images/squidgame/squidgame1920x1080.png",
      "/images/squidgame/sq1.png",
    ],
    video: "/images/squidgame/TelenetSquidGame_gameplay-video.mp4",
    date: "2024-12-13",
    technologies: ["Three.js", "React", "WebGL", "Motion Detection", "JavaScript"],
    role: "Frontend Developer & Motion Designer",
    link: "https://telenetsquidgame.com/",
    caseStudy: `
To celebrate the launch of Squid Game Season 2 on December 26, we developed "The Telenet Squid Game," an innovative browser-based game playable on PC and tablet.  

Players are dropped into an arena and must navigate the iconic Red Light, Green Light challenge using webcam motion detection. Freeze when the doll looks, sprint when she doesn't — one mistake and the player is out.  

The game supports up to four players simultaneously, with a live leaderboard and exclusive prizes like a Squid Game Xmas sweater and goodie bag.  

My role focused on **motion design** and the **frontend implementation**, including integrating motion detection mechanics, building interactive 3D arenas with Three.js, and ensuring a smooth multiplayer experience. The project required tight collaboration between designers, developers, and motion graphics specialists to deliver an engaging and immersive experience.

    `,
    stack: ["Three.js", "React", "WebGL"],

  },
  {
  id: "5",
  title: "Silhouetten in Verval",
  category: "Interactive Art Installation",

description: "An experimental AI installation that visualizes the impact of excessive online consumption, transforming user silhouettes in real-time.",

  cover: "/images/decay/decay.png",
  gallery: [
    // "/images/silhouetten/silhouette1.png",
    // "/images/silhouetten/silhouette2.png",
    // "/images/silhouetten/silhouette3.png"
  ],
  video: "/images/decay/decay.mp4",
  date: "2025-05-01",
  technologies: ["MediaPipe", "StreamDiffusionTD", "TouchDesigner", "Motion Tracking", "Generative AI"],
  role: "Concept Developer & Motion Designer",
  link: null, 
  caseStudy: `
Silhouetten in Verval is a 4-6 week experimental project exploring the invisible effects of excessive online content consumption on personal and social perception.

Visitors interact with the installation using a laptop or LED screen with camera and audio. The system tracks their gaze using MediaPipe; the longer they look at the screen, the more their generated silhouette distorts. Gradually, human features disappear, and audio evolves to reflect this transformation, culminating in a reflective text.
  `,
  stack: ["MediaPipe", "StreamDiffusionTD", "TouchDesigner", "Motion Tracking"]
}

];
