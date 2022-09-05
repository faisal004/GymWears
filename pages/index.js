

import Image from 'next/image'
import Mid from '../components/Mid' 
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      
      <div>
      <img className=' h-1/4 w-screen' src='/head.png'></img>
      </div>
      
      <Mid/>

      
    </div>
  )
}