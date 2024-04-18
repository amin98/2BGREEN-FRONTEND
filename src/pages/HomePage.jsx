import Hero from '../components/Hero';
import TopHero from '../components/TopHero';

const HomePage = () => {
  return (
    <div className='snap-y snap-mandatory overflow-scroll text-lg'>
      <TopHero
        title='Go Green!'
        subtitle="This is a test for 2BGreen don't take this seriously. Stop reading please I already told you it's a test. "
        secondSubTitle="If you are still reading you get 7 years of bad luck. I'm serious stop reading."
        bgColor={'bg-primary'}
        textColor={'text-white'}
      />

      <Hero
        title='Laden'
        subtitle="This is a test for 2BGreen don't take this seriously. Stop reading please I already told you it's a test. "
        secondSubTitle="If you are still reading you get 7 years of bad luck. I'm serious stop reading."
        bgColor={'bg-hero'}
        textColor={'text-primary'}
      />

      <Hero
        title='Test'
        subtitle="This is a test for 2BGreen don't take this seriously. Stop reading please I already told you it's a test. "
        secondSubTitle="If you are still reading you get 7 years of bad luck. I'm serious stop reading."
        bgColor={'bg-hero'}
        textColor={'text-primary'}
      />

      <Hero
        title='Zonnepanelen'
        subtitle="This is a test for 2BGreen don't take this seriously. Stop reading please I already told you it's a test. "
        secondSubTitle="If you are still reading you get 7 years of bad luck. I'm serious stop reading."
        bgColor={'bg-hero'}
        textColor={'text-primary'}
      />
    </div>
  );
};

export default HomePage;
