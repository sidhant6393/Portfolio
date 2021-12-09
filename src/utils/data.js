import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";

export const languages = [
    "JavaScript(ES6 +)",
    "React.js",
    "Node",
    "Express",
    "MongoDB",
    "gsap",
];

export const projectsData = [
    {
        title: "Groww Clone",
        projectImg: projectImage1,
        about: `This is an e-commerce website, made with express. The MVC File structure is used in this project. All Html is served form backend using view engine. Ejs is used to create html templates. Login/Register,Dashboard, Wallet, User Profile and Landing Page are main features of this project.`,
        tech: [
            "node.js",
            "express",
            "HTML/Ejs",
            "CSS",
            "Javascript",
            "MongoDB",
        ],
        githubLink: "https://github.com/santoshmcode/groww-clone",
        deploymentLink: "https://growww-app.herokuapp.com/",
    },
    {
        title: "Quora Clone",
        projectImg: projectImage2,
        about: `This is and react application, Used Redux for global state management. Using React-Router-Dom different pages are served. Login page, Home page, Add question popup page, Question details page and Unanwered Questions page are the main pages of the application`,
        tech: ["react.js", "styled components", "Redux", "Firebase"],
        githubLink: "https://github.com/santoshmcode/quora-clone",
        deploymentLink: "https://quora-app.netlify.app/",
    },
];

export const blogsData = [
    // {
    //     blogTitle: "blog 2",
    //     blogDiscription:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, suscipit corrupti sed nesciunt, recusandae quaerat neque consequuntur sint dolores quidem reiciendis dignissimos vitae? Repellat iste sunt nulla atque quisquam ullam.",
    //     blogLink:
    //         "https://santoshcodes.hashnode.dev/what-is-the-difference-between-web-development-and-web-design",
    // },
    {
        blogTitle: "Web Developement Vs Web Design",
        blogDiscription:
            "A web developer is someone who builds and maintains the core structure of a website. They’re tasked with converting the web design into a functional website, using coding languages such as HTML, JavaScript, CSS and Python.",
        blogLink:
            "https://santoshcodes.hashnode.dev/what-is-the-difference-between-web-development-and-web-design",
    },
];
