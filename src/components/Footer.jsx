import React from 'react'

const Footer=()=> {
  return (
    <>
    
    <footer className="bg-gray-900 text-gray-400 text-sm py-10 mt-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-5 gap-8">
        {["Shop and Learn", "Services", "Apple Store", "For Business", "About Apple"].map((title, i) => (
          <div key={i}>
            <h4 className="text-white font-semibold mb-3">{title}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">iphone</a></li>
              <li><a href="#" className="hover:text-white">Air Tag</a></li>
              <li><a href="#" className="hover:text-white">Gift Cards</a></li>
            </ul>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 mt-10">© 2025 Apple Clone. Built for learning purposes.</p>
    </footer>

    </>
  )
}

export default Footer