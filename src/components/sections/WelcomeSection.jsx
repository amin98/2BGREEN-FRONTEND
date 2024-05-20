import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import SectionLayout from '../../layouts/SectionLayout';

const WelcomeSection = ({ handleScrollDown }) => (
  <div className='snap-start snap-always h-[calc(100svh-var(--navbar-height))] bg-primary flex relative justify-center items-center'>
    <SectionLayout className='mx-4 z-10 w-full'>
      <div className='hidden lg:flex flex-row justify-between items-center w-full'>
        <div className='text-pretty lg:w-1/2'>
          <h1 className='text-white font-bold text-4xl sm:text-5xl md:text-6xl mb-4'>
            Go Green!
          </h1>
          <p className='text-white my-4 text-xl max-w-lg'>
            Betreed de inspirerende wereld van 2B Green en geef jouw hart een
            sprongetje van vreugde. Wij geloven in de kracht van duurzame
            alternatieven en samen streven we naar een groenere wereld.
          </p>
          <div className='flex flex-col sm:flex-row justify-start gap-4 mt-4'>
            <a
              className='bg-white w-full sm:w-auto px-6 py-2 font-bold rounded-2xl text-primary hover:bg-primary hover:text-secondary transition duration-300'
              href='#'
            >
              Meer weten?
            </a>
            <a
              className='bg-secondary w-full sm:w-auto px-6 py-2 font-bold rounded-2xl text-primary hover:bg-primary hover:text-secondary transition duration-300'
              href='#shop'
            >
              Producten
            </a>
          </div>
        </div>

        {/* Right Column: Subscription Form */}
        <div className='lg:w-1/2 bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-bold mb-2'>
            Betreed de groene revolutie!
          </h2>
          <p className='mb-4'>
            Beste bezoeker,
            <br />
            Schrijf je nu in voor onze nieuwsbrief op 2B-Green.nl! Blijf op de
            hoogte van onze nieuwste producten, aanbiedingen en belangrijke
            updates.
          </p>
          <ul className='list-disc list-inside mb-4'>
            <li>Korting op geselecteerde producten</li>
            <li>Exclusieve aanbiedingen en promoties</li>
            <li>Gratis advies en tips voor een groenere levensstijl</li>
            <li>Updates over nieuwe productlanceringen en innovaties</li>
          </ul>
          <p className='mb-4'>
            We behandelen je e-mailadres met zorg en sturen alleen relevante
            informatie. Vul je e-mailadres in en klik op "Inschrijven" om
            betrokken te blijven bij de groene revolutie!
          </p>
          <form
            className='ml-block-form'
            action='https://assets.mailerlite.com/jsonp/439870/forms/88227841028654778/subscribe'
            method='post'
            target='_blank'
          >
            <div className='mb-4'>
              <input
                type='text'
                name='fields[name]'
                placeholder='Naam'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                required
              />
            </div>
            <div className='mb-4'>
              <input
                type='email'
                name='fields[email]'
                placeholder='Email'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full bg-primary text-white px-4 py-2 font-bold rounded-lg hover:bg-secondary transition duration-300'
            >
              Meld je aan!
            </button>
          </form>
        </div>
      </div>

      <div className='flex lg:hidden flex-col items-center'>
        <div className='text-pretty text-center'>
          <h1 className='text-white font-bold text-4xl sm:text-5xl md:text-6xl mb-4'>
            Go Green!
          </h1>
          <p className='text-white my-4 text-xl max-w-2xl'>
            Betreed de inspirerende wereld van 2B Green en geef jouw hart een
            sprongetje van vreugde. Wij geloven in de kracht van duurzame
            alternatieven en samen streven we naar een groenere wereld.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4 mt-4'>
            <a
              className='bg-white w-full sm:w-auto px-6 py-2 font-bold rounded-2xl text-primary hover:bg-primary hover:text-secondary transition duration-300'
              href='#'
            >
              Meer weten?
            </a>
            <a
              className='bg-secondary w-full sm:w-auto px-6 py-2 font-bold rounded-2xl text-primary hover:bg-primary hover:text-secondary transition duration-300'
              href='#shop'
            >
              Producten
            </a>
          </div>
        </div>
        <button
          onClick={handleScrollDown}
          className='w-14 h-14 font-bold rounded-full text-white hover:bg-primary hover:text-secondary mt-8 transition duration-300 ease-in-out transform hover:scale-110'
        >
          <ArrowDownCircleIcon className='w-full h-full' />
        </button>
      </div>
    </SectionLayout>
    <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40'>
      <iframe
        className='vimeo-video'
        src='https://player.vimeo.com/video/948337032?h=227dde5589&autoplay=1&loop=1&muted=1&background=1'
        style={{ border: 'none' }}
        allow='autoplay'
        allowFullScreen
        title='vimeo-player'
      ></iframe>
    </div>
  </div>
);

export default WelcomeSection;
