import React, { useState } from 'react';
import ReviewCards from './ReviewCards.jsx';
import './ReviewsSection.css';

// Import local assets
import image3 from './assets/image (3).png';
import image4 from './assets/image (4).png';
import image5 from './assets/image (5).png';
import image6 from './assets/image (6).png';
import geminiImage1 from './assets/Gemini_Generated_Image_zip9qzip9qzip9qz.png';
import geminiImage2 from './assets/Gemini_Generated_Image_yvbadlyvbadlyvba.png';

const ReviewsSection = () => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // All customer photos with data
  const allCustomerPhotos = [
    {
      src: image3,
      customerName: "Priya S.",
      location: "Mumbai",
      caption: "Love how my hands look with this cream!"
    },
    {
      src: image4,
      customerName: "Ananya G.",
      location: "Bangalore",
      caption: "Perfect for daily use ✨"
    },
    {
      src: image5,
      customerName: "Meera P.",
      location: "Ahmedabad",
      caption: "Amazing texture and smell!"
    },
    {
      src: image6,
      customerName: "Kavya R.",
      location: "Hyderabad",
      caption: "My hands feel so soft now"
    },
    {
      src: geminiImage1,
      customerName: "Riya S.",
      location: "Delhi",
      caption: "Best hand cream ever! Highly recommend"
    },
    {
      src: geminiImage2,
      customerName: "Shreya M.",
      location: "Chennai",
      caption: "Worth every penny!"
    }
  ];

  const openPhotoModal = (index = 0) => {
    setSelectedPhotoIndex(index);
    setIsPhotoModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % allCustomerPhotos.length);
  };

  const prevPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev - 1 + allCustomerPhotos.length) % allCustomerPhotos.length);
  };


  return (
    <div className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2>Customer Reviews</h2>
        </div>

        {/* Customer Photos Section */}
        <div className="customer-photos-section">
          <h3>Photos from Customers</h3>
          <p className="photos-section-subtitle">See how our customers are loving their Blue Freesia hand cream</p>
          <div className="photos-grid">
            {allCustomerPhotos.map((photo, index) => (
              <button
                type="button"
                key={index}
                className="photo-item"
                onClick={() => openPhotoModal(index)}
              >
                <img src={photo.src} alt={`${photo.customerName} from ${photo.location}`} />
              </button>
            ))}
          </div>
        </div>

        <ReviewCards />

        <div className="reviews-footer">
          <button className="write-review-btn">Write a Review</button>
          <button className="load-more-btn">Load More Reviews</button>
        </div>
      </div>

      {/* Image Modal */}
      {isPhotoModalOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-[1px] flex justify-center items-center z-50 p-6"
          style={{
            background: `linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(165, 130, 150, 0.1) 100%)`
          }}
          onClick={closePhotoModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 w-8 h-8 bg-gray-800 bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10 shadow-lg"
              onClick={closePhotoModal}
            >
              ×
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10 shadow-lg"
              onClick={prevPhoto}
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10 shadow-lg"
              onClick={nextPhoto}
            >
              ›
            </button>

            {/* Left side - Image */}
            <div className="bg-gray-50 relative flex items-center justify-center p-4">
              <img
                src={allCustomerPhotos[selectedPhotoIndex].src}
                alt={`${allCustomerPhotos[selectedPhotoIndex].customerName} from ${allCustomerPhotos[selectedPhotoIndex].location}`}
                className="max-w-full object-contain rounded-lg shadow-lg"
                style={{ height: '300px' }}
              />
            </div>

            {/* Right side - Customer Details */}
            <div className="p-8 bg-linear-to-br from-gray-50 to-white">
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-12 h-12 text-white flex items-center justify-center text-sm font-semibold uppercase rounded-full border-2"
                  style={{ backgroundColor: '#A58296', borderColor: '#A58296' }}
                >
                  {allCustomerPhotos[selectedPhotoIndex].customerName.slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900">{allCustomerPhotos[selectedPhotoIndex].customerName}</div>
                  <div className="text-sm text-gray-500">{allCustomerPhotos[selectedPhotoIndex].location}</div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  "{allCustomerPhotos[selectedPhotoIndex].caption}"
                </p>
              </div>

              <div className="border-t pt-4">
                <div className="text-sm text-gray-500 mb-2">Product</div>
                <div className="font-medium text-gray-800">Blue Freesia Hand Cream</div>
                <div className="text-sm text-gray-500 mt-4">
                  Share your #BlueFreesia glow with us on Instagram to get featured!
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;