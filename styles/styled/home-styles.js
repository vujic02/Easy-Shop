import styled from 'styled-components';

export const HomePage = styled.section`
    overflow: hidden;
    

    &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 30vh;
        width: 100%;
        background-image: url("./images/bottomImage.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
`


export const Container = styled.div`
   display: flex;
   flex-direction: ${({flexDir}) => flexDir};
   justify-content: center;
   padding: ${({p}) => p};
   align-items: ${({flexAlign}) => flexAlign};
   position: ${({pos}) => pos};
   bottom: ${({bot}) => bot};
   left: ${({L}) => L};
   transform: ${({transL}) => transL};

   @media screen and (max-width: 768px) {
        padding: ${({pM}) => pM};
        div {
            text-align: center;
        }
   }

`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 10%;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`

export const Header = styled.h1`
    display: inline-block;
    font-size: 3rem;
    background: rgb(190,106,21);
    background: linear-gradient(90deg, var(--rustOrange) 0%, var(--lightBurgundy) 80%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: ${({p}) => p};

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    } 
`

export const Paragraph = styled.p`
    font-size: 2rem;
    color: ${({col}) => col};
    font-weight: 300;
    padding: ${({p}) => p};

    a {
        color: ${({col}) => col};
        text-decoration: none;
        &:hover {
            transition: color ease-in-out 0.3s;
            color: var(--lightGray);
        }
    }

    @media screen and (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media screen and (max-width: 428px) {
        font-size: 1.5rem;
    }
`

export const Button = styled.div`
    display: inline-block;
    background: rgba(190,106,21,0.9);
    background: linear-gradient(to right, rgba(190,106,21,0.9) 0%, rgba(172,63,33,0.9) 100%);
    border: 1px solid #fff;
    font-size: 2rem;
    padding: ${({p}) => p};
    margin: ${({m}) => m};
    transition: border 0.5s ease,  background 0.5s ease-in-out;

    a {
        color: var(--white);
        text-decoration: none;
    }

    &:hover {
        transition: border 0.7s ease, background 0.5s ease-in-out;
        background: var(--white);
        border: 1px solid var(--rustOrange);

        a {
            transition: color 0.4s ease-in;
            color: var(--rustOrange);
        }
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const LandingImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 5;
`

export const DownArrow = styled.img`
    width: 60px;
    height: 60px;
    z-index: 5;
    &:hover {
        cursor: pointer;
    }
`