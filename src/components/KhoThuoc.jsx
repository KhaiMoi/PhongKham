import React, { useState, useEffect } from "react";

const KhoThuoc = () => {
  const [thuoc, setThuoc] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [warningThuoc, setWarningThuoc] = useState([]);
  const [sortConfig, setSortConfig] = useState({ field: null, direction: 'asc' });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newThuoc, setNewThuoc] = useState({
    ten_thuoc: '',
    ngay_het_han: '',
    gia_tien: '',
    so_luong: '',
    loai: ''
  });
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      await fetchThuoc();
    };
    fetchData();
  }, []);

  useEffect(() => {
    const warnings = checkWarningThuoc(thuoc);
    setWarningThuoc(warnings);
  }, [thuoc]);

  const fetchThuoc = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/danh-muc-thuoc', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      const result = await response.json();
      if (result.status === 'success') {
        console.log('API Response:', result.data);
        setThuoc(result.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDetail = (id) => {
    // Implement detail view logic
    console.log('View detail for ID:', id);
  };

  const handleDelete = (id) => {
    // Implement delete logic
    console.log('Delete item with ID:', id);
  };

  const checkWarningThuoc = (thuocList) => {
    const today = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 30);

    return thuocList.filter(item => {
      const expiryDate = new Date(item.ngay_het_han);
      const isLowStock = item.so_luong < 50; // Ngưỡng cảnh báo số lượng
      const isNearExpiry = expiryDate <= thirtyDaysFromNow; // Cảnh báo thuốc sắp hết hạn trong 30 ngày
      return isLowStock || isNearExpiry;
    });
  };

  const handleSortChange = (e) => {
    const [field, direction] = e.target.value.split('-');
    setSortConfig({ field, direction });
  };

  const sortedThuoc = [...thuoc].sort((a, b) => {
    if (!sortConfig.field) return 0;
    
    let aValue = a[sortConfig.field];
    let bValue = b[sortConfig.field];
    
    if (sortConfig.field === 'gia_tien' || sortConfig.field === 'so_luong') {
      aValue = Number(aValue);
      bValue = Number(bValue);
    }
    
    if (sortConfig.direction === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const showAlert = (message, type = 'success') => {
    setAlert({ show: true, message, type });
    setTimeout(() => {
      setAlert({ show: false, message: '', type: '' });
    }, 3000);
  };

  const handleAddThuoc = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        ...newThuoc,
        gia_tien: Number(newThuoc.gia_tien),
        so_luong: Number(newThuoc.so_luong)
      };

      const response = await fetch('http://127.0.0.1:8000/api/danh-muc-thuoc/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.status === 'success') {
        setThuoc(prevThuoc => [...prevThuoc, result.data]);
        setIsAddModalOpen(false);
        setNewThuoc({
          ten_thuoc: '',
          ngay_het_han: '',
          gia_tien: '',
          so_luong: '',
          loai: ''
        });
        showAlert('Thêm thuốc mới thành công!', 'success');
      }
    } catch (error) {
      console.error('Error adding new medicine:', error);
      showAlert('Có lỗi xảy ra: ' + error.message, 'error');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'gia_tien' || name === 'so_luong') {
      if (value < 0) return;
    }

    setNewThuoc(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedThuoc.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedThuoc.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full p-6">
      {/* Alert Component */}
      {alert.show && (
        <div 
          className={`fixed top-4 right-4 z-50 rounded-lg px-4 py-3 shadow-lg transition-all duration-500 ${
            alert.type === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}
        >
          <div className="flex items-center gap-2">
            {alert.type === 'success' ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
            <span className="font-medium">{alert.message}</span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-center text-4xl font-bold text-gray-800">Kho Thuốc</h1>
        </div>
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <button 
                className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 transition-colors"
                onClick={() => setIsAddModalOpen(true)}
              >
                Thêm Mới Thuốc
              </button>
              <button 
                className={`rounded ${warningThuoc.length > 0 ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-500'} text-white py-2 px-6 transition-colors flex items-center gap-2`}
                onClick={() => setIsModalOpen(true)}
              >
                {warningThuoc.length > 0 && (
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-white text-red-500 rounded-full text-sm font-bold">
                    {warningThuoc.length}
                  </span>
                )}
                Cảnh Báo Thuốc
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <select
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={`${sortConfig.field}-${sortConfig.direction}`}
                onChange={handleSortChange}
              >
                <option value="">Sắp xếp theo</option>
                <option value="ten_thuoc-asc">Tên thuốc (A-Z)</option>
                <option value="ten_thuoc-desc">Tên thuốc (Z-A)</option>
                <option value="ngay_het_han-asc">Ngày hết hạn (Tăng dần)</option>
                <option value="ngay_het_han-desc">Ngày hết hạn (Giảm dần)</option>
                <option value="gia_tien-asc">Giá bán (Thấp đến cao)</option>
                <option value="gia_tien-desc">Giá bán (Cao đến thấp)</option>
                <option value="so_luong-asc">Số lượng (Ít đến nhiều)</option>
                <option value="so_luong-desc">Số lượng (Nhiều đến ít)</option>
                <option value="loai-asc">Loại (A-Z)</option>
                <option value="loai-desc">Loại (Z-A)</option>
              </select>
              <input 
                type="search" 
                placeholder="Tìm kiếm thuốc..." 
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên Thuốc</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày Hết Hạn</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá Bán</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số Lượng</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loại</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tác Vụ</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.map((danhsachthuoc, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{danhsachthuoc.ten_thuoc}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{danhsachthuoc.ngay_het_han}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {danhsachthuoc.gia_tien ? parseInt(danhsachthuoc.gia_tien).toLocaleString() : '0'} VNĐ
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{danhsachthuoc.so_luong}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{danhsachthuoc.loai}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button 
                        className="rounded bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 mr-2 transition-colors"
                        onClick={() => handleDetail(danhsachthuoc.id)}
                      >
                        Chi Tiết
                      </button>
                      <button 
                        className="rounded bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 transition-colors"
                        onClick={() => handleDelete(danhsachthuoc.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-4">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Numbers */}
              <div className="flex space-x-1">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  // Hiển thị 3 trang gần trang hiện tại và trang đầu/cuối
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`px-3 py-1 rounded-lg ${
                          currentPage === pageNumber
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    pageNumber === currentPage - 2 ||
                    pageNumber === currentPage + 2
                  ) {
                    return <span key={pageNumber} className="px-2">...</span>;
                  }
                  return null;
                })}
              </div>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Warning Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-red-600">Danh Sách Thuốc Cần Chú Ý</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tên Thuốc</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Số Lượng</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ngày Hết Hạn</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng Thái</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {warningThuoc.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4">{item.ten_thuoc}</td>
                    <td className="px-6 py-4">
                      <span className={item.so_luong < 50 ? 'text-red-600 font-bold' : ''}>
                        {item.so_luong}
                      </span>
                    </td>
                    <td className="px-6 py-4">{item.ngay_het_han}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-row gap-4">
                        {item.so_luong < 50 && (
                          <span className="text-red-600 whitespace-nowrap">
                            Sắp hết hàng
                          </span>
                        )}
                        {new Date(item.ngay_het_han) <= new Date(new Date().getTime() + (30 * 24 * 60 * 60 * 1000)) && (
                          <span className="text-orange-600 whitespace-nowrap">
                            Sắp hết hạn
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal Thêm Mới */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Thêm Thuốc Mới</h2>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleAddThuoc} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tên Thuốc</label>
                <input
                  type="text"
                  name="ten_thuoc"
                  value={newThuoc.ten_thuoc}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Nhập tên thuốc..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ngày Hết Hạn</label>
                <input
                  type="date"
                  name="ngay_het_han"
                  value={newThuoc.ngay_het_han}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Giá Tiền</label>
                <div className="relative">
                  <input
                    type="number"
                    name="gia_tien"
                    value={newThuoc.gia_tien}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pr-16"
                    placeholder="0"
                    required
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    VNĐ
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Số Lượng</label>
                <input
                  type="number"
                  name="so_luong"
                  value={newThuoc.so_luong}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="0"
                  min="0"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loại</label>
                <select
                  name="loai"
                  value={newThuoc.loai}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                >
                  <option value="">Chọn loại thuốc</option>
                  <option value="Thuốc kháng sinh">Thuốc kháng sinh</option>
                  <option value="Thuốc giảm đau">Thuốc giảm đau</option>
                  <option value="Thuốc ho">Thuốc ho</option>
                  <option value="Vitamin">Vitamin</option>
                  <option value="Thuốc bổ">Thuốc bổ</option>
                </select>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Thêm Mới
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default KhoThuoc;
