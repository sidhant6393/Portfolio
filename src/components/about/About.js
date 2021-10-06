import React from 'react'
import styled from 'styled-components'

const Hr = styled.div`
    width: ${props => props.width};
    display: inline-block;
    height: 4px;
    border-bottom: 1px solid #000;
    margin-left: 10px;
    


`

const AboutContainer = styled.section`
    height: 100vh;
    border: 1px solid #000;

    & > .space{
        margin: 6% 7%;
        /* border: 1px solid #000; */
    }

    .about-me{
        text-transform: uppercase;
        display: flex;
        align-items: center;

    }
`



export const About = () => {
    return (
        <AboutContainer>
            <div className="space">
                <h2 id="about-me" className="about-me">ABOUT ME <Hr width={"82%"} /></h2>
            </div>

        </AboutContainer>
    )
}


