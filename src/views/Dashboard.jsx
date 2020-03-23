import React from 'react'

// Assets
import '../assets/styles/views/Dashboad.scss'

const Dashboard = () => {
    return (
        <div className='view__wrapper'>
            <h1>Hola Soy el Dashboard principal</h1>

            <div className="grid">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    )
}

export default Dashboard