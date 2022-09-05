

import Image from 'next/image'
import Mid from '../components/Mid' 
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      
      
      <Image src="/head.png" alt="" height={600} width={1500}/>
      
      <Mid/>

      
    </div>
  )
}