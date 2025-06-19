"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* Navbar */}
      <Navbar />

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
              thành một trong những dòng xe thể thao được yêu thích nhất thế
              giới.
            </p>

            <ul className="space-y-3 text-base list-disc list-inside mb-6">
              <li>Động cơ 6 xy-lanh boxer đặt sau trứ danh</li>
              <li>Khả năng tăng tốc vượt trội và cảm giác lái chính xác</li>
              <li>Nội thất sang trọng, hiện đại và tùy biến cao</li>
              <li>
                Công nghệ hỗ trợ lái tiên tiến như Porsche Active Suspension
                Management (PASM)
              </li>
              <li>Thiết kế khí động học mang tính biểu tượng</li>
            </ul>

            {/* Giá và nút đặt hàng */}
            <div className="flex items-center gap-6 mt-6">
              <span className="text-2xl font-semibold text-red-600">
                Giá: 8.870.000.000₫
              </span>
              <button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition duration-300 ease-in-out text-sm"
                onClick={() => alert("Bạn đã chọn đặt hàng Porsche 911!")}
              >
                🚗 Đặt hàng ngay
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
