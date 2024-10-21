import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Link } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient shadow-sm  h-32 fixed top-0 right-0 left-0 z-50">
      <div className="bg-gray-800 text-gray-100 max-w-6xl p-3 rounded-b-[40px] px-4 md:px-8 flex justify-center fixed top-0 left-0 right-0 z-50 shadow-md mx-auto">
        <ul className="items-center justify-center gap-7 hidden md:flex">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/market">Market</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/new-arrivals">New Arrivals</Link></li>
          <li><Link to="/customer-service">Customer Service</Link></li>
        </ul>
        <div className="flex md:hidden">
          <Link to="/" className="text-2xl text-gray-100 font-bold -m-1.5 p-1.5">
            Merkato
          </Link>
        </div>
      </div>

    
     
    
      <div className="mt-14 px-5 fixed top-0 left-0 right-0 z-50">
        <nav className="flex items-center justify-between p-2 lg:px-8 max-w-screen-xl mx-auto">
       
          <div className="flex">
            <Link to="/" className="hidden md:flex text-2xl text-gray-800 font-bold -m-1.5 p-1.5">
              Merkato
            </Link>
          </div>
          <div className="w-[70%] md:w-[50%] max-w-screen-md flex items-center justify-center">
            <select className="border text-md text-gray-600 py-2 px-3 cursor-pointer  border-gray-300 rounded-l-full">
              <option value="all">All Categories</option>
              <option value="Rent">Foods</option>
              <option value="Sale">Drinks</option>
            </select>

            <form className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fas fa-search"></i>
              </div>
              <input
                type="search"
                className="block w-full py-2 px-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-r-full bg-gray-50"
                placeholder="Enter keyword"
                name="searchKeyWord"
              />
            </form>
          </div>

        
          <select className="border text-md text-gray-600 py-1.5 pl-2 cursor-pointer border-gray-300 rounded-full hidden md:flex">
            <option>Eng</option>
            <option>Amharic</option>
          </select>

          <div className="flex items-center space-x-4">
            <div className="relative flex items-center pl-6">
              <Link to="/cart" className="flex justify-center items-center relative">
                <i className="fas fa-shopping-cart text-xl"></i>
                <p className="text-white bg-red-600 absolute text-[12px] rounded-full w-4 h-4 text-center -ml-5 mb-[15px]">4</p>
              </Link>
              <label className="hidden md:block">Cart</label>
            </div>

            <div className="flex items-center">
              <Link to="/user" className="flex justify-center items-center relative">
                <i className="fas fa-user text-xl"></i>
              </Link>
              <label className="hidden md:block">User</label>
            </div>

            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 focus:outline-none">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dialog */}
        {mobileMenuOpen && (
          <>
            <div className="fixed inset-0 z-50 bg-black opacity-30" onClick={() => setMobileMenuOpen(false)} />
            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring sm:ring-gray-900/10">
              <DialogPanel>
                <div className="flex items-center justify-between mb-6">
                  <Link to="/" className="text-xl font-bold -m-1.5 p-1.5">Merkato</Link>
                  <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700 focus:outline-none">
                    <i className="fas fa-times text-xl"></i>
                  </button>
                </div>
                {/* Mobile Menu Links */}
                <ul className="-my-6 divide-y divide-gray-500/10">
                  {["Home", "Market", "About Us", "Contact Us", "New Arrivals", "Customer Service"].map((item) => (
                    <li key={item} className="py-4"><Link to={`/${item.toLowerCase().replace(" ", "-")}`}>{item}</Link></li>
                  ))}
                </ul>
              </DialogPanel>
            </Dialog>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;