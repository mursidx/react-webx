import React from 'react';
import { IoIosReturnRight } from "react-icons/io";
import './Button.css'; // Import custom CSS for animations

function Button({ title = "Get started" }) {
  return (
    <div className='relative min-w-[10vw] px-4 py-[0.5vw] bg-zinc-100 text-black rounded-full flex items-center justify-between overflow-hidden group'>
      <span className='text-sm transition-transform duration-500 ease-in-out'>
        {title}
      </span>
      <IoIosReturnRight className='transition-transform duration-500 ease-in-out react-icon' />
    </div>
  );
}

export default Button;
