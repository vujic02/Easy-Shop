import Link from 'next/link';
import React from 'react';
import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarCartIcon
}   from '../styles/styled/sidebar-styles'


const Sidebar = ({isOpen, toggle, articles}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle}><Link href="/">Home</Link></SidebarLink>
                    <SidebarLink onClick={toggle}><Link href="/about">About</Link></SidebarLink>
                    <SidebarLink onClick={toggle}><Link href="/shop">Shop</Link></SidebarLink>
                    <SidebarLink onClick={toggle}><div className="container"><Link href="/cart"><SidebarCartIcon /></Link>{articles.length > 0 ? (<div className="num">{articles.length}</div>) : null}</div></SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
