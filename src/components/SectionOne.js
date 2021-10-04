import styled from "styled-components";
import { Navbar } from "./Navbar";

const SectionContainer = styled.div`
    height: 100vh;
    position: relative;

    .fixed-box {
        position: absolute;
        height: 100%;
        width: 70%;
        top: 0;
        right: 0;
        z-index: -1;
        background: ${(props) => props.theme.primary};
    }
`;

export const SectionOne = () => {
    return (
        <SectionContainer>
            <Navbar />
            <div className="fixed-box"></div>
        </SectionContainer>
    );
};
