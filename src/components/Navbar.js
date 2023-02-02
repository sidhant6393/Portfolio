import styled from "styled-components";
import logolight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { darkTheme, lightTheme } from "../styles/theme";
import { breakPoint } from "../utils/breakPoints";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../utils/scrollWithOffset";

const NavBarContainer = styled.div`
    height: 80px;

    .nav-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        max-width: 1440px;
        margin: auto;
    }

    .logo {
        margin-left: 3%;
    }

    .nav-toggle-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 55%;
        min-width: 600px;
    }

    .links {
        width: fit-content;
        color: ${(prpos) => prpos.theme.primaryText};
        min-width: 430px;

        > span:nth-child(1) {
            margin-left: 2em;
        }

        > span {
            font-size: 1.1em;
            font-style: normal;
            line-height: 37px;
            margin: 1em;
            letter-spacing: 0.05em;
            font-weight: bold;
            position: relative;

            > a {
                font-family: "Yusei Magic", sans-serif;
            }
        }

        > span::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            background: #000;
            bottom: -6px;
            left: 0;
            transition: width 0.2s ease-out;
            background: ${(prpos) => prpos.theme.primaryText};
        }

        > span:hover::after {
            width: 100%;
        }
    }

    .switch-toggle {
        height: 96px;
        width: 200px;
        border: 2px solid transparent;
        border-radius: 96px;
        position: relative;
        cursor: pointer;
        transform: scale(0.4);
        margin-right: -5%;
        background: ${(props) => props.theme.toggleBg};

        .links {
            z-index: 10;
        }
    }

    #sun {
        transform: scale(1);
        border-radius: 50%;
        position: absolute;
        left: -1px;
        top: -2px;
    }

    #moon {
        transform: scale(1);
        border-radius: 50%;
        position: absolute;
        left: 1px;
        top: -4px;
        opacity: 0;
    }

    @media (max-width: ${breakPoint.tablet}) {
        .switch-toggle {
            /* transform: translateX(1em); */
            box-shadow: 0 0 2px 0px rgb(0, 0, 0);
        }

        .nav-toggle-container {
            width: fit-content;
        }

        .links {
            position: fixed;
            width: 100%;
            bottom: 0;
            left: 0;
            display: flex;
            /* align-items: center; */
            justify-content: center;
            /* z-index: 10 !important; */
            background: ${(props) => props.theme.imageFilter};
        }
        .links > span {
            font-size: 0.8em;
            transform: translateX(-25%);
        }
        .logo {
            margin-left: 50px;
        }
        .nav-toggle-container {
            justify-content: flex-end;
            min-width: 200px;
            /* border: 1px solid #000; */
        }
    }
`;

export const Navbar = ({ theme, setTheme }) => {
    const [t1, setT1] = useState(gsap.timeline());
    const sunRef = useRef(null);
    const moonRef = useRef(null);

    useEffect(() => {
        setT1(
            t1
                .to(sunRef.current, {
                    duration: 0.3,
                    right: 0,
                    left: "unset",
                    rotate: "180deg",
                    opacity: 0,
                    ease: "none",
                })
                .to(
                    moonRef.current,
                    {
                        duration: 0.3,
                        right: 0,
                        left: "unset",
                        rotate: "180deg",
                        opacity: 1,
                        ease: "none",
                    },
                    "-=0.3"
                )
        );
    }, [t1]);

    const handleSwitch = () => {
        theme.name === "light" ? setTheme(darkTheme) : setTheme(lightTheme);
    };

    useEffect(() => {
        theme.name === "light" ? t1.reverse() : t1.play();
    }, [theme, t1]);
    return (
        <NavBarContainer>
            <div className="nav-content">
                <div className="logo">
                    {theme.name === "light" ? (
                        <img src={logolight} alt={logolight} />
                    ) : (
                        <img src={logoDark} alt={logoDark} />
                    )}
                </div>
                <div className="nav-toggle-container">
                    <div className="links">
                        <span>
                            <HashLink
                                to="/#about-me"
                                activeClassName="selected"
                                scroll={(el) => scrollWithOffset(el)}
                            >
                                About Me
                            </HashLink>
                        </span>
                        <span>
                            <HashLink
                                to="/#projects"
                                activeClassName="selected"
                                scroll={(el) => scrollWithOffset(el)}
                            >
                                Projects
                            </HashLink>
                        </span>
                        <span>
                            <HashLink
                                to="/#blog"
                                activeClassName="selected"
                                scroll={(el) => scrollWithOffset(el)}
                            >
                                Blogs
                            </HashLink>
                        </span>
                        <span>
                            <HashLink
                                to="/#contact"
                                activeClassName="selected"
                                scroll={(el) => scrollWithOffset(el)}
                            >
                                Contact
                            </HashLink>
                        </span>
                    </div>
                    <div
                        onClick={handleSwitch}
                        id="switch"
                        className="switch switch-toggle"
                    >
                        <svg
                            ref={sunRef}
                            id="sun"
                            width="96"
                            height="96"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 48c0 22.154 17.846 40 40 40s40-17.846 40-40S70.154 8 48 8 8 25.846 8 48Z"
                                fill="#FFEB3B"
                            />
                        </svg>
                        <svg
                            ref={moonRef}
                            id="moon"
                            width="96"
                            height="96"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M47 87c22.091 0 40-17.909 40-40S69.091 7 47 7 7 24.909 7 47s17.909 40 40 40Z"
                                fill="url(#paint0_radial)"
                            />
                            <path
                                d="M72.954 68.679c-1.088 1.813-2.718 3.47-4.77 3.761-2.049.289-4.38-1.371-4.212-3.498-1.276.07-2.596.155-3.726.77-1.128.616-2.012 1.922-1.743 3.21.097.466.335.936.21 1.393-.161.579-.862.922-.886 1.524-.046 1.097 1.939 1.043 2.245 2.094.216.748-.573 1.361-1.245 1.718-3.003 1.592-6.116 3.216-9.487 3.418-1.406.084-2.825-.081-4.224.098-2.185.28-4.18 1.388-6.297 2.013-.447.131-.899.231-1.35.32C32.74 84.5 20 79.65 17.03 72.284c-.515.638-.355-1.565-.515-2.34 0 0 0 .04.28-.338.28-.38.764-.518 1.22-.598a9.056 9.056 0 0 1 4.19.26c.946.288 1.862.735 2.847.787.985.053 2.098-.443 2.364-1.422.549-2.026-2.712-3.3-2.661-5.402-.952 1.232-3.023 1.377-4.001.169-.979-1.209-.289-3.44 1.22-3.685-2.146-1.272-3.188-4.02-2.992-6.565.196-2.544 1.441-4.889 2.979-6.887 1.108-1.443 2.474-2.808 4.208-3.244 1.24-.314 2.558-.116 3.77.302 2.946 1.017 5.32 3.25 7.601 5.427.906.863 1.831 1.753 2.378 2.894.989 2.062.566 4.502.374 6.794-.191 2.292.027 4.94 1.8 6.338.313.247.683.447 1.078.447.372 0 .722-.177 1.04-.379 2.355-1.508 3.459-4.807 2.51-7.494-.981-2.774-3.77-4.66-4.372-7.544-.062-.293-.095-.613.046-.875.152-.288.476-.431.787-.502 2.09-.479 4.741 1.272 6.18-.363.553-.63.65-1.545 1.026-2.299.377-.754 1.382-1.354 1.992-.784.154.143.254.343.315.548.542 1.797-1.498 4.06-.224 5.408.284.303.68.46 1.024.687 1.234.815 1.688 2.669.976 3.99 1.695-.44 2.237-2.927 3.911-3.45.412-.13.855-.12 1.26-.273.932-.347 1.412-1.615.959-2.521 1.22-.725 2.38 1.274 3.778 1.443 1.005.12 1.853-.734 2.83-1.011 1.486-.423 3.196.81 3.322 2.396.07.9-.139 2.11.676 2.442.302.123.652.05.956.166.946.357.558 1.85-.116 2.62a8.988 8.988 0 0 1-2.843 2.166c-.808.389-1.837.902-1.771 1.82.022.318.19.615.17.934-.06.956-1.686 1.499-1.285 2.362.608.825 1.85.011 2.477-.8.625-.81 1.808-1.678 2.476-.901-.537.567-.064 1.54.544 2.024.608.483 1.397.863 1.635 1.617.212.68-.126 1.415-.496 2.03ZM27.387 32.533c.91 1.685-.816 3.837-.197 5.656.448 1.31 1.908 1.895 3.221 2.21 1.027.246 2.067.43 3.116.546.62.068 1.254.113 1.862-.028 1.65-.381 2.723-1.999 3.498-3.548.428-.852.825-1.745.915-2.699.097-1.013-.154-2.024-.436-3-.46-1.59-1.098-3.272-2.461-4.15-1.221-.787-2.988-1.111-4.165-.257-2.63 1.912-4.662 2.217-5.206 2.51-.544.293-.972.92-.84 1.54.098.463.468.806.693 1.22Zm10.342-11.036c-.377.67-.097 1.54.343 2.165.44.627 1.038 1.143 1.384 1.829.698 1.386.357 3.221 1.126 4.498 1.725 2.86 4.263 4.148 6.557 3.15 2.503-1.088 3.45-4.359 5.77-5.817.419-.264.899-.486 1.144-.922.484-.866-.28-1.96-1.164-2.374-.886-.412-1.912-.466-2.743-.984-.266-.166-.513-.388-.632-.684-.317-.779.361-1.667.172-2.49-.23-.987-1.492-1.237-2.47-1.097-.976.141-2.065.443-2.88-.129-.593-.418-.98-1.265-1.698-1.27-1.058-.004-1.15 1.643-1.88 2.43-.809.878-2.441.648-3.03 1.695Zm-4.193-6.705c.907.588 2.036.75 3.098.604 1.064-.143 2.07-.575 3.018-1.095.685-.377 1.364-.822 1.816-1.477.451-.654.63-1.558.268-2.269-.445-.87-1.535-1.172-2.483-1.059-.548.066-1.242.173-1.524-.315-.058-.098-.088-.214-.172-.289-.144-.132-.364-.088-.544-.03-1.856.616-3.149 1.952-3.614 2.547-.562.718-1.035 1.695-.659 2.53.163.362.468.639.796.853Zm11.025.74c.782.48 1.752-.27 2.657-.193 1.124.095 1.754 1.367 2.719 1.97.837.522 1.97.486 2.774-.09.34-.242.769-.583 1.108-.34.225.164.245.498.394.738.285.46.926.453 1.452.391.157-.018.324-.04.448-.143.257-.218.174-.634.2-.977.104-1.306 1.968-1.765 2.265-3.04.05-.215.06-.46.216-.613.306-.297.787.041 1.066.364.3.345.608.695 1 .92.393.225.895.302 1.29.084.396-.22.605-.795.354-1.179-.227-.35-.736-.454-.885-.847-.073-.193-.04-.414-.104-.611-.097-.298-.394-.473-.676-.59-2.142-.896-4.775-.135-6.745-1.384-.478-.302-.905-.682-1.388-.977-2.492-1.536-4.34.804-4.704 1.313-.127.18-.145.413-.23.618-.12.281-.362.484-.591.679a16.69 16.69 0 0 0-2.702 2.978c-.119.168-.24.364-.202.568.03.159.15.282.284.361Z"
                                fill="url(#paint1_radial)"
                            />
                            <defs>
                                <radialGradient
                                    id="paint0_radial"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(40 0 0 40 47 47)"
                                >
                                    <stop stopColor="#A7A6B5" />
                                    <stop offset=".629" stopColor="#7F7E8A" />
                                    <stop offset=".728" stopColor="#7A7985" />
                                    <stop offset=".85" stopColor="#6A6977" />
                                    <stop offset=".986" stopColor="#515061" />
                                    <stop offset=".999" stopColor="#4E4D5E" />
                                </radialGradient>
                                <radialGradient
                                    id="paint1_radial"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(39.5794 0 0 40.8072 47.231 47.653)"
                                >
                                    <stop offset=".001" stopColor="#9493A1" />
                                    <stop offset=".628" stopColor="#74737D" />
                                    <stop offset=".716" stopColor="#6F6E78" />
                                    <stop offset=".825" stopColor="#5F5E69" />
                                    <stop offset=".946" stopColor="#464550" />
                                    <stop offset="1" stopColor="#383742" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </NavBarContainer>
    );
};
