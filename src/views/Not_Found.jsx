import React from 'react'

// Assets
import '../assets/styles/views/NotFound.scss'

// Components
import Navbar from '../components/Navbar'


const NotFound = () => {

    return (
        <div className="notfound__container">
            <section className="message__section">
                <h1 className="message__title">
                    Ops! Error 404 Not Found
                </h1>
                <h3 className="message__subtitle">
                    La página no existe. 
                </h3>
            </section>
        </div>
    )
}

export default NotFound