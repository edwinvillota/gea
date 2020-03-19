import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'




const LandingPage = ({children}) => (
    <div className="App">
        <Navbar />
        {children}
        <Footer />
    </div>
)

export default LandingPage