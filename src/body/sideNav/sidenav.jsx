import React from 'react'

export default function SideNav() {
  return (
    <div className="relative h-screen flex items-center justify-end">
    <ul className="absolute right-0 top-1/1 transform -translate-y-1/2 space-y-4 " >
        <li className=" "><a href="#" className="block [writing-mode:vertical-lr] text-white-500 hover:text-orange-600 font-semibold" >ABOUT</a></li>
        <li className=""><a href="#" className="block [writing-mode:vertical-lr] text-white-500 hover:text-orange-600 font-semibold " >PROJECTS</a></li>
        <li className=""><a href="#" className="block [writing-mode:vertical-lr] text-white-500 hover:text-orange-600 font-semibold" >CONTACT</a></li>
    </ul>
    </div>
  )
}
