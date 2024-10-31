import React from 'react';
import { Music4, Clock, DollarSign, Calendar } from 'lucide-react';
import BookingForm from './components/BookingForm';
import StudioInfo from './components/StudioInfo';
import PricingCard from './components/PricingCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-black opacity-40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1583328359729-dee77c8e7a88?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Blaq Dot</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">Professional Recording Space for Your Music</p>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <StudioInfo 
            icon={<Music4 className="w-8 h-8 text-indigo-400" />}
            title="Pro Equipment"
            description="State-of-the-art recording gear and instruments at your disposal"
          />
          <StudioInfo 
            icon={<Clock className="w-8 h-8 text-indigo-400" />}
            title="Flexible Hours"
            description="24/7 availability to suit your creative schedule"
          />
          <StudioInfo 
            icon={<DollarSign className="w-8 h-8 text-indigo-400" />}
            title="Competitive Rates"
            description="Affordable packages for artists at every level"
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-800 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Studio Packages</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Basic Session"
            price="599"
            features={[
              "4 Hours Studio Time",
              "Basic Mix",
              "2 Revisions",
              "Digital Delivery"
            ]}
          />
          <PricingCard
            title="Pro Package"
            price="899"
            featured={true}
            features={[
              "8 Hours Studio Time",
              "Professional Mix",
              "4 Revisions",
              "Digital Delivery",
              "Sound Engineer"
            ]}
          />
          <PricingCard
            title="Premium"
            price="1299"
            features={[
              "12 Hours Studio Time",
              "Professional Mix & Master",
              "Unlimited Revisions",
              "Digital Delivery",
              "Sound Engineer",
              "Video Recording"
            ]}
          />
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Book Your Session</h2>
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-center">
        <p className="text-gray-400">© 2024 Blaq Dot Studios. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;