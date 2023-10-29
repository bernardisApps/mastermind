import {useState, useEffect} from 'react';
import './Styles/Memoria.css';

function Punto({pruebas}){
  const [color, setColor] = useState('verde');

  useEffect(()=>{
    if(pruebas.length == 0){
      setColor('verde');
    }
  },[pruebas])

  function handleClick(){
    if(pruebas.length > 0){
      if(color=='verde'){
        setColor('rojo');
      }else if(color=='rojo'){
        setColor('verde');     
    }
  }
}
  
  return(
    <div onClick={()=>{handleClick()}} className='punto'>

      {color=='verde' && '🟢'}
      {color=='rojo' && '🔴'}
      
    </div>
  )
}

export default function Memoria({pruebas}){
const numeros = [0,1,2,3,4,5,6,7,8,9];
  return (
      <div className='memoria'>
        {
          numeros.map((n)=>(
            <div key={n} className='col'>
              <Punto pruebas={pruebas} className='memoria' />            
            </div>
            
          ))
        }        
      </div>
    
  )
}