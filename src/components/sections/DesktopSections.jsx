import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import WelcomeSection from './WelcomeSection';
import '../../styles/DesktopSection.css';
import BeginstationIcon from '../../assets/icons/beginstation_icon.png';
import UpdatesIcon from '../../assets/icons/updates_icon.png';
import GreenIcon from '../../assets/icons/icon_green.png';
import ServiceIcon from '../../assets/icons/icon_service.png';
import RainWaterIcon from '../../assets/icons/icon_rainwater.png';
import PurificationIcon from '../../assets/icons/icon_purification.png';
import NurseryIcon from '../../assets/icons/icon_nursery.png';
import TemperatureIcon from '../../assets/icons/icon_temperature.png';
import BiodiversityIcon from '../../assets/icons/icon_biodiversity.png';
import ValueIcon from '../../assets/icons/icon_value.png';

const sections = [
  {
    title: 'Laden',
    imgSrc: 'misc/charging_station.svg',
    description:
      'Je bent op zoek naar een laadpaal of laadpas om jouw elektrische auto op te laden, maar je wilt dit wel zo duurzaam mogelijk doen. Alle producten van Alfen bestaan uit A-kwaliteit componenten en dankzij onze samenwerking met Trees for All zorgen we dat er voor iedere laadpaal een boom geplant wordt.',
    listItems: [
      {
        imgSrc: BeginstationIcon,
        text: 'Door onze samenwerking met het Beginstation help je mensen met een afstand tot de arbeidsmarkt.',
      },
      {
        imgSrc: UpdatesIcon,
        text: 'Dankzij periodieke software-updates is je laadoplossing altijd up-to-date.',
      },
      {
        imgSrc: GreenIcon,
        text: 'Je draagt bij aan het klimaat dankzij onze samenwerking met Trees for All.',
      },
    ],
  },
  {
    title: 'Groendaken',
    imgSrc: 'misc/house.webp',
    description:
      'Direct bijdragen aan de biodiversiteit in jouw wijk? Kies voor een groendak met sedumbedekking. Een groendak kent vele voordelen zoals warmteregulatie, luchtzuivering, energiebesparing en nog veel meer! Een investering die je dus altijd terug verdiend.',
    listItems: [
      {
        imgSrc: RainWaterIcon,
        text: 'Een groendak beschermd dakbekleding tegen weersinvloeden, hierdoor gaat jouw dakbekleding tot wel 2x langer mee.',
      },
      {
        imgSrc: PurificationIcon,
        text: 'De sedumplanten van het groendak filteren fijnstof uit de lucht en zetten CO2 om in zuurstof.',
      },
      {
        imgSrc: TemperatureIcon,
        text: 'Een groendak isoleert, jouw huis blijft koeler in de zomer en je hebt minder verwarmingskosten in de winter..',
      },
    ],
  },
  {
    title: 'Ambassadeurs',
    imgSrc: 'misc/ambassador.webp',
    description:
      'Wil jij zelf ook een bijdrage leveren en een positieve impact maken in de wereld? Meld je aan als ambassadeur en maak het verschil! Het mooie aan dit ambassadeurschap is dat er ook nog voordelen voor jou aanhangen zoals mooie duurzame cadeau’s. Klik op de button en ontdek alle voordelen.',
    listItems: [
      {
        imgSrc: RainWaterIcon,
        text: 'Een groendak beschermd dakbekleding tegen weersinvloeden, hierdoor gaat jouw dakbekleding tot wel 2x langer mee.',
      },
      {
        imgSrc: PurificationIcon,
        text: 'De sedumplanten van het groendak filteren fijnstof uit de lucht en zetten CO2 om in zuurstof.',
      },
      {
        imgSrc: TemperatureIcon,
        text: 'Een groendak isoleert, jouw huis blijft koeler in de zomer en je hebt minder verwarmingskosten in de winter..',
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function DesktopSections() {
  return (
    <>
      <WelcomeSection />
      <section>
        <div className='flex flex-col items-center gap-6 px-4 py-5 '>
          <h1 className='col-span-3 mb-4 text-4xl font-bold text-center text-primary'>
            Onze Diensten
          </h1>
          <motion.div
            className='w-full'
            initial='hidden'
            animate='visible'
            variants={containerVariants}
          >
            {sections.map((section, index) => (
              <SectionContent key={index} section={section} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function SectionContent({ section }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className='flex flex-col items-start justify-between gap-10 mx-4 mb-5 lg:flex-row lg:mx-24'
      style={{ minHeight: `calc(100vh - var(--navbar-height))` }}
      initial='hidden'
      animate={controls}
      variants={sectionVariants}
    >
      <div className='flex justify-center w-full lg:justify-start lg:w-2/5'>
        <img
          className='object-cover w-full lg:w-auto lg:max-w-xs'
          src={section.imgSrc}
          alt={section.title}
        />
      </div>
      <div className='flex flex-col justify-between w-full gap-4'>
        <h1 className='text-2xl font-semibold lg:text-3xl text-primary'>
          {section.title}
        </h1>
        <p className='mb-4 text-base lg:text-[1.4rem] leading-8'>
          {section.description}
        </p>
        <ul className='flex flex-col gap-4 lg:gap-6'>
          {section.listItems.map((item, idx) => (
            <li key={idx} className='flex items-center gap-3'>
              <img
                src={item.imgSrc}
                className='size-8 lg:size-16'
                alt={section.title}
              />
              <p className='text-sm lg:text-xl'>{item.text}</p>
            </li>
          ))}
        </ul>
        <a
          href='/'
          className='self-start px-5 py-2 mt-8 text-sm font-bold transition duration-200 shadow-md lg:text-xl text-secondary rounded-2xl bg-primary hover:bg-secondary hover:text-primary'
        >
          Meer over {section.title}
        </a>
      </div>
    </motion.div>
  );
}

export default DesktopSections;
