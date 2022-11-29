/* Change this file to get your personal Porfolio */



// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "MAROUANE's Portfolio",
  description:
    "I am a web designer, web developer I help entrepreneurs create a brand image and develop it on multiple formats.",
  og: {
    title: "Marouane YATIME Portfolio",
    type: "website",
    url: "https://maraouaneYATIME.github.io",
  },
};

//Home Page
const greeting = {
  title: "MAROUANE YATIME",
  text: "Hello 👋!",
  logo_name: "MarouaneYatime",
  nickname: "Myatime",
  subtitleHi: "It's ",
  subtitle: " Marouane yatime.",
  subTitle:
    " I'm a Frontend Web Developer , I have 20 years old, located in Lyon.I build websites, web apps, apps, tools and things that solve problems. I work at DRAW MY PAD as web developer, also i work in freelance. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. ",
  resumeLink:
    "https://drive.google.com/file/d/1H0OwSBH_CMDUn__11CqrILJuH47MyXal/view?usp=sharing",
  portfolio_repository:
    "https://github.com/marouaneYATIME/marouaneYATIME.github.io",
  githubProfile: "https://github.com/marouaneYATIME",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/marouaneYATIME",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yatimemarouane/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ymarobusiness@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /*
  {
    name: "Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  */
  {
    name: "Facebook",
    link: "https://www.facebook.com/marwane.yatimeii/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/marouane_yatime/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    /*
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    */
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building website for ecommerce using Shopify, wordpress and woocomerce",
        "⚡ Building Portfolio, showcase",
        "⚡ Building responsive website front end using React",
        "⚡ Developing mobile applications using JAVA, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "Wordpress",
          fontAwesomeClassname: "bi:wordpress",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Shopify",
          fontAwesomeClassname: "logos:shopify",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "GIT",
          fontAwesomeClassname: "bi:git",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
    /*
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    */
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos ",
        "⚡ Creating flyer, portrait, social media publication",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "logos:adobe-photoshop",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "cib:canva",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /*
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
    */
  ],
};

const degrees = {
  degrees: [
    {
      title: "DORANCO École Sup' des Techn Créatives ",
      subtitle: "Bachelor designer application developer.",
      logo_path: "doranco.png",
      alt_name: "DORANCO SCHOOL",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ I have studied basic software development.",
        "⚡ Also i learn to creat and develope mobile and web applications.",
        "⚡ skills acquired : JAVA, SQL, UML, JAVASCRIPT, REACT, NODE.JS, GIT, DATABASE, PhpMyAdmin.",
      ],
      website_link: "https://doranco-ecole.fr/",
    },
    {
      title: "Univeristy of LORRAINE - Nancy",
      subtitle: "LICENCE INFORMATIQUE ",
      logo_path: "logo-universite-lorraine.png",
      alt_name: "univ lorranine",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Algorithms, software architecture etc.",
        "⚡ Apart from this, I have done courses on maths, system, network and Full Stack Development.",
        "⚡ Also i learn the basics of web development using : HTML5, CSSS, JAVASCRIPT and development of 2D games applications",
        "⚡ skills acquired : JAVA, JAVAFX, C, PHYTON, SQL, GITLAB and BASH",
      ],
      website_link:
        "https://fst.univ-lorraine.fr/formations/licence-informatique",
    },
    {
      title: "GAUSS High School",
      subtitle: "Scientific Baccalaureate ",
      logo_path: "gauss.png",
      alt_name: "univ lorranine",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ I have studied basic maths, physic.",
        "⚡ I had a baccalaureat with honors, mark: 18/20 ",
      ],
      website_link:
        "https://fst.univ-lorraine.fr/formations/licence-informatique",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HTML language",
      subtitle: "- SOLOLEARN",
      logo_path: "sololearn.png",
      certificate_link: "https://www.sololearn.com/certificates/CT-OPMWATSZ",
      alt_name: "SOLO LEARN",
      color_code: "#1E90FF",
    },
    {
      title: "C language",
      subtitle: "- SOLOLEARN",
      logo_path: "sololearn.png",
      certificate_link: "https://www.sololearn.com/certificates/CT-FBGM89DR",
      alt_name: "SOLO LEARN",
      color_code: "#1E90FF",
    },
    {
      title: "CSS language",
      subtitle: "- SOLOLEARN",
      logo_path: "sololearn.png",
      certificate_link: "https://www.sololearn.com/certificates/CT-XGWGLSTC",
      alt_name: "SOLO LEARN",
      color_code: "#1E90FF",
    },
    {
      title: "JAVA language",
      subtitle: "- SOLOLEARN",
      logo_path: "sololearn.png",
      certificate_link: "https://www.sololearn.com/certificates/CT-O1OW00TF",
      alt_name: "SOLO LEARN",
      color_code: "#1E90FF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have done remote many projects during my intership, where i had the opportunity to creat and devolop a lot of websites and applicatoins. ",
  description2:
    "My best experience is about having the opportunity this year to join a company as a front developer in alternship school program.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "full stack developer",
          company: "DRAW MY PAD ",
          company_url: "https://drawmypad.com/",
          logo_path: "drawmypad.png",
          duration: "Septembre 2022 - present",
          location: "Lyon, France",
          description:
            "I am working on website development. The company'work is to sell costumize controlles and consoles, wich you can costumize your controller as you like wihle chosing colors etc. I am currently working on the mobile application for the company wich you can purchase from it.",
          color: "#0879bf",
        },
        {
          title: "Designer ",
          company: "freelancer & malt",
          company_url: "https://www.malt.fr",
          logo_path: "malt.png",
          duration: "May 2018 - present",
          location: "FRANCE",
          description:
            "I propose many services : webdesign(UX/UI), logo, flyer, build portfolio and showcase website.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web developer ",
          company: "ONAM",
          company_url: "#",
          logo_path: "onam.png",
          duration: "May 2021 - Sept 2021",
          location: "Casablanca, MOROCCO",
          description:
            "I managed to create a web application for employee management allowing company employees to easily access information. I modeled my application with UML, PHP for development as well as HTML, Javascript, Windesign, and EasyPHP. The last steps I performed are the testing and verification of the application.",
          color: "#ee3c26",
        },
      ],
    },
    /*
    {
      
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
      
    },
    
    */
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "This some of my project that i have done during bachelor degree, freelance and my own project  ! I have worked on diffirent project , wich i built many website for clients, also i did some design logo and flyer , as well as utiversity's project wich we developed severl aaplication using JAVA , video games usinig C language  .",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Spacecorridor",
      createdAt: "",
      description:
        "-Realization of a 2D video game using the C language, SDL_light and SDL_ttf_light libraries, Using Git.",
      url: "https://www.github/marouaneYATIME.com",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Application to sell products online (ecommerce-shop)",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "Creation of an online shopping website with withdrawal of controls by a drive system , using : PHP7, HTML, CSS, JS, SQL as programation languages, and AGILE SCRUM for project management .",
      url: "https://www.github/marouaneYATIME.com",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Similator App",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "Realization of an event simulation application discrete , using : JAVA, JAVAFX, C, JUNIT, SCENE BUILDER , MVW .",
      url: "https://www.github.com/marouaneYATIME",
    },
    {
      id: "UNO game",
      name: "UNO game ",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "Build an application web (game uno) , wich you can play with multiplayer or with the computer (bot) , using : JAVA, MVW.",
      url: "https://www.github/marouaneYATIME.com",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "My Portfolio",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "Creating my website (portfolio) , where  i share my school career, project and degrees , using: css, js, react.",
      url: "https://www.github.com/marouaneYATIME/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lyon, FRANCE",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
