import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: 'Laden',
    description:
      'Door te kiezen om op te laden met een laadpaal en of laadpas van 2B Green Charging kies je niet alleen voor kwaliteit, maar ook voor duurzaamheid.',
    image: 'misc/charging_station.svg',
    link: '/laden',
  },
  {
    id: 2,
    title: 'Groendaken',
    description:
      'Kies voor een van onze groendaken met sedumbedekking van 2B Green Roofing. Het kent vele voordelen zoals warmteregulatie, luchtzuivering, energiebesparing en nog veel meer!',
    image: 'misc/house.webp',
    link: '/groendaken',
  },
  {
    id: 3,
    title: 'Zonnepanelen',
    description:
      'Kies voor een van onze groendaken met sedumbedekking van 2B Green Roofing. Het kent vele voordelen.',
    image: 'misc/solar-energy.png',
    link: '/zonnepanelen',
  },
];

const ProductCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <div className='mx-[30px] md:mx-[40px] lg:mx-[100px] my-8'>
      <h1 className='mb-8 text-3xl font-semibold text-primary'>
        Kies een categorie
      </h1>
      <motion.div
        ref={ref}
        className='flex flex-wrap justify-center gap-8 bg-white'
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
          },
        }}
      >
        {categories.map(category => (
          <motion.div
            key={category.id}
            className='flex flex-col items-center p-4 border-2 rounded-xl shadow-md cursor-pointer w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.3333%-2rem)]'
            whileHover={{ scale: 1.05 }}
          >
            <Link to={category.link} className='flex flex-col items-center'>
              <motion.img
                src={category.image}
                alt={category.title}
                className='mb-4 size-44'
                whileHover={{ scale: 1.1 }}
              />
              <h2 className='mb-2 text-3xl font-bold text-primary'>
                {category.title}
              </h2>
              <p className='text-center text-gray-700'>
                {category.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductCategories;
