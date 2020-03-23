import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import classNames from 'classnames'

// Assets
import '../assets/styles/components/SideNav.scss'

// Components
import SideNavModule from './SideNavModule'

const SideNav = ({children}) => {

    const [visible, setVisibility] = useState(false)

    const handleChangueVisibility = () => {
        console.log(visible)
        setVisibility(!visible)
    }

    const modules = [
        {
            hasSubroutes: false,
            name: 'Home',
            route: '/home',
            icon: 'AiOutlineHome'  
        },
        {
            hasSubroutes: false,
            name: 'Perfil de Usuario',
            route: '/user_profile',
            icon: 'FiUser'
        },
        {
            hasSubroutes: true,
            name: 'Administración',
            route: '/management',
            icon: 'AiOutlineApartment',
            subroutes: [
                {
                    name: 'Usuarios',
                    route: '/management/users',
                    icon: 'FiUsers'
                },
                {
                    name: 'Cargos',
                    route: '/management/job_titles',
                    icon: 'MdWork'
                },
                {
                    name: 'Roles',
                    route: '/management/roles',
                    icon: 'AiOutlineSolution'
                }
            ]
        },
        {
            hasSubroutes: true,
            name: 'Módulos',
            route: '/modules',
            icon: 'AiOutlineApi',
            subroutes: [
                {
                    name: 'Agregar Módulo',
                    route: '/modules/add',
                    icon: 'IoMdAdd'
                },
                {
                    name: 'Eliminar Módulo',
                    route: '/modules/del',
                    icon: 'IoMdRemove'
                }
             ]
        },
        {
            hasSubroutes: true,
            name: 'Control Operativo',
            route: '/operative_control',
            icon: 'AiOutlineLineChart',
            subroutes: [
                {
                    name: 'Contratos',
                    route: '/operative_control/contracts',
                    icon: 'TiDocumentText'
                },
                {
                    name: 'Personal',
                    route: '/operative_control/staff',
                    icon: 'AiOutlineTeam'
                },
                {
                    name: 'Actividades',
                    route: '/operative_control/activities',
                    icon: 'GoTasklist'
                },
                {
                    name: 'Estado de Ejecución',
                    route: '/operative_control/status',
                    icon: 'AiOutlinePieChart'
                }
             ]
        },
        {
            hasSubroutes: true,
            name: 'Inventarios',
            route: '/inventary',
            icon: 'MdStorage',
            subroutes: [
                {
                    name: 'Bodegas',
                    route: '/inventary/warehoses',
                    icon: 'FaWarehouse'
                },
                {
                    name: 'Entradas',
                    route: '/inventary/inputs',
                    icon: 'AiOutlineImport'
                },
                {
                    name: 'Traspasos',
                    route: '/inventary/exchange',
                    icon: 'FaExchangeAlt'
                }
            ]
        },
        {
            hasSubroutes: true,
            name: 'Certificados',
            route: '/certificates',
            icon: 'AiOutlineFileProtect',
            subroutes: [
                {
                    name: 'Cargar desde archivo',
                    route: '/certificates/loadcsv',
                    icon: 'FaFileCsv'
                },
                {
                    name: 'Reconocimiento Optico',
                    route: '/certificate/recognition',
                    icon: 'GiCyberEye'
                }
            ]
        },
        {
            hasSubroutes: false,
            name: 'Cerrar Sesión',
            route: '/logout',
            icon: 'AiOutlineLogout'
        }
    ]

    return (
        <div className='main__container'>
            <div className={classNames("hamburguer__control--wrapper", {'open': visible})}>
                <label htmlFor="h__check" className='hamburguer__label'>
                    {
                        visible
                        ? (<IoMdClose className='hamburguer__icon'/>)
                        : (<IoMdMenu  className='hamburguer__icon'/>)
                    }
                </label>
                <input 
                    type="checkbox" 
                    name="hamburguer" 
                    id="h__check"
                    onClick={
                        handleChangueVisibility
                    }
                    />
            </div>
            <nav className={classNames("sidenav__main--wrapper", {'hide' : !visible, 'show' : visible})}>

                <div className="user__section">
                    <img src="" alt="" className="user__avatar"/>
                    <h1 className="user__name">Edwin Jair Villota Calderon</h1>
                    <h2 className="user__jobtitle">Asistente Administrativo</h2>
                    <h3 className="user__rol">Webmaster</h3>
                </div>

                <div className="modules__section">
                    {
                        modules.map((m, i) => (
                            <SideNavModule 
                                key={i}
                                module = {m}
                                />
                        ))
                    }
                </div>
            </nav>
            <div className={classNames('main__content', {'content__expanded': !visible}) }>
                {children[0]}
            </div>
        </div>
    )
}

export default SideNav
