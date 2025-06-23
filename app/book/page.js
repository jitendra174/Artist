"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    eventName: "",
    purpose: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! Our team will contact you soon.");
    setFormData({ name: "", eventName: "", purpose: "", email: "" });
  };

  return (
    <section className="max-w-xl mx-auto mt-20 p-6 bg-dark-card text-dark-text rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Book an Artist</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Your Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-dark-bg text-white border border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1">Event Name</label>
          <input
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-dark-bg text-white border border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1">Purpose</label>
          <textarea
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-dark-bg text-white border border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-dark-bg text-white border border-gray-600"
          />
        </div>


         <div>
          <label className="block mb-1">Astist</label>
          <input
            name="artist"
            type="text"
            value={formData.artist}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-dark-bg text-white border border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="bg-dark-accent text-white px-4 py-2 rounded hover:bg-opacity-80"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
