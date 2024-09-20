import React from 'react'

function Stripe({ val, index }) {
    return (
      <div className={`w-[16.666%] h-16 px-8 py-2 border-zinc-600 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] flex items-center justify-between
        ${index === 0 && 'border-l-[1.2px]'}`}>
          <img className='h-6 object-contain' src={val.url} alt="logo" />
          <span className='font-semibold'>{val.number}</span>
      </div>
    )
  }

export default Stripe