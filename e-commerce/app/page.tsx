import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Carousel from './components/Carousel';

// Sample data - in a real app, this would come from an API or database
const featuredPhones = [
  {
    id: '1',
    name: 'iPhone 14 Pro',
    price: 999,
    image: '/images/61h3r7ODdhL.jpg',
    description: 'Latest iPhone with advanced camera system'
  },
  {
    id: '2',
    name: 'iPhone 11',
    price: 599,
    image: '/images/iphone-11-apple-by-ozmobiles-3_600x.webp',
    description: 'Affordable iPhone with great performance'
  },
  {
    id: '3',
    name: 'iPhone 11 Pro',
    price: 799,
    image: '/images/399694-smartphones-apple-iphone-11-10008711.png',
    description: 'Pro features and camera in a compact size'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Carousel />
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Phones</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPhones.map((phone) => (
            <ProductCard key={phone.id} {...phone} />
          ))}
        </div>
      </div>
    </main>
  );
} 