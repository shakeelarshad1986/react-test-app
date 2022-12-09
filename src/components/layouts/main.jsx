/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Header from './header';
import Footer from './footer';

const Main = ({ children }) => {
    return (
        <>
            <Header />
            <section id="feature" className="feature ">
                <div className="container">
                    {children}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Main