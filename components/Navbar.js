import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/Ai';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center shadow-xl '>
      <div className='logo'>
      <Link href={"/"}><a><Image src="/logo-modified.png" alt='' height={70} width={100}/></a></Link>
      </div>
      
      <div className='nav px-5 py-5 font-bold text-lg'>
        <ul className='flex  space-x-2'>
          <Link href={'/tshirt'}><a><li>T-shirt</li></a></Link>
          <Link href={'/mug'}><a><li>Mug</li></a></Link>
          <Link href={'/hoddies'}><a><li>Hoodies</li></a></Link>
         
        </ul>
        
      </div>
      <div className='cart absolute right-0 px-2 py-2 text-3xl  md:text-6xl'>
       <AiOutlineShoppingCart/>
      </div>
      
    </div>
  )
}

export default Navbar