import React from 'react'
import img from './pics/portraits/1.png'

const Hero2 = ({ totalTokens }) => {
    return (
        <div className='min-w-screen min-h-screen flex justify-center items-center color_secondry'>
            <section className='flex flex-col md:flex-row items-center md:justify-center my-10'>
                <div className='lg:w-4/12 md:w-5/12 w-11/12 md:ml-20 lg:ml-32'>
                    <div className='w-full h-full flex md:block justify-center'>
                        <img className='w-11/12 max-w-xs object-fill' src={img} class="" alt="" />
                    </div>
                </div>
                <div className='md:w-7/12 lg:w-8/12 w-full flex justify-start items-start'>
                    <div className='w-full md:px-6'>
                        <h2 className='text-center md:text-left px-6 my-6 text-2xl font_heading uppercase text_primary'>here is a sneak peak</h2>
                        <p className='text-left font_regular px-6 text_primary tracking-wide'>Welcome to our extraordinary NFT experience, a portal where you're invited to embark on an enchanting journey into the realm of AI-generated artistry. Here, you're presented with a rare opportunity to claim ownership of an exquisite masterpiece, a digital marvel crafted in the image of our cherished Zakeriya. Simply click the button below, and you'll take a profound step towards possessing an exclusive work of digital art that captures the very soul and essence of Zakeriya in a manner unparalleled and previously unexplored.</p>
                        {totalTokens && <p className='text-center font-bold text-2xl px-6 my-20 text_primary tracking-wider'> {totalTokens} NFTs MINTED</p>}
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Hero2