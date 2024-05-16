import { useSwiper, SwiperSlide } from 'swiper/react';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';

const TopHero = ({ title, subtitle, secondSubTitle, bgColor, textColor }) => {
  const swiper = useSwiper(); // Get access to the Swiper instance

  const handleScrollDown = () => {
    swiper.slideNext(); // Slide to the next section
  };
  return (
    <>
      <div
        className={`snap-start snap-always h-screen bg-primary flex relative justify-center items-center`}
      >
        <div className='mx-4 z-10 flex flex-col items-center'>
          <div
            className=' text-center flex flex-col justify-evenly items-center gap-3
          '
          >
            <h1 className={` text-white text-4xl sm:text-5xl md:text-6xl`}>
              Go Green!
            </h1>
            <p className={` text-white my-4 text-xl`}>
              Betreed de inspirerende wereld van 2B Green en geef jouw hart een
              sprongetje van vreugde. Wij geloven in de kracht van duurzame
              alternatieven en samen streven we naar een groenere wereld.
            </p>
            <p className={textColor + ` my-4 text-xl`}>{secondSubTitle}</p>

            <a
              className='bg-white w-2/4 p-2 font-bold rounded-2xl text-primary hover:bg-primary hover:text-secondary'
              href='#'
            >
              Meer weten?
            </a>

            <button
              onClick={handleScrollDown}
              className=' size-14 font-bold rounded-full text-white hover:bg-primary hover:text-secondary mt-8 transition duration-300 ease-in-out transform hover:scale-110'
            >
              <ArrowDownCircleIcon className='' />
            </button>
          </div>
        </div>
        <div className="absolute bg-cover z-0 h-full w-full opacity-40 bg-[url('./images/hero/forest1.png')]"></div>
      </div>
    </>
  );
};

export default TopHero;
