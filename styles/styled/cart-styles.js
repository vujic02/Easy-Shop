import styled from 'styled-components';
import {CgArrowLongRight} from 'react-icons/cg';
import {AiOutlineClose} from 'react-icons/ai';

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
    position: ${({pos}) => pos};
    background-position: center top;
    background-size: ${({bgSize}) => bgSize};
    flex: ${({flexNum}) => flexNum};
    cursor: ${({cur}) => cur};
    box-shadow: ${({shadow}) => shadow};
    backdrop-filter: ${({bFilter}) => bFilter};
    align-self: ${({selfAlign}) => selfAlign};
    justify-self: ${({justifyAlign}) => justifyAlign};

    @media screen and (max-width: 1250px) {
        flex-direction: ${({flexDirM}) => flexDirM};
        padding: ${({pM}) => pM};
        width: ${({wM}) => wM};
        height: ${({hM}) => hM};
        margin: ${({mM}) => mM};
    }

`

export const Button = styled.div`
    display: flex;
    flex-direction: ${({flexDir}) => flexDir};
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    padding: ${({p}) => p};
    margin: ${({m}) => m};
    background: ${({bg}) => bg};
    border: ${({bor}) => bor};
    border-radius: ${({borR}) => borR};
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    cursor: pointer;
    color: ${({col}) => col};
    width: ${({w}) => w};
    height: ${({h}) => h};

    a {
        color: ${({col}) => col};
        text-decoration: ${({decoration}) => decoration};
    }

    &:hover {
        transition: all ease-in-out 0.3s;
        background: ${({bgH}) => bgH};
        border: ${({borH}) => borH};
        color: ${({colH}) => colH};
        a {
            color: ${({colH}) => colH};
        }
        svg {
            color: var(--black);
        }
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

    @media screen and (max-width: 1200px) {
        font-size: ${({fontXS}) => fontXS};
    }

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
    border: ${({bor}) => bor};

    @media screen and (max-width: 768px) {
        width: ${({wM}) => wM};
        height: ${({hM}) => hM};
    }
`

export const Input = styled.input`
    width: ${({w}) => w};
    height: ${({h}) => h};
    background: ${({bg}) => bg};
    border: ${({bor}) => bor};
    border-radius: ${({borR}) => borR};
    color: ${({col}) => col};
    font-size: ${({fontS}) => fontS};
    font-weight: ${({fontW}) => fontW};
    text-align: ${({align}) => align};
    margin: ${({m}) => m};
    padding: ${({p}) => p};
    &:focus {
        outline: ${({outL}) => outL};
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

export const ArrowRight = styled(CgArrowLongRight)`
    width: 30px;
    height: 30px;
    color: var(--brickOrange);
    margin-top: 5px;
    margin-left: 5px;
`

export const Remove = styled(AiOutlineClose)`
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    color: var(--brickOrange);
    cursor: pointer;
    &:hover {
        transition: all ease-in-out .3s;
        color: var(--darkGray);
    }
`


export const Card = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  transform-style: preserve-3d;
  perspective: 500px;
  @media screen and (max-width: 550px) {
      width: 100%;
  }
`

export const Face = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: 1s;
  backface-visibility: hidden;
  &:hover {
    .valid {
      text-decoration: underline;
    }
    .number {
      text-decoration: underline;
    }
    .ccv {
      text-decoration: underline;
    }
  }
`
export const FaceFront = styled(Face)`
  transform: ${(props) => (!props.rotateCard ? `rotateY(180deg)` : "")};
`;
export const FaceBack = styled(Face)`
  transform: ${(props) =>
    props.rotateCard ? `rotateY(180deg)` : "rotateY(360deg)"};
`;