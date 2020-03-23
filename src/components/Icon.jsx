import React from 'react'
import * as Icons from 'react-icons/all'

// Assets 
import '../assets/styles/components/Icon.scss'
import { MdErrorOutline } from 'react-icons/all'

const Icon = ({name, className}) => {

    if (Icons[name] !== undefined) {
        const SelectedIcon = Icons[name]({className})
    
        return (
            <div className='icon__wrapper'>
                {SelectedIcon}
            </div>
        )
    } else {
        return (
            <div className="icon__wrapper">
                <MdErrorOutline className={className}/>
            </div>
        )
    }
}

export default Icon 