import Hero from './../components/Hero';
import TopHero from './../components/TopHero';
import ladenImage from '../images/charging_station.svg';
import houseImage from '../images/house.webp';
import ambassadorImage from '../images/ambassador.webp';

const HomePage = () => {
  return (
    <div className='snap-y snap-mandatory overflow-scroll text-lg'>
      <TopHero
        title='Go Green!'
        subtitle='Betreed de inspirerende wereld van 2B Green en geef jouw hart een sprongetje van vreugde. Wij geloven in de kracht van duurzame alternatieven en samen streven we naar een groenere wereld.
        '
        bgColor={'bg-primary'}
        textColor={'text-white'}
      />
      {/* <Hero
        title='Laden'
        subtitle="This is a test for 2BGreen don't take this seriously. Stop reading please I already told you it's a test. "
        secondSubTitle="If you are still reading you get 7 years of bad luck. I'm serious stop reading."
        bgColor={'bg-hero'}
        textColor={'text-primary'}
        imgSource={ladenImage}
      />

      <Hero
        title='Test'
        subtitle="This is a test for 2BGreen don't take this seriously. Stop reading please I already told you it's a test. "
        secondSubTitle="If you are still reading you get 7 years of bad luck. I'm serious stop reading."
        bgColor={'bg-hero'}
        textColor={'text-primary'}
        imgSource={houseImage}
      />

      <Hero
        title='Ambassador'
        subtitle="This is a test for 2BGreen don't take this seriously. Stop reading please I already told you it's a test. "
        secondSubTitle="If you are still reading you get 7 years of bad luck. I'm serious stop reading."
        bgColor={'bg-hero'}
        textColor={'text-primary'}
        imgSource={ambassadorImage}
      /> */}
    </div>
  );
};

export default HomePage;
