import React from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
 
export const MenuButton =({buttonName="Menu 1",opcionesMenu1=[{name:""}]}) => {
  return (
    <Menu  className='' placement="bottom">
      <MenuHandler>
        <Button className='text-white bg-transparent text-4xl hover:underline'>{buttonName+" ▼ "}</Button>
      </MenuHandler>
      <MenuList className='flex flex-col border-gray-300 border rounded-lg p-7 gap-5'>
        {opcionesMenu1.map(({name},index)=><MenuItem className='text-2xl border-b-2 border-gray-400 hover:opacity-50' key={index}>{name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
}