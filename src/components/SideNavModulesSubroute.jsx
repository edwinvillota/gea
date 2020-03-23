import React from 'react'

// Assets
import '../assets/styles/components/SideNavModulesSubroute.scss'

// Components
import Icon from '../components/Icon'

const SideNavModulesSubroute = ({subroute}) => (
    <div className="sidenav__subroute--wrapper">
        <Icon
            className='subroute__icon'
            name={subroute.icon}
            />
        <h4 className="subroute__name">
            {subroute.name}
        </h4>
        <Icon
            className='subroute__action--icon'
            name='AiOutlineRight'
            />
    </div>
)

export default SideNavModulesSubroute