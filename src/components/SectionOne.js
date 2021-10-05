import styled from "styled-components";
import { Navbar } from "./Navbar";
import { breakPoint } from "../utils/breakPoints";

const SectionContainer = styled.div`
    height: 100vh;
    position: relative;
    border: 50px solid "yellow";

    .fixed-box {
        position: absolute;
        height: 100%;
        width: 67%;
        top: 0;
        right: 0;
        z-index: -1;
        background: ${(props) => props.theme.primary};
        display: block;
    }

    @media (max-width: ${breakPoint.tablet}) {
        .fixed-box {
            display: none;
        }
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
