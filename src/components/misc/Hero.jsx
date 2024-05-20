import { SwiperSlide } from 'swiper/react';

const Hero = ({ title, subtitle, secondSubTitle, imgSource, textColor }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center p-4`}
    >
      <div className='flex flex-col justify-center items-center h-full'>
        <img
          className='w-1/2 max-w-xs mb-3'
          src={imgSource}
          alt={title + ' Image'}
        />
        <h1
          className={
            textColor + ' text-3xl mb-2 font-bold sm:text-5xl md:text-6xl'
          }
        >
          {title}
        </h1>
        <p className={textColor + ' text-pretty mb-4 px-4'}>{subtitle}</p>
        <a
          className='bg-primary text-white p-3 rounded-3xl px-5 hover:bg-green-600 mb-8'
          href='#'
        >
          Meer over Laden
        </a>
      </div>
    </div>
  );
};

export default Hero;
