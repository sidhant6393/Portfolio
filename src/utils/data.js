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
        title: "Boat-lifestyle clone",
        projectImg: projectImage2,
        about: `This is and react application, where we created separate backend and used axios to fetch the data from backend. Using React-Router-Dom different pages are served. Chanpions page, Landing page, login/Signup page, cart page and payment page are the main pages of the application`,
        tech: ["react.js", "styled components", "express", "mongoDB"],
        githubLink: "https://github.com/SushanthPS/Boat-Lifestyle-Clone",
        deploymentLink: "https://growww-app.herokuapp.com/",
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
