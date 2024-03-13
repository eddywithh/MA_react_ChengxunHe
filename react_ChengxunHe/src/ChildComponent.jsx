import React, { useState } from 'react';

export default function Cell( { onCountChange } ) {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
    onCountChange(!isOn);
  };

  return (
    <div
      className="cell"
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid grey',
        backgroundColor: isOn ? 'black' : 'white',
      }}
      onClick={handleClick}
    ></div>
  );
};
