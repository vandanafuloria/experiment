import React, { useState } from 'react';
import { Droplet, ShieldCheck, Sparkles, Star } from 'lucide-react';

const ReviewCards = ({
    rating = 4.8,
    totalReviews = 147,
    breakdown = { 5: 110, 4: 25, 3: 8, 2: 3, 1: 1 },
    starColor = '#A58296',
    accentColor = '#957C70'
}) => {
    const [activeTab, setActiveTab] = useState('product');
    const [selectedImage, setSelectedImage] = useState(null);
    const [filterBy, setFilterBy] = useState('recent');
    
    const percent = (count) => Math.round((count / totalReviews) * 100);
    const placeholderImages = [
        "https://baboski.com/cdn/shop/files/2_f7707208-7963-44e1-9377-7dea84bfb781.png?v=1752147555&width=300",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200&h=200&fit=crop"
    ];
    const palette = {
        star: starColor,
        barDark: accentColor,
        border: '#E5E7EB'
    };

    const productReviews = [
        {
            name: 'Priya S.',
            date: '2 weeks ago',
            dateValue: new Date('2024-10-27'),
            location: 'Mumbai',
            title: 'Good product',
            item: 'Blue Freesia Hand Cream',
            text: 'Nice smell. Works well for dry hands.',
            images: [placeholderImages[0], placeholderImages[1]],
            rating: 4,
            verified: true
        },
        {
            name: 'Ananya G.',
            date: '1 month ago',
            dateValue: new Date('2024-10-10'),
            location: 'Bangalore',
            title: '',
            item: 'Blue Freesia Hand Cream',
            text: 'Fast delivery. Product is ok.',
            images: [],
            rating: 3,
            verified: false
        },
        {
            name: 'Meera P.',
            date: '3 weeks ago',
            dateValue: new Date('2024-10-20'),
            location: 'Ahmedabad',
            title: 'Love it!',
            item: 'Blue Freesia Hand Cream',
            text: 'Smells amazing!! My hands are so soft now. Will buy again.',
            images: [placeholderImages[3]],
            rating: 5,
            verified: true
        },
        {
            name: 'Kavya R.',
            date: '5 days ago',
            dateValue: new Date('2024-11-05'),
            location: 'Hyderabad',
            title: '',
            item: 'Blue Freesia Hand Cream',
            text: 'Waste of money. Too expensive for such a small quantity.',
            rating: 2,
            verified: true
        },
        {
            name: 'Riya S.',
            date: '2 days ago',
            dateValue: new Date('2024-11-08'),
            location: 'Delhi',
            title: 'Excellent',
            item: 'Blue Freesia Hand Cream',
            text: 'Works great for winter dryness. No greasy feeling. Highly recommend!',
            images: [placeholderImages[5]],
            rating: 5,
            verified: true
        },
        {
            name: 'Aarti J.',
            date: '1 week ago',
            dateValue: new Date('2024-11-03'),
            location: 'Pune',
            title: '',
            item: 'Blue Freesia Hand Cream',
            text: 'Average. Nothing special about it.',
            images: [],
            rating: 3,
            verified: false
        },
        {
            name: 'Shreya M.',
            date: '3 days ago',
            dateValue: new Date('2024-11-07'),
            location: 'Chennai',
            title: 'Must buy!',
            item: 'Blue Freesia Hand Cream',
            text: 'OMG this is so good! My mom also loved it. Ordering 2 more.',
            images: [placeholderImages[8], placeholderImages[9]],
            rating: 5,
            verified: true
        },
        {
            name: 'Deepa K.',
            date: '6 days ago',
            dateValue: new Date('2024-11-04'),
            location: 'Kolkata',
            title: '',
            item: 'Blue Freesia Hand Cream',
            text: 'Okay product.',
            images: [],
            rating: 3,
            verified: true
        }
    ];

    const brandReviews = [
        {
            name: 'Ishita S.',
            date: '1 week ago',
            dateValue: new Date('2024-11-03'),
            location: 'Chennai',
            title: 'Good brand',
            item: 'Baboski Brand Experience',
            text: 'Reliable products. Fast shipping.',
            images: [placeholderImages[1]],
            rating: 4,
            verified: true
        },
        {
            name: 'Neha A.',
            date: '3 days ago',
            dateValue: new Date('2024-11-07'),
            location: 'Kolkata',
            title: '',
            item: 'Baboski Brand Experience',
            text: 'Overpriced. Better options available.',
            images: [],
            rating: 2,
            verified: false
        },
        {
            name: 'Sakshi G.',
            date: '2 weeks ago',
            dateValue: new Date('2024-10-27'),
            location: 'Jaipur',
            title: 'Love their products!',
            item: 'Baboski Brand Experience',
            text: 'Amazing quality. Worth every penny. Their customer care is also very helpful.',
            images: [placeholderImages[6]],
            rating: 5,
            verified: true
        },
        {
            name: 'Divya R.',
            date: '4 days ago',
            dateValue: new Date('2024-11-06'),
            location: 'Coimbatore',
            title: '',
            item: 'Baboski Brand Experience',
            text: 'Okay brand. Nothing extraordinary.',
            rating: 3,
            verified: true
        },
        {
            name: 'Pooja T.',
            date: '1 day ago',
            dateValue: new Date('2024-11-09'),
            location: 'Gurgaon',
            title: 'Excellent!',
            item: 'Baboski Brand Experience',
            text: 'Best skincare brand in India! All my friends are now using it.',
            images: [placeholderImages[2], placeholderImages[7]],
            rating: 5,
            verified: true
        },
        {
            name: 'Sonal P.',
            date: '5 days ago',
            dateValue: new Date('2024-11-05'),
            location: 'Indore',
            title: '',
            item: 'Baboski Brand Experience',
            text: 'Good.',
            rating: 4,
            verified: false
        }
    ];

    const filterReviews = (reviews) => {
        let filtered = [...reviews];
        
        switch (filterBy) {
            case 'recent':
                filtered.sort((a, b) => b.dateValue - a.dateValue);
                break;
            case 'highest':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'lowest':
                filtered.sort((a, b) => a.rating - b.rating);
                break;
            case 'verified':
                filtered = filtered.filter(review => review.verified);
                break;
            case 'with-media':
                filtered = filtered.filter(review => review.images && review.images.length > 0);
                break;
            default:
                break;
        }
        
        return filtered;
    };

    const ratingDistribution = [
        { stars: 5, percent: 75 },
        { stars: 4, percent: 17 },
        { stars: 3, percent: 5 },
        { stars: 2, percent: 2 },
        { stars: 1, percent: 1 },
    ];

    const ratingHighlights = [
        {
            icon: ShieldCheck,
            label: 'Would recommend',
            value: '93%',
        },
        {
            icon: Sparkles,
            label: 'Notice smoother skin',
            value: '9/10',
        },
        {
            icon: Droplet,
            label: 'Say it absorbs fast',
            value: '92%',
        },
    ];

    const currentReviews = filterReviews(activeTab === 'product' ? productReviews : brandReviews);

    return (
        <section className="mt-8 sm:mt-10 md:mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                {/* Left Side - Rating Breakdown */}
                <div className="lg:col-span-1">
                    <div className="sticky top-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            {/* Rating Score Card */}
                            <div className="text-center mb-6">
                                <div 
                                    className="w-32 h-32 rounded-full flex items-center justify-center mb-4 relative mx-auto"
                                    style={{
                                        background: `conic-gradient(from 225deg, ${starColor} 0%, #c69ab0 65%, rgba(165, 130, 150, 0.18) 65%)`,
                                        boxShadow: `0 18px 35px rgba(165, 130, 150, 0.18)`
                                    }}
                                >
                                    <div 
                                        className="absolute inset-2 rounded-full flex items-center justify-center"
                                        style={{
                                            background: 'linear-gradient(145deg, #ffffff 0%, #f8f4f7 100%)',
                                            boxShadow: 'inset 0 1px 4px rgba(255, 255, 255, 0.6)'
                                        }}
                                    >
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-semibold" style={{ color: '#7a5e6c' }}>{rating}</span>
                                            <span className="text-lg font-medium" style={{ color: '#b393a3' }}>/5</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center mb-2">
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} size={18} className="fill-current" style={{ color: starColor, fill: starColor }} />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600 mb-3">
                                    Based on <strong>{totalReviews}</strong> verified reviews
                                </p>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border" style={{ backgroundColor: `${starColor}15`, color: starColor, borderColor: `${starColor}40` }}>
                                    <ShieldCheck size={14} />
                                    <span>93% repeat purchase intent</span>
                                </div>
                            </div>

                            {/* Rating Distribution */}
                            <div className="space-y-3 mb-6">
                                {ratingDistribution.map((item) => (
                                    <div key={item.stars} className="flex items-center gap-3">
                                        <div className="flex items-center gap-1 text-xs text-gray-600 w-8">
                                            <Star size={12} className="fill-current" style={{ color: starColor, fill: starColor }} />
                                            <span>{item.stars}</span>
                                        </div>
                                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full rounded-full transition-all duration-300"
                                                style={{ 
                                                    width: `${item.percent}%`,
                                                    backgroundColor: starColor
                                                }}
                                            />
                                        </div>
                                        <span className="text-xs text-gray-600 w-8">{item.percent}%</span>
                                    </div>
                                ))}
                            </div>

                            {/* Rating Highlights */}
                            <div className="space-y-3">
                                {ratingHighlights.map((stat) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={stat.label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                                                <Icon size={16} style={{ color: starColor }} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm text-gray-900">{stat.value}</div>
                                                <div className="text-xs text-gray-600">{stat.label}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Reviews */}
                <div className="lg:col-span-2">
                    {/* Tab Headers - Outside the container */}
                    <div className="flex mb-6 bg-gray-100 rounded-lg p-1 gap-1 max-w-md">
                        <button 
                            className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                                activeTab === 'product' 
                                ? 'bg-white shadow-sm text-gray-900' 
                                : 'hover:text-gray-900'
                            }`}
                            style={{
                                color: activeTab === 'product' ? undefined : starColor
                            }}
                            onClick={() => setActiveTab('product')}
                        >
                            Product Reviews
                        </button>
                        <button 
                            className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                                activeTab === 'brand' 
                                ? 'bg-white shadow-sm text-gray-900' 
                                : 'hover:text-gray-900'
                            }`}
                            style={{
                                color: activeTab === 'brand' ? undefined : starColor
                            }}
                            onClick={() => setActiveTab('brand')}
                        >
                            Brand Reviews
                        </button>
                    </div>

                    {/* Reviews Container */}
                    <div>

            {/* Review Count and Filter Controls */}
            <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-600">
                    Showing {currentReviews.length} {activeTab} review{currentReviews.length !== 1 ? 's' : ''}
                    {filterBy !== 'recent' && ` (${filterBy.replace('-', ' ')})`}
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 font-medium">Sort & Filter:</span>
                    <select 
                        value={filterBy}
                        onChange={(e) => setFilterBy(e.target.value)}
                        className="px-4 py-2 text-sm border-2 border-gray-200 rounded-lg bg-white text-gray-700 focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-100 transition-all cursor-pointer hover:border-gray-300"
                        style={{ 
                            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                            backgroundPosition: 'right 0.5rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.5em 1.5em',
                            paddingRight: '2.5rem',
                            appearance: 'none'
                        }}
                    >
                        <option value="recent">Most Recent</option>
                        <option value="highest">Highest Rated</option>
                        <option value="lowest">Lowest Rated</option>
                        <option value="verified">Verified Only</option>
                        <option value="with-media">With Photos</option>
                    </select>
                </div>
            </div>

            {/* Reviews List */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
                {currentReviews.map((rev, idx) => (
                    <div key={idx} className="relative overflow-hidden border border-gray-100 rounded-none p-2.5 sm:p-3 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md border-b" style={{ borderBottomColor: starColor }}>
                        <div
                            className="pointer-events-none absolute inset-0 opacity-15"
                            style={{
                                background:
                                    'radial-gradient(circle at 0% 0%, rgba(255, 204, 230, 0.7) 18%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(255, 217, 238, 0.7) 18%, transparent 42%)'
                            }}
                        />
                        {/* Header */}
                        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2">
                            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                                <div 
                                    className="w-7 h-7 sm:w-8 sm:h-8 text-white flex items-center justify-center text-[10px] sm:text-xs font-semibold uppercase border-2"
                                    style={{ backgroundColor: starColor, borderColor: starColor }}
                                >
                                    {rev.name.slice(0, 2)}
                                </div>
                                <div className="truncate">
                                    <div className="text-sm sm:text-base font-semibold truncate">{rev.name}</div>
                                    <div className="text-[10px] sm:text-[11px] text-gray-500 truncate">{rev.location}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 border border-green-300 text-green-700">Verified</span>
                                <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">{rev.date}</div>
                            </div>
                        </div>

                        <div className="border-t mt-1.5 sm:mt-2" style={{ borderColor: palette.border }} />

                        <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 mb-1.5 sm:mb-2">
                            <div className="flex items-center space-x-0.5 sm:space-x-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={12} className="fill-current" style={{ color: i <= rev.rating ? starColor : '#E5E7EB', fill: i <= rev.rating ? starColor : '#E5E7EB' }} />
                                ))}
                            </div>
                        </div>
                        {rev.title && (
                            <div className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">{rev.title}</div>
                        )}
                        <ReviewText text={rev.text} />

                        {/* Images and Action Buttons Row */}
                        <div className="flex items-center justify-between mt-2 sm:mt-3">
                            {/* Images */}
                            {rev.images && rev.images.length > 0 ? (
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    {rev.images.map((src, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedImage({ src, review: rev, index: i })}
                                            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-none border border-gray-200 shadow-sm opacity-90 hover:opacity-100 hover:scale-[1.02] transition cursor-pointer"
                                        >
                                            <img
                                                src={src}
                                                alt="Review image"
                                                className="w-full h-full object-cover"
                                                style={{ filter: 'grayscale(15%)' }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div></div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                                <button className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span className="font-medium">Helpful</span>
                                </button>
                                <button className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span className="font-medium">Reply</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 backdrop-blur-[1px] flex justify-center items-center z-50 p-6"
                    style={{
                        background: `linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(165, 130, 150, 0.1) 100%)`
                    }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 w-8 h-8 bg-gray-800 bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10 shadow-lg"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>

                        {/* Left side - Image */}
                        <div className="bg-gray-50 relative">
                            <img
                                src={selectedImage.src}
                                alt={`${selectedImage.review.name} review`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right side - Review Details */}
                        <div className="p-8 bg-linear-to-br from-gray-50 to-white">
                            <div className="flex items-center gap-4 mb-4">
                                <div 
                                    className="w-12 h-12 text-white flex items-center justify-center text-sm font-semibold uppercase rounded-full border-2"
                                    style={{ backgroundColor: starColor, borderColor: starColor }}
                                >
                                    {selectedImage.review.name.slice(0, 2)}
                                </div>
                                <div>
                                    <div className="font-semibold text-lg text-gray-900">{selectedImage.review.name}</div>
                                    <div className="text-sm text-gray-500">{selectedImage.review.location}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={18} className="fill-current" style={{ color: i <= selectedImage.review.rating ? starColor : '#E5E7EB', fill: i <= selectedImage.review.rating ? starColor : '#E5E7EB' }} />
                                ))}
                            </div>

                            {selectedImage.review.title && (
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">{selectedImage.review.title}</h3>
                            )}

                            <p className="text-gray-700 leading-relaxed mb-6">"{selectedImage.review.text}"</p>

                            <div className="border-t pt-4">
                                <div className="text-sm text-gray-500 mb-2">Product Reviewed</div>
                                <div className="font-medium text-gray-800">{selectedImage.review.item}</div>
                                <div className="text-sm text-gray-500 mt-2">{selectedImage.review.date}</div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button className="flex-1 py-2 px-4 bg-transparent border-2 text-sm font-medium rounded-lg transition-colors hover:bg-pink-50" style={{ borderColor: palette.star, color: palette.star }}>
                                    Helpful
                                </button>
                                <button className="flex-1 py-2 px-4 bg-transparent border-2 text-sm font-medium rounded-lg transition-colors hover:bg-pink-50" style={{ borderColor: palette.star, color: palette.star }}>
                                    Reply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewCards;

// Support component: clamp review text with Read more/less
function ReviewText({ text }) {
    const [expanded, setExpanded] = React.useState(false);
    const MAX_CHARS = 180;
    const isLong = text.length > MAX_CHARS;
    const visible = expanded || !isLong ? text : text.slice(0, MAX_CHARS) + '…';

    return (
        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            <p>{visible}</p>
            {isLong && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-1 text-[10px] sm:text-xs underline text-pink-600 hover:text-pink-700"
                >
                    {expanded ? 'Read less' : 'Read more'}
                </button>
            )}
        </div>
    );
}