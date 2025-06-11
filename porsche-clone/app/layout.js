import './globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'Porsche Việt Nam',
  description: 'Khám phá dòng xe thể thao đẳng cấp của Porsche',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/images/porsche-logo-png_seeklogo-513292.png" type="image/png" />
      </head>
      <body className="bg-white text-black">
        <div className="min-h-screen bg-white text-black">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
