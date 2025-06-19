"use client";

// import HeroCarousel from "../components/HeroCarousel";
import Image from "next/image";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Carousel */}
      {/* <HeroCarousel /> */}

      {/* Section: Giới thiệu Porsche 911 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Hình ảnh Porsche 911 */}
          <div className="flex-1">
            <Image
              src="/images/992_carousel.jpg"
              alt="Porsche 911"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Nội dung giới thiệu */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-widest">
              Giới thiệu Porsche 911
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Porsche 911 là biểu tượng huyền thoại của hiệu suất và thiết kế
              vượt thời gian trong thế giới xe thể thao. Ra mắt lần đầu vào năm
              1964, 911 đã không ngừng được cải tiến qua nhiều thế hệ để trở
              thành một trong những dòng xe thể thao được yêu thích nhất thế giới.
            </p>

            <ul className="space-y-3 text-base list-disc list-inside">
              <li>Động cơ 6 xy-lanh boxer đặt sau trứ danh</li>
              <li>Khả năng tăng tốc vượt trội và cảm giác lái chính xác</li>
              <li>Nội thất sang trọng, hiện đại và tùy biến cao</li>
              <li>
                Công nghệ hỗ trợ lái tiên tiến như Porsche Active Suspension
                Management (PASM)
              </li>
              <li>Thiết kế khí động học mang tính biểu tượng</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </main>
  );
}
