"use client";
import toast from "react-hot-toast";
import { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const toastId = toast.loading("Sending...");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) throw new Error("Failed to send");

    toast.success("Message sent successfully!", { id: toastId });

    // Reset form
    setForm({ name: "", email: "", message: "" });
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong. Please try again.", { id: toastId });
  }
};



  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-16 px-6 relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: "#173e26" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 3 },
            links: {
              enable: true,
              distance: 120,
              color: "#173e26",
              opacity: 0.1,
              width: 2,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: "bounce",
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-background text-center mb-12 drop-shadow-sm">
          Contact Us
        </h1>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-green-300/5 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden border border-gray-200">
          <div className="text-background p-10 flex flex-col justify-between border border-gray-600 rounded-xl">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
              <p className="text-lg opacity-90">
                Want to learn more about <strong>ACE Intelligence?</strong> Fill out the form or contact us directly.
              </p>
            </div>
            <div className="mt-10 space-y-4 text-sm">
              <div>
                <p className="font-semibold">Email</p>
                <p>contact@aceadvisors.org</p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p>+251 962 001 111</p>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p>
                  Ethio-China St, KT 12 Building, 6th Floor, Suite 601,
                  P.O.Box 2255, Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
          </div>

          <div className="p-10 bg-white">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  required
                  placeholder="John Doe"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-400 focus:border-green-400 text-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-400 focus:border-green-400 text-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="How can we help you?"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-400 focus:border-green-400 text-background"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
