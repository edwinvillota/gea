import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import '../assets/components/Navbar.scss'
import WhiteLogo from '../assets/static/white_logo.png'

const Navbar = () => {
    return (
        <nav className='home__menu'>
        <img className='menu__logo' src={WhiteLogo} />
            <ul className='menu__ul'>
                <li className='menu__item'>
                    <Link  className='menu__link' to='/'>Inicio</Link>
                </li>
                <li className='menu__item'>
                    <Link  className='menu__link' to='/notfound'>Servicios</Link>
                </li>
                <li className='menu__item'>
                    <Link  className='menu__link' to='/login'>Gea</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar