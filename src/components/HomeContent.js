import gsap from "gsap";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { breakPoint } from "../utils/breakPoints";
import Physics2DPlugin from "gsap/Physics2DPlugin";

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

        .interactive {
            color: ${(props) => props.theme.oppositeTheam};
            cursor: pointer;
        }
    }

    .maths-symbol-container {
        position: relative;

        .symbols {
            position: absolute;
        }
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

    > a {
        height: fit-content;
        transform: translateY(-3px);
    }
`;

const arrayOfEmoji = [
    // "𝛼",
    // "𝛽",
    // "𝛾",
    // "𝛿",
    // "𝜀",
    // "𝜁",
    // "𝜂",
    // "𝜃",
    // "𝜄",
    // "𝜅",
    // "𝜆",
    // "𝜇",
    // "𝜈",
    // "𝜉",
    // "𝜋",
    // "𝜌",
    // "𝜏",
    // "𝜎",
    // "𝜖",
    // "𝜓",
    // "𝜔",
    // "𝜙",
    // "𝜘",
    // "𝛺",
    // "𝛥",
    "⚽️",
    "🏀",
    "🏈",
    "⚾️",
    "🥎",
    "🎾",
    "🏐",
    "🏉",
    "🥏",
    "🪀",
    "🎱",
    "⚽️",
    "🏀",
    "🏈",
    "⚾️",
    "🥎",
    "🎾",
    "🏐",
    "🏉",
    "🥏",
    "🪀",
    "🎱",
    "⚽️",
    "🏀",
    "🏈",
    "⚾️",
    "🥎",
    "🎾",
    "🏐",
    "🏉",
    "🥏",
    "🪀",
    "🎱",
    "⚽️",
    "🏀",
    "🏈",
    "⚾️",
    "🥎",
    "🎾",
    "🏐",
    "🏉",
    "🥏",
    "🪀",
    "🎱",
    "⚽️",
    "🏀",
    "🏈",
    "⚾️",
];

export const HomeContent = () => {
    if (typeof window !== "undefined") {
        gsap.registerPlugin(Physics2DPlugin);
    }

    const [symbolAnimation, setSymbolAnimation] = useState(gsap.timeline());

    useEffect(() => {
        gsap.set(".symbols", {
            scale: "random(1, 2)",
            opacity: 0,
        });
        setSymbolAnimation(
            symbolAnimation
                .to(".symbols", {
                    duration: 3,
                    opacity: 1,
                    physics2D: {
                        velocity: "random(400, 900)",
                        angle: "random(250, 300)",
                        gravity: 900,
                    },
                    delay: "0.3",
                })
                .to(".symbols", { duration: 0, display: "none" })
        );
        symbolAnimation.pause();
    }, []);

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

    const handlePhysicsAnimatin = () => {
        if (symbolAnimation.isActive()) {
            symbolAnimation.play();
        } else {
            symbolAnimation.restart();
        }
        // console.log("over");
    };
    return (
        <HomeContainer>
            <div>
                <div className="hello">
                    <span className="hand-wave"> 👋🏻 </span> Hi, my name is
                </div>
                <h1 className="name">Santosh Mane</h1>
                <p className="about-one-line">
                    I like to build{" "}
                    <span
                        onMouseOver={handlePhysicsAnimatin}
                        className="interactive"
                    >
                        {" "}
                        Interactive
                        <span className="maths-symbol-container">
                            {arrayOfEmoji.map((symbol) => (
                                <span className="symbols">{symbol}</span>
                            ))}
                        </span>
                    </span>{" "}
                    things for web
                </p>
                <Resume className="resume">
                    <a href="./resume.pdf">Resume</a>
                </Resume>
            </div>
        </HomeContainer>
    );
};
