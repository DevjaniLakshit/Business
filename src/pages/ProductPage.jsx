import React from "react";

const products = [
  {
    id: 1,
    name: "12 Pouch Pack",
    description: "12 x ₹5 Premium Agarbatti Pouches",
    price: "₹28 per pack",
  },
  {
    id: 2,
    name: "Mutha Bundle Pack",
    description: "10 x ₹10 Muthas",
    price: "₹45–50 per pack",
  },
  {
    id: 3,
    name: "Rose Fragrance Pack",
    description: "Premium Rose Scent Agarbatti",
    price: "₹30 per pack",
  },
  {
    id: 4,
    name: "Sandalwood Special",
    description: "Long-lasting Sandalwood Aroma",
    price: "₹35 per pack",
  },
];

const ProductPage = () => {
  return (
    <div className="px-8 py-16 bg-[#f4e6d5] min-h-screen">
      
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#4b2e2e] mb-4">
          Our Products
        </h2>
        <p className="text-gray-600">
          Premium Quality Incense Sticks at Wholesale Prices
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Product Image Placeholder */}
            <div className="h-52 bg-gray-200"></div>

            {/* Product Details */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-[#6d3f2b] mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-3">
                {product.description}
              </p>
              <p className="text-red-600 font-bold mb-4">
                Wholesale Price: {product.price}
              </p>

              <button className="bg-[#6d3f2b] text-white px-6 py-2 rounded hover:bg-[#4b2e2e] transition">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;