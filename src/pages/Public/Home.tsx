import React, { useState } from 'react';
import { FaPhoneAlt, FaBox, FaShippingFast, FaClock, FaSearch } from 'react-icons/fa';
import CoverImage from '../../images/cover/cover-01.png'; // Using existing cover image
import Logo from '../../images/logo/logo1.png'; // Assuming logo exists here based on previous context

const Home = () => {
  const [trackingId, setTrackingId] = useState('');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for tracking logic
    console.log('Tracking ID:', trackingId);
    if(trackingId.trim()) {
        // Navigate or show modal
        // alert(`Tracking ${trackingId}`); 
    }
  };

  return (
    <div className="relative min-h-screen w-full font-sans text-body">
      
      {/* Hero Section */}
      <div className="relative flex min-h-screen w-full items-center justify-center bg-gray-900">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={CoverImage} 
            alt="Logistics Background" 
            className="h-full w-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-4 py-12 md:flex-row md:px-8 lg:px-12">
          
          {/* Left Side: Hero Text (Desktop) / Top (Mobile) */}
          <div className="mb-10 w-full text-center md:mb-0 md:w-1/2 md:text-left lg:w-3/5">
            <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              Track Your <span className="text-orange-500">Order</span>
            </h1>
            <p className="mb-6 text-lg font-medium text-gray-200 sm:text-xl">
              Enter your tracking number to get the latest location and delivery status instantly.
            </p>
            
            {/* Minimal Features (Optional/Secondary) */}
            <div className="mt-8 hidden flex-wrap gap-6 text-sm font-semibold text-white/90 md:flex">
               <div className="flex items-center gap-2">
                 <FaBox className="text-orange-400" /> Secure Delivery
               </div>
               <div className="flex items-center gap-2">
                 <FaShippingFast className="text-orange-400" /> Real-time Updates
               </div>
               <div className="flex items-center gap-2">
                 <FaClock className="text-orange-400" /> On-time Service
               </div>
            </div>
          </div>

          {/* Right Side: Tracking Card (Desktop) / Bottom (Mobile) */}
          <div className="w-full max-w-md md:w-1/2 lg:w-2/5">
            <div className="rounded-2xl bg-orange-600 p-1 shadow-2xl backdrop-blur-sm bg-opacity-90 dark:bg-orange-700">
              <div className="rounded-xl bg-white p-6 shadow-inner dark:bg-boxdark sm:p-8">
                
                {/* Card Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/20">
                       <FaSearch />
                     </div>
                     <h2 className="text-xl font-bold text-black dark:text-white">Track Shipment</h2>
                  </div>
                  {/* Optional Logo in Card */}
                  <img src={Logo} alt="Logo" className="h-8 w-auto opacity-80" />
                </div>

                <form onSubmit={handleTrack} className="flex flex-col gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Tracking Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your tracking number"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      className="w-full rounded-lg border border-stroke bg-gray-50 px-4 py-3 text-black outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-strokedark dark:bg-meta-4 dark:text-white"
                    />
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      Ex: TRK-123456789
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-black py-4 text-base font-bold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  >
                    TRACK YOUR ORDER
                  </button>
                </form>

                {/* Support Line */}
                <div className="mt-6 border-t border-stroke pt-4 text-center dark:border-strokedark">
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <FaPhoneAlt className="text-orange-500" />
                    <span>Call 24 Hours: <a href="tel:888-654-1243" className="hover:text-orange-500">888-654-1243</a></span>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Mobile Features (Visible only on small screens below card) */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold text-white/90 md:hidden">
               <div className="flex items-center gap-2">
                 <FaBox className="text-orange-400" /> Secure
               </div>
               <div className="flex items-center gap-2">
                 <FaShippingFast className="text-orange-400" /> Fast
               </div>
               <div className="flex items-center gap-2">
                 <FaClock className="text-orange-400" /> On-time
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
