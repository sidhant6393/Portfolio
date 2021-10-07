import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border: 2px solid ${(props) => props.theme.border};
    height: 29em;
    width: 22em;
    border-radius: 8px;
    margin: auto;
    position: relative;
    color: ${(props) => props.theme.primaryText};
    background: ${(props) => props.theme.buttonBg};
    cursor: grab;
    margin-left: 5px;

    .card {
        width: 100%;
        height: 100%;
    }

    .card-head {
        border-bottom: 2px solid ${(props) => props.theme.border};
        height: 3em;
        padding-left: 0.7em;
        display: flex;
        align-items: center;

        > div {
            width: 17%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .card-body {
        margin: 0.5em;
    }
    .blog-title {
        text-align: center;
        margin-top: 1em;
        margin-bottom: 1.5em;
        font-size: 1.1em;
    }
    .blog-dis {
        font-size: 1em;
        /* letter-spacing: 1px; */
        height: 100%;
    }
    .card-bottom {
        position: absolute;
        bottom: 0;
        height: 2em;
        margin: 0.5em;
        right: 0.5em;
        color: ${(props) => props.theme.importentText};
    }
`;

export const BlogCard = () => {
    return (
        <Card>
            <div className="card">
                <div className="card-head">
                    <div>
                        <span>●</span>
                        <span>●</span>
                        <span>●</span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="blog-title">
                        <h3>Lorem ipsum dolor sit.</h3>
                    </div>
                    <div className="blog-dis">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum, atque. Voluptatem necessitatibus quisquam
                        cupiditate doloribus fugiat quasi facilis veritatis
                        cumque?
                    </div>
                </div>
                <div className="card-bottom">
                    <a
                        href="https://santoshcodes.hashnode.dev/what-is-the-difference-between-web-development-and-web-design"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Read➤
                    </a>
                </div>
            </div>
        </Card>
    );
};
