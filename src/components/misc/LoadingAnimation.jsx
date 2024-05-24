import { useState, useEffect } from 'react';

function LoadingAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageUrls = ['1.png', '2.png', '3.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex w-full mt-[40px] items-center justify-center'>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Loading Image ${index + 1}`}
          className={`w-10 ${
            activeIndex === index ? 'opacity-10' : 'opacity-100'
          } transition-opacity duration-300`}
        />
      ))}
    </div>
  );
}

export default LoadingAnimation;
