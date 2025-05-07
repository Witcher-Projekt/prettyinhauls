import React, { useState } from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { ShoppingBag } from "lucide-react";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/mvoevwpz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 flex flex-col items-center justify-center p-4">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
      <header className="w-full flex items-center justify-between py-4 border-b border-pink-200">
        <div className="flex items-center gap-2 text-xl font-bold">
          <ShoppingBag className="h-6 w-6 text-pink-500 animate-bounce" /> PrettyInHauls
        </div>
      </header>

      <section className="text-center mt-20">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-4 animate-pulse">We’re Coming Soon 💕</h1>
        <p className="text-xl text-pink-400 mb-6">
          PrettyInHauls is getting ready to launch the cutest collection of fashion & beauty!
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-pink-300 w-64 text-center"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 text-lg rounded-full shadow-md animate-[float_3s_ease-in-out_infinite]"
            >
              Subscribe 💌
            </button>
          </form>
        ) : (
          <p className="text-green-600 text-lg">Thanks for subscribing! 🎉</p>
        )}
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Contact Us</h2>
        <p className="text-md text-gray-700 mb-2">
          Email: <a href="mailto:prettyinhauls@gmail.com" className="text-pink-500 underline">prettyinhauls@gmail.com</a>
        </p>
        <div className="flex justify-center gap-6 mt-4 text-pink-500 text-3xl">
          <a href="https://youtube.com/@prettyinhauls?si=OldpPtI4hdgKgqCh" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:scale-110 hover:text-red-600 transition-transform duration-300" />
          </a>
          <a href="https://www.instagram.com/prettyinhauls?igsh=MTN6bGJ6NHBnaGFncA==&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:scale-110 hover:text-pink-600 transition-transform duration-300" />
          </a>
        </div>
      </section>

      <footer className="text-center text-sm mt-16 text-gray-500 py-8 border-t border-pink-200 w-full">
        © 2025 PrettyInHauls. All rights reserved.
      </footer>
    </main>
  );
}
