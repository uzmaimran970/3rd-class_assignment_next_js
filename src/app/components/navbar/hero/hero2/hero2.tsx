import Image from 'next/image';
import formalshirt from '../../../../public/formalshirts.png';
import tshirt from '../../../../public/tshirt.jpeg';
import tracksuit from '../../../../public/tracksuit.jpg';
import dress from '../../../../public/dress.jpeg';
import kurti from '../../../../public/kurti.jpg';
import jacket from '../../../../public/jacket.jpeg'

const Hero2 = () => {
    return (
        <div>
            {/* Men's Fashion */}
            <section className="my-12">
                <h2 className="text-4xl font-bold mb-8 text-center">Men&apos;s Clothes</h2>
                <div className="flex justify-center space-x-8">
                    
                    {/* Men's Product 1 */}
                    <div className="bg-white text-black rounded-lg shadow-lg p-4">
                        <Image
                            className="w-full h-64 object-cover mb-4"
                            alt="Men&apos;s Product 1"
                            src={formalshirt}
                            width={250}
                            height={250}
                        />
                        <h3 className="text-xl font-bold mb-2">Classic Men&apos;s Formal shirt</h3>
                        <p className="mb-4">Comfortable and stylish formal-shirts for everyday wear.</p>
                        <button className="btn bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Men's Product 2 */}
                    <div className="bg-white text-black rounded-lg shadow-lg p-4">
                        <Image 
                            src={tshirt} 
                            alt="Men&apos;s Product 2" 
                            className="w-full h-64 object-cover mb-4"
                            width={250}
                            height={250}
                        />
                        <h3 className="text-xl font-bold mb-2">Stylish Men&apos;s T-shirts</h3>
                        <p className="mb-4">Perfect for the cold weather, with a sleek design.</p>
                        <button className="btn bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Men's Product 3 */}
                    <div className="bg-white text-black rounded-lg shadow-lg p-4">
                        <Image 
                            src={tracksuit} 
                            alt="Men&apos;s Product 3" 
                            className="w-full h-64 object-cover mb-4"
                            width={250}
                            height={250}
                        />
                        <h3 className="text-xl font-bold mb-2">Men&apos;s tracksuit</h3>
                        <p className="mb-4">Relaxed fit pants for casual outings.</p>
                        <button className="btn bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>

            {/* Women's Fashion */}
            <section className="my-12">
                <h2 className="text-4xl font-bold mb- text-center">Women&apos;s Fashion</h2>
                <div className="flex justify-center space-x-8">
                    
                    {/* Women's Product 1 */}
                    <div className="bg-white text-black rounded-lg shadow-lg p-4">
                        <Image 
                            src={dress} 
                            alt="Women&apos;s Product 1" 
                            className="w-full h-64 object-cover mb-4"
                            width={250}
                            height={250}
                        />
                        <h3 className="text-xl font-bold mb-2">Elegant Women&apos;s Dress</h3>
                        <p className="mb-4">A beautiful dress for special occasions.</p>
                        <button className="btn bg-pink-800 hover:bg-pink-800 text-white px-4 py-2 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Women's Product 2 */}
                    <div className="bg-white text-black rounded-lg shadow-lg p-4">
                        <Image 
                            src={kurti} 
                            alt="Women&apos;s Product 2" 
                            className="w-full h-64 object-cover mb-4"
                            width={250}
                            height={250}
                        />
                        <h3 className="text-xl font-bold mb-2">Women&apos;s Kurtis</h3>
                        <p className="mb-4">Lightweight and comfortable Kurtis for daily wear.</p>
                        <button className="btn bg-pink-800 hover:bg-pink-800 text-white px-4 py-2 rounded-md">
                            Add to Cart
                        </button>
                    </div>

                    {/* Women's Product 3 */}
                    <div className="bg-white text-black rounded-lg shadow-lg p-4">
                        <Image 
                            src={jacket}
                            alt="Women&apos;s Product 3" 
                            className="w-full h-64 object-cover mb-4"
                            width={250}
                            height={250}
                        />
                        <h3 className="text-xl font-bold mb-2">Stylish Women&apos;s Jacket</h3>
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