import React, { useState } from 'react';
import { Calendar, Clock, Music, MessageSquare } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    package: 'basic',
    genre: '',
    musicians: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        package: 'basic',
        genre: '',
        musicians: '1',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center">
        <div className="animate-bounce mb-4">
          <Music className="w-16 h-16 text-indigo-400 mx-auto" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Booking Received!</h3>
        <p className="text-gray-400">We'll contact you shortly to confirm your session.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="Your contact number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Genre</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          >
            <option value="">Select Genre</option>
            <option value="hip-hop">Hip Hop</option>
            <option value="rnb">R&B</option>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="electronic">Electronic</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Preferred Date</span>
            </div>
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Preferred Time</span>
            </div>
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Package</label>
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          >
            <option value="basic">Basic Session (ZAR599)</option>
            <option value="pro">Pro Package (ZAR899)</option>
            <option value="premium">Premium (ZAR1299)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Number of Musicians</label>
          <input
            type="number"
            name="musicians"
            value={formData.musicians}
            onChange={handleChange}
            min="1"
            max="10"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>Additional Notes</span>
            </div>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="Tell us about your project, specific requirements, or any questions you have..."
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group"
      >
        <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        Book Your Session
      </button>
      <p className="text-sm text-gray-400 text-center mt-4">
        By booking, you agree to our terms and studio policies
      </p>
    </form>
  );
};

export default BookingForm;