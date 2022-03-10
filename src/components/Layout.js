import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
import Credits from './Credits';
import 'bootstrap/dist/css/bootstrap.min.css';
import "normalize.css" 
import '../assets/css/main.scss'

// <> react fragment
const Layout = ({children}) => {
    return (
        <> 
            <Menu></Menu>
            {children}
            <Footer></Footer>
            <Credits></Credits>
        </>
    )
}

export default Layout
