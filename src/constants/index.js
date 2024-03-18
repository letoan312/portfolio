import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    kbs24,
    jobit,
    tripguide,
    threejs,
    upyouth,
    junctionvn,
    web3space,
    myself,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const myselfinfo = [
    {
      image: myself,
    }
  ]
  
  const services = [
    {
      title: "Graphic Designer",
      icon: web,
    },
    {
      title: "3D Designer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Blender",
      icon: docker,
    },
    {
      name: "Adobe Photoshop",
      icon: typescript,
    },
    {
      name: "Adobe Illustrator",
      icon: redux,
    },
    {
      name: "Adobe Premiere Pro",
      icon: nodejs,
    },
    {
      name: "Adobe After Effects",
      icon: mongodb,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Head of Design Department",
      company_name: "Studying Abroad for Gifted Students",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Sep 2018 -  Aug 2020",
      points: [
        "Designed the official uniform of SAGS which is proudly worn by SAGSers today.",
        "Lead a team of 5 to market the club's brand and attract more students.",
        "Organized U-Talk 2020, a debating contest with over 40 million VND worth of prize.",
        "Participated in design reviews and provided constructive feedback to other designers.",
      ],
    },
    {
      title: "Co-Founder / Head of Design Department",
      company_name: "All Blue Project",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - Mar 2022",
      points: [
        "Sold 319 sets of environmental goods and raised over 15 million VND.",
        "Organized and monitored an online webinar to educate over 100 participants about water pollution.",
        "Organized a charity event to educate 150 students about the danger of intoxicated effluents to marine life.",
      ],
    },
    {
      title: "Member of Communications Department",
      company_name: "Tommorow Entrepreneurs Club (TEC FTU)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Oct 2022 - Nov 2023",
      points: [
        "Developed and moderated 06 websites owned by TEC FTU.",
        "Moderated TEC FTU's social media channels, which held over 300,000 followers and 250,000 likes.",
        "Participated in branding Kawai Business Startup, a nationwide-scale startup idea competition held annually by TEC FTU to thousands of audience.",
        "Created the 3D branding kits of Kawai Business Startup 2023's 2nd Round and Kawai Startup Fair 2023, which were record-holding in terms of online reach and engagement.",
        "Lead 33 members to organize and a team of 12 to advertize the Grand Finale of Kawai Business Startup 2023, which accumulated over 10,000 interested entrepreneurs.",
      ],
    },
    {
      title: "Deputy Head of Communications Department",
      company_name: "Tommorow Entrepreneurs Club (TEC FTU)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2023 - Present",
      points: [ 
        "Leading 54 members to organize and a team of 13 to advertize Kawai Business Startup 2024.",
        "Trained a team of 6 the nessessary skills to provide art and illustrations for the IMC plan of Kawai Bussiness Startup 2024.",
        "Directing the art and visual of TEC FTU's social media channels.",
        "Created the 3D branding kits of Kawai Business Startup 2024, which once again held records in terms of online reach and engagement.",
        "Supervising the process of designing the branding kits of Kawai Bussiness Startup 2024's 2nd round and Kawai Startup Fair 2024.",
      ],
    },
    {
      title: "Co-Founder / UI-UX Designer",
      company_name: "EcoFrenzy Startup/RiseUp Squad",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Co-Founded EcoFrenzy, a startup that aims to promote Sustainablity through a social media application.",
        "Participated in a team of 12 talents from HUST, UEH, FPT, and FTU to develop the product to the Prototype stage, and continuously improving it to adapt to the needs and problems of the market.",
        "Validated the idea through several contests and achieved Top 01 in two Hackathons, where the team extensively worked to plan and build the product.",
        "Connected with several successful individuals for advice.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Winner of Sustainability Challenge by VinaCapital Ventures",
      name: "HackYouth 2023",
      designation: "Hackathon",
      company: "UpYouth - VinUni",
      image: upyouth,
    },
    {
      testimonial:
        "Winner of Track Cloud - Cloud Application for Community",
      name: "JunctionX Hanoi 2023",
      designation: "Hackathon",
      company: "Junction Vietnam",
      image: junctionvn,
    },
    {
      testimonial:
        "Top 14 Blockchain Application",
      name: "Road to Grizzlython 2023",
      designation: "Hackathon",
      company: "Web3 Space",
      image: web3space,
    },
  ];
  
  const projects = [
    // project image size: 2880*2048px //
    {
      name: "Kawai Bussiness Startup 2024 Concept Art",
      description:
        "A 3D representation of the Kawai Business Startup's logo as a scifi construction. The art represents young entrepreneurs rising amidst the so called funding winter of the startup community.",
      tags: [
        {
          name: "blender-3d",
          color: "green-text-gradient",
        },
        {
          name: "photoshop",
          color: "blue-text-gradient",
        },
        {
          name: "illustrator",
          color: "pink-text-gradient",
        },
      ],
      image: kbs24,
      source_code_link: "https://drive.google.com/drive/folders/1Dd79C4eszfYYwCiiXtiSxuQ0OEV12xKS?usp=drive_link",
    },
    {
      name: "KBS 2023 - 2nd Round Concept Art",
      description:
        "A 3D representation of the Kawai Business Startup's logo as a crystal. The 3D model was created using Blender 3D.",
      tags: [
        {
          name: "blender-3d",
          color: "green-text-gradient",
        },
        {
          name: "photoshop",
          color: "blue-text-gradient",
        },
        {
          name: "illustrator",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://drive.google.com/drive/folders/1svvSX66Y8hHdYZb5z3wAlGD2MqMs2g5a?usp=sharing",
    },
    {
      name: "Kawai Startup Fair 2023 Concept Art",
      description:
        "Kawai Startup Fair 2023's name designed with a Y2K/Aespa vibe.",
      tags: [
        {
          name: "blender-3d",
          color: "green-text-gradient",
        },
        {
          name: "photoshop",
          color: "blue-text-gradient",
        },
        {
          name: "illustrator",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://drive.google.com/drive/folders/1hOZlCqUMeJeepF6tJ0lcbAiBCus3iopB?usp=drive_link",
    },
    {
      name: "EcoFrenzy",
      description:
        "A social media platform that promotes sustainable lifestyle through personalized and engaging daily challenges with the application of Cloud technology.",
      tags: [
        {
          name: "sustainability",
          color: "green-text-gradient",
        },
        {
          name: "social-media",
          color: "blue-text-gradient",
        },
        {
          name: "startup",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://drive.google.com/file/d/1HdD2S2nDzn2EmbDwchYKKbQTqDy3bm7u/view?usp=sharing",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, myselfinfo };
