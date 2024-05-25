import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import SectionLayout from '../../layouts/SectionLayout'; // Updated import path for SectionLayout

const WelcomeSection = ({ handleScrollDown }) => (
  <div className='relative flex justify-center items-center h-[calc(100vh-var(--navbar-height))] md:h-[calc(100vh-var(--navbar-height))]'>
    <SectionLayout className='z-10 w-full mx-10'>
      {/* Desktop View */}
      <div className='flex-row items-center justify-between hidden w-full lg:flex'>
        {/* Left Column: Main Heading and Description */}
        <div className='flex flex-col items-start text-pretty lg:w-full'>
          <h1 className='mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl'>
            Go Green!
          </h1>
          <p className='max-w-lg my-4 text-base text-white text-start sm:text-lg lg:text-xl'>
            Betreed de inspirerende wereld van 2B Green en geef jouw hart een
            sprongetje van vreugde. Wij geloven in de kracht van duurzame
            alternatieven en samen streven we naar een groenere wereld.
          </p>
          <div className='flex flex-col justify-start gap-4 mt-4 sm:flex-row'>
            <a
              className='w-full px-4 py-2 font-bold transition duration-300 bg-white sm:w-auto rounded-2xl text-primary hover:bg-primary hover:text-secondary'
              href='#'
            >
              Meer weten?
            </a>
            <a
              className='w-full px-4 py-2 font-bold transition duration-300 bg-secondary sm:w-auto rounded-2xl text-primary hover:bg-primary hover:text-secondary'
              href='#shop'
            >
              Producten
            </a>
          </div>
        </div>

        {/* Right Column: Subscription Form */}
        <div className='flex-col hidden p-1 rounded-lg xl:flex xl:w-3/3'>
          <h2 className='mb-2 text-3xl font-bold text-white '>
            Betreed de groene revolutie!
          </h2>
          <p className='mb-4 text-lg text-white '>
            Schrijf je in voor de 2B-Green nieuwsbrief! Mis geen aanbiedingen,
            nieuwe producten en tips voor een groenere levensstijl. Meld je aan
            en profiteer!
          </p>

          <form
            className='flex items-center justify-between p-1 bg-white border rounded-xl'
            action=''
            method='post'
            target='_blank'
          >
            <div className='flex w-full'>
              <div className='w-5/12 mr-2'>
                <label
                  htmlFor='hs-hero-name-1'
                  className='block text-base font-medium'
                >
                  <span className='sr-only'>Naam</span>
                </label>
                <input
                  type='text'
                  id='hs-hero-name-1'
                  name='fields[name]'
                  className='block w-full px-4 py-2 text-base border-transparent rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary'
                  placeholder='Naam'
                />
              </div>
              <div className='w-7/12 mr-2'>
                <label
                  htmlFor='hs-hero-email-1'
                  className='block text-base font-medium'
                >
                  <span className='sr-only'>Email</span>
                </label>
                <div className='pl-2 sm:border-l sm:border-gray-200'>
                  <input
                    type='email'
                    id='hs-hero-email-1'
                    name='fields[email]'
                    className='block w-full p-2 text-base border-transparent rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary'
                    placeholder='Email'
                    required
                  />
                </div>
              </div>
            </div>

            <div className='w-3/12'>
              <button
                type='submit'
                className='w-full p-2 text-base font-semibold text-center text-white border border-transparent rounded-xl bg-primary hover:bg-secondary hover:text-primary'
              >
                Meld je aan!
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile and Medium View */}
      <div className='flex flex-col items-center lg:hidden'>
        <div className='text-center text-pretty'>
          <h1 className='mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl'>
            Go Green!
          </h1>
          <p className='max-w-2xl my-4 text-base text-white sm:text-lg md:text-xl'>
            Betreed de inspirerende wereld van 2B Green en geef jouw hart een
            sprongetje van vreugde. Wij geloven in de kracht van duurzame
            alternatieven en samen streven we naar een groenere wereld.
          </p>
          <div className='flex flex-col justify-center gap-4 mt-4 sm:flex-row'>
            <a
              className='w-full px-4 py-2 font-bold transition duration-300 bg-white sm:w-auto rounded-2xl text-primary hover:bg-primary hover:text-secondary'
              href='#'
            >
              Meer weten?
            </a>
            <a
              className='w-full px-4 py-2 font-bold transition duration-300 bg-secondary sm:w-auto rounded-2xl text-primary hover:bg-primary hover:text-secondary'
              href='#shop'
            >
              Producten
            </a>
          </div>
        </div>
        <button
          onClick={handleScrollDown}
          className='w-12 h-12 mt-8 font-bold text-white transition duration-300 ease-in-out transform rounded-full hover:bg-primary hover:text-secondary hover:scale-110'
        >
          <ArrowDownCircleIcon className='w-full h-full' />
        </button>
      </div>
    </SectionLayout>
    <div className='absolute top-0 left-0 z-0 w-full h-full overflow-hidden '>
      <iframe
        className='vimeo-video'
        src='https://player.vimeo.com/video/948337032?h=227dde5589&autoplay=1&loop=1&muted=1&background=1' // Vimeo video URL with autoplay, loop, mute, and background parameters
        style={{ border: 'none' }} // Remove borders using style
        allow='autoplay; loop; muted'
        allowFullScreen
        title='vimeo-player' // Adding a title for accessibility
      ></iframe>
      <div className='absolute top-0 left-0 w-full h-full opacity-70 bg-lime-950'></div>
    </div>
  </div>
);

export default WelcomeSection;
