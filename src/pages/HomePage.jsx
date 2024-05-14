import Hero from './../components/Hero';
import TopHero from './../components/TopHero';
import ladenImage from '../images/charging_station.svg';
import houseImage from '../images/house.webp';
import ambassadorImage from '../images/ambassador.webp';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import fetchUser from '../apis/UserAPI';

const HomePage = () => {
  const location = useLocation();
  const email = location.state?.email;
  const [name, setName] = useState('Loading...');

  const sections = [
    {
      title: 'Laden',
      subtitle: 'Je bent op zoek naar een laadpaal of laadpas om jouw elektrische auto op te laden, maar je wilt dit wel zo duurzaam mogelijk doen. Alle producten van Alfen bestaan uit A-kwaliteit componenten en dankzij onze samenwerking met Trees for All zorgen we dat er voor iedere laadpaal een boom geplant wordt.',
      imgSource: ladenImage,
      bgColor: 'bg-hero',
    },
    {
      title: 'Groendaken',
      subtitle: 'Direct bijdragen aan de biodiversiteit in jouw wijk? Kies voor een groendak met sedumbedekking. Een groendak kent vele voordelen zoals warmteregulatie, luchtzuivering, energiebesparing en nog veel meer! Een investering die je dus altijd terug verdiend.',
      imgSource: houseImage,
      bgColor: 'bg-hero',
    },
    {
      title: 'Ambassador',
      subtitle: 'Wil jij zelf ook een bijdrage leveren en een positieve impact maken in de wereld? Meld je aan als ambassadeur en maak het verschil! Het mooie aan dit ambassadeurschap is dat er ook nog voordelen voor jou aanhangen zoals mooie duurzame cadeau’s. Klik op de button en ontdek alle voordelen.',
      imgSource: ambassadorImage,
      bgColor: 'bg-hero',
    },
  ];

  useEffect(() => {
    const scrollContainer = document.querySelector('.snap-y');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', () => {
        const scrollPosition = scrollContainer.scrollTop;
        const activeSection = Math.round(scrollPosition / window.innerHeight);
        // Here you can add custom logic for highlighting active sections or navigation
      });
    }
  }, []);

  return (
    <div className='snap-y snap-mandatory h-screen overflow-scroll scroll-smooth text-lg'>
      <TopHero
        title='Go Green!'
        subtitle='Betreed de inspirerende wereld van 2B Green en geef jouw hart een sprongetje van vreugde. Wij geloven in de kracht van duurzame alternatieven en samen streven we naar een groenere wereld.
        '
        bgColor={'bg-primary'}
        textColor={'text-white'}
      />
      {sections.map((section, index) => (
        <Hero key={index} {...section} textColor={'text-primary'} />
      ))}
    </div>
  );
};

export default HomePage;
