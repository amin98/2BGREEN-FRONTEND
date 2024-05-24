import { Link } from 'react-router-dom';
const categories = [
  {
    id: 1,
    title: 'Laden',
    description:
      'Door te kiezen om op te laden met een laadpaal en of laadpas van 2B Green Charging kies je niet alleen voor kwaliteit, maar ook voor duurzaamheid.',
    image: 'charging_station.svg',
    link: '/laden',
  },
  {
    id: 2,
    title: 'Groendaken',
    description:
      'Kies voor een van onze groendaken met sedumbedekking van 2B Green Roofing. Het kent vele voordelen zoals warmteregulatie, luchtzuivering, energiebesparing en nog veel meer!',
    image: 'house.webp',
    link: '/groendaken',
  },
  {
    id: 3,
    title: 'Zonnepanelen',
    description:
      'Kies voor een van onze groendaken met sedumbedekking van 2B Green Roofing. Het kent vele voordelen.',
    image: 'solar-panel.png',
    link: '/zonnepanelen',
  },
];

const ProductCategories = () => {
  return (
    <div className='mx-[30px] md:mx-[40px] lg:mx-[100px] my-8'>
      <h1 className='mb-8 text-3xl font-semibold text-primary'>
        Kies een categorie
      </h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {categories.map(category => (
          <Link
            key={category.id}
            className='flex flex-col items-center p-4 border-2  rounded-xl shadow-sm cursor-pointer hover:shadow-xl w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.3333%-2rem)]'
            to={category.link}
          >
            <img
              src={category.image}
              alt={category.title}
              className='mb-4 size-44'
            />
            <h2 className='mb-2 text-3xl font-bold text-primary'>
              {category.title}
            </h2>
            <p className='text-center text-gray-700'>{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
