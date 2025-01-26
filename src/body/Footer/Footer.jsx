import React from 'react'
import CompanyInfo from '../CompanyInfo/CompanyInfo'
import SocialIcons from '../../components/icons/icons'

export default function Footer() {
  return (
    <footer className='absolute bottom-0 flex justify-between z-9'>
        <div>
        <CompanyInfo />
        </div>
        <div><SocialIcons /></div>
        
    </footer>
  )
}
