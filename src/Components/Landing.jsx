import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className='w-full flex flex-col '>
        <div className='relative h-[20%]'>
          <h3 className='p-4'>FuelTech</h3>
          <button
            className='bg-blue-200 p-3 rounded absolute right-2 top-2'
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>

        <div className='w-full h-[70%] flex justify-center items-center'>
          <img src='./fuel.png' className='p-8' alt='fuelpic' />
          <h1 className='w-full text-4xl w-[30%]'>Fuel Management System</h1>
        </div>
      </div>
    </>
  );
};

export default Landing;
