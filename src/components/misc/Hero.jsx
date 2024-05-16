import { SwiperSlide } from 'swiper/react';

const Hero = ({ title, subtitle, secondSubTitle, imgSource, textColor }) => {
  return (
    <div className={`flex flex-col justify-center items-center min-h-svh`}>
      <div className='flex flex-col items-center text-center gap-6'>
        <img className='w-[10rem]' src={imgSource} alt={title + ' Image'} />
        <h1
          className={textColor + ' text-3xl font-bold sm:text-5xl md:text-6xl'}
        >
          {title}
        </h1>
        <p className={textColor + ' px-5 my-4 text-xl'}>{subtitle}</p>
        <a
          className='bg-primary text-white p-2 rounded-3xl text-center w-40 hover:bg-green-600'
          href='#'
        >
          Meer over Laden
        </a>
      </div>
    </div>
  );
};

export default Hero;
