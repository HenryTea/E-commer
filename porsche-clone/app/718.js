// Porsche718BoxsterSpecs.js
import Navbar from './components/Navbar';
import React from "react";

const specs = [
  { label: "Công suất", value: "300 PS (220 kW)" },
  { label: "Mô men xoắn cực đại", value: "380 Nm" },
  { label: "Tăng tốc từ 0 - 100 km/giờ (0 - 62 dặm/giờ)", value: "4,7 giây (4,5 giây với Gói Sport Chrono)" },
  { label: "Tốc độ tối đa", value: "275 km/giờ" },
  { label: "Mức tiêu thụ kết hợp", value: "9,56 (lít/100km)" },
  { label: "Lượng khí thải CO2", value: "-" },
  { label: "Giá tiêu chuẩn", value: "3.960.000.000 VNĐ" },
];

export default function Porsche718() {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-10 flex flex-col md:flex-row items-center gap-8">
        {/* Car Image and Dimensions */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src="/images/718.jpg"
            alt="Porsche 718 Boxster"
            className="w-full max-w-md rounded-lg shadow-md mb-6"
          />
          <div className="text-center text-gray-700 space-y-2">
            <div>
              <span className="font-semibold">Chiều dài cơ sở:</span> 2.475 mm
            </div>
            <div>
              <span className="font-semibold">Dài:</span> 4.379 mm
            </div>
            <div>
              <span className="font-semibold">Cao:</span> 1.281 mm
            </div>
          </div>
        </div>
        {/* Technical Specs */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl font-bold mb-6 text-black">Thông số kỹ thuật</h2>
          <div className="divide-y divide-gray-200 border rounded-lg">
            {specs.map((spec, idx) => (
              <div
                key={spec.label}
                className="flex justify-between items-center py-3 px-4 bg-white hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-800">{spec.label}</span>
                <span className="text-gray-900 font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Giá tiêu chuẩn bao gồm thuế nhập khẩu, thuế tiêu thụ đặc biệt và thuế giá trị gia tăng. Đối với dòng xe Panamera, Cayenne, Macan và Taycan giá tiêu chuẩn bao gồm thêm gói dịch vụ 4 năm bảo dưỡng. Bảng giá, thông số kỹ thuật và hình ảnh có thể thay đổi theo từng thời điểm mà không báo trước.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition">
            Tất cả thông số
          </button>
        </div>
      </div>
    </div>
  );
}