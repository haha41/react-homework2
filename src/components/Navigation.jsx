import MovePage from "@/components/MovePage";
// eslint-disable-next-line no-unused-vars
import tailwind from '@/styles/tailwind.css';
import NavList from '@/components/NavList';
import { useState } from 'react';

function Navigation() {

  const [isHover, setIsHover] = useState(false);

  function handleHover() {
    setIsHover(!isHover);
  }

  return (
    <>
      <NavList isHover={isHover} handleHover={handleHover}/>
      <MovePage />
    </>
    
  )
}

export default Navigation