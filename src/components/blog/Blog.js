import React, { useEffect } from "react";
import styled from "styled-components";
import { BlogCard } from "./BlogCard";
import Draggable from "gsap/Draggable";
import { gsap } from "gsap";
import { useState } from "react/cjs/react.development";

const BlogContainer = styled.div`
    height: 100vh;
    border: 1px solid #000;

    #card {
        display: inline-block;
        z-index: 50;
    }

    #blogs {
        margin: 2% 12%;
    }
    #boundries {
        width: 100%;
        height: 100%;
        border: 1px solid transparent;
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
                inertia: true,
                onPress: function () {
                    console.log("clicked");
                },
            })
        );
    }, []);

    return (
        <BlogContainer>
            <div id="boundries">
                <h2 id="blogs">Blogs</h2>
                <div id="card">
                    <BlogCard />
                </div>
            </div>
        </BlogContainer>
    );
};
