import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-gray-300 py-12">
  <div className="container mx-auto px-4 md:flex md:justify-between">
    <div className="mb-6 md:mb-0">
    <div className=' logo w-[15vw] leading-3 h-[15vh] '>

     <img className=' object ' src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-logo.png" alt="" />
   <span className='text-sm text-gray-300 ml-3 '> Online Shopping</span>
    </div>
      <p className="mb-4">
        Your one-stop shop for all things awesome. Discover our latest products and enjoy great deals.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          
          </svg>
        </a>
      </div>
    </div>
    <div className="mb-6 md:mb-0">
      <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:underline">About Us</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">Contact</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">FAQ</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
        </li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-4">Subscribe to our Newsletter</h3>
      <form action="#">
        <input type="email" placeholder="Enter your email" className="w-full p-2 mb-4 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-white"/>
        <button type="submit" className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">Subscribe</button>
      </form>
    </div>
  </div>
  <div className="text-center mt-8 border-t border-gray-800 pt-4">
    <p>&copy; 2024 ShopName. All rights reserved.</p>
  </div>
</footer>


    </div>
  )
}

export default Footer