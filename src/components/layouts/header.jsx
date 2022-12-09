/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/button'

const Header = () => {
    return (
        <header id="home" className="welcome-hero">
            <div className="top-area">
                <div className="header-area">
                    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
                        <div className="container text-center" style={{marginTop:'10px'}}>
                            <Link to='/'>🏠Bread List Home</Link> &nbsp; &nbsp; &nbsp;&nbsp;
                            <Link to='/title2'>📃Bread List</Link>
                        </div>
                    </nav>

                </div>
                <div className="clearfix"></div>

            </div>

        </header>
    )
}

export default Header