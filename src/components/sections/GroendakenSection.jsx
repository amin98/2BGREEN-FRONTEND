import houseImage from '../../images/house.webp';
import SectionLayout from '../../layouts/SectionLayout';

const GroendakenSection = () => (
  <SectionLayout>
    <img
      className='w-2/5 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs mb-3'
      src={houseImage}
      alt='Green Roofing'
    />
    <div className='text-pretty'>
      <h1 className='text-3xl mb-2 font-bold text-primary'>Groendaken</h1>
      <p className='text-pretty text-xl mb-4 px-4'>
        Direct bijdragen aan de biodiversiteit in jouw wijk? Kies voor een
        groendak met sedumbedekking. Een groendak kent vele voordelen zoals
        warmteregulatie, luchtzuivering, energiebesparing en nog veel meer! Een
        investering die je dus altijd terug verdiend.
      </p>
    </div>
    <a
      className='bg-primary text-white p-1 rounded-3xl px-5 hover:bg-green-600 mb-8'
      href='#'
    >
      Meer over Groendaken
    </a>
  </SectionLayout>
);

export default GroendakenSection;
