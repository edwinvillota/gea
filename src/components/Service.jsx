import React from 'react'
import '../assets/styles/App.scss'


const Service = (props) => {

    const s = props.service

    return (
        <div className='service__wrapper'>
            <div className='service__img' 
                 style={{
                     backgroundImage: `url(${s.img})`
                 }}>

            </div>
            <div className='service__info'>
                <h2 className='service__title'>
                    {s.title}
                </h2>
                <p className='service__content'>
                    {s.content}
                </p>
            </div>
        </div>
    )
}

export default Service