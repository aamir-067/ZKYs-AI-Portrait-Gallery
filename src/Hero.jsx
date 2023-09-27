import React from 'react'
import heroPic from './pics/hero.png';


const Hero = ({ web3Api, setWeb3Api, ini }) => {
    const scrollToSection = () => {
        const section = document.getElementById('allNfts');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='min-w-screen color_primary'>
            <nav className='h-24 flex justify-between items-center mx-5 md:mx-20 lg:mx-40'>
                <h2 className='font_heading md:text-2xl text-xl  tracking-wider text_secondry'>ZKY</h2>
                <div className='flex md:gap-8 gap-4 items-center'>
                    {web3Api?.signer ? <p className='font_regular text_secondry'>{`${[...web3Api.signer.address].slice(0, 6).join("")}....${[...web3Api.signer.address].slice(37, 42).join("")}`}</p> :
                        <button onClick={async () => {
                            await ini();
                        }} className='btn_primary text_secondry'>wallet connect</button>}
                    {web3Api?.signer ? <button onClick={() => { setWeb3Api({ provider: null, contract: null, signer: null }) }} className='btn_primary text_secondry'>logout</button> : <></>}
                </div>
            </nav>
            <section className='flex flex-col md:flex-row items-center justify-around w-full h-8/12'>
                <div className='md:w-6/12 w-11/12 flex justify-center items-center'>
                    <div className='w-full px-auto'>
                        <h2 className='text-center md:text-5xl text-3xl lg:text-7xl font_heading uppercase text_secondry'>mint now</h2>
                        <p className='text-center pt-6 md:px-8 md:pb-8 lg:pb-14 font_regular text_secondry '>Embark on a captivating journey and experience the extraordinary prowess of artificial intelligence as it unveils the world of art in a way you've never witnessed before.</p>
                        <div className='flex justify-center'>
                            <button onClick={scrollToSection} className='btn_primary my-8 md:my-0 text_secondry'>mint zky</button>
                        </div>
                    </div>
                </div>
                <div className='lg:w-5/12 md:w-6/12 md:mx-6 w-10/12 mb-8'>
                    <img className='w-full object-cover' src={heroPic} class="" alt="" />
                </div>
            </section>

        </div>
    )
}

export default Hero