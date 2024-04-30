import React from "react";
import Navbar from "../Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className='w-full min-h-screen'>
        <div className='p-2 flex justify-center gap-2 space-between'>
          <div className='w-[150px] h-[120px] flex justify-center items-center flex-col border-2'>
            <h2>Today's Sale</h2>
            <h2>120000</h2>
          </div>
          <div className='w-[150px] h-[120px]  flex justify-center items-center flex-col border-2'>
            <h2>Today's Profit</h2>
            <h2>120000</h2>
          </div>
          <div className='w-[150px] h-[120px] flex justify-center items-center flex-col border-2'>
            <h2>Today's Fuel</h2>
            <h2>200 ltr</h2>
          </div>
          <div className='w-[150px] h-[120px] flex justify-center items-center flex-col border-2'>
            <h2>Remaining Fuel</h2>
            <h2>200 ltr</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
