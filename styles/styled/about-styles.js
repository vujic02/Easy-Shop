import styled from 'styled-components';

export const AboutPage = styled.section`

`

export const AboutLanding = styled.div`
    height: 870px;
    width: 100vw;
    background: black;
    background-size: cover;
    position: relative;
`

export const AboutLandingImg = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.4;
    object-fit: cover;

    @media screen and (max-width: 1000px) {
        object-fit: cover;
    }
`

export const AboutText = styled.p`
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    color: ${({textColor}) => textColor};
    text-align: ${({alignText}) => alignText};
    position: ${({pos}) => pos};
    top: ${({T}) => T};
    left: ${({L}) => L};
    transform: ${({transL}) => transL};
    margin-top: ${({mgTop}) => mgTop};
    margin-left: ${({mgLeft}) => mgLeft};
    padding-left: ${({pLeft}) => pLeft};

    @media screen and (max-width: 768px) {
        font-size: ${({fontSMedia}) => fontSMedia};
        width: ${({adjustW}) => (adjustW ? "90%" : "")}
    }

`


export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 5%;


    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr); 
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr; 
    }
`

export const Container = styled.div`
    display: inline-flex;
    flex-direction: ${({flexDir}) => flexDir};
    justify-content: ${({justify}) => justify};
    margin-left: ${({mgLeft}) => mgLeft};
    padding-right: ${({pR}) => pR};
`

export const Icon = styled.img`
    width: 75px;
    height: 75px;
`

