import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import SectionLayout from '../../layouts/SectionLayout'; // Updated import path for SectionLayout

const WelcomeSection = ({ handleScrollDown }) => (
  <div className='relative flex justify-center items-center h-[calc(100vh-var(--navbar-height))]'>
    {/* Background Image with Blur */}
    <div className='absolute inset-0 overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center blur-[1px] scale-110'
        style={{ backgroundImage: 'url(forest-background.jpg)' }}
      ></div>
      <div className='absolute inset-0 bg-primary opacity-40'></div>
    </div>

    <SectionLayout className='z-10 w-full mx-4'>
      {/* Desktop View */}
      <div className='flex-row items-center justify-between hidden w-full lg:flex'>
        {/* Left Column: Main Heading and Description */}
        <div className='flex flex-col items-start text-pretty lg:w-1/2'>
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
        <div className='p-6 bg-white bg-opacity-75 rounded-lg lg:w-1/3'>
          <h2 className='mb-2 text-xl font-bold lg:text-2xl text-primary'>
            Betreed de groene revolutie!
          </h2>
          <p className='mb-4 text-base text-primary sm:text-lg lg:text-xl'>
            Schrijf je in voor de 2B-Green nieuwsbrief! Mis geen aanbiedingen,
            nieuwe producten en tips voor een groenere levensstijl. Meld je aan
            en profiteer!
          </p>

          <form
            className='ml-block-form'
            action='https://assets.mailerlite.com/jsonp/439870/forms/88227841028654778/subscribe'
            method='post'
            target='_blank'
          >
            <div className='mb-4'>
              <input
                type='email'
                name='fields[email]'
                placeholder='Email'
                className='w-full px-3 py-2 border border-gray-300 rounded-lg'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full px-4 py-2 font-bold text-white transition duration-300 rounded-lg bg-primary hover:bg-secondary hover:text-primary'
            >
              Meld je aan!
            </button>
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
  </div>
);

export default WelcomeSection;
