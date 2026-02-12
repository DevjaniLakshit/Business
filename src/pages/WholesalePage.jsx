import React from "react";

const WholesalePage = () => {
  return (
    <div className="bg-[#f4e6d5] min-h-screen">
      {/* HERO */}
      <section className="bg-[#6d3f2b] text-white py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Wholesale Partnership</h2>
        <p className="text-[#f8d7a3] max-w-2xl mx-auto">
          Become a distributor or retailer partner with Seema Gold and grow your
          incense business with premium products.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-[#4b2e2e] mb-10 text-center">
            Bulk Order Inquiry Form
          </h3>

          <form className="grid md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="text"
              placeholder="Shop / Company Name"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="text"
              placeholder="City / State"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="number"
              placeholder="Estimated Monthly Order Quantity"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <textarea
              rows="4"
              placeholder="Additional Requirements"
              className="border p-3 rounded md:col-span-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#6d3f2b] text-white px-10 py-3 rounded hover:bg-emerald-600 transition"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default WholesalePage;
