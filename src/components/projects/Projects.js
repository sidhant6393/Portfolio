import React from "react";
import styled from "styled-components";
import { ProjectComponent } from "./ProjectComponent";

const ProjectContainer = styled.section`
    height: 100vh;
    background: ${(props) => props.theme.primary};
    border: 1px solid #000;

    .projects {
        font-size: 1.5em;
        text-transform: uppercase;
        margin: 2% 12%;
        letter-spacing: 1px;
    }
`;

export const Projects = () => {
    return (
        <ProjectContainer id="projects">
            <h2 className="projects">Projects</h2>
            <ProjectComponent />
        </ProjectContainer>
    );
};
