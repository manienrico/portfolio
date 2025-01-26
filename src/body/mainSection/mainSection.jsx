import React from 'react'
import pic from "../../imgs/profile.png"
import Footer from '../Footer/Footer'

export default function MainSection() {
  return (
    <section className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-screen z-10   '>
      <div className='w-80 h-80 rounded-full border-[1rem] border-red-500'>
        <img src={pic} alt='Profile picture' className='rouded-full' />
      </div>
      <Footer />
    </section>
  )
}
