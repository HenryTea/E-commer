"use client";

import React, { useState } from "react";
import {
  Trash2,
  Heart,
  Plus,
  Minus,
  ShoppingCart as CartIcon,
  ArrowLeft,
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
      voucher: "Miễn phí bảo dưỡng 3 năm",
      freeReturn: "7 Ngày Miễn Phí Trả Hàng",
      selected: true,
    },
    {
      id: 2,
      shopName: "Porsche Center Hanoi",
      productName: "Porsche 718 Cayman",
      variant: "Cayman S",
      price: 3850000000,
      quantity: 1,
      image: "/images/718.jpg",
      voucher: "Miễn phí bảo dưỡng 3 năm",
      freeReturn: "7 Ngày Miễn Phí Trả Hàng",
      selected: false,
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
    <div className="max-w-6xl mx-auto bg-white min-h-screen p-4">
      {/* Header with Back Button */}
      <div className="bg-white rounded-lg shadow-sm mb-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Quay lại trang chính</span>
            </button>
            <div className="flex items-center space-x-2">
              <CartIcon className="w-6 h-6 text-red-600" />
              <h1 className="text-xl font-semibold">Giỏ Hàng</h1>
            </div>
          </div>
          <div className="text-red-600 font-medium">PORSCHE VIETNAM</div>
        </div>
      </div>

      {/* Cart header */}
      <div className="bg-white rounded-lg shadow-sm mb-2">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 text-sm font-medium text-gray-600">
          <div className="col-span-1">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="w-4 h-4 text-red-600 rounded"
            />
          </div>
          <div className="col-span-5">Sản Phẩm</div>
          <div className="col-span-2 text-center">Đơn Giá</div>
          <div className="col-span-2 text-center">Số Lượng</div>
          <div className="col-span-1 text-center">Số Tiền</div>
          <div className="col-span-1 text-center">Thao Tác</div>
        </div>

        {/* Cart items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-100 last:border-b-0"
          >
            {/* Shop header */}
            <div className="p-4 bg-gray-50 flex items-center">
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => handleSelectItem(item.id)}
                className="w-4 h-4 text-red-600 rounded mr-3"
              />
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">
                Official
              </span>
              <span className="font-medium text-gray-800">{item.shopName}</span>
              <span className="ml-2 text-red-600 text-xs bg-red-100 px-2 py-1 rounded">
                📍
              </span>
            </div>

            {/* Product item */}
            <div className="grid grid-cols-12 gap-4 p-4 items-center">
              <div className="col-span-1">
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleSelectItem(item.id)}
                  className="w-4 h-4 text-red-600 rounded"
                />
              </div>

              <div className="col-span-5 flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-20 h-20 object-cover rounded border"
                />
                <div className="flex-1">
                  <div className="text-sm text-red-600 bg-red-50 px-2 py-1 rounded mb-2 inline-block">
                    {item.voucher}
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
                    {item.productName}
                  </h3>
                  <p className="text-xs text-gray-500 mb-1">
                    Phân Loại Hàng: {item.variant}
                  </p>
                  <div className="flex items-center text-xs text-green-600">
                    <span className="mr-1">🔄</span>
                    {item.freeReturn}
                  </div>
                </div>
              </div>

              <div className="col-span-2 text-center">
                <div className="text-red-600 font-medium">
                  ₫{formatPrice(item.price)}
                </div>
              </div>

              <div className="col-span-2 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center border border-gray-300 py-1 rounded">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="col-span-1 text-center">
                <div className="text-red-600 font-medium">
                  ₫{formatPrice(item.price * item.quantity)}
                </div>
              </div>

              <div className="col-span-1 text-center">
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors duration-200"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty cart message */}
      {cartItems.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <CartIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            Giỏ hàng của bạn đang trống
          </h3>
          <p className="text-gray-500 mb-4">
            Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm
          </p>
          <button
            onClick={handleBackToHome}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Tiếp tục mua sắm
          </button>
        </div>
      )}

      {/* Bottom actions */}
      {cartItems.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-4 sticky bottom-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-red-600 rounded"
                />
                <span>Chọn Tất Cả ({cartItems.length})</span>
              </label>
              <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                Xóa
              </button>
              <button className="text-gray-500 hover:text-red-600 transition-colors duration-200">
                Lưu vào mục Đã thích
              </button>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-sm text-gray-500">
                  Tổng thanh toán ({selectedItems.length} Sản phẩm):
                </div>
                <div className="text-2xl font-bold text-red-600">
                  ₫{formatPrice(totalAmount)}
                </div>
              </div>
              <button
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 disabled:bg-gray-300 transition-colors duration-200"
                disabled={selectedItems.length === 0}
                onClick={() => alert("Chức năng đặt hàng sẽ được phát triển!")}
              >
                Mua Hàng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
