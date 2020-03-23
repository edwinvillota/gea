import React from 'react'

// Assets
import '../assets/styles/components/Footer.scss'

const Footer = () => {
    return (
        <footer className='home__footer'>
            <div className='footer__wrapper'>
                <div className='footer__column'>
                    <h2 className='footer__title'>
                        Información de contacto
                    </h2>
                    <ul className='footer__list'>
                        <li className='footer__list--item'>Dirección: Cra 37 # 12 - 84 La Castellana </li>
                        <li className='footer__list--item'>Teléfono: 7377196</li>
                        <li className='footer__list--item'>Email: info@mec-bpo.com</li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h2 className='footer__title'>
                        Servicios
                    </h2>
                    <ul className='footer__list'>
                        <li className='footer__list--item'>Medición Avanzada AMI</li>
                        <li className='footer__list--item'>Macromedición</li>
                        <li className='footer__list--item'>Micromedición</li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h2 className='footer__title'>
                        SIG
                    </h2>
                    <ul className='footer__list'>
                        <li className='footer__list--item'>Políticas</li>
                        <li className='footer__list--item'>SG-SST</li>
                        <li className='footer__list--item'>Certificaciones</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer