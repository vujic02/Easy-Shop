import Link from 'next/link';
import styled from 'styled-components';
import {GiShoppingCart} from 'react-icons/gi'

export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgb(190,106,21);
    background: linear-gradient(310deg, rgba(190,106,21,0.65) 20%, rgba(172,63,33,0.7) 100%);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0" )};
    top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
` 

export const ModeBtnWrapper = styled.div`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
    margin: 20% 10% 0 10%;
    background: #fff;
    border-radius: 20px;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 120px);  
    text-align: center;

    @media screen and (max-width: 320px) {
        grid-template-rows: repeat(4, 80px);  
    }
`

export const SidebarLink = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    a {
        color: var(--black);
        text-decoration: none;
        transition: 0.2s ease-in-out;
        &:hover {
            color: var(--lightGray);
        }
    }

    &:hover {
        color: var(--brickOrange);
    }

    .container {
            padding: 5px;
            border-radius: 50%;
            position: relative;
        }

        .num {
            position: absolute;
            color: var(--white);
            padding: 1px 4px 1px 4px;
            border-radius: 50%;
            font-size: .7rem;
            font-weight: 900;
            top: 1px;
            right: -3px;
            background-color: var(--rustOrange);
            font-family: sans-serif;
        }
`

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarCartIcon = styled(GiShoppingCart)`
    width: 45px;
    height: 45px;
    fill: var(--black);

    &:hover {
        transition: 0.2s ease-in-out;
        fill: var(--lightGray);
    }
`



