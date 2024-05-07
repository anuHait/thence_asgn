import React from 'react'
import Accordian from './Accordian'
function AskQuestion() {
  return (
    <div className='m-5 shadow-md flex flex-col lg:flex-row bg-[#e8eee7] rounded-[40px] p-12 gap-4 items-start justify-between '>
    <div className='flex flex-col gap-2 ml-1 lg:ml-10'>
    <h1 className="text-neutral-400 font-normal font-custom text-xl md:text-2xl leading-9">What’s on your mind</h1>
    <p className='leading-[66px] text-zinc-900 text-2xl md:text-5xl font-semibold'>Ask Questions</p>

    </div>
      <Accordian />
    </div>
  )
}

export default AskQuestion
