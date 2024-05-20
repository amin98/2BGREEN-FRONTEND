import ladenImage from '../../images/charging_station.svg';
import SectionLayout from '../../layouts/SectionLayout';

const LadenSection = () => (
  <SectionLayout>
    <img
      className='w-2/5 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs mb-3'
      src={ladenImage}
      alt='Charging Station'
    />
    <div className='text-pretty'>
      <h1 className='text-3xl mb-2 font-bold text-primary'>Laden</h1>
      <p className='text-pretty text-xl mb-4 px-4'>
        Betreed de inspirerende wereld van 2B Green en geef jouw hart een
        sprongetje van vreugde. Wij geloven in de kracht van duurzame
        alternatieven en samen streven we naar een groenere wereld.
      </p>
    </div>
    <a
      className='bg-primary text-white p-1 rounded-3xl px-5 hover:bg-green-600 mb-8'
      href='#'
    >
      Meer over Laden
    </a>
  </SectionLayout>
);

export default LadenSection;
