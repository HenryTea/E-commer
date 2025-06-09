import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

// Sample data - in a real app, this would come from an API or database
const allPhones = [
  {
    id: '1',
    name: 'iPhone 14 Pro',
    price: 999,
    image: '/images/iphone14.jpg',
    description: 'Latest iPhone with advanced camera system'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S23',
    price: 899,
    image: '/images/samsung-s23.jpg',
    description: 'Powerful Android flagship with amazing camera'
  },
  {
    id: '3',
    name: 'Google Pixel 7',
    price: 599,
    image: '/images/pixel7.jpg',
    description: 'Best camera phone with pure Android experience'
  },
  {
    id: '4',
    name: 'OnePlus 11',
    price: 699,
    image: '/images/oneplus11.jpg',
    description: 'Flagship killer with fast charging'
  },
  {
    id: '5',
    name: 'Xiaomi 13 Pro',
    price: 799,
    image: '/images/xiaomi13.jpg',
    description: 'Premium features at competitive price'
  },
  {
    id: '6',
    name: 'Nothing Phone 1',
    price: 499,
    image: '/images/nothing-phone.jpg',
    description: 'Unique design with transparent back'
  }
];

export default function Products() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Phones</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPhones.map((phone) => (
            <ProductCard key={phone.id} {...phone} />
          ))}
        </div>
      </div>
    </main>
  );
} 