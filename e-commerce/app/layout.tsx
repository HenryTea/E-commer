import './globals.css';

export const metadata = {
  title: 'Phone Store',
  description: 'A simple e-commerce site for phones',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 font-sans text-gray-900 flex flex-col">
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <footer className="w-full py-4 bg-gray-800 text-center text-white mt-8">
          &copy; {new Date().getFullYear()} Phone Store. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
