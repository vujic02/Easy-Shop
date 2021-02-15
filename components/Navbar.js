import React from 'react';
import Link from 'next/link';
import {
    Nav,
    NavLinks,
    NavLink,
    NavLogo,
    NavLogoContainer,
    MobileMenu,
    CartIcon
} from '../styles/styled/navbar-styles'


const Navbar = ({toggle, isOpen, articles}) => {
    return (
        <Nav className="navbar" isOpen={isOpen}>
            <NavLogoContainer href="https://www.github.com/vujic02">
                <NavLogo src="/logo.png" />
            </NavLogoContainer>
            <NavLinks>
                <NavLink><Link href="/">Home</Link></NavLink>
                <NavLink><Link href="/about">About</Link></NavLink>
                <NavLink><Link href="/shop">Shop</Link></NavLink>
                <NavLink><div className="container"><Link href="/cart"><CartIcon/></Link>{articles.length > 0 ? (<div className="num">{articles.length}</div>) : null}</div></NavLink>
            </NavLinks>
            <MobileMenu id="hamburger1" onClick={toggle} isOpen={isOpen}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </MobileMenu>
        </Nav>
    )
}

export default Navbar
