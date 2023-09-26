import React from 'react'
import one from './pics/portraits/1.png';
import two from './pics/portraits/2.png';
import three from './pics/portraits/3.png';
import four from './pics/portraits/4.png';
import five from './pics/portraits/5.png';
import six from './pics/portraits/6.png';

const Hero3 = () => {
    const all = [
        {
            name: "ZKY's Ethereal Elegance",
            link: one,
            metadata: null
        },
        {
            name: "ZKY's AI Mirage",
            link: two,
            metadata: null
        },
        {
            name: "ZKY's Code Canvas",
            link: three,
            metadata: null
        },
        {
            name: "The Cybernetic ZKY",
            link: four,
            metadata: null
        },
        {
            name: "ZKY's Pixel Persona",
            link: five,
            metadata: null
        },
        {
            name: "Synthetic ZKY Symphony",
            link: six,
            metadata: null
        },
    ]

    return (
        <div className='min-w-screen min-h-screen flex justify-center items-center color_primary'>
            <div className='w-9/12 my-10 flex flex-wrap justify-between items-center'>
                {
                    all.map(item => {
                        return <div className='w-84 flex my-6 flex-col items-center'>
                            <img src={item.link} className='w-9/12 object-fill' alt="" />
                            <button className='w-9/12 mt-3 bg-white py-8 capitalize font_heading text_secondry'>{item.name}</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Hero3