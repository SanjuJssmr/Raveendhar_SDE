import React, { useEffect, useState } from 'react'
import "../src/components/internal.css"

const Cursor = () => {
    const [cursorX, setCursorX] = useState(-100);
    const [cursorY, setCursorY] = useState(-100);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  return (
    <div  className="animated-cursor"
    style={{ left: cursorX, top: cursorY }}></div>
  )
}

export default Cursor