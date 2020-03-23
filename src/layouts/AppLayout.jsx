import React from 'react'

import SideNav from '../components/SideNav'

const AppLayout = ({children}) => (
    <div className='App'>
        <SideNav>
            {children}
        </SideNav>
    </div>
) 

export default AppLayout