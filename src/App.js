import React, { useState } from 'react';
import { MenuButton } from './components/Menu';
import { Planetas } from './components/InformacionPlanetas';

const App = () => {
  const [informacionPlaneta,setInformacionPlaneta]=useState(Planetas[0][0]);
  const opcionesMenu1=[Planetas[1]];
  const opcionesMenu2=[Planetas[2]];
  const opcionesMenu3=[Planetas[3]];
  const opcionesMenu4=[Planetas[4]];

  const informacionChange=(item)=>{
    setInformacionPlaneta(item);
  }

  return (
    <main className='w-full h-full'>
      <div className='pt-36 flex z-50 absolute flex-row justify-center top-0 left-1/2 transform -translate-x-1/2 gap-16'>
      {/* <div className='pt-36 flex  absolute z-50 flex-row justify-center gap-16'> */}
          <MenuButton buttonName='Menu1' opcionesMenu1={opcionesMenu1} informacionChange={informacionChange}/>
          <MenuButton buttonName='Menu2' opcionesMenu1={opcionesMenu2} informacionChange={informacionChange} />
          <MenuButton buttonName='Menu3' opcionesMenu1={opcionesMenu3} informacionChange={informacionChange} />
          <MenuButton buttonName='Menu4' opcionesMenu1={opcionesMenu4} informacionChange={informacionChange} />
      </div>
      <div className='contenedor top-0'>
        <div className='header z-10'>
        </div>
  
      </div>
      <div className='mensaje mt-10 border-8 border-double p-7 bg-black border-blue-900 flex flex-row'>
        <img src={informacionPlaneta.planeta} alt='Img Planeta' className='rounded-full my-auto planetaImg' />
        <div className='p-7 overflow-scroll whitespace-pre-wrap text-white text-justify'>
            {informacionPlaneta.texto}
        </div>
      </div>
    </main>
  )
}

export default App

