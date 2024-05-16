import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ComparisonPage = props => {
  const location = useLocation();
  const selectedItems = location.state.selectedItems;

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  return (
    <div>
      {selectedItems.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default ComparisonPage;
