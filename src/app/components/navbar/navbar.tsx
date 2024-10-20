const Navbar = () => {
    return (
      <nav className="bg-orange-500 shadow-md p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            Fashion Hub
          </div>
  
          {/* Links */}
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <a href="/" className="text-white hover:text-gray-200">Home</a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-200">About</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
            </li>
          </ul>
  
          {/* Search Bar */}
          <div className="w-full md:w-auto">
            <input 
              type="text" 
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" 
              placeholder="Search..." 
            />
          </div>
  
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  