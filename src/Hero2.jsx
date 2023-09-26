import React from 'react'
import img from './pics/portraits/1.png'

const Hero2 = () => {
    return (
        <div className='min-w-screen h-screen flex items-center color_secondry'>
            <section className='flex justify-start w-full'>
                <div className='w-6/12 h-full flex justify-center'>
                    <div className='w-6/12 h-11/12'>
                        <img className='w-full h-full' src={img} class="" alt="" />
                    </div>
                </div>
                <div className='w-6/12 flex justify-center items-center'>
                    <div className='w-full px-auto -mt-20'>
                        <h2 className='text-left text-2xl font_heading uppercase text_primary'>here is a sneak peak</h2>
                        <p className='text-left pt-6 pb-14 pr-10 font_regular text_primary tracking-wide h-2'>Welcome to our extraordinary NFT experience, a portal where you're invited to embark on an enchanting journey into the realm of AI-generated artistry. Here, you're presented with a rare opportunity to claim ownership of an exquisite masterpiece, a digital marvel crafted in the image of our cherished Zakeriya. Simply click the button below, and you'll take a profound step towards possessing an exclusive work of digital art that captures the very soul and essence of Zakeriya in a manner unparalleled and previously unexplored.</p>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Hero2