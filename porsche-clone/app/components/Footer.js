import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      {/* Main Info Section - White Background */}
      <div className="bg-white text-black pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-t border-gray-300 mb-8" />
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            {/* Left: Contact Info */}
            <div>
              <div className="mb-4">
                <div className="text-gray-700 mb-2 font-medium">
                  Thông tin liên lạc:
                </div>
                <div className="font-bold mb-2">Porsche Việt Nam</div>
                <div className="text-gray-600 text-sm">
                  Liên hệ chung: info@porsche-vietnam.com
                </div>
                <div className="text-gray-600 text-sm mb-2">
                  Dịch vụ Khách hàng: crm@porsche-vietnam.com
                </div>
                <div className="font-bold mt-4 mb-2">Các Trung Tâm Porsche</div>
                <div className="text-gray-600 text-sm">
                  Trung Tâm Porsche Sài Gòn
                </div>
                <div className="text-gray-600 text-sm">
                  Trung Tâm Porsche Hà Nội
                </div>
                <div className="text-gray-600 text-sm">
                  Porsche Studio Hà Nội
                </div>
              </div>
            </div>

            {/* Center: Share Button */}
            <div className="flex flex-col items-start md:items-center">
              <button className="flex items-center bg-gray-200 text-black px-6 py-3 rounded mb-6">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12v-2a4 4 0 014-4h8a4 4 0 014 4v2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Chia sẻ trang
              </button>
              <div className="text-gray-600 mb-2">Kết nối với Porsche</div>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.005 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17.005 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.8 8.001s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16.2 5 12 5 12 5h-.1s-4.2 0-7.1.1c-.4.1-1.2.1-1.9.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.5.1 6.9.1 6.9.1s4.2 0 7.1-.1c.4-.1 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zM9.8 15.3V8.7l6.4 3.3-6.4 3.3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright/Privacy Section - Black Background */}
      <div className="bg-[#181c1d] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center text-sm">
          <div>© Porsche Việt Nam 2024</div>
          <Link href="#" className="underline hover:text-gray-300 mt-2 md:mt-0">
            Chính sách quyền riêng tư
          </Link>
        </div>
      </div>
    </footer>
  );
}
