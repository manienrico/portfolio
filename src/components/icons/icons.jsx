import { TbBrandBadoo } from "react-icons/tb";
import { ImHangouts } from "react-icons/im";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineX } from "react-icons/ai";
import React from 'react'

export default function SocialIcons() {
  return (
    <div className='flex flex-col'>
      <div className='flex gap-4'>
        <a href="#" className="flex" >
          <AiOutlineX className="w-6 h-6 hover:text-red-500 " />
        </a>
        <a href="#" className="flex" >
          <ImHangouts className="w-5 h-5 hover:text-red-500 " />
        </a>
        <a href="#" className="flex" >
          <TiSocialFacebook className="w-7 h-7 hover:text-red-500 " />
        </a>
        <a href="#" className="flex" >
          <TbBrandBadoo className="w-6 h-6 hover:text-red-500 " />
        </a>
      </div>
    </div>
  )
}
