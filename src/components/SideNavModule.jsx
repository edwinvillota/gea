import React, { useState } from 'react'
import classnames from 'classnames'

// Assets
import '../assets/styles/components/SideNavModule.scss'

// Components
import Icon from './Icon'
import SideNavModulesSubroute from './SideNavModulesSubroute'

const SideNavModule = ({module}) => {
    
    const [expanded, setExpand] = useState(false)

    const handleChangueExpand = (event) => {
        setExpand(event.target.checked)
    }

    if (!module.hasSubroutes) {
        return (
            <div className="module__wrapper">
                <Icon 
                    name={module.icon}
                    className='module__icon'
                    />
                <h3 className='module__name'>
                    {module.name}
                </h3>
                <Icon 
                    name='AiOutlineRight'
                    className='expand__icon'
                    />
            </div>
        )
    } else {
        console.log(module)
        return (
            <div className="module__subroutes--wrapper">
                <div className="main__module--route">
                    <Icon 
                        name={module.icon}
                        className='module__icon'
                        />
                    <h3 className='module__name'>
                        {module.name}
                    </h3>
                    <label htmlFor={`expand__label--${module.name}`} className='expand__label'>
                        <Icon 
                            name='AiOutlineDown'
                            className='expand__icon'
                            />
                    </label>
                    <input type="checkbox" className='expand__checkbox' id={`expand__label--${module.name}`} onChange={handleChangueExpand}/>
                </div>
                <div className={classnames("subroutes__module--wrapper", {'subroutes__expanded': expanded})}>
                    {
                        module.subroutes.map((sr, i) => (
                            <SideNavModulesSubroute key={i} subroute={sr}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default SideNavModule