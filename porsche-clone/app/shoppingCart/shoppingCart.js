'use client';

import React, { useState } from "react";
import { Trash2, Heart, Plus, Minus, ShoppingCart as CartIcon } from "lucide-react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      shopName: "Porsche Center Saigon",
      productName: "Porsche 911 Carrera",
      variant: "Carrera S",
      originalPrice: 8870000000,
      discountPrice: 8870000000,
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
      originalPrice: 3850000000,
      discountPrice: 3850000000,
      quantity: 1,
      image: "/images/718.jpg",
      voucher: "Miễn phí bảo dưỡng 3 năm",
      freeReturn: "7 Ngày Miễn Phí Trả Hàng",
      selected: false,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [shopeeXu, setShopeeXu] = useState(200);

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

  const selectedItems = cartItems.filter((item) => item.selected);
  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.discountPrice * item.quantity,
    0
  );
  const totalSavings = selectedItems.reduce(
    (sum, item) =>
      sum + (item.originalPrice - item.discountPrice) * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto bg-white min-h-screen p-4">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm mb-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CartIcon className="w-6 h-6 text-red-600" />
            <h1 className="text-xl font-semibold">Giỏ Hàng</h1>
          </div>
          <div className="text-red-600 font-medium">
            MIỄN PHÍ BẢO DƯỠNG 3 NĂM
          </div>
        </div>
      </div>

      {/* Shipping notice */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4 flex items-center">
        <div className="w-4 h-4 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
        <span className="text-gray-700 text-sm">
          Nhấn vào mục Mã giảm giá ở cuối trang để hưởng ưu đãi đặc biệt!
        </span>
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
                <div className="text-gray-400 text-sm line-through">
                  ₫{formatPrice(item.originalPrice)}
                </div>
                <div className="text-red-600 font-medium">
                  ₫{formatPrice(item.discountPrice)}
                </div>
              </div>

              <div className="col-span-2 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center border border-gray-300 py-1 rounded">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="col-span-1 text-center">
                <div className="text-red-600 font-medium">
                  ₫{formatPrice(item.discountPrice * item.quantity)}
                </div>
              </div>

              <div className="col-span-1 text-center">
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-gray-400 hover:text-red-600"
                  >
                    Xóa
                  </button>
                  <button className="text-gray-400 hover:text-red-600 flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shipping discount notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
        <span className="text-blue-700 text-sm">
          Giảm ₫15.000 phí vận chuyển đơn tối thiểu 150.000; Giảm ₫25.000 phí
          vận chuyển đơn tối thiểu ₫99.000
          <span className="text-blue-500 underline cursor-pointer">
            {" "}
            Tìm hiểu thêm
          </span>
        </span>
      </div>

      {/* Voucher section */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-orange-500">🎫</span>
              <span className="font-medium">Shopee Voucher</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-orange-500">💰</span>
              <span className="font-medium">Shopee Xu</span>
              <span className="text-sm text-gray-500">
                Dùng {shopeeXu} Shopee Xu
              </span>
              <span className="text-orange-500">ⓘ</span>
              <span className="text-orange-500 font-medium">-₫{shopeeXu}</span>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600">
            Chọn Nhập Mã
          </button>
        </div>
      </div>

      {/* Bottom actions */}
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
            <button className="text-gray-500 hover:text-gray-700">Xóa</button>
            <button className="text-gray-500 hover:text-red-600">
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
              {totalSavings > 0 && (
                <div className="text-sm text-green-600">
                  Tiết kiệm ₫{formatPrice(totalSavings)}
                </div>
              )}
            </div>
            <button
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 disabled:bg-gray-300"
              disabled={selectedItems.length === 0}
            >
              Mua Hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
