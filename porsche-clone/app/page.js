import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Image from 'next/image';
import Link from 'next/link';

const carModels = [
	{
		name: '718',
		price: '3.850.000.000 VNĐ',
		image: '/images/718.jpg',
		description: 'Thể thao thuần khiết',
	},
	{
		name: '911',
		price: '8.870.000.000 VNĐ',
		image: '/images/992.jpeg',
		description: 'Độc Bản. Kinh Điển.',
	},
	{
		name: 'Taycan',
		price: '4.620.000.000 VNĐ',
		image: '/images/taycan.jpg',
		description: 'Choáng ngợp cảm xúc',
	},
];

export default function Home() {
	return (
		<main className="min-h-screen bg-black text-white">
			<Navbar />

			{/* Hero Section with Carousel */}
			<HeroCarousel />

			{/* Car Models Section */}
			<section className="py-16 px-4 bg-white text-black">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold mb-12 text-center">Các dòng xe</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{carModels.map((model) =>
							model.name === '911' ? (
								<Link href="/911-page" key={model.name}>
									<div
										className="car-model-container rounded-lg overflow-hidden group relative cursor-pointer h-64 hover:bg-black"
										style={{
											backgroundImage: `url(${model.image})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center',
										}}
									>
										{/* Overlay to darken on hover */}
										<div className="absolute inset-0 transition-all duration-300 z-0  group-hover:bg-black/50" />
										{/* Name and arrow: bottom left by default, move to top left on hover */}
										<div className="absolute left-4 flex items-center z-10 transition-all duration-500 bottom-6 group-hover:top-4 group-hover:bottom-auto">
											<span className="text-red-600 text-2xl mr-2">&gt;</span>
											<span className="text-3xl font-bold text-white drop-shadow font-sans">
												{model.name}
											</span>
										</div>
										{/* Description and price: hidden by default, show at bottom left on hover */}
										<div className="absolute left-4 z-10 flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 bottom-4">
											<p className="text-lg text-white font-semibold drop-shadow mb-1 font-sans">
												{model.description}
											</p>
											<p className="text-white font-sans">Từ {model.price}</p>
										</div>
									</div>
								</Link>
							) : model.name === '718' ? (
								<Link href="/718" key={model.name}>
									<div
										className="car-model-container rounded-lg overflow-hidden group relative cursor-pointer h-64 hover:bg-black"
										style={{
											backgroundImage: `url(${model.image})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center',
										}}
									>
										{/* Overlay to darken on hover */}
										<div className="absolute inset-0 transition-all duration-300 z-0  group-hover:bg-black/50" />
										{/* Name and arrow: bottom left by default, move to top left on hover */}
										<div className="absolute left-4 flex items-center z-10 transition-all duration-500 bottom-6 group-hover:top-4 group-hover:bottom-auto">
											<span className="text-red-600 text-2xl mr-2">&gt;</span>
											<span className="text-3xl font-bold text-white drop-shadow font-sans">
												{model.name}
											</span>
										</div>
										{/* Description and price: hidden by default, show at bottom left on hover */}
										<div className="absolute left-4 z-10 flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 bottom-4">
											<p className="text-lg text-white font-semibold drop-shadow mb-1 font-sans">
												{model.description}
											</p>
											<p className="text-white font-sans">Từ {model.price}</p>
										</div>
									</div>
								</Link>
							) : (
								<div
									key={model.name}
									className="car-model-container rounded-lg overflow-hidden group relative cursor-pointer h-64 hover:bg-black"
									style={{
										backgroundImage: `url(${model.image})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}
								>
									{/* Overlay to darken on hover */}
									<div className="absolute inset-0 transition-all duration-300 z-0  group-hover:bg-black/50" />
									{/* Name and arrow: bottom left by default, move to top left on hover */}
									<div className="absolute left-4 flex items-center z-10 transition-all duration-500 bottom-6 group-hover:top-4 group-hover:bottom-auto">
										<span className="text-red-600 text-2xl mr-2">&gt;</span>
										<span className="text-3xl font-bold text-white drop-shadow font-sans">
											{model.name}
										</span>
									</div>
									{/* Description and price: hidden by default, show at bottom left on hover */}
									<div className="absolute left-4 z-10 flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 bottom-4">
										<p className="text-lg text-white font-semibold drop-shadow mb-1 font-sans">
											{model.description}
										</p>
										<p className="text-white font-sans">Từ {model.price}</p>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
