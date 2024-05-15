import Hero from './../components/Hero';
import TopHero from './../components/TopHero';
import ladenImage from '../images/charging_station.svg';
import houseImage from '../images/house.webp';
import ambassadorImage from '../images/ambassador.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
// import fetchUser from '../apis/UserAPI';
import 'swiper/css';
import { useRef, useState, useEffect } from 'react';

const HomePage = () => {
  // const location = useLocation();
  // const email = location.state?.email;
  // const [name, setName] = useState('Loading...');
  const [swiperHeight, setSwiperHeight] = useState('calc(100vh - 72px)');

  const sections = [
    {
      title: 'Laden',
      subtitle:
        'Je bent op zoek naar een laadpaal of laadpas om jouw elektrische auto op te laden, maar je wilt dit wel zo duurzaam mogelijk doen. Alle producten van Alfen bestaan uit A-kwaliteit componenten en dankzij onze samenwerking met Trees for All zorgen we dat er voor iedere laadpaal een boom geplant wordt.',
      imgSource: ladenImage,
      bgColor: 'bg-hero',
    },
    {
      title: 'Groendaken',
      subtitle:
        'Direct bijdragen aan de biodiversiteit in jouw wijk? Kies voor een groendak met sedumbedekking. Een groendak kent vele voordelen zoals warmteregulatie, luchtzuivering, energiebesparing en nog veel meer! Een investering die je dus altijd terug verdiend.',
      imgSource: houseImage,
      bgColor: 'bg-hero',
    },
    {
      title: 'Ambassador',
      subtitle:
        'Wil jij zelf ook een bijdrage leveren en een positieve impact maken in de wereld? Meld je aan als ambassadeur en maak het verschil! Het mooie aan dit ambassadeurschap is dat er ook nog voordelen voor jou aanhangen zoals mooie duurzame cadeau’s. Klik op de button en ontdek alle voordelen.',
      imgSource: ambassadorImage,
      bgColor: 'bg-hero',
    },
  ];
  useEffect(() => {
    const updateSwiperHeight = () => {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      setSwiperHeight(`calc(${window.innerHeight}px - ${navbarHeight}px)`);
    };

    updateSwiperHeight();

    window.addEventListener('resize', updateSwiperHeight);
    window.addEventListener('orientationchange', updateSwiperHeight);

    return () => {
      window.removeEventListener('resize', updateSwiperHeight);
      window.removeEventListener('orientationchange', updateSwiperHeight);
    };
  }, []);

  return (
    <Swiper
      direction='vertical'
      slidesPerView={1}
      keyboard={true}
      style={{ height: swiperHeight }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
    >
      <SwiperSlide>
        <TopHero />
      </SwiperSlide>
      {sections.map((section, index) => (
        <SwiperSlide key={index}>
          <Hero {...section} textColor='text-primary' />
        </SwiperSlide>
      ))}
      <div className='swiper-button-prev'></div>
      <div className='swiper-button-next'></div>
    </Swiper>
  );
};

export default HomePage;
