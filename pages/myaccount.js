import React from 'react'
import { useEffect } from 'react'
import { useRouter } from "next/router";

const Myaccount = () => {
    const router = useRouter();
    useEffect(() => {
		if (!localStorage.getItem('token')){
		  router.push('/')
		}
	  
		
	  }, [])
  return (
    <div>Myaccount</div>
  )
}

export default Myaccount