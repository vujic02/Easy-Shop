import React, {useState} from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useAppContext } from '../context/state'

const Layout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);
    const {articles, setArticles} = useAppContext();

    const toggle = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <>
            <Navbar toggle={toggle} isOpen={isOpen} articles={articles} />
            <Sidebar toggle={toggle} isOpen={isOpen} articles={articles}  />
            {children}
        </>
    )
}

export default Layout
