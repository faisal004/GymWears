import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/Ai';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center'>
      <div className='logo'>
      <Image src="/logo-modified.png" alt='' height={70} width={100}/>
      </div>
      
      <div className='nav px-5 py-5 font-semibold'>
        <ul className='flex  space-x-2'>
          <Link href={'/'}><a><li>T-shirt</li></a></Link>
          <Link href={'/'}><a><li>Mug</li></a></Link>
          <Link href={'/'}><a><li>Hoodies</li></a></Link>
          <Link href={'/'}><a><li>Jacket</li></a></Link>
        </ul>
        
      </div>
      <div className='cart absolute right-0 px-2 py-2 text-3xl  md:text-6xl'>
       <AiOutlineShoppingCart/>
      </div>
      
    </div>
  )
}

export default Navbar