"use client";
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TaycanHeader() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchValue)}`);
      setShowSearch(false);
      setSearchValue('');
    }
  };

  const handleCartClick = () => {
    router.push('/cart');
  };

  return (
    <header
      style={{
        width: '100vw',
        minWidth: 1200,
        background: '#fff',
        borderBottom: '1px solid #e5e5e5',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, Helvetica, sans-serif'
      }}
    >
      {/* Wrapper để căn giữa logo tuyệt đối */}
      <div style={{
        width: '100%',
        maxWidth: 1600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        height: '100%'
      }}>
        {/* Bên trái để trống để logo luôn ở giữa */}
        <div style={{ width: 200 }}></div>

        {/* Logo Porsche ở giữa */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Image src="/images/logo-porsche.png" alt="Porsche Logo" width={32} height={32} />
          <span style={{
            fontWeight: 400,
            fontSize: 14,
            letterSpacing: 4,
            color: '#222',
            marginTop: 2,
            fontFamily: 'Arial, Helvetica, sans-serif'
          }}>
            PORSCHE
          </span>
        </div>

        {/* Bên phải: menu, search, cart */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          height: '100%',
          fontSize: 15
        }}>
          <a
            href="#"
            style={{
              color: '#222',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 15,
              transition: 'color 0.2s'
            }}
          >
            Các dòng xe
          </a>
          <span
            style={{
              fontSize: 20,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
            onClick={() => setShowSearch(!showSearch)}
            title="Tìm kiếm"
          >
            <svg width="20" height="20" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="7"/><line x1="16" y1="16" x2="13.5" y2="13.5"/></svg>
          </span>
          <span
            style={{
              fontSize: 20,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
            onClick={handleCartClick}
            title="Giỏ hàng"
          >
            <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="19" r="2"/><circle cx="17" cy="19" r="2"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L21 6H6"/></svg>
          </span>
        </div>
      </div>
      {/* Ô tìm kiếm popup */}
      {showSearch && (
        <form
          onSubmit={handleSearch}
          style={{
            position: 'absolute',
            right: 60,
            top: 12,
            background: '#fff',
            border: '1px solid #eee',
            borderRadius: 4,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            padding: '8px 12px',
            zIndex: 200
          }}
        >
          <input
            type="text"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Tìm kiếm..."
            style={{
              border: 'none',
              outline: 'none',
              fontSize: 16,
              width: 180
            }}
            autoFocus
          />
        </form>
      )}
    </header>
  );
}
