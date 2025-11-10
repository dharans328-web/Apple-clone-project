import React from 'react'

const navbar=()=> {
    const links = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Accessories", "Support"];
  return (
    <nav className="bg-black text-gray-300 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <div className="text-white text-2xl font-semibold"></div>
        <ul className="hidden md:flex space-x-6 text-sm ">
          {links.map((item, i) => (
            <li key={i} className="hover:text-white cursor-pointer transition">{item}</li>
          ))}
        </ul>
      </div>
    </nav>


  
  )
}

export default navbar;