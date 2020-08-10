import React from 'react'

export default function Bunner({ children, title, subtite }) {
    return (
        <div className='banner'>
            <h1>{title}</h1>
            <div className='banner-center'></div>
            <p>{subtite}</p>
            {children}
        </div>
    )
}
