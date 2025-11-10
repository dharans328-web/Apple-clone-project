import React from 'react'

const Hero=()=> {
  return (
   <>
   <header  style={{
    backgroundImage:"url('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1Cn6g0.img?w=1280&h=720&m=4&q=100')",
   }}
   className='bg-black text-white text-center py-10 h-96 bg-cover'>
   
    <h1 className='text-5xl font-semibold mb-4 mt-7'>iphone 17 pro</h1>
    <p className='text-3xl '>All out pro.</p>
    <div className='flex gap-6 mt-7  justify-center '>
                <button className='bg-blue-600 p-1 rounded-lg hover:bg-blue-700 transition text-2xl font-medium'>Learn more</button>
                <button className='bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition text-2xl font-medium'>Buy</button>

            </div>

    
   </header>
  
   </>
  )
}

export default Hero