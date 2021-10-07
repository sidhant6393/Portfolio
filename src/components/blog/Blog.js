import React, { useEffect } from "react";
import styled from "styled-components";
import { BlogCard } from "./BlogCard";
import Draggable from "gsap/Draggable";
import { gsap } from "gsap";
import { useState } from "react/cjs/react.development";
import { blogsData } from "../../utils/data";
import { breakPoint } from "../../utils/breakPoints";

const BlogContainer = styled.div`
    height: 100vh;
    border: 1px solid transparent;
    background: ${(props) => props.theme.buttonBg};
    position: relative;

    #card {
        display: inline-block;
        z-index: 1;
        height: fit-content;
        width: fit-content;
    }

    #blogs {
        font-size: 1.5em;
        text-transform: uppercase;
        margin: 2% 12%;
        letter-spacing: 1px;
        color: ${(props) => props.theme.primaryText};
    }
    #boundries {
        width: 100%;
        height: 100%;
        border: 1px solid transparent;
    }
    .note {
        position: absolute;
        font-size: 3em;
        top: 50%;
        left: 50%;
        transform: translateY(-200%);
        opacity: 0.3;
        z-index: 0;
    }

    @media (max-width: ${breakPoint.tablet}) {
        #blogs {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 50px;
        }
        #blogs::after {
            content: "";
            position: absolute;
            width: 100%;
            border-bottom: 1px solid ${(props) => props.theme.border};
            bottom: -5px;
        }
        .note {
            font-size: 1.4em;
            transform: translateY(0%);
            top: 70%;
            left: 5%;
        }
    }
`;

export const Blog = () => {
    if (typeof window !== "undefined") {
        gsap.registerPlugin(Draggable);
    }
    const [drag, setDrag] = useState();

    useEffect(() => {
        setDrag(
            Draggable.create("#card", {
                bounds: "#boundries",
                // inertia: true,
                // zIndexBoost: true,//
                onPress: function () {
                    gsap.to(".note", { opacity: 0 });
                },
            })
        );
    }, []);

    return (
        <BlogContainer>
            <div id="boundries">
                <h2 id="blogs">Blogs</h2>

                {blogsData.map((blog, i) => (
                    <div id="card">
                        <BlogCard value={i} key={i} blog={blog} />
                    </div>
                ))}
                <div className="note">Drag a Card for More Blogs...</div>
            </div>
        </BlogContainer>
    );
};
