import React, { useState, useEffect } from "react";

const BenhNhan = () => {
  // Add state for benhnhan data
  const [benhnhan, setBenhnhan] = useState([]);

  // Add useEffect to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/benh-nhan');
        const result = await response.json();
        if (result.status === 'success') {
          setBenhnhan(result.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDetail = (id) => {
    console.log('View detail for ID:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete item with ID:', id);
  };

  return (
    <div>
      <div className="w-full m-10">
        <div className="items-center justify-center">
          <div className="mb-5 text-center text-4xl font-bold ">
            <h1>Danh Sach Benh Nhan</h1>
          </div>
          <div className="flex justify-between items-center mb-6">
            <button className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 transition-colors">
              Thêm Mới Bệnh Nhân
            </button>
            <div className="flex gap-4">
              <input 
                type="search" 
                placeholder="Tìm kiếm bệnh nhân..." 
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                className="rounded bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 transition-colors"
                onClick={() => console.log('Search clicked')}
              >
                Tìm Kiếm
              </button>
            </div>
          </div>
          <div>
            <table className="border-collapse table-auto w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3">STT</th>
                  <th className="px-6 py-3">Họ Tên</th>
                  <th className="px-6 py-3">Giới Tính</th>
                  <th className="px-6 py-3">Ngày Sinh</th>
                  <th className="px-6 py-3">Điện Thoại</th>
                  <th className="px-6 py-3">Cân Nặng</th>
                  <th className="px-6 py-3">Chiều Cao</th>
                  <th className="px-6 py-3">Địa Chỉ</th>
                  <th className="px-6 py-3">BHYT</th>
                  <th className="px-6 py-3">CCCD</th>
                  <th className="px-6 py-3">Tác Vụ</th>
                </tr>
              </thead>
              <tbody>
                {benhnhan.map((danhsachbenhnhan, index) => (
                  <tr className="hover:bg-gray-50" key={danhsachbenhnhan.id}>
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.ho_ten}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.gioi_tinh === 1 ? 'Nam' : 'Nữ'}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.ngay_sinh}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.so_dien_thoai}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.can_nang} kg</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.chieu_cao} cm</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.dia_chi}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.bao_hiem_y_te}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.can_cuoc_cong_dan}</td>
                    <td className="px-6 py-4 text-white">
                      <button className="rounded bg-green-600 m-3 p-2">
                        Chi Tiet
                      </button>
                      <button className="rounded bg-red-600 m-3 p-2">
                        Xoa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenhNhan;
