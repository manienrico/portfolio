import React from 'react'
import CompanyInfo from '../CompanyInfo/CompanyInfo'
import SocialIcons from '../../components/icons/icons'

export default function Footer() {
  return (
    <footer className='absolute bottom-10 w-full float-end  '>
      <div className=' mx-auto flex flex-col md:flex-row justify-between '>
          <div className='float-left '><CompanyInfo /></div>
          <div className='float-right '><SocialIcons /></div>
      </div>
    </footer>
  )
}
