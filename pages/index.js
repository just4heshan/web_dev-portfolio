import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Heshan Rathnayake | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='snap-y snap-mandatory h-[100vh] w-screen overflow-scroll'>
        {/* <div id='about' className='snap-start bg-amber-200 w-screen h-full flex items-center justify-center text-8xl'>1</div> */}
        <Hero />
        <div id='skills' className='snap-start bg-cyan-200 w-screen h-full flex items-center justify-center text-8xl'>2</div>
        <div id='works' className='snap-start bg-teal-200 w-screen h-full flex items-center justify-center text-8xl'>3</div>
        <div id='contact' className='snap-start bg-fuchsia-200 w-screen h-full flex items-center justify-center text-8xl'>4</div>
      </div>
    </div>
  )
}
