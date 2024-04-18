const Hero = ({
  title,
  subtitle,
  secondSubTitle,
  imgSource,
  bgColor,
  textColor,
}) => {
  return (
    <section
      className={bgColor + ` flex justify-center items-center border-b-black`}
    >
      <div className='full-screen-section snap-center flex flex-col items-center'>
        <div className='text-center flex flex-col justify-center items-center gap-4'>
          {/* image */}
          <img className='w-6/12' src={imgSource} alt={title + ` Image`} />
          <h1
            className={
              textColor + ` text-3xl font-bold sm:text-5xl md:text-6xl`
            }
          >
            {title}
          </h1>
          <p className={textColor + ` my-4 text-xl`}>{subtitle}</p>
          <p className={textColor + ` my-4 text-xl`}>{secondSubTitle}</p>

          <a
            className='bg-green-800 text-white p-2 rounded-3xl text-center w-40 hover:bg-green-600'
            href='#'
          >
            Meer over Laden
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
