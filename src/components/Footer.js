import React from "react";
import styled from "styled-components";
import { breakPoint } from "../utils/breakPoints";

const Contacts = styled.footer`
    border: 1px solid #000;
    height: 30vh;
    background: ${(props) => props.theme.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.primaryText};

    h1 {
        margin-bottom: 1%;
        font-size: 1.1em;
    }
    .social-links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 20%;

        > span {
            margin: 5px;
        }
        & svg {
            color: ${(props) => props.theme.primaryText};
            width: 24px;
        }
    }
    & .hello {
        font-size: 1em;
        border: 2px solid ${(props) => props.theme.border};
        width: 200%;
        height: 150%;
        background: ${(props) => props.theme.buttonBg};
        transform: translateX(-25%);
        color: ${(props) => props.theme.primaryText};
        font-family: inherit;
        font-weight: bold;
    }
    @media (max-width: ${breakPoint.tablet}) {
        & {
            justify-content: flex-start;
            padding-top: 10px;
        }
    }
`;

export const Footer = () => {
    return (
        <Contacts id="contact">
            <h1>Living, learning, & leveling up one day at a time.</h1>
            <div className="social-links">
                <span>
                    <a
                        href="https://github.com/santoshmcode"
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
                            class="feather feather-github"
                        >
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                </span>

                <span>
                    <a
                        href="https://www.linkedin.com/in/santoshcodes/"
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
                            class="feather feather-linkedin"
                        >
                            <title>LinkedIn</title>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </span>

                <span>
                    <a
                        href="https://twitter.com/santoshcodes"
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
                            class="feather feather-twitter"
                        >
                            <title>Twitter</title>
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                    </a>
                </span>

                <span>
                    <a
                        href="https://codepen.io/santoshcodes"
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
                            class="feather feather-codepen"
                        >
                            <title>CodePen</title>
                            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                            <line x1="12" y1="22" x2="12" y2="15.5"></line>
                            <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                            <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                            <line x1="12" y1="2" x2="12" y2="8.5"></line>
                        </svg>
                    </a>
                </span>
            </div>
            <a href="mailto:santoshmane619@gmail.com">
                <button className="hello">
                    <span>Say Hello</span>
                </button>
            </a>
        </Contacts>
    );
};
