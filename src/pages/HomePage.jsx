import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f4e6d5] text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-[#6d3f2b] text-white px-8 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h2 className="text-6xl font-bold mb-4">Incense Sticks</h2>
          <h3 className="text-4xl text-[#f8d7a3] mb-4">Wholesale Supplier</h3>
          <p className="mb-6 text-xl">Quality Agarbatti at Best Prices!</p>

          <div className="space-x-4">
            <button
              onClick={() => navigate("/products")}
              className="bg-[#f8d7a3] text-black px-6 py-2 rounded shadow"
            >
              View Products
            </button>

            <button
              onClick={() => navigate("/wholesale")}
              className="bg-[#8c5a3c] px-6 py-2 rounded shadow"
            >
              Wholesale Inquiry
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <div className="w-2xl h-60 bg-white rounded shadow-md"></div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="px-8 py-16 grid md:grid-cols-2 gap-10">
        {/* 12 Pouch Pack */}
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <div className="h-40 bg-gray-200 rounded mb-6"></div>
          <h3 className="text-2xl font-bold mb-2">12 Pouch Pack</h3>
          <p className="mb-2">12 x ₹5 Pouches</p>
          <p className="text-red-600 font-bold mb-4">
            Wholesale Price: ₹28 per pack
          </p>
          <button className="bg-[#6d3f2b] text-white px-6 py-2 rounded">
            Order Now
          </button>
        </div>

        {/* Mutha Bundle */}
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <div className="h-40 bg-gray-200 rounded mb-6"></div>
          <h3 className="text-2xl font-bold mb-2">Mutha Bundle Pack</h3>
          <p className="mb-2">10 x ₹10 Muthas</p>
          <p className="text-red-600 font-bold mb-4">
            Wholesale Price: ₹45–50 per pack
          </p>
          <button className="bg-[#8c5a3c] text-white px-6 py-2 rounded">
            Order Now
          </button>
        </div>
      </section>

      {/* BULK ORDER FORM */}
      <section className="bg-[#6d3f2b] text-white px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-2">Bulk Order Inquiry</h2>
        <p className="mb-10 text-[#f8d7a3]">For Retailers & Distributors</p>

        <div className="bg-white p-8 rounded-xl max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-black">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Shop/Company Name"
            className="border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Order Quantity"
            className="border p-3 rounded"
          />
        </div>

        <button className="mt-8 bg-[#f8d7a3] text-black px-10 py-3 rounded font-semibold shadow">
          Submit Inquiry
        </button>
      </section>

      {/* FRAGRANCE SECTION */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Popular Fragrances</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Rose", "Sandalwood", "Lavender", "Jasmine"].map((item) => (
            <div
              key={item}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <div className="h-40 bg-gray-200"></div>
              <div className="py-4 font-semibold">{item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#f4e6d5] px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl mb-4">💰</div>
            <h4 className="font-bold">Best Wholesale Rates</h4>
          </div>
          <div>
            <div className="text-4xl mb-4">📦</div>
            <h4 className="font-bold">Premium Quality Products</h4>
          </div>
          <div>
            <div className="text-4xl mb-4">🚚</div>
            <h4 className="font-bold">Pan-India Shipping</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
