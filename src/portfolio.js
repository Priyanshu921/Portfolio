/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Priyanshu Patidar",
  title: "Hi all, I'm Priyanshu",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1x4ODCPBHfmZPPR8zdP7hzKDNhKY3q7na/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Priyanshu921",
  linkedin: "https://www.linkedin.com/in/priyanshu-patidar-740692170/",
  gmail: "patidarpriyanshu921@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/priyanshu2019",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      logo: require("./assets/images/svvvLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and engineering",
      duration: "July 2017 - August 2021",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, DBMS, Data Structure, etc.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Trainee Programmer",
      company: "Yash Technologies",
      companylogo: require("./assets/images/yash-logo-new.png"),
      date: "August 2021 – April 2023",
      desc: "I Worked as a MERN Stack developer at Yash Technologies Pvt. Ltd from August 2021 to April 2023. It is a service-based MNC located in Indore, Madhya Pradesh",
      descBullets: [
        "24/7 Planner Tool KONE: I had the opportunity to work on this project, which was a challenging but rewarding experience. Using React and Spring Boot, we were able to develop a tool that accurately estimates maintenance costs for lifts and elevators. The user-friendly interface and insightful reports we created helped clients to budget and allocate resources effectively.",
        "C.H. Robinson - Silverlight Migration Project: This project was a significant undertaking, and I was excited to be a part of it. We migrated an existing application to a new one using technologies like React, Redux, Redux observable, and Jest. It was a great learning experience for me as I gained practical knowledge of these technologies.",
        "Reusable Component: As part of this project, we created a reusable component and custom NPM packages for our project. I worked with React, SASS, TypeScript, and Jest, and I was pleased with the results we achieved.",
        "DevOps Competency and Salams: Working on this project was a fantastic opportunity to redesign an entire application as per UX designs. I gained experience using HTML, CSS, JavaScript, and React, and I am proud of the contributions I made to the project.",
        "Interview Screening: Being a part of Yash's Full Stack product was an incredible experience for me. I was able to develop Express CRUD APIs, React components, and integrate MongoDB with Node using Mongoose ODM while implementing Role Based Authentication. The technologies we used included MongoDB, Express, React, Node, and TypeScript, with tools like Postman, MongoDB Compass, Git, and GitHub.",
        "Technologies: My experience at Yash Technologies involved working with NodeJS, Express, ReactJS, MongoDB, Mongoose, Azure, Redux, Redux-observable, and PostgreSQL. These technologies helped me to expand my knowledge and gain practical experience in building real-world applications."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "What is Data Science",
      subtitle: "Data Science orientation course by IBM on coursera",
      image: require("./assets/images/What is Data Science.jpg"),
      imageAlt: "What is Data Science Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/TKHWRE4RZDY3",
        },
      ],
    },
    {
      title: "Introduction to Cloud Computing",
      subtitle: "Introduction to Cloud Computing course by IBM on coursera",
      image: require("./assets/images/Introduction to cloud computing certificate_page-0001.jpg"),
      imageAlt: "Introduction to Cloud Computing Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/16ab2af756976f5c5c45eef257138f9f",
        },
      ],
    },
    {
      title: "Introduction to Web Development",
      subtitle: "Introduction to Web Development course by IBM on coursera",
      image: require("./assets/images/Introduction to Web Development with HTML, CSS certificate_page-0001.jpg"),
      imageAlt:
        "Introduction to Web Development with HTML,CSS, and JavaScript Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/861146b80f1b69f0c6e555fb50280103",
        },
      ],
    },
    {
      title: "JavaScript Basic",
      subtitle: "JavaScript basic certificate from hackerrank.",
      image: require("./assets/images/javascript_basic certificate_page-0001.jpg"),
      imageAlt: "JavaScript basic certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/883d4bd9cdda",
        },
      ],
    },
    {
      title: "JavaScript Intermediate",
      subtitle: "JavaScript Intermediate certificate from hackerrank.",
      image: require("./assets/images/javascript_intermediate certificate_page-0001.jpg"),
      imageAlt: "JavaScript Intermediate certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/5952036eda2e",
        },
      ],
    },
    {
      title: "React Basic",
      subtitle: "React Basic certificate from hackerrank.",
      image: require("./assets/images/react_basic certificate_page-0001.jpg"),
      imageAlt: "React Basci certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/5af247777f44",
        },
      ],
    },
    {
      title: "Developing Front-End Apps with React",
      subtitle:
        "Developing Front-End Apps with React course by IBM on coursera.",
      image: require("./assets/images/Developing Front-End Apps with React_page-0001 (1).jpg"),
      imageAlt: "React certificate by IBM on coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/c828489f3df9bbadecaf84956202d3c2",
        },
      ],
    },
    {
      title: "Star Achiever Award",
      subtitle: "Star Achiever Award from Yash Technologies.",
      image: require("./assets/images/Award Priyanshu Patidar.jpg"),
      imageAlt: "Star Achiever Award",
      footerLink: [
        {
          name: "View Certificate",
          url: "static/media/Award%20Priyanshu%20Patidar.6b456d498bd824d4f192.jpg",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8871714038",
  email_address: "patidarpriyanshu921@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Priyanshu004", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
