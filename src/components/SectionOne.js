import styled from "styled-components";
import { Navbar } from "./Navbar";
import { breakPoint } from "../utils/breakPoints";

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
    return (
        <SectionContainer>
            <Navbar theme={theme} setTheme={setTheme} />
            <div className="fixed-box"></div>
        </SectionContainer>
    );
};
