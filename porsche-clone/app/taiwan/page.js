import Image from 'next/image';
import TaycanHeader from '../components/TaycanHeader';
// import ShoppingCart from '../shoppingCart/shoppingCart';

export default function TaiwanCarPage() {
  return (
    <>
      <TaycanHeader />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', color: '#000' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Taycan</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Giá tiêu chuẩn 4.620.000.000 VNĐ*</p>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem' }}>
          * Giá tiêu chuẩn bao gồm thuế nhập khẩu, thuế tiêu thụ đặc biệt và thuế giá trị gia tăng. Đối với dòng xe Panamera, Cayenne, Macan và Taycan giá tiêu chuẩn bao gồm thêm gói dịch vụ 4 năm bảo dưỡng. Bảng giá, thông số kỹ thuật và hình ảnh có thể thay đổi theo từng thời điểm mà không báo trước.
        </p>

        <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 'normal', marginBottom: '0.5rem' }}>Đến 408 PS (300 kW)</h3>
            <p style={{ color: '#666' }}>Công suất</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 'normal', marginBottom: '0.5rem' }}>4,8 giây với Launch Control</h3>
            <p style={{ color: '#666' }}>Tăng tốc từ 0 - 100 km/giờ</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 'normal', marginBottom: '0.5rem' }}>230 km/giờ</h3>
            <p style={{ color: '#666' }}>Tốc độ tối đa</p>
          </div>
        </div>

        <div style={{ marginBottom: '3rem', position: 'relative' }}>
          <Image
            src="/images/Taycan.jpg"
            alt="Taycan"
            width={1000}
            height={500}
            style={{ 
              width: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
          <div style={{ textAlign: 'center', marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>
            <span>Chiều dài cơ sở: 2.900 mm</span>
            <span style={{ margin: '0 1rem' }}>|</span>
            <span>Dài: 4.963 mm</span>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Thông số kỹ thuật</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '1rem 0' }}>
              <span style={{ width: '150px', color: '#666' }}>Cao</span>
              <span>1.379 mm</span>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '1rem 0' }}>
              <span style={{ width: '150px', color: '#666' }}>Công suất</span>
              <span>Đến 408 PS (300 kW)</span>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '1rem 0' }}>
              <span style={{ width: '150px', color: '#666' }}>Mô men xoắn cực đại</span>
              <span>410 Nm với Launch Control</span>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '1rem 0' }}>
              <span style={{ width: '150px', color: '#666' }}>Tăng tốc từ 0 - 100 km/giờ</span>
              <span>4,8 giây với Launch Control</span>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '1rem 0' }}>
              <span style={{ width: '150px', color: '#666' }}>Tốc độ tối đa</span>
              <span>230 km/giờ</span>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '1rem 0' }}>
              <span style={{ width: '150px', color: '#666' }}>Mức tiêu thụ kết hợp</span>
              <span>17,1 kWh/100 km</span>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '1rem 0' }}>
              <span style={{ width: '150px', color: '#666' }}>Lượng khí thải CO2</span>
              <span>0 g/km</span>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '1rem 0' }}>
              <span style={{ width: '150px', color: '#666' }}>Giá tiêu chuẩn</span>
              <span>4.620.000.000 VNĐ*</span>
            </div>
          </div>
        </div>

        <button 
          style={{ 
            backgroundColor: '#313639',
            color: 'white',
            padding: '0.8rem 1.5rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '2rem'
          }}
        >
          Tất cả thông số
        </button>
      </div>
    </>
  );
} 