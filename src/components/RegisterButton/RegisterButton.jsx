import React from 'react';

const Button = () => {
  return (
    <button className="px-[5px] py-[10px] text-sm border-none outline-none bg-primary dark:bg-[#151515] text-[#eee] rounded-[7px] font-semibold cursor-pointer transition-all duration-[0.25s] ease-out hover:translate-y-[-3px]">
      Sign Up
      <span className="text-brandYellow dark:text-[#aaa]"> ─ it's free</span>
    </button>

  );
}

export default Button;