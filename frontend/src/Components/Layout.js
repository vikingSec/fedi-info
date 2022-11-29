import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
export default function Layout(props) {
    const {inner} = props;
    return (
        <>
            <Header />
            {inner}
            <Footer/>
        </>
    )
}
