import React from "react";
import styled from "styled-components";
import { breakPoint } from "../utils/breakPoints";

const Contacts = styled.footer`
    border: 1px solid transparent;
    height: 35vh;
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
    .contact-details {
        display: flex;
        align-items: center;
        /* justify-content: s; */
        margin-bottom: 1%;

        & div {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 5px;
            width: 100%;
        }

        svg {
            width: 20px;
            margin: 3px;
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
            padding-top: 35px;
            /* margin-bottom: 0.8em; */
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
            <div className="contact-details">
                <div>
                    <svg
                        aria-hidden="true"
                        data-prefix="fas"
                        data-icon="phone-alt"
                        class="svg-inline--fa fa-phone-alt fa-w-16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="m497.39 361.8-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                        />
                    </svg>
                    <span>
                        <a
                            href="https://api.whatsapp.com/send?phone=917387373377"
                            target="_blank"
                            rel="noreferrer"
                        >
                            +91 7387373377
                        </a>
                    </span>
                </div>
                <div>
                    <svg
                        aria-hidden="true"
                        data-prefix="fas"
                        data-icon="envelope"
                        class="svg-inline--fa fa-envelope fa-w-16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                        />
                    </svg>
                    <span>
                        {" "}
                        <a href="mailto:santoshmane619@gmail.com">
                            santoshmane619@gmail.com
                        </a>
                    </span>
                </div>
            </div>
            {/* <a href="mailto:santoshmane619@gmail.com">
                <button className="hello">
                    <span>Say Hello</span>
                </button>
            </a> */}
        </Contacts>
    );
};
