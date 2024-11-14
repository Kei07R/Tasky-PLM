import React from 'react'
import './landing.css'
import Navbar from './components/navbar/Navbar'
import SignUp from './components/signUp/SignUp'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'

const Landing = () => {
  return (
    <div className="landingContainer">
      <div className="landingNav">
      <Navbar />
      </div>

      <div className='landingSignUp'>
      <SignUp />
      </div>
      
      <div>
      <Faq />
      </div>

      <div>
      <Footer />
      </div>

    </div>
  )
}

export default Landing
