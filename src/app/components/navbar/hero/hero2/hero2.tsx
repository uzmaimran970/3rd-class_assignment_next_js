const Hero2 = () => {
    return (

  <div>
        
          <section className="my-12">
            <h2 className="text-4xl font-bold mb-8 text-center" >Men's Clothes</h2>
            <div className="flex justify-center space-x-8">
              
              <div className="bg-white text-black rounded-lg shadow-lg p-4">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0559/6666/2701/files/424887732_766214485541344_265727171332070053_n_480x480.jpg?v=1710761537" 
                  alt="Men's Product 1" 
                  className="w-full h-64 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Classic Men's T-shirt</h3>
                <p className="mb-4">Comfortable and stylish formal-shirts for everyday wear.</p>
                <button className="btn bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                  Add to Cart
                </button>
              </div>
  
              {/* Men's Product 2 */}
              <div className="bg-white text-black rounded-lg shadow-lg p-4">
                <img 
                  src="https://4.imimg.com/data4/TE/PF/ANDROID-70422448/product-250x250.jpeg" 
                  alt="Men's Product 2" 
                  className="w-full h-64 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Stylish Men's T-shirts</h3>
                <p className="mb-4">Perfect for the cold weather, with a sleek design.</p>
                <button className="btn bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                  Add to Cart
                </button>
              </div>
  
              {/* Men's Product 3 */}
              <div className="bg-white text-black rounded-lg shadow-lg p-4">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hWtAcak0Tg6LTx4nEZ-jFIE-1xfzvW0RiA&s" 
                  alt="Men's Product 3" 
                  className="w-full h-64 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Men's tracksuit</h3>
                <p className="mb-4">Relaxed fit pants for casual outings.</p>
                <button className="btn bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </section>
  
        {/* women fashion */}
          <section className="my-12">
            <h2 className="text-4xl font-bold mb- text-center">Women's Fashion</h2>
            <div className="flex justify-center space-x-8">
            
              <div className="bg-white text-black rounded-lg shadow-lg p-4">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOFZ5AtO5U8mJNdJF1ob_-4yGdK6IxW8MDQ&s" 
                  alt="Women's Product 1" 
                  className="w-full h-64 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Elegant Women's Dress</h3>
                <p className="mb-4">A beautiful dress for special occasions.</p>
                <button className="btn bg-pink-800 hover:bg-pink-800 text-white px-4 py-2 rounded-md">
                  Add to Cart
                </button>
              </div>
  
              {/* Women's Product 2 */}
              <div className="bg-white text-black rounded-lg shadow-lg p-4">
                <img 
                  src="https://i.pinimg.com/564x/05/7b/d0/057bd0e03707f0f1868c1bc532ca633f.jpg" 
                  alt="Women's Product 2" 
                  className="w-full h-64 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Chic Women's kurti's</h3>
                <p className="mb-4">Lightweight and comfortable kurti's for daily wear.</p>
                <button className="btn bg-pink-800 hover:bg-pink-800 text-white px-4 py-2 rounded-md">
                  Add to Cart
                </button>
              </div>
  
              {/* Women's Product 3 */}
              <div className="bg-white text-black rounded-lg shadow-lg p-4">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH3ko5StfXnhOefIdjYNQGYD6xdy-anKkHg&s" 
                  alt="Women's Product 3" 
                  className="w-full h-64 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Stylish Women's Jacket</h3>
                <p className="mb-4">A fashionable jacket for chilly days.</p>
                <button className="btn bg-pink-800 hover:bg-pink-800 text-white px-4 py-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </section>
        </div>
    );
  };
  
  export default Hero2;