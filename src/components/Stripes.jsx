import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    let data = [
        {url: 'https://gplclub.co/wp-content/uploads/2024/09/awwwards.webp', number: 48},
        {url: 'https://cdn.prod.website-files.com/60d28377885e0106c1158a35/60f994287e430578361f38ab_logo-full-light.svg', number: 28},
        {url: 'https://gplclub.co/wp-content/uploads/2024/09/css-design-awards-copy.webp', number: 1},
        {url: 'https://gplclub.co/wp-content/uploads/2024/09/awwwards.webp', number: 48},
        {url: 'https://cdn.prod.website-files.com/60d28377885e0106c1158a35/60f994287e430578361f38ab_logo-full-light.svg', number: 28},
        {url: 'https://gplclub.co/wp-content/uploads/2024/09/css-design-awards-copy.webp', number: 1},
    ]
    return (
        <div className='flex items-center mt-32'>
            {data.map((elem, index) => (
                <Stripe key={index} val={elem} index={index} />
            ))}
        </div>
    )
}

export default Stripes