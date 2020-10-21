import React from 'react';
import '../assets/styles/App.scss';

const Service = (props) => {

  const { service } = props;

  return (
    <div className='service__wrapper'>
      <div
        className='service__img'
        style={{
          backgroundImage: `url(${service.img})`,
        }}
      />
      <div className='service__info'>
        <h2 className='service__title'>
          {service.title}
        </h2>
        <p className='service__content'>
          {service.content}
        </p>
      </div>
    </div>
  );
};

export default Service;
