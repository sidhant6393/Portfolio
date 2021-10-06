import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { languages } from "../../utils/data";

// const Hr = styled.div`
//     width: ${(props) => props.width};
//     display: inline-block;
//     height: 4px;
//     border-bottom: 1px solid #000;
//     flex-shrink: 3;
// `;

const AboutContainer = styled.section`
    height: 100vh;
    /* border: 1px solid #000; */

    & > .space {
        margin: 8% 12%;
        border: 1px solid #000;
    }

    .about-me {
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${(props) => props.theme.primaryText};

        span {
            flex-shrink: 1;
            font-size: 0.8em;
            /* border: 1px solid #000; */
        }
    }
    .dis-container {
        width: 60%;
        line-height: 1.5;
        letter-spacing: 1px;
        font-size: 1.1em;
        color: ${(props) => props.theme.primaryText};

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
`;

export const About = () => {
    return (
        <AboutContainer>
            <div className="space">
                <h2 id="about-me" className="about-me">
                    ABOUT ME
                    {/*<Hr width={"content-fit"} /> */}
                </h2>
                <div className="dis-container">
                    <p className="dis1">
                        Hello! My name is Santosh and I enjoy creating{" "}
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
                    <div className="my-photo">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </AboutContainer>
    );
};
