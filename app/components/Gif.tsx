import React from 'react'
import gifka from '../../public/monters/7.jpg'
import Image from 'next/image'

const Gif = () => {
  return (
    <div  className='flex flex-row justify-center align-center z-10 gap-2 mr-4'>
        <div className='flex flex-col items-center justify-center color-white'style={{color: '#fff'}} >
            <h1 className='font-sans bold' style={{
                fontSize: '6rem',
                fontWeight: '900',
            }}>MINT</h1>
            <h1 className='color-yellow ' style={{
                fontSize: '6rem',
                fontWeight: '900',
                color: 'greenyellow'
            }}>15.11</h1>
            <h2 style={{
                fontSize: '3rem',
                fontWeight: '900',
            }}>On Opensea</h2>
        </div>
        <Image 
        alt=" " 
        src={gifka} 
        // className={} 
        width={500} 
        height={500}
        style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '1em'
          }}
        />
    </div>
  )
}

export default Gif