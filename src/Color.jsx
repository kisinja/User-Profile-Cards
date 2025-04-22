import React from 'react';

// Receiving the colors array from the parent(App.jsx) component as props
// and destructuring it to use it in the component

const Color = ({ colors }) => {

    return (
        <div>
            <h1 className='text-3xl'>Colors</h1>
            <ul className='list-disc'>
                {colors.map((color, index) => (
                    <li key={index} className='text-2xl' style={{ color: `${color}` }}>{color}</li>
                ))}
            </ul>
        </div>
    )
}

export default Color
