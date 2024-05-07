import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Landing from '../components/Landing'

function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Navbar /> 
     <Landing />
      <Footer />
    </div>
  )
}

export default Home
