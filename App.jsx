import React from 'react';

export default function App() {
  const products = [
    { name: 'Smartphone', price: 'KSh 25,000', affiliate: '#', img: '/placeholder1.png' },
    { name: 'Headphones', price: 'KSh 3,500', affiliate: '#', img: '/placeholder2.png' },
    { name: 'Backpack', price: 'KSh 2,000', affiliate: '#', img: '/placeholder3.png' },
    { name: 'Notebook', price: 'KSh 500', affiliate: '#', img: '/placeholder4.png' },
    { name: 'Watch', price: 'KSh 4,500', affiliate: '#', img: '/placeholder5.png' },
    { name: 'Sneakers', price: 'KSh 6,000', affiliate: '#', img: '/placeholder6.png' },
  ];

  const categories = ['Electronics', 'Fashion', 'Student Essentials', 'Home Goods'];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white/60 backdrop-blur sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">Arnex Deals</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#shop" className="hover:text-indigo-600">Shop</a>
            <a href="#categories" className="hover:text-indigo-600">Categories</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section id="home" className="text-center mb-12">
          <h2 className="text-4xl font-bold">Find the Best Deals & Support Local Sellers</h2>
          <p className="mt-4 text-gray-600">Browse top products and order directly through trusted affiliate links.</p>
          <a href="#shop" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow">Shop Now</a>
        </section>

        <section id="categories" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Categories</h3>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat, idx) => (
              <span key={idx} className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg cursor-pointer">{cat}</span>
            ))}
          </div>
        </section>

        <section id="shop">
          <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
                <div className="h-40 w-full bg-gray-100 rounded-md flex items-center justify-center">
                  <img src={product.img} alt={product.name} className="object-cover h-full w-full rounded-md" />
                </div>
                <h4 className="mt-3 font-semibold">{product.name}</h4>
                <p className="text-gray-500 mt-1">{product.price}</p>
                <a href={product.affiliate} target="_blank" rel="noopener noreferrer" className="mt-3 px-4 py-2 rounded bg-indigo-600 text-white">Order Now</a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-600">Email: <a href="mailto:arnex@example.com" className="text-indigo-600">arnex@example.com</a></p>
          <p className="text-gray-600">Phone: +254 700 000 000</p>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 pb-12 mt-12">© {new Date().getFullYear()} Arnex Deals — Built with ❤️</footer>
    </div>
  );
}
