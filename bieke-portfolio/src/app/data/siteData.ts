
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
caseStudy: [
  {
    title: "About the Project",
    description: `For Mix and Move, I led the entire creative direction.  
I designed and developed the promotional website, created a dynamic launch video, and produced both digital and print graphics.`
  },
  {
    title: "Website & Branding",
    description: `Built in Next.js with a modern, clean UI.  
Consistent visual style and branding.  
Designed the logo and social media templates.`
  },
  {
    title: "Video & Animation",
    description: `Edited promotional video in After Effects.  
Used animation in typography and transitions.  
Integrated into the website for the launch.`
  },
  {
    title: "Result",
    description: `This approach delivered a strong, recognizable visual identity and digital presence.`
  }
],


        stack: ["Website", "Graphic Design", "Marketing"],

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
    technologies: ["Three.js", "Blender", "React", "Adobe Creative Suit"],
    role: "Backend Developer",
    link: "https://noirsoir.onrender.com/",
caseStudy: [
  {
    title: "About the Project",
    description: `Noir Soir: Rouge Clues was developed as my bachelor graduation project, a 1950s-inspired murder mystery game.  
Players investigate the murder of a mafia boss by gathering clues and interrogating suspects.`
  },
  {
    title: "Design & Development",
    description: `Built with React, Three.js, and Blender to create a cinematic film-noir atmosphere.  
Carefully designed environments and characters immerse players in the story.  
Combined narrative depth with interactive 3D mechanics.`
  },
  {
    title: "Storytelling",
    description: `The focus was on strong narrative structure, intellectual challenges, and replayability.  
Players experience branching dialogues and puzzle-solving that drive the mystery forward.`
  },
  {
    title: "Result",
    description: `The project showcased my passion for storytelling, game design, and interactive technology, offering an engaging, affordable alternative to mainstream modern games.`
  }
],

    stack: ["Fullstack", "React", "Blender", "Adobe"],

  },
  {
    id: "3",
    title: "Final Show 23",
    category: "Website",

    description: 'The Final Show is an annual event that takes place on the Kaai campus of Erasmus',

    cover: "/images/finalshow/finalshow1920x1080.png",
    gallery: [
              "/images/finalshow/finalshow.png",

      "/images/finalshow/fs1.png",
        "/images/finalshow/fs2.png",
        "/images/finalshow/fs3.png",
    ],
    video: "/images/finalshow/finalshow.mp4",
    date: "2023-06-01",
    technologies: ["Three.js", "React", "WebGL", "Blender", "After Effects"],
    role: "Motion Designer & Frontend Developer",
    link: "https://www.finalshow.be",
caseStudy: [
  {
    title: "About the Project",
    description: `Final Show 23 was a three-week group project with four team members, created to promote the annual event on the Kaai campus of Erasmus.`
  },
  {
    title: "Motion Design",
    description: `Designed and produced the animated assets that gave the website its dynamic and engaging feel.  
Focused on timing, animation flow, and visual impact to strengthen the event’s identity.`
  },
  {
    title: "3D Interactive Homepage",
    description: `Built the main landing page featuring a fully interactive 3D building scene.  
Modeled and implemented in Three.js and React to ensure seamless interaction.`
  },
  {
    title: "Result",
    description: `The final website delivered an immersive experience, reflecting the creative spirit of the event and successfully engaging the audience online.`
  }
],

    stack: ["Three.js", "React", "Blender"],

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
caseStudy: [
  {
    title: "About the Project",
    description: `To celebrate the launch of Squid Game Season 2, we developed “The Telenet Squid Game,” a browser-based multiplayer experience playable on PC and tablet.`
  },
  {
    title: "Gameplay & Interaction",
    description: `Players joined the iconic Red Light, Green Light challenge.  
Motion detection via webcam forced players to freeze when the doll looked and sprint when it didn’t.  
One mistake meant instant elimination.`
  },
  {
    title: "My Role",
    description: `Worked on motion design and frontend development.  
Integrated motion detection, created interactive 3D arenas in Three.js, and ensured smooth multiplayer performance.`
  },
  {
    title: "Result",
    description: `The project delivered a unique online experience, blending motion detection, multiplayer gameplay, and immersive design, with live leaderboards and exclusive rewards.`
  }
],

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
caseStudy: [
  {
    title: "About the Project",
    description: `Silhouetten in Verval is an experimental 4–6 week installation exploring the invisible effects of excessive online content consumption on human perception.`
  },
  {
    title: "Concept & Interaction",
    description: `Visitors engage with the installation through a laptop or LED screen.  
MediaPipe tracks their gaze, while audio and visuals evolve in response to their attention span.`
  },
  {
    title: "Generative Transformation",
    description: `The longer participants focus on the screen, the more their silhouettes distort.  
Gradually, recognizable human features fade, while sound design shifts into abstract reflections.`
  },
  {
    title: "Result",
    description: `The installation offered a critical, interactive reflection on digital overstimulation, merging motion tracking, generative AI, and artistic expression.`
  }
],

  stack: ["MediaPipe", "StreamDiffusionTD", "TouchDesigner", "Motion Tracking"]
}

];
