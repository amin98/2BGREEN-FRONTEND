import ambassadorImage from '../../images/ambassador.webp';
import SectionLayout from '../../layouts/SectionLayout';

const AmbassadeursSection = () => (
  <SectionLayout>
    <img
      className='w-2/5 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs mb-3'
      src={ambassadorImage}
      alt='Ambassadors'
    />
    <div className='text-pretty '>
      <h1 className='text-3xl mb-2 font-bold text-primary'>Ambassadeurs</h1>
      <p className='text-pretty text-xl mb-4 px-4'>
        Wil jij zelf ook een bijdrage leveren en een positieve impact maken in
        de wereld? Meld je aan als ambassadeur en maak het verschil! Het mooie
        aan dit ambassadeurschap is dat er ook nog voordelen voor jou aanhangen
        zoals mooie duurzame cadeau’s. Klik op de button en ontdek alle
        voordelen.
      </p>
    </div>
    <a
      className='bg-primary text-white p-1 rounded-3xl px-5 hover:bg-green-600 mb-8'
      href='#'
    >
      Meer over Ambassadeurs
    </a>
  </SectionLayout>
);

export default AmbassadeursSection;
