import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../styles/PriceFilterSlider.css';
const PriceFilterSlider = ({ min, max, onChange, value }) => {
  return (
    <div className='flex flex-col justify-center mx-1 price-filter-slider'>
      <h2 className='text-lg font-bold text-primary'>Prijs</h2>
      <Slider
        range
        min={min}
        max={max}
        defaultValue={[min, max]}
        value={value}
        onChange={onChange}
        className=''
        railStyle={{ backgroundColor: '#D2D94F' }}
        handleStyle={[
          { borderColor: '#D2D94F', backgroundColor: '#D2D94F' },
          { borderColor: '#D2D94F', backgroundColor: '#D2D94F' },
        ]}
        trackStyle={[{ backgroundColor: '#D2D94F' }]}
      />
      <div className='flex justify-between mt-2'>
        <span className=''>€{value[0]}</span>
        <span>€{value[1]}</span>
      </div>
    </div>
  );
};

export default PriceFilterSlider;
