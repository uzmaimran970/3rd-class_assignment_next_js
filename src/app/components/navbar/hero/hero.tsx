const HeroSection = () => {
    return (
      <section className="hero-section h-screen bg-cover bg-center flex items-center justify-center text-center relative">
        <img 
          src="https://www.shutterstock.com/image-photo/happy-byer-shopping-bags-standing-600nw-1927526819.jpg" 
          alt="Fashion Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Fashion Hub</h1>
          <p className="text-xl mb-8">
            Discover the latest trends in women's and men's fashion
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#shop-women"
              className="btn bg-pink-800 hover:bg-pink-800 text-white px-6 py-3 rounded-md"
            >
              Shop Women
            </a>
            <a
              href="#shop-men"
              className="btn bg-blue-700 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
            >
              Shop Men
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;