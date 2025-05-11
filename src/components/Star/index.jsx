import { useState } from 'react';
import './style.css';

export const Star = ({value, onSelect, glowing}) => {
  //const [glowing, setGlowing] = useState(false);
  
  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

    const onHandleClick = () => {
      onSelect(value)
      //setGlowing(true)
    }
  return (
    <div className={starClass} onClick={onHandleClick}></div>
  );
};
