import React from 'react';
import '../assets/styles/views/Home.scss';

// Layout
import LandingPage from '../layouts/LandingPage';

// Components
import Service from '../components/Service';

const services = [
  {
    img: 'https://material-electrico.cdecomunicacion.es/media/articles/26692/1524822475-amara-acuerdo-con-fabricante-ziv-smart-meter-2.jpg',
    title: 'Medición avanzada',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero earum, saepe necessitatibus obcaecati, possimus quibusdam eius ipsum nemo, ullam aperiam nobis architecto culpa placeat voluptates ea itaque harum. Illo, rem!',
  },
  {
    img: 'https://emcartago.com/wp-content/uploads/2018/08/energia.jpg',
    title: 'Macromedición',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, itaque inventore. Illum dolorem saepe, temporibus sunt eligendi illo harum pariatur rem! In sed sequi libero maiores consectetur vitae omnis ducimus.',
  },
  {
    img: 'https://www.ciudadregion.com/files/2016/11/IMAGEN_1478931486-1280x720.jpg',
    title: 'Micromedición',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatem inventore ad tempora quod sint libero aliquam sed, placeat necessitatibus omnis perferendis illum consequuntur amet dolores, accusamus fuga non provident?',
  },
];

const Home = () => (
  <LandingPage>
    <div className='home__container'>
      <section className='home__banner--section'>
        <div className='banner__background' />
        <h1 className='banner__main--title'>MEDIDAS ELECTRÓNICAS CENTRALIZADAS</h1>
        <h3 className='banner__main--subtitle'>&quotEl futuro de la medición electrónica en tus manos.&quote</h3>
      </section>

      <section className='home__services--section'>
        <h1 className='section__title'>Nuestros Servicios</h1>
        <div className='services__wrapper'>
          {
            services.map((s, i) => <Service key={s.title} service={s} />)
          }
        </div>
      </section>

      <section className='home__contact--section' />
    </div>
  </LandingPage>
);

export default Home;
