import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaVuejs,
} from "react-icons/fa";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
  SiTensorflow,
  SiBlockchaindotcom,
  SiDjango,
  SiElectron,
  SiTailwindcss,
  SiNativescript,
  SiVuedotjs,
  SiGraphql,
  SiLaravel,
  SiWordpress,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiSvelte,
  SiFlutter,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  // { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  // { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" },
  // { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  // {
  //   interest: "Tech Blog",
  //   icon: FaHashnode,
  // },
  {
    interest: "Internet of Things",
    icon: FcElectronics,
  },
  // {
  //   interest: "Market Research",
  //   icon: GiArchiveResearch,
  // },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  // {
  //   interest: "Robotics",
  //   icon: BsRobot,
  // },
  // {
  //   interest: "Web Scraping",
  //   icon: BsGlobe,
  // },
  { interest: "Blockchain", icon: SiBlockchaindotcom },
  { interest: "AI, ML", icon: SiTensorflow },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  // {
  //   name: "Jquery",
  //   icon: BiLogoJquery,
  // },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  // {
  //   name: "SASS",
  //   icon: FaSass,
  // },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Django",
    icon: SiDjango,
  },
  {
    name: "Laravel",
    icon: SiLaravel,
  },
  {
    name: "Wordpress",
    icon: SiWordpress,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  // {
  //   name: "PugJs",
  //   icon: SiPug,
  // },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Electron",
    icon: SiElectron,
  },
  {
    name: "Svelte",
    icon: SiSvelte,
  },
  {
    name: "Vue",
    icon: SiVuedotjs,
  },
  // {
  //   name: "Flutter",
  //   icon: SiFlutter,
  // },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Redis",
    icon: SiRedis,
  },
  {
    name: "Postgres",
    icon: BiLogoPostgresql,
  },
  // {
  //   name: "Postman",
  //   icon: SiPostman,
  // },
  {
    name: "Git",
    icon: BsGit,
  },
  // {
  //   name: "Github",
  //   icon: FaGithub,
  // },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  // {
  //   name: "Bash",
  //   icon: SiGnubash,
  // },
  // {
  //   name: "Markdown",
  //   icon: BsMarkdown,
  // },
];

export const workData = [
  {
    company: "Upwork",
    designation: "Work as freelancer",
    duration: "December 2022 - July 2023",
    companyImg: "upwork.svg",
    description: (
      <>
        <ul>
          <li>
            Improved modularity and reusability of 2 large React front-end
            applications by refactoring the codebase with TypeScript, Node.js,
            and Express.
          </li>
          <li>
            Integrated over 110 REST/GraphQL APIs into the UI to enable seamless
            communication with the backend.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Crowdworks",
    designation: "Work as freelancer",
    duration: "August 2020 – November 2022",
    companyImg: "crowdworks.svg",
    description: (
      <>
        <ul>
          <li>
            Utilized React to build dynamic and interactive user interfaces,
            employing components, state management, and virtual DOM
            manipulation.
          </li>
          <li>
            Developed robust back-end systems using Laravel, leveraging MVC
            architecture, routing, database migrations, and ORM. Additionally,
            designed customizable and user-friendly websites using WordPress,
            incorporating themes, plugins, and customizations.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Kaamugu Sdn Bhd",
    designation: "Junior fullstack developer",
    duration: "June 2019 – July 2020",
    companyImg: "kaamugu-sdn-bhd.png",
    description: (
      <>
        <ul>
          <li>
            Collaborated with a small development team to build and maintain web
            applications using modern front-end technologies such as HTML, CSS,
            and JavaScript frameworks like React.
          </li>
          <li>
            Assisted in back-end development using Python and Django framework,
            implementing RESTful APIs and database integration to deliver
            efficient and scalable solutions.
          </li>
          <li>
            Actively participated in code reviews, debugging, and
            troubleshooting to ensure the quality and functionality of web
            applications while continuously enhancing technical skills in web
            development.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Malaysia Digital Economy Corporation",
    image: "mdec",
    link: "https://mdec.my/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "SEDA",
    image: "seda",
    link: "https://www.seda.xyz/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "J-V DESIGN",
    image: "J-V DESIGN",
    link: "https://www.j-vdesign.com/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "Tricia Gillespie, Realtor",
    image: "triciagillespie",
    link: "https://triciagillespie.com/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "Harley Academy",
    image: "harley",
    link: "https://www.harleyacademy.com/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "Bright Purifying",
    image: "everbrightpurifying",
    link: "https://www.everbrightpurifying.com/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "Online Shopping For Men, Women And Kids",
    image: "juno1965",
    link: "https://juno1965.com/",
    source: null,
  },
  // {
  //   type: "WEB-APP",
  //   title: "Snake Game",
  //   image: "snake-game",
  //   link: "https://vaheedsk36.github.io/Snake-game",
  //   source: "",
  // },
  // {
  //   type: "WEB-APP",
  //   title: "Delta Assistant",
  //   image: "delta-assistant",
  //   link: "",
  //   source: "https://github.com/vaheedsk36/Delta-Desktop-Virtual-Assistant",
  // },
  // {
  //   type: "WEB-APP",
  //   title: "Text Utility App",
  //   image: "text-utility-app",
  //   link: "https://vaheedsk36.github.io/text-utility-app/",
  //   source: "https://github.com/vaheedsk36/text-utility-app",
  // },
];

export const socialMediaLinks = [
  {
    href: "https://github.com/valk32",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/valk32",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/valk32",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://twitter.com/valk32",
    icon: FaTwitter,
    backgroundColor: "social.twitter",
    hoverColor: "social.twitterHover",
  },
  // {
  //   href: "https://codersk36.hashnode.dev/",
  //   icon: FaHashnode,
  //   backgroundColor: "social.hashnode",
  //   hoverColor: "social.hashnodeHover",
  // },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
