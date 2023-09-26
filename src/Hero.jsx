import React from 'react'
import heroPic from './pics/hero.png';


const Hero = () => {
    const connect = true;
    return (
        <div className='min-w-screen color_primary'>
            <nav className='h-24 flex justify-between items-center mx-5 md:mx-40'>
                <h2 className='font_heading text-2xl tracking-wider text_secondry'>ZKY</h2>
                <div className='flex gap-8 items-center'>
                    {connect ? <p className='font_regular text_secondry'>0x000...00000</p> : <></>}
                    <button className='btn_primary text_secondry'>{connect ? 'logout' : 'wallet connect'}</button>
                </div>
            </nav>
            <section className='flex justify-around w-full h-8/12'>
                <div className='w-6/12 flex justify-center items-center'>
                    <div className='w-full px-auto'>
                        <h2 className='text-center text-7xl font_heading uppercase text_secondry'>mint now</h2>
                        <p className='text-center pt-6 px-8 pb-14 font_regular text_secondry '>Embark on a captivating journey and experience the extraordinary prowess of artificial intelligence as it unveils the world of art in a way you've never witnessed before.</p>
                        <div className='flex justify-center'>
                            <button className='btn_primary text_secondry'>mint zky</button>
                        </div>
                    </div>
                </div>
                <div className='w-5/12'>
                    <img className='w-full object-cover' src={heroPic} class="" alt="" />
                </div>
            </section>

        </div>
    )
}

export default Hero