import React from "react";
import styled from "styled-components";
import { ProjectComponent } from "./ProjectComponent";

const ProjectContainer = styled.section``;

export const Projects = () => {
    return (
        <ProjectContainer id="projects">
            <h2>Projects</h2>
            <ProjectComponent />
        </ProjectContainer>
    );
};
