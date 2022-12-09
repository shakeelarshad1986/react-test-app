/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
    return (
        <footer
            style={{
                position: "fixed",
                bottom: "0",
                width: " 100%",
                height: "60px",
            }}>
            <div className="text-center">
                <p style={{ paddingBottom: "10px" }}>
                    &copy;copyright. designed and developed by Mateen
                </p>
            </div>
        </footer>
    )
}

export default Footer