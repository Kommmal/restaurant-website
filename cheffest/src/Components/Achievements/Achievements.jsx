import React from 'react'

const Achievements = () => {
  return (
    <div className="w-full bg-black flex flex-col text-center justify-center text-white px-0 py-[150px]">
      <h2 className="text-4xl font-bold mb-8">We believe in making quality food</h2>                
      <div className="flex flex-wrap lg:flex-row justify-center items-center gap-[60px] px-0 py-[50px] md:flex-col">
        {/* Achievement 1 */}
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-extrabold">2M+</h1>
          <p className="text-xl font-medium">Happy Customers</p>
        </div>

        {/* Achievement 2 */}
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-extrabold">98%</h1>
          <p className="text-xl font-medium">Customer Satisfaction</p>
        </div>

        {/* Achievement 3 */}
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-extrabold">20+</h1>
          <p className="text-xl font-medium">Our Branches</p>
        </div>

        {/* Achievement 4 */}
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-extrabold">2M+</h1>
          <p className="text-xl font-medium">Total Employees</p>
        </div>
      </div>
    </div>
  )
}

export default Achievements;
