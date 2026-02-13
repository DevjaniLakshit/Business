import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-[#f4e6d5] min-h-screen">
      {/* HERO */}
      <section className="bg-[#6d3f2b] text-white py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-[#f8d7a3]">
          We’re here to assist you. Reach out for orders, inquiries or support.
        </p>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-3xl font-bold text-[#4b2e2e] mb-6">
            Get in Touch
          </h3>

          <div className="space-y-4 text-gray-700">
            <p>📍 Address: Ajmer Rajasthan, India</p>
            <p>📞 Phone: +91 9664280423</p>
            <p>✉ Email: info@seemagold.com</p>
            <p>🕒 Business Hours: Mon - Sat (9 AM - 7 PM)</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#6d3f2b] text-white py-3 rounded hover:bg-emerald-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
