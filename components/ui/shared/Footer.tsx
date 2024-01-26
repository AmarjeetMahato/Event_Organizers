import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='border-t '>
       <div className='flex-center wrapper flex flex-col flex-between gap-4 p-5 text-center sm:flex-row'>
           <Link href='/'>
                 logo
           </Link>

           <p className='text-[16px]'>2024 Evently. All Rights Reserved</p>
       </div>
    </footer>
  )
}

export default Footer