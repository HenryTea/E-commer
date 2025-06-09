import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Sample data (should match your home page)
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

export default function ProductDetail({ params }: { params: { id: string } }) {
  const phone = featuredPhones.find((p) => p.id === params.id);
  if (!phone) return notFound();

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <Image
            src={phone.image}
            alt={phone.name}
            width={400}
            height={300}
            className="object-cover rounded-lg mb-6"
          />
          <h1 className="text-2xl font-bold mb-2">{phone.name}</h1>
          <p className="text-gray-700 mb-4">{phone.description}</p>
          <div className="text-xl font-bold text-blue-700 mb-4">${phone.price}</div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
} 