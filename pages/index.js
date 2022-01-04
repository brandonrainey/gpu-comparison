import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Chart from '../components/Chart'
import { gpuData } from '/gpu-data'
import { newGpuData } from '../newGpuData'

export default function Home() {

  const [nvidiaCards, setNvidiaCards] = useState([])

  useEffect(() => {
    
  }, [])

  
  return (
    <div className='mainContainer'>
      <Chart />
    </div>
  )
}
