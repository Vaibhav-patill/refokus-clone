import React from 'react'

function Stripe({val}) {
  return (
    <div className="w-[16.66%] px-10 py-3 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-[1px] flex justify-between gap-5 items-center border-zinc-600">
      <img src={val.url} alt="" />
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
