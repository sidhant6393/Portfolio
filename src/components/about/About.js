import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { languages } from "../../utils/data";
import myImage from "../../assets/me.png";
// import resume from 
import { breakPoint } from "../../utils/breakPoints";

const AboutContainer = styled.section`
    height: 100vh;
    border: 1px solid transparent;
    background: ${(props) => props.theme.bg};

    & > .space {
        margin: 8% 12%;
        /* border: 1px solid #000; */
        position: relative;

        & > .my-photo {
            position: absolute;
            /* border: 1px solid #000; */

            top: 50%;
            right: 0;
            width: 25%;
            transform: translateY(-40%);
            background: ${(props) => props.theme.imageFilter};
            display: flex;
            align-items: center;
            justify-content: center;

            > img {
                box-shadow: 5px 5px 0 4px ${(props) => props.theme.primaryText};
                width: 100%;
                opacity: 0.6;
                transition: all 0.3s ease;
            }

            > img:hover {
                opacity: 1;
                box-shadow: 2px 2px 0 0px ${(props) => props.theme.primaryText};
                transform: translate(-1%, -1%);
            }
        }
    }

    .about-me {
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${(props) => props.theme.primaryText};

        span {
            flex-shrink: 1;
            font-size: 1em;
            /* border: 1px solid #000; */
        }
    }
    .dis-container {
        width: 60%;
        line-height: 1.5;
        letter-spacing: 1px;
        font-size: 1.1em;
        color: ${(props) => props.theme.primaryText};
        position: relative;

        .dis1 {
            margin-top: 5%;
            margin-bottom: 1%;
        }

        .dis2 {
            margin-bottom: 1%;
        }
        .imp {
            color: ${(props) => props.theme.importentText};
        }
    }
    .languages {
        /* border: 1px solid red; */
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
        width: 90%;

        margin: auto;
        margin-top: 2%;

        > span {
            margin-top: 5px;
            position: relative;
        }

        > span::before {
            content: "▹";
            position: absolute;
            left: -10%;
            color: ${(props) => props.theme.importentText};
        }
    }

    @media (max-width: ${breakPoint.tablet}) {
        /* background: red; */

        .about-me {
            font-size: 1.4em;
            border-bottom: 1px solid ${(props) => props.theme.border};
            /* width: fit-content; */
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 5px;
        }
        .dis-container {
            margin-top: 65%;
            /* border: 1px solid #000; */
            width: 100%;

            > p {
                font-size: 0.7em;
            }
        }

        & > .space {
            margin-top: 0;

            & > .my-photo {
                top: 15%;
                left: 50%;
                transform: translateX(-50%);
                width: 40%;

                > img {
                    box-shadow: 2px 2px 0 0px
                        ${(props) => props.theme.primaryText};
                    width: 100%;
                    opacity: 0.6;
                    transition: all 0.3s ease;
                }

                > img:hover {
                    opacity: 1;
                    box-shadow: 0px 0px 0 0px
                        ${(props) => props.theme.primaryText};
                    transform: translate(-1%, -1%);
                }
            }
        }
        .languages {
            span {
                margin-right: 6px;
                border: 1px solid transparent;
            }
        }
    }
`;

export const About = () => {
    return (
        <AboutContainer id="about-me">
            <div className="space">
                <h2 className="about-me">
                    <span>ABOUT ME</span>

                    {/*<Hr width={"content-fit"} /> */}
                </h2>
                <div className="dis-container">
                    <p className="dis1">
                        Hello! My name is Sidhant Singh and I enjoy creating{" "}
                        <Link to="">
                            <span className="imp">Fun</span>
                        </Link>
                        , interactive things that live on the internet. My web
                        development journey started with a sketchbook but my
                        canvas was the webpage. Yeah, I started my journey with{" "}
                        <Link to="">
                            <span className="imp">css-artwork</span>
                        </Link>
                        . And doing it taught me a lot about HTML and CSS!
                    </p>
                    <p className="dis2">
                        Fast-forward to today, I’m working and learning on lots
                        of different technologies like{" "}
                    </p>
                    <p className="languages">
                        {languages.map((languages) => (
                            <span>{languages}</span>
                        ))}
                    </p>
                </div>
                <div className="my-photo">
                    <img src={myImage} alt={myImage} />
                </div>
            </div>
        </AboutContainer>
    );
};
