import { useState, useEffect} from 'react';
import './Styles/NumbersContainerStyles.css';
import BoxNumber from './BoxNumber';





export default function NumbersContainer({setError,numerosElegidos, setNumerosElegidos}) {

  const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function handleClick(number) {
    setError(false)
    if (!numerosElegidos.includes(number) && numerosElegidos.length <= 3) {
      const audio = new Audio('./src/sounds/btn-sound.mp3');
      audio.volume = 0.5;
      audio.play();
      const nuevoArray = [...numerosElegidos, number];
      setNumerosElegidos(nuevoArray);
    }
  }
  return (
     
      <div className='numbers-container'>
        {
          numeros.map((number) => (
              <BoxNumber
                key={number}
                number={number}
                onClick={handleClick}
                isSelected={numerosElegidos.includes(number)}
              />            
          ))
        }
      </div>
       
  )
}