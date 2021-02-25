import styled from 'styled-components';
import {GiShoppingCart} from 'react-icons/gi'

export const Page = styled.section`

`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${({gridColumns}) => gridColumns};
    padding: ${({p}) => p};
    gap: 20px;

    .gallery-img {
        width: 100%;
        height: 240px;
        object-fit: cover;
        object-position: center;
        cursor: pointer;
        padding: 3% 0;
    }

    @media screen and (max-width: 1366px) {
        grid-template-columns: ${({gridColumnsM1}) => gridColumnsM1};
        
        .container-img {
            order: -1;
        }
        .gallery-img {
            order: 1;
            height: 160px;
            padding: 8% 0 0 0;
        }
        .item-desc {
            order: 2;
        }
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: ${({gridColumnsM2}) => gridColumnsM2};
        .container-img {
            order: -1;
        }
        .gallery-img {
            order: 1;
            height: 320px;
        }
        .item-desc {
            order: 2;
        }
    }
`

export const Container = styled.div`
   display: flex;
   flex-direction: ${({flexDir}) => flexDir};
   justify-content: ${({justify}) => justify};
   padding: ${({p}) => p};
   align-items: ${({flexAlign}) => flexAlign};
   position: ${({pos}) => pos};
   bottom: ${({bot}) => bot};
   left: ${({L}) => L};
   transform: ${({trans}) => trans};
   height: ${({h}) => h};
   width: ${({w}) => w};
   background: ${({bg}) => bg};
   border-top: ${({borT}) => borT};
   border-bottom: ${({borB}) => borB};

   z-index: 10;

   @media screen and (max-width: 1366px) {
        justify-content: ${({justifyM}) => justifyM};
        margin: ${({mM1}) => mM1};
   }

   @media screen and (max-width: 768px) {
        padding: ${({pM}) => pM};
        margin: ${({mM2}) => mM2};
        flex-direction: ${({flexDirM}) => flexDirM};
        border-top: ${({borTM}) => borTM};
        border-bottom: ${({borBM}) => borBM};
   }


`

export const Button = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: ${({bg}) => bg};
    border: ${({bor}) => bor};
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    padding: ${({p}) => p};
    margin: ${({m}) => m};
    width: ${({w}) => w};
    cursor: pointer;
    transition: border 0.5s ease,  background 0.5s ease-in-out;

    a {
        color: ${({col}) => col};
        text-decoration: none;
    }

    &:hover {
        transition: border 0.7s ease, background 0.5s ease-in-out;
        background: ${({bgHover}) => bgHover};
        border: ${({borHover}) => borHover};

        a {
            transition: color 0.4s ease-in;
            color: ${({colHover}) => colHover};
        }
    }

    @media screen and (max-width: 768px) {
        font-size: ${({fontSM}) => fontSM};
        margin: ${({mM}) => mM};
    }

    @media screen and (max-width: 350px) {
        margin: ${({mM2}) => mM2};
    }
`

export const TextP = styled.p`
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    padding: ${({p}) => p};
    margin: ${({m}) => m};
    color: ${({col}) => col};
    text-align: ${({alignText}) => alignText};
`

export const TextH1 = styled.h1`
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    padding: ${({p}) => p};
    margin: ${({m}) => m};
    color: ${({col}) => col};

    @media screen and (max-width: 320px) {
        font-size: ${({fontSM}) => fontSM};
    }
`

export const ImgContainer = styled.div`
    background-image: url(${({imgSrc}) => imgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: ${({w}) => w};
    height: ${({h}) => h};
    margin: ${({m}) => m};
    padding: ${({p}) => p};

    .overlay {
        background: rgba(1, 1, 1, 0.35);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 1366px) {
        margin: ${({mM2}) => mM2};
    }

    @media screen and (max-width: 768px) {
        margin: ${({mM}) => mM};
    }
`

export const CardImg = styled.img`
    width: ${({w}) => w};
    height: ${({h}) => h};
    object-fit: cover;
    object-position: center;

    &:hover {
        transition: ease-in-out 0.4s;
        filter: brightness(50%);
    }
`

export const RecentlyAdded = styled.div`
    background-color: var(--white);
`

export const ButtonSecondary = styled.div`
    display: inline-flex;
    align-items: center;
    background: ${({bg}) => bg};
    border: ${({bor}) => bor};
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    padding: ${({p}) => p};
    margin: ${({m}) => m};
    width: ${({w}) => w};
    cursor: pointer;
    transition: border 0.5s ease,  background 0.5s ease-in-out;

    a {
        color: ${({col}) => col};
        text-decoration: none;
    }

    &:hover {
        transition: border 0.7s ease, background 0.5s ease-in-out;
        background: ${({bgHover}) => bgHover};
        border: ${({borHover}) => borHover};

        a {
            transition: color 0.4s ease-in;
            color: ${({colHover}) => colHover};
        }
        
        svg {
            fill: var(--brickOrange);
            transition: all 0.4s ease-in;
        }
    }
`

export const Cart = styled(GiShoppingCart)`
    width: 40px;
    height: 40px;
    fill: #fff;
`