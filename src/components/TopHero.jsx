const TopHero = ({ title, subtitle, secondSubTitle, bgColor, textColor }) => {
  return (
    <>
      <section
        className={`snap-start snap-always h-screen ${bgColor} flex relative justify-center items-center`}
      >
        <div className='mx-4 z-10 flex flex-col items-center'>
          <div
            className=' text-center flex flex-col justify-evenly items-center gap-3
          '
          >
            <h1 className={textColor + ` text-4xl sm:text-5xl md:text-6xl`}>
              {title}
            </h1>
            <p className={textColor + ` my-4 text-xl`}>{subtitle}</p>
            <p className={textColor + ` my-4 text-xl`}>{secondSubTitle}</p>
            <a
              className='bg-white w-2/4 p-2 font-bold rounded-2xl text-primary hover:bg-primary hover:text-secondary'
              href='#'
            >
              Meer weten?
            </a>
          </div>
        </div>
        <div className="absolute bg-cover z-0 h-full w-full opacity-50 bg-[url('./images/hero/forest1.png')]"></div>
      </section>
    </>
  );
};

export default TopHero;
