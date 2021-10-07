import React from "react";
import styled from "styled-components";
import { ProjectComponent } from "./ProjectComponent";
import { projectsDate } from "../../utils/data";
import { breakPoint } from "../../utils/breakPoints";

const ProjectContainer = styled.section`
    /* height: 100vh; */
    background: ${(props) => props.theme.primary};
    border: 1px solid transparent;
    color: ${(props) => props.theme.primaryText};

    .projects {
        font-size: 1.5em;
        text-transform: uppercase;
        margin: 2% 12%;
        letter-spacing: 1px;
    }

    @media (max-width: ${breakPoint.tablet}) {
        .projects {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 50px;
        }
        .projects::after {
            content: "";
            position: absolute;
            width: 100%;
            border-bottom: 1px solid ${(props) => props.theme.border};
            bottom: -5px;
        }
    }
`;

export const Projects = () => {
    return (
        <ProjectContainer id="projects">
            <h2 className="projects">
                <span>Projects</span>
            </h2>
            {projectsDate.map((el) => (
                <ProjectComponent el={el} />
            ))}
        </ProjectContainer>
    );
};
