import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: ${({flexDir}) => flexDir};
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    padding: ${({p}) => p};
    margin: ${({m}) => m};
    background: ${({bg}) => bg};
    border-bottom: ${({bor}) => bor};
    border-radius: ${({borR}) => borR};
    width: ${({w}) => w};
    height: ${({h}) => h};
    background-position: center top;
    background-size: ${({bgSize}) => bgSize};
    flex: ${({flexNum}) => flexNum};
    cursor: ${({cur}) => cur};
    box-shadow: ${({shadow}) => shadow};
    backdrop-filter: ${({bFilter}) => bFilter};

    @media screen and (max-width: 1250px) {
        flex-direction: ${({flexDirM}) => flexDirM};
        padding: ${({pM}) => pM};
        width: ${({wM}) => wM};
        height: ${({hM}) => hM};
    }

`

export const Button = styled.div`
    display: block;
    flex-direction: ${({flexDir}) => flexDir};
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    padding: ${({p}) => p};
    margin: ${({m}) => m};
    background: ${({bg}) => bg};
    border: ${({bor}) => bor};
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    color: ${({col}) => col};
    cursor: pointer;

    &:hover {
        transition: all ease-in-out 0.3s;
        background: ${({bgH}) => bgH};
        border: ${({borH}) => borH};
        color: ${({colH}) => colH};
    }
`

export const TextP = styled.p`
    color: ${({col}) => col};
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    text-align: ${({align}) => align};
    margin: ${({m}) => m};
    background: ${({bg}) => bg};
    width: ${({w}) => w};

    @media screen and (max-width: 768px) {
        font-size: ${({fontSM}) => fontSM};
    }
`

export const TextH1 = styled.h1`
    color: ${({col}) => col};
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    text-align: ${({align}) => align};
    margin: ${({m}) => m};
    padding: ${({p}) => p};

    @media screen and (max-width: 768px) {
        font-size: ${({fontSM}) => fontSM};
        margin: ${({mM}) => mM};
        padding: ${({pM}) => pM};
    }
`

export const Img = styled.img`
    width: ${({w}) => w};
    height: ${({h}) => h};
    object-fit: ${({objF}) => objF};
    object-position: ${({objP}) => objP};

    @media screen and (max-width: 768px) {
        width: ${({wM}) => wM};
        height: ${({hM}) => hM};
    }
`

export const QuantityButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    width: ${({w}) => w};
    line-height: ${({lineH}) => lineH};
`