import React from 'react'
import one from './pics/portraits/1.png';
import two from './pics/portraits/2.png';
import three from './pics/portraits/3.png';
import four from './pics/portraits/4.png';
import five from './pics/portraits/5.png';
import six from './pics/portraits/6.png';
import uris from './meta/allUri.json';

const Hero3 = ({ web3Api, mint }) => {
    const all = [
        {
            name: "ZKY's Ethereal Elegance",
            link: one,
            uri: uris.one
        },
        {
            name: "ZKY's AI Mirage",
            link: two,
            uri: uris.two
        },
        {
            name: "ZKY's Code Canvas",
            link: three,
            uri: uris.three
        },
        {
            name: "The Cybernetic ZKY",
            link: four,
            uri: uris.four
        },
        {
            name: "ZKY's Pixel Persona",
            link: five,
            uri: uris.five
        },
        {
            name: "Synthetic ZKY Symphony",
            link: six,
            uri: uris.six
        },
    ]
    const handleMint = async (uri) => {
        if (web3Api?.signer) {
            await mint({ address: web3Api.signer.address, uri });
        } else {
            console.log('connect metamask first');
        }
    }

    return (
        <div className='min-w-screen min-h-screen flex justify-center items-center color_primary'>
            <div className='lg:w-10/12 md:w-11/12 w-full my-10 flex flex-wrap justify-center items-center'>
                {
                    all.map((item, id) => {
                        return <div key={id} className='lg:w-4/12 md:w-6/12 w-11/12 flex my-6 flex-col items-center'>
                            <img src={item.link} className='w-11/12 max-w-xs object-fill' alt="" />
                            <button onClick={() => { handleMint(item.uri) }} className='w-10/12 max-w-xs mt-3 bg-white lg:py-8 md:py-7 py-6 capitalize font_heading text_secondry'>{item.name}</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Hero3