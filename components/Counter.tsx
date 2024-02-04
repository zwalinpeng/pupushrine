"use client"

import { useState } from 'react';

export default function Counter({ buttonText, counterText, unit}) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className='space-y-1'>
        <p className='m-auto text-center'>{counterText} {count} {unit}</p>
        <button onClick={handleClick} className='bg-black text-white rounded-full p-3 m-auto block'>{buttonText}</button>
    </div>
  );
}