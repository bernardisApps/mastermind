import './Styles/Tabla.css';
import React, { useRef, useEffect, useState } from 'react';

function ProbeNumber({n}){

  const [select, setSelect] = useState(false);

  function handleClick(){
    setSelect(!select);
  }

  if (select){
    return( 
      
      <div onClick={()=>{handleClick()}} className='nPruebaSelected' ><h4>{n}</h4></div>
           
          )
  }
  
  return(
    <div onClick={()=>{handleClick()}} className='nPrueba'><h4>{n}</h4></div>
  )
}


export default function Resultados({pruebas}){

  const tablaRef = useRef(null);

  const autoScroll = () => {
    if (tablaRef.current) {
      tablaRef.current.scrollTop = tablaRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    autoScroll();
  }, [pruebas]);

  
  return(
    <div className='container resultados' ref={tablaRef} >
      {
        pruebas.map((res, index)=>(
          <div key={index} className='row mb-1'>
            <div className='col-6 pruebas'>
              <h5 style={{width:'3rem'}} className='m-1 ' >{index + 1}</h5>
              {
                res.numero.map((n)=>(
                  <ProbeNumber key={n}  n={n}/>
                ))
              }
            </div>
            <div className='col-6 pruebas'>
              <h6>Bien: {res.bien}, Regulares: {res.regulares} </h6>
            </div>
          </div>
        ))
      }
    </div>
  )
}