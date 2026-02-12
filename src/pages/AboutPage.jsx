import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#f4e6d5] text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-[#6d3f2b] text-white py-20 px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About Seema Gold
        </h2>
        <p className="text-[#f8d7a3] max-w-2xl mx-auto">
          Premium Quality Incense Sticks Wholesale Supplier Delivering
          Fragrance, Purity & Trust Across India.
        </p>
      </section>

      {/* COMPANY STORY */}
      <section className="py-20 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="h-80 bg-gray-200 rounded-xl shadow-md"></div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#4b2e2e] mb-6">
            Our Journey
          </h3>
          <p className="mb-4">
            Seema Gold was founded with a vision to provide high-quality
            agarbatti products at the best wholesale prices. We specialize
            in delivering premium fragrances crafted to create a peaceful
            and spiritual atmosphere.
          </p>
          <p>
            With years of dedication and commitment to quality, we have
            built strong relationships with retailers and distributors
            across multiple regions.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div className="p-8 shadow-md rounded-xl">
            <h3 className="text-2xl font-bold text-[#6d3f2b] mb-4">
              Our Mission
            </h3>
            <p>
              To deliver premium incense products at affordable wholesale
              rates while maintaining the highest standards of quality,
              fragrance, and customer satisfaction.
            </p>
          </div>

          <div className="p-8 shadow-md rounded-xl">
            <h3 className="text-2xl font-bold text-[#6d3f2b] mb-4">
              Our Vision
            </h3>
            <p>
              To become a trusted name in the incense industry by spreading
              positivity, purity, and divine fragrance in every home and
              temple across the country.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-8 text-center">
        <h3 className="text-3xl font-bold text-[#4b2e2e] mb-12">
          Why Choose Seema Gold?
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">💰</div>
            <h4 className="font-bold mb-2">Best Wholesale Pricing</h4>
            <p>Competitive pricing for retailers & distributors.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🌸</div>
            <h4 className="font-bold mb-2">Premium Fragrances</h4>
            <p>Long-lasting and soothing aroma blends.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🚚</div>
            <h4 className="font-bold mb-2">Reliable Distribution</h4>
            <p>Fast and secure delivery across India.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#6d3f2b] text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Become a Wholesale Partner
        </h3>
        <p className="text-[#f8d7a3] mb-8">
          Join hands with Seema Gold and grow your business with premium
          incense products.
        </p>
        <button className="bg-[#f8d7a3] text-black px-8 py-3 rounded font-semibold hover:bg-emerald-500 hover:text-white transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default AboutPage;