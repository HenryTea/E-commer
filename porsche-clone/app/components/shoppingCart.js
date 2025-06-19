"use client";

import React, { useState } from "react";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingCart as CartIcon,
  ArrowLeft,
  Car,
  Zap,
  Award,
  Shield,
  Settings,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";

const ShoppingCart = () => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      shopName: "Porsche Center Saigon",
      productName: "Porsche 911 Carrera",
      variant: "Carrera S",
      price: 8870000000,
      quantity: 1,
      image: "/images/992.jpeg",
      freeReturn: "7 Ngày Miễn Phí Trả Hàng",
      selected: true,
      performance: "450 HP",
      acceleration: "3.5s 0-100km/h",
    },
    {
      id: 2,
      shopName: "Porsche Center Hanoi",
      productName: "Porsche 718 Cayman",
      variant: "Cayman S",
      price: 3850000000,
      quantity: 1,
      image: "/images/718.jpg",
      freeReturn: "7 Ngày Miễn Phí Trả Hàng",
      selected: false,
      performance: "350 HP",
      acceleration: "4.2s 0-100km/h",
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setCartItems((items) =>
      items.map((item) => ({ ...item, selected: newSelectAll }))
    );
  };

  const handleSelectItem = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleQuantityChange = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  const selectedItems = cartItems.filter((item) => item.selected);
  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white font-mono">
      {/* Header - Full Width với gradient đen xám */}
      <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black border-b border-gray-700 mb-4 shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4 flex-wrap">
              <button
                onClick={handleBackToHome}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gray-700 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-base font-bold whitespace-nowrap">
                  QUAY LẠI TRANG CHỦ
                </span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-600 rounded-lg">
                  <CartIcon className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">GIỎ HÀNG</h1>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-600 rounded-lg">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div className="text-red-600 font-bold text-lg tracking-wider">
                PORSCHE VIETNAM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body Container - Responsive width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop View - Hidden on mobile - Sửa lại grid layout */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-6 overflow-hidden">
            {/* Header với grid layout mới */}
            <div className="grid grid-cols-12 gap-4 p-6 border-b border-gray-200 text-sm font-bold text-gray-800 uppercase tracking-wide bg-gray-50">
              <div className="col-span-1">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="w-5 h-5 text-red-600 bg-white border-gray-300 rounded focus:ring-red-600 focus:ring-2"
                />
              </div>
              <div className="col-span-4 flex items-center">
                <Award className="w-5 h-5 text-red-600 mr-2" />
                SẢN PHẨM
              </div>
              <div className="col-span-2 text-center">ĐƠN GIÁ</div>
              <div className="col-span-2 text-center">SỐ LƯỢNG</div>
              <div className="col-span-2 text-center">SỐ TIỀN</div>
              <div className="col-span-1 text-center">THAO TÁC</div>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-100 last:border-b-0"
              >
                <div className="p-4 bg-gray-50 flex items-center border-b border-gray-100">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleSelectItem(item.id)}
                    className="w-5 h-5 text-red-600 bg-white border-gray-300 rounded focus:ring-red-600 focus:ring-2 mr-4"
                  />
                  <Shield className="w-4 h-4 text-red-600 mr-3" />
                  <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-4 py-2 mr-4 font-bold tracking-wide rounded-full shadow-md">
                    OFFICIAL
                  </span>
                  <span className="font-bold text-gray-800">
                    {item.shopName}
                  </span>
                  <span className="ml-3 text-red-600 text-xs bg-red-100 px-3 py-1 rounded-full">
                    📍
                  </span>
                </div>

                {/* Product row với grid layout mới - Tăng space cho số tiền */}
                <div className="grid grid-cols-12 gap-4 p-6 items-center bg-white">
                  <div className="col-span-1">
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => handleSelectItem(item.id)}
                      className="w-5 h-5 text-red-600 bg-white border-gray-300 rounded focus:ring-red-600 focus:ring-2"
                    />
                  </div>

                  {/* Giảm từ col-span-5 xuống col-span-4 */}
                  <div className="col-span-4 flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-24 h-24 object-cover rounded-lg border border-gray-200 shadow-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-gray-800 mb-2 truncate flex items-center">
                        <Star className="w-4 h-4 text-red-600 mr-2" />
                        {item.productName}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2 font-semibold">
                        PHÂN LOẠI: {item.variant}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                        <span className="flex items-center bg-red-50 px-2 py-1 rounded-full">
                          <Zap className="w-3 h-3 text-red-600 mr-1" />
                          {item.performance}
                        </span>
                        <span className="flex items-center bg-blue-50 px-2 py-1 rounded-full">
                          <Settings className="w-3 h-3 text-blue-600 mr-1" />
                          {item.acceleration}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full inline-flex">
                        <span className="mr-1">🔄</span>
                        <span className="truncate">{item.freeReturn}</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 text-center">
                    <div className="text-red-600 font-bold text-xl">
                      ₫{formatPrice(item.price)}
                    </div>
                  </div>

                  <div className="col-span-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="w-10 h-10 border-2 border-gray-300 bg-white text-gray-700 flex items-center justify-center hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-300 font-bold rounded-lg shadow-sm"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-16 text-center border-2 border-gray-300 bg-gray-50 text-gray-800 py-2 font-bold text-lg rounded-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-10 h-10 border-2 border-gray-300 bg-white text-gray-700 flex items-center justify-center hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-300 font-bold rounded-lg shadow-sm"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Tăng từ col-span-1 lên col-span-2 để có đủ không gian */}
                  <div className="col-span-2 text-center">
                    <div className="text-red-600 font-bold text-xl break-words">
                      ₫{formatPrice(item.price * item.quantity)}
                    </div>
                  </div>

                  <div className="col-span-1 text-center">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 group rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                      title="Xóa sản phẩm"
                    >
                      <Trash2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View - Visible on small screens */}
        <div className="lg:hidden space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              {/* Shop header */}
              <div className="p-4 bg-gray-50 flex items-center border-b border-gray-100">
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleSelectItem(item.id)}
                  className="w-5 h-5 text-red-600 bg-white border-gray-300 rounded focus:ring-red-600 focus:ring-2 mr-4 flex-shrink-0"
                />
                <Shield className="w-4 h-4 text-red-600 mr-3 flex-shrink-0" />
                <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-3 py-1 mr-3 flex-shrink-0 font-bold tracking-wide rounded-full">
                  OFFICIAL
                </span>
                <span className="font-bold text-gray-800 text-sm truncate">
                  {item.shopName}
                </span>
              </div>

              {/* Product content */}
              <div className="p-4">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-gray-200 shadow-sm"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-800 mb-2 line-clamp-2 flex items-center">
                      <Star className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                      <span className="truncate">{item.productName}</span>
                    </h3>
                    <p className="text-xs text-gray-600 mb-2 font-semibold">
                      PHÂN LOẠI: {item.variant}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-2">
                      <span className="flex items-center bg-red-50 px-2 py-1 rounded-full">
                        <Zap className="w-3 h-3 text-red-600 mr-1" />
                        {item.performance}
                      </span>
                      <span className="flex items-center bg-blue-50 px-2 py-1 rounded-full">
                        <Settings className="w-3 h-3 text-blue-600 mr-1" />
                        {item.acceleration}
                      </span>
                    </div>
                    <div className="text-xs text-green-600 mb-3 font-semibold bg-green-50 px-2 py-1 rounded-full inline-flex items-center">
                      🔄{" "}
                      <span className="ml-1 truncate">{item.freeReturn}</span>
                    </div>

                    {/* Price */}
                    <div className="text-red-600 font-bold text-lg">
                      ₫{formatPrice(item.price)}
                    </div>
                  </div>

                  {/* Delete button - Top right - Only visible on screens >= 660px */}
                  <div className="flex-shrink-0 hidden min-[660px]:block">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 group rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                      title="Xóa sản phẩm"
                    >
                      <Trash2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Quantity and Total - Cải thiện layout để tránh đè lên nhau */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  {/* Phần số lượng */}
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-sm text-gray-700 font-bold mr-4">
                      SỐ LƯỢNG:
                    </span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="w-8 h-8 border-2 border-gray-300 bg-white text-gray-700 flex items-center justify-center hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-300 font-bold rounded-lg flex-shrink-0"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-12 text-center border-2 border-gray-300 bg-gray-50 text-gray-800 py-1 text-sm font-bold rounded-lg flex-shrink-0">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-8 h-8 border-2 border-gray-300 bg-white text-gray-700 flex items-center justify-center hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-300 font-bold rounded-lg flex-shrink-0"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Phần tổng tiền và nút xóa */}
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-sm text-gray-600 font-bold mb-1">
                        TỔNG TIỀN:
                      </div>
                      <div className="text-xl font-bold text-red-600">
                        ₫{formatPrice(item.price * item.quantity)}
                      </div>
                    </div>

                    {/* Delete button for mobile < 660px */}
                    <div className="min-[660px]:hidden flex-shrink-0">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 group rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                        title="Xóa sản phẩm"
                      >
                        <Trash2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty cart message */}
        {cartItems.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="p-4 bg-gray-100 rounded-full mr-4">
                <Car className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-4 bg-gray-100 rounded-full">
                <CartIcon className="w-16 h-16 text-gray-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              GIỎ HÀNG CỦA BẠN ĐANG TRỐNG
            </h3>
            <p className="text-gray-600 mb-6 text-base font-semibold">
              HÃY THÊM SẢN PHẨM VÀO GIỎ HÀNG ĐỂ TIẾP TỤC MUA SẮM
            </p>
            <button
              onClick={handleBackToHome}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 hover:from-red-700 hover:to-red-800 transition-all duration-300 font-bold tracking-wide rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center mx-auto"
            >
              <Car className="w-5 h-5 mr-3" />
              TIẾP TỤC MUA SẮM
            </button>
          </div>
        )}

        {/* Bottom actions - Responsive với cải thiện tràn viền */}
        {cartItems.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 sticky bottom-4 mt-6">
            {/* Mobile Layout - Cải thiện responsive */}
            <div className="sm:hidden">
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="w-5 h-5 text-red-600 bg-white border-gray-300 rounded focus:ring-red-600 focus:ring-2 flex-shrink-0"
                  />
                  <span className="text-sm text-gray-800 font-bold whitespace-nowrap">
                    TẤT CẢ ({cartItems.length})
                  </span>
                </label>
                <button className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300 font-bold px-3 py-1 rounded-lg hover:bg-red-50 flex-shrink-0">
                  XÓA
                </button>
              </div>

              {/* Total và Button trong mobile - Sắp xếp vertical khi cần */}
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-xs text-gray-600 font-bold mb-1">
                    TỔNG ({selectedItems.length} SP):
                  </div>
                  <div className="text-xl font-bold text-red-600">
                    ₫{formatPrice(totalAmount)}
                  </div>
                </div>
                <button
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 font-bold hover:from-red-700 hover:to-red-800 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-300 tracking-wide flex items-center justify-center rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
                  disabled={selectedItems.length === 0}
                  onClick={() =>
                    alert("Chức năng đặt hàng sẽ được phát triển!")
                  }
                >
                  <Car className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="whitespace-nowrap">MUA HÀNG</span>
                </button>
              </div>
            </div>

            {/* Desktop Layout - Cải thiện responsive */}
            <div className="hidden sm:flex items-center justify-between gap-4">
              <div className="flex items-center space-x-6 flex-shrink-0">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="w-5 h-5 text-red-600 bg-white border-gray-300 rounded focus:ring-red-600 focus:ring-2"
                  />
                  <span className="text-gray-800 font-bold text-lg whitespace-nowrap">
                    CHỌN TẤT CẢ ({cartItems.length})
                  </span>
                </label>
                <button className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-bold px-4 py-2 rounded-lg hover:bg-red-50 whitespace-nowrap">
                  XÓA
                </button>
              </div>

              <div className="flex items-center space-x-4 lg:space-x-8">
                <div className="text-right">
                  <div className="text-sm text-gray-600 font-bold mb-1 whitespace-nowrap">
                    TỔNG THANH TOÁN ({selectedItems.length} SẢN PHẨM):
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-red-600 whitespace-nowrap">
                    ₫{formatPrice(totalAmount)}
                  </div>
                </div>
                <button
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 lg:px-10 py-3 lg:py-4 font-bold hover:from-red-700 hover:to-red-800 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-300 tracking-wide flex items-center rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none text-base lg:text-lg flex-shrink-0"
                  disabled={selectedItems.length === 0}
                  onClick={() =>
                    alert("Chức năng đặt hàng sẽ được phát triển!")
                  }
                >
                  <Car className="w-5 lg:w-6 h-5 lg:h-6 mr-2 lg:mr-3" />
                  <span className="whitespace-nowrap">MUA HÀNG</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
