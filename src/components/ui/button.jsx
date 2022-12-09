import React from 'react'

const Button = ({styles, label, btnClass, type, btnContainer, ...rest }) => {
    return (
        <>
            <div className={btnContainer} style={{ marginTop: `${styles}` }}>
                <button type={type} {...rest} className={`btn btn-${btnClass}`}>{label}</button>
            </div>
        </>
    )
}

export default Button