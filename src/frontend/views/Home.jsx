import React from 'react';
import '../assets/styles/views/Home.scss';

// Layout
import LandingPage from '../layouts/LandingPage';

// Components
import Service from '../components/Service';

const services = [
  {
    img: 'https://ingelectrical.com/public/img/servicios/redes-electricas.jpg',
    title: 'Mantenimiento de Redes Eléctricas',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero earum, saepe necessitatibus obcaecati, possimus quibusdam eius ipsum nemo, ullam aperiam nobis architecto culpa placeat voluptates ea itaque harum. Illo, rem!',
  },
  {
    img: 'https://www.tecsaqro.com.mx/wp-content/uploads/2019/09/habilidades_tecnico_electricista_4.jpg',
    title: 'Control de Pérdidas',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, itaque inventore. Illum dolorem saepe, temporibus sunt eligendi illo harum pariatur rem! In sed sequi libero maiores consectetur vitae omnis ducimus.',
  },
  {
    img: 'https://www.megapractical.com/hubfs/BLOG/Depositphotos_141817454_s-2015.jpg',
    title: 'Soluciones a Medida',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatem inventore ad tempora quod sint libero aliquam sed, placeat necessitatibus omnis perferendis illum consequuntur amet dolores, accusamus fuga non provident?',
  },
];

const Home = () => (
  <LandingPage>
    <div className='home__container'>
      <section className='home__banner--section'>
        <div className='banner__background' />
        <h1 className='banner__main--title'>MENTE ÁGIL S.A.S.</h1>
        <h3 className='banner__main--subtitle'>Mejorando con cada ciclo.</h3>
      </section>

      <section className='home__services--section'>
        <h1 className='section__title'>SERVICIOS</h1>
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
