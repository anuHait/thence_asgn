import React from 'react'
import { MdOutlineCopyright } from "react-icons/md";

function Footer() {
  return (
    <div className='m-5 shadow-md flex flex-row items-center font-custom2 bg-neutral-100 rounded-[35px] h-32 justify-between p-4'>
       <span className='flex flex-row gap-1 items-center'>
       <MdOutlineCopyright className='text-xl text-zinc-600'/>
       <div className="text-zinc-600 text-sm font-medium leading-tight">Talup 2023. All rights reserved</div>
       </span>
       <div className='flex flex-row gap-7 mr-4'>
       <h1 className='text-sm underline	 text-zinc-700'>Terms & Conditions</h1>
       <h1 className='text-sm underline	 text-zinc-700'>Privacy policy</h1>
       </div>
    </div>
  )
}

export default Footer
