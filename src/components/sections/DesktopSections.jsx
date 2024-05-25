import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import WelcomeSection from './WelcomeSection';
const sections = [
  {
    title: 'Laden',
    imgSrc: 'charging_station.svg',
    description:
      'Je bent op zoek naar een laadpaal of laadpas om jouw elektrische auto op te laden, maar je wilt dit wel zo duurzaam mogelijk doen. Alle producten van Alfen bestaan uit A-kwaliteit componenten en dankzij onze samenwerking met Trees for All zorgen we dat er voor iedere laadpaal een boom geplant wordt.',
  },
  {
    title: 'Groendaken',
    imgSrc: 'house.webp',
    description:
      'Direct bijdragen aan de biodiversiteit in jouw wijk? Kies voor een groendak met sedumbedekking. Een groendak kent vele voordelen zoals warmteregulatie, luchtzuivering, energiebesparing en nog veel meer! Een investering die je dus altijd terug verdiend.',
  },
  {
    title: 'Ambassadeurs',
    imgSrc: 'ambassador.webp',
    description:
      'Wil jij zelf ook een bijdrage leveren en een positieve impact maken in de wereld? Meld je aan als ambassadeur en maak het verschil! Het mooie aan dit ambassadeurschap is dat er ook nog voordelen voor jou aanhangen zoals mooie duurzame cadeau’s. Klik op de button en ontdek alle voordelen.',
  },
];

function DesktopSections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [mainControls, isInView]);

  return (
    <section ref={ref}>
      <WelcomeSection />
      <motion.div
        className='flex flex-col items-center h-screen gap-6 px-4 py-5 mx-10 overflow-y-auto border'
        initial={{ opacity: 0, y: 100 }}
        animate={mainControls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <h1 className='col-span-3 mb-4 text-3xl font-bold text-center text-primary'>
          Onze Diensten
        </h1>
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center justify-between h-[calc(100vh-var(--navbar-height))] gap-4 mx-auto xl:max-w-md'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className='flex flex-col items-center justify-center gap-2'>
              <img
                className='size-44'
                src={section.imgSrc}
                alt={section.title}
              />
              <h1 className='text-3xl font-semibold text-primary'>
                {section.title}
              </h1>
              <p className='text-lg text-center'>{section.description}</p>
            </div>
            <a
              href='/'
              className='px-5 py-2 mt-10 text-white rounded-2xl bg-primary hover:bg-secondary hover:text-primary'
            >
              Meer over {section.title}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default DesktopSections;
