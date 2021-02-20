import styled from 'styled-components';
import {GiShoppingCart} from 'react-icons/gi'

export const Nav = styled.nav`
    background: ${({isOpen}) => (isOpen ? "var(--brickOrange)" : "var(--blackFaded)" )};
    width: 100%;
    height: 90px;
    z-index: 1000;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
    export const NavLogoContainer = styled.a`
        width: 200px;
        height: 80px;
        @media screen and (max-width: 320px) {
            width: 160px;
            height: 80px;
        }
    `

    export const NavLogo = styled.img`
        width: 200px;
        height: 80px;
        object-fit: cover;
        @media screen and (max-width: 320px) {
            width: 160px;
            height: 80px;
        }
    `

  export const  NavLinks = styled.ul`
        list-style: none;
        width: calc(100% / 3);
        display: flex;
        justify-content: space-around;
        @media screen and (max-width: 1300px) {
            width: calc(100% / 2.5);
        }
        @media screen and (max-width: 768px) {
            display: none;
        }
    `

    export const NavLink = styled.li`
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            color: var(--white);
            text-decoration: none;
            transition: color 0.4s ease;
            &:hover {
                color: var(--lightGray);
            }
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
    export const MobileMenu = styled.div` 
        color: var(--black);
        text-align: center;
        position: absolute;
        right: 1rem;
        top: 1.4rem;
        display: none;

        @media screen and (max-width: 768px) {
            display: block;
        }


        .line {
             width: 50px;
             height: 5px;
             background-color: var(--black);
             display: block;
             margin: 8px auto;
             -webkit-transition: all 0.3s ease-in-out;
             -o-transition: all 0.3s ease-in-out;
             transition: all 0.3s ease-in-out;
        }
      
      &:hover {
        cursor: pointer;
      }

      .line2 {
        opacity: ${({isOpen}) => (isOpen ? "0" : "100%")};
      }
      
      .line1 {
        transform: ${({isOpen}) => (isOpen ? "translateY(13px) rotate(45deg)" : "")};
      }
      
      .line3 {
        transform: ${({isOpen}) => (isOpen ? "translateY(-13px) rotate(-45deg)" : "")};
      }
      
`

export const CartIcon = styled(GiShoppingCart)`
    width: 45px;
    height: 45px;
    fill: var(--white);
    cursor: pointer;

    &:hover {
        transition: all ease-in-out 0.3s;
        fill: var(--lightGray);
    }
`