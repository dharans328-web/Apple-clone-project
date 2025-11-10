import React from 'react'

function Section() {
    return (
        <section  >
            <div className='text-center mt-7 font-bold text-3xl '> <h1 >Macbook Air</h1>
                <p className='text-xl'>Learn.Mean.M3 machine</p>
                <img className='mx-auto h-56' src='https://www.apple.com/v/macbook-air-13-and-15-m2/a/images/overview/design/design-hero_endframe__olurqzgtbh6e_large.jpg'></img>
            </div>
            <div className='flex gap-6 mt-7  justify-center '>
                <button className='bg-blue-600 p-1 rounded-lg hover:bg-blue-700 transition text-2xl font-medium'>Learn more</button>
                <button className='bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition text-2xl font-medium'>Buy</button>

            </div>

             <div className='text-center mt-16 font-bold text-3xl '> <h1 >iPad pro</h1>
                <p className='text-xl'>Supercharged By m4</p>
                <img className='mx-auto h-56' src='https://media.currys.biz/i/currysprod/10223750?$l-large$&fmt=auto'></img>
            </div>
            <div className='flex gap-6 mt-7  justify-center '>
                <button className='bg-blue-600 p-1 rounded-lg hover:bg-blue-700 transition text-2xl font-medium'>Learn more</button>
                <button className='bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition text-2xl font-medium'>Buy</button>

            </div>
            <div className='text-center mt-16 font-bold text-3xl '> <h1 >Air Pods pro</h1>
                <p className='text-xl'>The world's best</p>
                <img className='mx-auto h-56' src='https://thumbs.dreamstime.com/b/all-new-airpods-pro-nd-generation-magsafe-charging-case-white-wireless-headphones-background-kyiv-ukraine-march-brand-h-273421682.jpg'></img>
            </div>
            <div className='flex gap-6 mt-7  justify-center '>
                <button className='bg-blue-600 p-1 rounded-lg hover:bg-blue-700 transition text-2xl font-medium'>Learn more</button>
                <button className='bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition text-2xl font-medium'>Buy</button>

            </div>
            



        </section>
    )
}

export default Section