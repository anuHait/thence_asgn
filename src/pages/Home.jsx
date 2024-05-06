import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Navbar /> 
      <Footer />
    </div>
  )
}

export default Home
