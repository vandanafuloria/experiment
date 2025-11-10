import React, { useState } from 'react';
import BaboskiLogo from './BaboskiLogo.jsx';
import ReviewsSection from './ReviewsSection.jsx';
import Footer from './Footer.jsx';
import SocialProofBadge from './SocialProofBadge.jsx';
import LiveUserCounter from './LiveUserCounter.jsx';

const BlueFreesiaProduct = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    'https://baboski.com/cdn/shop/files/2_f7707208-7963-44e1-9377-7dea84bfb781.png?v=1752147555&width=2890',
    'https://baboski.com/cdn/shop/files/3_b67926e1-10d8-4590-bf11-57e0c74e5a41.png?v=1752147555&width=2890',
    'https://baboski.com/cdn/shop/files/1_0b5096e5-c03f-4e70-b135-b6f0a3b453ad.png?v=1752147555&width=2890'
  ];

  const benefits = [
    { icon: '✓', text: 'Quick Absorbing' },
    { icon: '✓', text: 'Hydrating & Nourishing' },
    { icon: '✓', text: 'Silky Smooth Texture' },
    { icon: '✓', text: 'Targets Pigmentation' }
  ];

  return (
    <div className="font-['Space_Grotesk'] bg-[#f7f5f3] min-h-screen">
      <LiveUserCounter className="fixed bottom-4 left-4 z-50 bg-white text-black sm:bottom-6 sm:left-6" />
      {/* Header with Logo */}
      <header className="bg-white px-5 py-5 flex items-center justify-between shadow-sm">
        <BaboskiLogo size="large" color="brand" />
        <nav className="flex gap-8 items-center">
          <a href="#" className="text-gray-600 no-underline font-medium text-base hover:text-[#a58296] transition-colors">Home</a>
          <a href="#" className="text-gray-600 no-underline font-medium text-base hover:text-[#a58296] transition-colors">About Us</a>
          <a href="#" className="text-gray-600 no-underline font-medium text-base hover:text-[#a58296] transition-colors">Shop All</a>
          <a href="#" className="text-gray-600 no-underline font-medium text-base hover:text-[#a58296] transition-colors">Technology</a>
        </nav>
      </header>

      {/* Navigation Breadcrumb */}
      <nav className="text-sm text-[#8b7355] mb-5 px-5 pt-5">
        <span>Home</span> / <span className="text-[#a58296]">Blue Freesia</span>
      </nav>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white p-10 shadow-xl">
        {/* Product Images */}
        <div className="flex flex-col gap-5">
          <div className="w-full h-[500px] bg-linear-to-br from-[#e8e2f0] to-[#f0ebe8] rounded-2xl flex items-center justify-center overflow-hidden">
            <img 
              src={productImages[selectedImage]} 
              alt="Blue Freesia Hand Cream"
              className="w-4/5 h-4/5 object-contain rounded-xl"
            />
          </div>
          <div className="flex gap-2.5 justify-center">
            {productImages.map((img, index) => (
              <button
                key={index}
                className={`w-16 h-16 border-2 rounded-lg overflow-hidden cursor-pointer transition-colors ${
                  selectedImage === index ? 'border-[#a58296]' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`Product view ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-5">
          <div className="text-[#a58296] text-sm font-normal uppercase tracking-wide">Hand Cream</div>
          <h1 className="text-5xl font-normal text-[#957C70] leading-tight  text-left">Blue Freesia</h1>
          
          {/* Social Proof */}
          <SocialProofBadge rating={4.2} reviewCount={235} soldThisWeek={235} />
          
          <div className="flex items-center gap-4 mb-5">
            <span className="text-gray-600 font-medium">Size:</span>
            <span className="bg-[#a58296] text-white px-4 py-2 rounded-full font-normal text-sm">30 g</span>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap gap-2.5 mb-5">
            {benefits.map((benefit, index) => (
              <span key={index} className="bg-[#a58296] text-white px-4 py-2 rounded-full text-sm font-normal flex items-center gap-1.5">
                <span className="text-xs">{benefit.icon}</span>
                {benefit.text}
              </span>
            ))}
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-4 mb-1">
            <span className="text-3xl font-medium text-gray-800">MRP ₹ 299</span>
            <span className="text-lg text-gray-400 line-through">MRP ₹ 349</span>
          </div>
          <div className="text-sm text-gray-600 mb-1">(Incl. of all taxes)</div>
          <div className="text-sm text-gray-600 mb-8">
            <a href="#" className="text-[#a58296] underline">Shipping</a> calculated at checkout.
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-10">
            <button className="flex-1 py-4 px-5 bg-transparent border-2 border-[#a58296] text-[#a58296] rounded-lg font-medium text-base cursor-pointer transition-all hover:bg-[#a58296] hover:text-white">
              ADD TO CART
            </button>
            <button className="flex-1 py-4 px-5 bg-[#a58296] text-white rounded-lg font-medium text-base cursor-pointer transition-all hover:bg-[#8e6d82] flex items-center justify-center gap-2">
              BUY NOW 
              <span className="flex gap-1">
                <span className="w-5 h-5 bg-white text-[#a58296] rounded-sm flex items-center justify-center text-xs font-bold">G</span>
                <span className="w-5 h-5 bg-white text-[#a58296] rounded-sm flex items-center justify-center text-xs font-bold">₹</span>
              </span>
            </button>
          </div>

          {/* Product Description */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-4">About the Product</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              A luxurious hand cream for ultimate hydration. The blend of encapsulated alpha-arbutin, 
              jojoba oil, and mango seed butter deeply moisturises, reduces hyperpigmentation, and 
              supports the skin barrier, leaving hands soft, supple, and irresistibly smooth.
            </p>
          </div>

        </div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlueFreesiaProduct;