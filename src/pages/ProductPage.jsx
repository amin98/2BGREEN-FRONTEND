import { Link } from 'react-router-dom';

const ProductPage = () => {
  const items = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Groendaken', url: '/products/filter' },
  ];
  return (
    <div className='pt-[64px] h-screen flex flex-col gap-2'>
      {/* breadcrumbs */}
      <nav aria-label='breadcrumb'>
        <ol className='flex flex-wrap gap-2 mt-1 '>
          {items.map((item, index) => (
            <li key={index} className='breadcrumb-item'>
              {index === items.length - 1 ? (
                <span>{item.label}</span>
              ) : (
                <div className='flex'>
                  <Link className='hover:underline' to={item.url}>
                    {item.label}
                  </Link>
                  <span className='ml-2'>{'>>'}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <h1 className='text-2xl'>Groendaken</h1>
    </div>
  );
};
export default ProductPage;
