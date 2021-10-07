import React from "react";
import styled from "styled-components";
import { breakPoint } from "../../utils/breakPoints";

const Card = styled.div`
    border: 2px solid ${(props) => props.theme.border};
    height: 29em;
    width: 22em;
    border-radius: 8px;
    margin: auto;
    margin-left: ${(props) => props.value * 3 + 5}px;
    margin-top: ${(props) => props.value * 3 + 5}px;
    position: absolute;
    color: ${(props) => props.theme.primaryText};
    background: ${(props) => props.theme.buttonBg};
    cursor: grab;
    /* margin-left: 5px; */

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
        font-weight: lighter;
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

    @media (max-width: ${breakPoint.tablet}) {
        & {
            transform-origin: 0 0;
            transform: matrix(0.6, 0, 0, 0.6, 0, 0);
        }
    }
`;

export const BlogCard = ({ blog, value }) => {
    const { blogTitle, blogDiscription, blogLink } = blog;
    return (
        <Card value={value}>
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
                        <h3>{blogTitle}</h3>
                    </div>
                    <div className="blog-dis">{blogDiscription}</div>
                </div>
                <div className="card-bottom">
                    <a href={blogLink} rel="noreferrer" target="_blank">
                        Read➤
                    </a>
                </div>
            </div>
        </Card>
    );
};
