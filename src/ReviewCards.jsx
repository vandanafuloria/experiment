import React, { useMemo, useState } from 'react';
import { Droplet, ShieldCheck, Sparkles, Star, Disc3 } from 'lucide-react';
import image3 from './assets/image (3).png';
import image4 from './assets/image (4).png';
import image5 from './assets/image (5).png';
import image6 from './assets/image (6).png';
import geminiImage1 from './assets/Gemini_Generated_Image_zip9qzip9qzip9qz.png';
import geminiImage2 from './assets/Gemini_Generated_Image_yvbadlyvbadlyvba.png';
import sampleAudioLocal from './assets/cascade-breathe-future-garage-412839.mp3';
import productVideo1 from './assets/3402764-uhd_2160_4096_25fps.mp4';
import productVideo2 from './assets/3403280-hd_1080_1920_25fps.mp4';
import productVideo3 from './assets/3403283-uhd_2160_4096_25fps.mp4';
import productVideo4 from './assets/4008365-uhd_2160_4096_25fps.mp4';
import productVideo5 from './assets/8141585-uhd_2160_4096_25fps.mp4';
import productVideo6 from './assets/854082-hd_1920_1080_25fps.mp4';
import storeImage1 from './assets/store.png';
import storeImage2 from './assets/store2.png';
import storeImage3 from './assets/store3.png';
import storeImage4 from './assets/store5.png';
import waImage1155000 from './assets/WhatsApp Image 2025-11-10 at 11.50.00 AM.jpeg';
import waImage1155000Alt from './assets/WhatsApp Image 2025-11-10 at 11.50.00 AM (1).jpeg';
import waImage1155001 from './assets/WhatsApp Image 2025-11-10 at 11.50.01 AM.jpeg';
import waImage1155053 from './assets/WhatsApp Image 2025-11-10 at 11.50.53 AM.jpeg';
import waImage1155053Alt from './assets/WhatsApp Image 2025-11-10 at 11.50.53 AM (1).jpeg';
import waImage1155054 from './assets/WhatsApp Image 2025-11-10 at 11.50.54 AM.jpeg';
import waImage1155054Alt from './assets/WhatsApp Image 2025-11-10 at 11.50.54 AM (1).jpeg';
import waImage1155054Alt2 from './assets/WhatsApp Image 2025-11-10 at 11.50.54 AM (2).jpeg';
import waImage1155055 from './assets/WhatsApp Image 2025-11-10 at 11.50.55 AM.jpeg';
import waImage1155055Alt from './assets/WhatsApp Image 2025-11-10 at 11.50.55 AM (1).jpeg';

const ReviewCards = ({
    rating = 4.8,
    totalReviews = 147,
    breakdown = { 5: 110, 4: 25, 3: 8, 2: 3, 1: 1 },
    starColor = '#A58296',
    accentColor = '#957C70'
}) => {
    const [activeTab, setActiveTab] = useState('product');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [selectedAudio, setSelectedAudio] = useState(null);
    const [selectedStore, setSelectedStore] = useState(null);
    const [filterBy, setFilterBy] = useState('recent');
    const [mediaSourceFilter, setMediaSourceFilter] = useState('all');
    
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

    const mediaItems = useMemo(() => ([
        {
            id: 'insta-1',
            src: image3,
            source: 'instagram',
            sourceLabel: 'Instagram',
            handle: '@baboski.glow',
            uploadedAt: 'Nov 8, 2024',
            description: '“Weekend rituals with Blue Freesia. Velvet finish, instant hydration.”',
            tags: ['#BlueFreesia', '#BaboskiGlow'],
            link: 'https://instagram.com/baboski.glow'
        },
        {
            id: 'insta-2',
            src: image4,
            source: 'instagram',
            sourceLabel: 'Instagram',
            handle: '@freesia.fanclub',
            uploadedAt: 'Nov 4, 2024',
            description: 'Before/after story shared via DM—hands look visibly smoother.',
            tags: ['#TextureTuesday', '#HandCare'],
            link: 'https://instagram.com/freesia.fanclub'
        },
        {
            id: 'wa-1',
            src: image5,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'VIP Customer Circle',
            uploadedAt: 'Nov 2, 2024',
            description: 'Customer testimonial from our WhatsApp community drop.',
            tags: ['#CustomerLove']
        },
        {
            id: 'wa-2',
            src: image6,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'Retail Partner Group',
            uploadedAt: 'Oct 31, 2024',
            description: 'Shelf display shared by a retail partner—limited edition set.',
            tags: ['#RetailSpotlight', '#BaboskiInstores']
        },
        {
            id: 'insta-3',
            src: geminiImage1,
            source: 'instagram',
            sourceLabel: 'Instagram',
            handle: '@beautybytes.in',
            uploadedAt: 'Oct 28, 2024',
            description: 'UGC reel cover featuring the hand cream in golden hour lighting.',
            tags: ['#GlowShot', '#UGC'],
            link: 'https://instagram.com/beautybytes.in'
        },
        {
            id: 'wa-3',
            src: geminiImage2,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'Community Broadcast',
            uploadedAt: 'Oct 25, 2024',
            description: 'Shared during the festive flash sale—customers stacking up bundles.',
            tags: ['#FestiveEdit', '#WhatsAppDrops']
        },
        {
            id: 'wa-4',
            src: waImage1155000,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'Customer DM',
            uploadedAt: 'Nov 10, 2025',
            description: 'Textured shot of the new hand cream duo straight from a WhatsApp DM.',
            tags: ['#RealRoutine', '#BaboskiGlow']
        },
        {
            id: 'wa-5',
            src: waImage1155000Alt,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'Community Drop',
            uploadedAt: 'Nov 10, 2025',
            description: 'Close-up shared in the Baboski WhatsApp insiders group.',
            tags: ['#CustomerLove']
        },
        {
            id: 'wa-6',
            src: waImage1155001,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'VIP Customer',
            uploadedAt: 'Nov 10, 2025',
            description: 'Lifestyle snap showing the cream on a vanity setup.',
            tags: ['#WhatsAppDrops']
        },
        {
            id: 'wa-7',
            src: waImage1155053,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'Retail Feedback',
            uploadedAt: 'Nov 10, 2025',
            description: 'Retail partner showcased the new display rack via WhatsApp.',
            tags: ['#RetailSpotlight']
        },
        {
            id: 'wa-8',
            src: waImage1155053Alt,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'Retail Feedback',
            uploadedAt: 'Nov 10, 2025',
            description: 'Alternate angle of the same retail display from the partner channel.',
            tags: ['#RetailSpotlight']
        },
        {
            id: 'wa-9',
            src: waImage1155054,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'Launch Broadcast',
            uploadedAt: 'Nov 10, 2025',
            description: 'Festive hamper tease sent during the WhatsApp launch broadcast.',
            tags: ['#FestiveEdit']
        },
        {
            id: 'wa-10',
            src: waImage1155054Alt,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'Launch Broadcast',
            uploadedAt: 'Nov 10, 2025',
            description: 'Zoomed-in detail of the hamper packaging courtesy of a WhatsApp reply.',
            tags: ['#WhatsAppSneakPeek']
        },
        {
            id: 'wa-11',
            src: waImage1155054Alt2,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'Launch Broadcast',
            uploadedAt: 'Nov 10, 2025',
            description: 'Another angle showing the product texture under natural light.',
            tags: ['#TextureTuesday']
        },
        {
            id: 'wa-12',
            src: waImage1155055,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'Team Share',
            uploadedAt: 'Nov 10, 2025',
            description: 'Team member shared the behind-the-scenes prep via WhatsApp.',
            tags: ['#BTS', '#TeamBaboski']
        },
        {
            id: 'wa-13',
            src: waImage1155055Alt,
            source: 'whatsapp',
            sourceLabel: 'WhatsApp',
            handle: 'Team Share',
            uploadedAt: 'Nov 10, 2025',
            description: 'Additional behind-the-scenes snap captured during the drop.',
            tags: ['#BTS', '#BaboskiGlow']
        }
    ]), []);

    const shuffledMediaItems = useMemo(
        () => [...mediaItems].sort(() => Math.random() - 0.5),
        [mediaItems]
    );

    const audioItems = useMemo(() => ([
        {
            id: 'audio-1',
            title: 'Cascade Breathe Session',
            platform: 'WhatsApp Voice Drop',
            mood: 'Calming story',
            uploadedAt: 'Nov 10, 2025',
            duration: '0:32',
            src: sampleAudioLocal,
            link: 'https://open.spotify.com/track/placeholder'
        },
        {
            id: 'audio-2',
            title: 'Customer Gratitude Note',
            platform: 'Instagram DM',
            mood: 'Happy customer',
            uploadedAt: 'Nov 6, 2025',
            duration: '0:24',
            src: 'https://cdn.pixabay.com/download/audio/2022/10/26/audio_0e3fb4bdb7.mp3?filename=highlander-121112.mp3',
            link: 'https://instagram.com/baboski.glow'
        }
    ]), []);

    const videoItems = useMemo(() => ([
        {
            id: 'video-1',
            title: 'Shelf Styling Walkthrough',
            platform: 'Instagram Reels',
            uploadedAt: 'Nov 9, 2025',
            src: productVideo2,
            link: 'https://instagram.com/reel/shelf-styling'
        },
        {
            id: 'video-2',
            title: 'Hand Cream Texture Closeup',
            platform: 'WhatsApp Broadcast',
            uploadedAt: 'Nov 8, 2025',
            src: productVideo4,
            link: 'https://baboski.com/texture'
        },
        {
            id: 'video-3',
            title: 'Skincare Routine Clip',
            platform: 'Instagram Stories',
            uploadedAt: 'Nov 6, 2025',
            src: productVideo3,
            link: 'https://instagram.com/stories/baboski'
        },
        {
            id: 'video-4',
            title: 'Shelf Reset Timelapse',
            platform: 'Retail Partner Drop',
            uploadedAt: 'Nov 4, 2025',
            src: productVideo5,
            link: 'https://baboski.com/retail'
        },
        {
            id: 'video-5',
            title: 'Glow Bar BTS',
            platform: 'Community WhatsApp',
            uploadedAt: 'Nov 2, 2025',
            src: productVideo1,
            link: 'https://baboski.com/community'
        },
        {
            id: 'video-6',
            title: 'Product Flatlay Reel',
            platform: 'Instagram Reels',
            uploadedAt: 'Oct 31, 2025',
            src: productVideo6,
            link: 'https://instagram.com/reel/flatlay'
        }
    ]), []);

    const storeItems = useMemo(() => ([
        {
            id: 'store-1',
            name: 'Baboski Flagship – Mumbai',
            address: 'Bandra West, Linking Road 101',
            hours: '10:00 AM – 9:00 PM',
            image: storeImage1,
            phone: '+91 22 4000 1001'
        },
        {
            id: 'store-2',
            name: 'Baboski Experience Hub – Delhi',
            address: 'Khan Market, Block F 23',
            hours: '11:00 AM – 8:30 PM',
            image: storeImage2,
            phone: '+91 11 4200 2202'
        },
        {
            id: 'store-3',
            name: 'Baboski Studio – Bengaluru',
            address: 'Indiranagar, 100 Feet Road 55',
            hours: '10:30 AM – 9:30 PM',
            image: storeImage3,
            phone: '+91 80 4500 3303'
        },
        {
            id: 'store-4',
            name: 'Baboski Collective – Hyderabad',
            address: 'Jubilee Hills Road No. 36',
            hours: '11:00 AM – 9:00 PM',
            image: storeImage4,
            phone: '+91 40 4400 4404'
        }
    ]), []);

    const mediaFilters = [
        { value: 'all', label: 'All Media' },
        { value: 'instagram', label: 'Instagram' },
        { value: 'whatsapp', label: 'WhatsApp' }
    ];
    const palette = {
        star: starColor,
        barDark: accentColor,
        border: '#E5E7EB'
    };

    const isMediaTab = activeTab === 'media';
    const isAudioTab = activeTab === 'audio';
    const isVideoTab = activeTab === 'video';
    const isStoreTab = activeTab === 'store';
    const isReviewTab = activeTab === 'product' || activeTab === 'brand';
    const filteredMedia = shuffledMediaItems.filter((item) => {
        if (mediaSourceFilter === 'all') {
            return true;
        }
        return item.source === mediaSourceFilter;
    });
    const filteredAudio = audioItems;
    const filteredVideo = videoItems;
    const filteredStores = storeItems;

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

    const currentReviews = isReviewTab
        ? filterReviews(activeTab === 'product' ? productReviews : brandReviews)
        : [];

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
                    <div className="flex flex-wrap mb-6 bg-gray-100 rounded-lg p-1 gap-1">
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
                        <button 
                            className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                                activeTab === 'media' 
                                ? 'bg-white shadow-sm text-gray-900' 
                                : 'hover:text-gray-900'
                            }`}
                            style={{
                                color: activeTab === 'media' ? undefined : starColor
                            }}
                            onClick={() => setActiveTab('media')}
                        >
                            Media
                        </button>
                        <button 
                            className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                                activeTab === 'video' 
                                ? 'bg-white shadow-sm text-gray-900' 
                                : 'hover:text-gray-900'
                            }`}
                            style={{
                                color: activeTab === 'video' ? undefined : starColor
                            }}
                            onClick={() => setActiveTab('video')}
                        >
                            Video
                        </button>
                        <button 
                            className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                                activeTab === 'audio' 
                                ? 'bg-white shadow-sm text-gray-900' 
                                : 'hover:text-gray-900'
                            }`}
                            style={{
                                color: activeTab === 'audio' ? undefined : starColor
                            }}
                            onClick={() => setActiveTab('audio')}
                        >
                            Audio
                        </button>
                        <button 
                            className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                                activeTab === 'store' 
                                ? 'bg-white shadow-sm text-gray-900' 
                                : 'hover:text-gray-900'
                            }`}
                            style={{
                                color: activeTab === 'store' ? undefined : starColor
                            }}
                            onClick={() => setActiveTab('store')}
                        >
                            Our Stores
                        </button>
                    </div>

                    {/* Reviews Container */}
                    <div>
                        {isMediaTab ? (
                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Community Media Wall</h3>
                                        <p className="text-sm text-gray-500">Highlights sourced from Instagram & WhatsApp conversations.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {mediaFilters.map((filter) => (
                                            <button
                                                key={filter.value}
                                                onClick={() => setMediaSourceFilter(filter.value)}
                                                className={`px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors ${
                                                    mediaSourceFilter === filter.value
                                                        ? 'bg-gray-900 text-white border-gray-900'
                                                        : 'bg-white text-gray-600 hover:border-gray-300 border-gray-200'
                                                }`}
                                            >
                                                {filter.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {filteredMedia.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setSelectedMedia(item)}
                                            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg text-left"
                                        >
                                            <div className="relative aspect-square overflow-hidden bg-gray-50">
                                                <img
                                                    src={item.src}
                                                    alt={`${item.sourceLabel} feature`}
                                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-black/0 p-3">
                                                    <div className="flex items-center justify-between text-xs text-white/80 uppercase tracking-wide">
                                                        <span>{item.sourceLabel}</span>
                                                        <span>{item.uploadedAt}</span>
                                                    </div>
                                                    <div className="mt-1 text-sm font-semibold text-white">
                                                        {item.source === 'instagram' && item.link ? (
                                                            <a
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="underline decoration-white/40 underline-offset-2 hover:text-white/90"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                {item.handle} ↗
                                                            </a>
                                                        ) : (
                                                            <span>{item.handle}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                    {filteredMedia.length === 0 && (
                                        <div className="col-span-full border-2 border-dashed border-gray-200 rounded-xl p-10 text-center text-sm text-gray-500">
                                            No media uploads under this channel yet. Use the buttons above once you add new Instagram or WhatsApp assets.
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : isVideoTab ? (
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                                    <h3 className="text-lg font-semibold text-gray-900">Video Highlights</h3>
                                    <p className="text-sm text-gray-500 mt-1">Short-form clips shared across Instagram and WhatsApp.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredVideo.map((item) => (
                                        <div
                                            key={item.id}
                                            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm text-left transition-transform hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <div className="relative overflow-hidden" style={{ aspectRatio: '9 / 16' }}>
                                                <video
                                                    src={item.src}
                                                    controls
                                                    playsInline
                                                    muted
                                                    className="h-full w-full object-cover"
                                                />
                                                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-black/0 p-3">
                                                    <div className="text-xs uppercase tracking-wide text-white/70">{item.platform}</div>
                                                    <div className="mt-1 text-sm font-semibold text-white">{item.title}</div>
                                                    <div className="text-xs text-white/60 mt-1">{item.uploadedAt}</div>
                                                    {item.link && (
                                                        <a
                                                            href={item.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="mt-2 inline-flex text-[11px] font-medium text-white/80 underline underline-offset-4 hover:text-white"
                                                        >
                                                            View Source ↗
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : isAudioTab ? (
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                                    <h3 className="text-lg font-semibold text-gray-900">Audio Clips</h3>
                                    <p className="text-sm text-gray-500 mt-1">Voicenotes and sonic snippets sourced from the community.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredAudio.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setSelectedAudio(item)}
                                            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm text-left transition-transform hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <div className="h-48 w-full bg-linear-to-br from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center text-white gap-3">
                                                <span className="inline-flex items-center justify-center rounded-full bg-white/15 text-white p-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
                                                    <Disc3 size={28} />
                                                </span>
                                                <div className="text-sm font-semibold">{item.title}</div>
                                                <div className="text-xs text-white/70">{item.platform} • {item.duration}</div>
                                                <div className="text-xs uppercase tracking-wide text-white/60">{item.mood}</div>
                                            </div>
                                            <div className="absolute inset-x-0 top-0 flex justify-end p-3">
                                                <span className="rounded-full bg-white text-gray-900 text-xs font-semibold px-2 py-1 shadow-md">
                                                    {item.uploadedAt}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : isStoreTab ? (
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                                    <h3 className="text-lg font-semibold text-gray-900">Visit Our Stores</h3>
                                    <p className="text-sm text-gray-500 mt-1">Experience Baboski in person across our flagship and experience hubs.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {filteredStores.map((store) => (
                                        <button
                                            key={store.id}
                                            onClick={() => setSelectedStore(store)}
                                            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm text-left transition-transform hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <div className="relative h-56">
                                                <img
                                                    src={store.image}
                                                    alt={store.name}
                                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                                <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
                                                    <div className="text-sm uppercase tracking-wide text-white/80">Baboski Store</div>
                                                    <div className="text-lg font-semibold">{store.name}</div>
                                                </div>
                                            </div>
                                            <div className="p-5 space-y-2">
                                                <div className="text-sm text-gray-600">{store.address}</div>
                                                <div className="text-xs uppercase tracking-wide text-gray-400">{store.hours}</div>
                                                <div className="text-sm font-medium text-gray-800">{store.phone}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <>
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
                                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto sm:overflow-visible max-w-full pr-1 -mr-1 scroll-smooth *:snap-start sm:*:snap-none">
                                    {rev.images.map((src, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedImage({ src, review: rev, index: i })}
                                            className="w-12 h-12 sm:w-12 sm:h-12 rounded-none border border-gray-200 shadow-sm opacity-90 hover:opacity-100 hover:scale-[1.02] transition cursor-pointer shrink-0 bg-white"
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
                                <div />
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
                            </>
                        )}

                        {/* Review Image Modal */}
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

                        {/* Media Modal */}
                        {selectedMedia && (
                            <div
                                className="fixed inset-0 backdrop-blur-[1px] flex justify-center items-center z-50 p-6"
                                style={{
                                    background: `linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(165, 130, 150, 0.1) 100%)`
                                }}
                                onClick={() => setSelectedMedia(null)}
                            >
                                <div
                                    className="bg-white rounded-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute top-4 right-4 w-8 h-8 bg-gray-800 bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10 shadow-lg"
                                        onClick={() => setSelectedMedia(null)}
                                    >
                                        ×
                                    </button>
                                    <div className="bg-gray-50 flex items-center justify-center p-6">
                                        <img
                                            src={selectedMedia.src}
                                            alt={`${selectedMedia.sourceLabel} feature`}
                                            className="max-h-[420px] w-full object-contain rounded-xl shadow-md"
                                        />
                    </div>
                                    <div className="p-8 flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                                                    selectedMedia.source === 'instagram'
                                                        ? 'bg-pink-100 text-pink-700'
                                                        : 'bg-emerald-100 text-emerald-700'
                                                }`}
                                            >
                                                {selectedMedia.sourceLabel}
                                            </span>
                                            <span className="text-sm text-gray-500">{selectedMedia.uploadedAt}</span>
                                        </div>
                                        <div className="text-base font-semibold text-gray-900">{selectedMedia.handle}</div>
                                        {selectedMedia.source === 'instagram' && selectedMedia.link && (
                                            <a
                                                href={selectedMedia.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700"
                                            >
                                                View on Instagram ↗
                                            </a>
                                        )}
                        </div>
                    </div>
                </div>
            )}

                        {/* Audio Modal */}
                        {selectedAudio && (
                            <div
                                className="fixed inset-0 backdrop-blur-[1px] flex justify-center items-center z-50 p-6"
                                style={{
                                    background: `linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(165, 130, 150, 0.1) 100%)`
                                }}
                                onClick={() => setSelectedAudio(null)}
                            >
                                <div
                                    className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute top-4 right-4 w-8 h-8 bg-gray-800 bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10 shadow-lg"
                                        onClick={() => setSelectedAudio(null)}
                                    >
                                        ×
                                    </button>
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-700 p-10">
                                            <div className="flex flex-col items-center gap-4 text-white">
                                                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white shadow-xl">
                                                    <Disc3 size={36} />
                                                </span>
                                                <div className="text-xs uppercase tracking-wide text-white/60">{selectedAudio.platform}</div>
                                                <div className="text-lg font-semibold text-white text-center">{selectedAudio.title}</div>
                                                <div className="text-xs text-white/60">{selectedAudio.uploadedAt} • {selectedAudio.duration}</div>
                                            </div>
                                        </div>
                                        <div className="p-8 flex flex-col gap-4">
                                            <div className="text-sm font-semibold text-gray-900">Listen</div>
                                            <audio controls className="w-full">
                                                <source src={selectedAudio.src} type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                            {selectedAudio.link && (
                                                <a
                                                    href={selectedAudio.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:text-pink-700"
                                                >
                                                    Open full track ↗
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Store Modal */}
                        {selectedStore && (
                            <div
                                className="fixed inset-0 backdrop-blur-[1px] flex justify-center items-center z-50 p-6"
                                style={{
                                    background: `linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(165, 130, 150, 0.1) 100%)`
                                }}
                                onClick={() => setSelectedStore(null)}
                            >
                                <div
                                    className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute top-4 right-4 w-8 h-8 bg-gray-800 bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10 shadow-lg"
                                        onClick={() => setSelectedStore(null)}
                                    >
                                        ×
                                    </button>
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="h-full">
                                            <img
                                                src={selectedStore.image}
                                                alt={selectedStore.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="p-8 space-y-4">
                                            <div>
                                                <div className="text-xs uppercase tracking-wide text-gray-400">Baboski Store</div>
                                                <div className="text-xl font-semibold text-gray-900 mt-1">{selectedStore.name}</div>
                                            </div>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div>{selectedStore.address}</div>
                                                <div className="font-medium text-gray-800">{selectedStore.phone}</div>
                                                <div className="text-xs uppercase tracking-wide text-gray-400">Hours</div>
                                                <div>{selectedStore.hours}</div>
                                            </div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">Book an appointment</div>
                                            <button className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                                                Schedule Visit
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