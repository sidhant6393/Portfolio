import gsap from "gsap";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { breakPoint } from "../utils/breakPoints";

const HomeContainer = styled.div`
    color: ${(props) => props.theme.primaryText};
    position: absolute;
    top: 45%;
    left: 55%;
    transform: translateY(-50%);

    .hello {
        font-size: 1.25em;
        font-weight: bold;
    }
    .hand-wave {
        font-size: 2em;
        display: inline-block;
    }
    .name {
        font-size: 3.125em;
    }
    .about-one-line {
        font-weight: bold;
        font-size: 1.1em;
        letter-spacing: 1px;
        margin-top: 10px;
    }

    @media (max-width: ${breakPoint.tablet}) {
        & {
            transform: scale(0.8);
            position: absolute;
            left: 0;
            right: 0;
            top: 25%;
            margin-left: auto;
            margin-right: auto;
            width: fit-content;
        }
    }
`;
const Resume = styled.button`
    height: 50px;
    width: 160px;
    border: 3px solid ${(props) => props.theme.border};
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 25px;
    background: ${(props) => props.theme.buttonBg};
    color: ${(props) => props.theme.primaryText};
    display: grid;
    align-items: center;
    justify-content: center;
`;

export const HomeContent = () => {
    useEffect(() => {
        gsap.set(".hand-wave", { transformOrigin: "bottom" });

        gsap.to(".hand-wave", {
            rotate: -20,
            repeat: -1,
            yoyo: true,
            ease: "none",
            duration: 1,
        });
    }, []);
    return (
        <HomeContainer>
            <div>
                <div className="hello">
                    <span className="hand-wave"> 👋🏻 </span> Hi, my name is
                </div>
                <h1 className="name">Santosh Mane</h1>
                <p className="about-one-line">
                    I like to build interactive things for web
                </p>
                <Resume className="resume">
                    <a href="./resume.pdf">Resume</a>
                </Resume>
            </div>
        </HomeContainer>
    );
};
