import { useContext, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import WelcomeSection from '../components/sections/WelcomeSection';
import LadenSection from '../components/sections/LadenSection';
import GroendakenSection from '../components/sections/GroendakenSection';
import AmbassadeursSection from '../components/sections/AmbassadeursSection';
import NavbarContext from '../components/contexts/NavbarContext';
import DesktopSections from '../components/sections/DesktopSections'; // Import the desktop sections component

const HomePage = () => {
  const navbarHeight = useContext(NavbarContext);
  const swiperRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--navbar-height',
      `${navbarHeight}px`
    );
  }, [navbarHeight]);

  const handleScrollDown = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <>
      {/* Mobile View */}
      <div className='relative block lg:hidden'>
        <Swiper
          onSwiper={swiper => (swiperRef.current = swiper)}
          direction='vertical'
          slidesPerView={1}
          className='h-[calc(100svh-var(--navbar-height))]'
          mousewheel={{ forceToAxis: true }}
        >
          <SwiperSlide>
            <WelcomeSection handleScrollDown={handleScrollDown} />
          </SwiperSlide>
          <SwiperSlide className='h-[calc(100svh-var(--navbar-height))]'>
            <LadenSection />
          </SwiperSlide>
          <SwiperSlide className='h-[calc(100svh-var(--navbar-height))]'>
            <GroendakenSection />
          </SwiperSlide>
          <SwiperSlide className='h-[calc(100svh-var(--navbar-height))]'>
            <AmbassadeursSection />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Desktop View */}
      <div className='hidden lg:block'>
        <DesktopSections />
        <div></div>
      </div>
    </>
  );
};

export default HomePage;
