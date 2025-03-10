import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <div className='max-w-screen-xl py-6 mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
            <div className='nleft flex items-center'>
            <img src="https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bddf6c495c16eebdb45576_Refokus-w.svg" alt="" />
            <div className='links  flex gap-14 ml-20'>
                {["Home", "Work", "Culture", "", "News"].map((elem, index) => (elem.length === 0 ? <span key={index} className='w-0.5 h-10 bg-zinc-700'></span> : (<a key={index}className='text-sm flex items-center gap-1' href='#'>
                    {index === 1 && (<span style={{ boxShadow: "0 0 0.25em #00FF19" }} className='inline-block w-1.5 h-1.5 bg-green-500 rounded-full'></span>)}
                    {elem}</a>)))}
            </div>
            </div> 
            <Button/>
        </div>
    )
}

export default Navbar
