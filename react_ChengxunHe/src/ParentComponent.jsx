import React, { useState } from 'react';
import Cell from './ChildComponent';

const Grid = () => {
  const [count, setCount] = useState(0);

  const handleCountChange = (isOn) => {
    setCount((prevCount) => (isOn ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div>
      <div>Count: {count}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)', gap:'5px'}}>
        <Cell onCountChange={handleCountChange}/>
        <Cell onCountChange={handleCountChange}/>
        <Cell onCountChange={handleCountChange}/>
        <Cell onCountChange={handleCountChange}/>
      </div>
    </div>
  );
};

export default Grid;