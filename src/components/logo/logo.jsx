import React from 'react'
import logoPic from '../../imgs/anonyms.png'

export default function Logo() {
  return (
    <span className='relative flex items-center'>
        <div className='flex items-center'><img src={logoPic} alt='Anonyms Logo' className='w-32 h-auto rounded-full' /></div><div className='-ml-8 text-red-400 font-mediun'>ANONYMS</div>
    </span>
  )
}
