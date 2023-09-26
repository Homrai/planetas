import React from 'react';
import { MenuButton } from './components/Menu';

const App = () => {
  const opcionesMenu1=[{name:"Opcion1"},{name:"Opcion2"},{name:"Opcion3"}];
  const opcionesMenu2=[{name:"Opcion1"},{name:"Opcion2"},{name:"Opcion3"}];
  const opcionesMenu3=[{name:"Opcion1"},{name:"Opcion2"},{name:"Opcion3"}];
  const opcionesMenu4=[{name:"Opcion1"},{name:"Opcion2"},{name:"Opcion3"}];

  return (
    <main className='w-full h-full'>
      <div className='header'>
      </div>
        <div className='pt-36 flex absolute flex-row justify-center top-0 left-1/2 transform -translate-x-1/2 gap-16'>
          <MenuButton buttonName='Menu1' opcionesMenu1={opcionesMenu1} />
          <MenuButton buttonName='Menu2' opcionesMenu1={opcionesMenu2} />
          <MenuButton buttonName='Menu3' opcionesMenu1={opcionesMenu3} />
          <MenuButton buttonName='Menu4' opcionesMenu1={opcionesMenu4} />
        </div>
    </main>
  )
}

export default App

