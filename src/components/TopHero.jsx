const TopHero = ({ title, subtitle, secondSubTitle, bgColor, textColor }) => {
  return (
    <>
      <section
        className={
          bgColor +
          ` flex  snap-start h-screen justify-center items-center full-screen-section bg-[url('./images/hero/forest.jpg')]  `
        }
      >
        <div className='mx-4 flex flex-col items-center'>
          <div
            className=' text-center flex flex-col justify-evenly items-center gap-3
          '
          >
            <h1 className={textColor + ` text-4xl sm:text-5xl md:text-6xl`}>
              {title}
            </h1>
            <p className={textColor + ` my-4 text-xl`}>{subtitle}</p>
            <p className={textColor + ` my-4 text-xl`}>{secondSubTitle}</p>
            <a className='bg-primary w-2/4 p-2 rounded-2xl text-white' href='#'>
              Meer weten?
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopHero;
