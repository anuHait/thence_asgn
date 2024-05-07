import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import AskQuestion from '../components/AskQuestion'
function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Navbar /> 
     <Landing />
      <AskQuestion />
      <Footer />
    </div>
  )
}

export default Home
