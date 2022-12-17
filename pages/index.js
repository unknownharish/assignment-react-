import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'

import handler from '../Mongodb/connect'

export default function Home() {


 


  return (
    <>
      <Header />
      <Main />

    </>
  )
}
