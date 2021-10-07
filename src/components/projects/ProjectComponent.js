import React from "react";
import styled from "styled-components";
import { breakPoint } from "../../utils/breakPoints";

const Projects = styled.div`
    .projects-con {
        position: relative;
        margin: auto;
        width: 76%;
        height: 300px;
        display: grid;
        grid-template: 1fr repeat(2, 3fr) / repeat(12, 1fr);
        align-items: center;
        margin-top: 5%;
        margin-bottom: 5%;
        color: ${(props) => props.theme.primaryText};
    }

    .img-container {
        grid-column: 1 / span 6;
        grid-row: 1 / span 3;

        & > img {
            border-radius: 8px;
            filter: blur(1px);
            opacity: 0.7;
            transition: all 0.5s ease;
            box-shadow: 0 0 20px -2px #000;
        }
        &:hover > img {
            filter: blur(0px);
            opacity: 1;
            box-shadow: 0 0 20px -10px #000;
        }
    }

    .project-title {
        grid-column: 7 / span 6;
        font-size: 1.7em;
        font-weight: bold;
        text-align: center;
        margin-bottom: 5%;
    }
    .project-discription {
        grid-column: 7 / span 6;
        overflow: auto;
        width: 116%;
        background: ${(props) => props.theme.primaryText};
        color: ${(props) => props.theme.bg};
        border-radius: 8px;
        height: 100%;
        position: relative;
        left: -16%;
        font-size: 0.9em;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-left: 2%;
        padding-right: 2%;
        text-align: end;
        font-weight: lighter;
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);
    }
    .projects-others {
        grid-column: 7 / span 6;

        display: grid;
        grid-template: repeat(2, 1fr) / repeat(1, 1fr);

        .tech-stacks {
            font-size: 0.7em;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 5px;
        }

        .tech-name {
            background: ${(props) => props.theme.buttonBg};
            padding: 0.5% 1%;
            border-radius: 4px;
        }

        .projects-links {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            margin-top: 2%;
        }
    }

    & svg {
        height: 20px;
        margin-left: 10px;
    }
    & img {
        width: 100%;
        /* height: 300px; */
    }

    @media (max-width: ${breakPoint.tablet}) {
        margin-bottom: 100px;
        transition: all 0.5s ease;

        &:hover > .projects-con > .img-container img {
            box-shadow: 0 0 20px -10px #000;
        }
        .img-container {
            position: absolute;
            grid-column: 1 / span 13;
            grid-row: 2 / span 2;
            z-index: 0;

            & img {
                filter: blur(1px);
                opacity: 0.5;
            }
            &:hover > img {
                filter: blur(1px);
                opacity: 0.5;
            }
        }
        .project-title {
            grid-column: 1 / span 13;
            z-index: 0;
            font-size: 1.3em;
            margin-bottom: 40px;
        }
        .project-discription {
            z-index: 0;
            grid-column: 1 / span 13;
            width: 100%;
            left: 0%;
            font-size: 0.6em;
            text-shadow: rgba(0, 0, 0, 0.5) 1px 0 10px;
            color: ${(props) => props.theme.primaryText};
            align-items: center;
            justify-content: center;
            text-align: center;
            background: transparent;
            box-shadow: none;
        }
        .projects-others {
            z-index: 0;
            grid-column: 1 / span 13;

            .tech-stacks {
                align-items: center;
                justify-content: space-around;
            }

            .projects-links {
                align-items: center;
                justify-content: center;
            }
        }
    }
`;

export const ProjectComponent = ({
    el: { title, projectImg, about, tech, githubLink, deploymentLink },
}) => {
    return (
        <Projects>
            <div className="projects-con">
                <div class="img-container">
                    <img
                        src={projectImg}
                        alt={projectImg}
                        className="project-img"
                    />
                    <div className="filter"></div>
                </div>

                <div className="project-title">{title}</div>
                <div className="project-discription">{about}</div>
                <div className="projects-others">
                    <div className="tech-stacks">
                        {tech.map((el) => (
                            <span className="tech-name">{el}</span>
                        ))}
                    </div>
                    <div className="projects-links">
                        <a href={githubLink} rel="noreferrer" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-github"
                            >
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a
                            href={deploymentLink}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-external-link"
                            >
                                <title>External Link</title>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </Projects>
    );
};
