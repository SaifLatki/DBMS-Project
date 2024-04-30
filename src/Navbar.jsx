import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='bg-gray-200 p-2 h-[10vh] flex justify-center items-center'>
      <ul className='flex justify-center space-between gap-5 p-5'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/services'>Transactions</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
