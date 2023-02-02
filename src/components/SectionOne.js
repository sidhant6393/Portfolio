import styled from "styled-components";
import { Navbar } from "./Navbar";
import { breakPoint } from "../utils/breakPoints";
import { Hero } from "./Hero";
import { HomeContent } from "./HomeContent";
import gsap from "gsap";
import React, { useRef, useEffect, useState } from "react";

const SectionContainer = styled.div`
    height: 100vh;
    position: relative;
    background: ${(props) => props.theme.bg};
    z-index: 1;

    .fixed-box {
        position: absolute;
        height: 100%;
        width: 67%;
        top: 0;
        right: 0;
        z-index: -2;
        background: ${(props) => props.theme.primary};
        display: block;
    }

    @media (max-width: ${breakPoint.tablet}) {
        .fixed-box {
            display: none;
        }
    }
`;

export const SectionOne = ({ theme, setTheme }) => {
    const [lodingTimeline, setLodingTimeline] = useState(gsap.timeline());
    const refNav = useRef(null);
    useEffect(() => {
        // gsap.set(".section-nav", { opacity: 0 });
        setLodingTimeline(
            lodingTimeline
                .from(".fixed-box", {
                    duration: 3,
                    xPercent: 100,
                    ease: "back.out(0.5)",
                })
                .from(
                    ".section-nav",
                    {
                        duration: 2,
                        // yPercent: -100,
                        opacity: 0,
                    },
                    "-=2"
                )
                .from(".home-content", { opacity: 0 })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SectionContainer>
            <div className="section-nav">
                <Navbar theme={theme} setTheme={setTheme} />
            </div>
            <div className="fixed-box"></div>
            <div className="hero">
                <Hero ref={refNav} />
            </div>
            <div className="home-content">
                <HomeContent />
            </div>
        </SectionContainer>
    );
};
