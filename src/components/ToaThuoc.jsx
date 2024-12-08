import React from 'react'
import './ToaThuoc.css'

const ToaThuoc = () => {
  return (
    <div className="prescription-layout">
      {/* Left Column - Patient List */}
      <div className="patient-list-column">
        <div className="search-section">
          <h3>Tìm nhanh</h3>
          <input type="text" placeholder="Tìm Bệnh nhân cũ" />
        </div>
        
        <div className="patient-table">
          <table>
            <thead>
              <tr>
                <th>Họ tên</th>
                <th>Ngày sinh</th>
                <th>Địa chỉ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nguyễn Thị Hoa An</td>
                <td>01/01/1990</td>
                <td>TP. HCM</td>
              </tr>
              <tr>
                <td>Nguyen Thanh Long Nhân</td>
                <td>02/02/1992</td>
                <td>TP. HCM</td>
              </tr>
              {/* Add more patient rows */}
            </tbody>
          </table>
        </div>

        {/* Old prescriptions section */}
        <div className="old-prescriptions">
          <h3>Toa thuốc cũ</h3>
          <div className="prescription-history">
            <table>
              <thead>
                <tr>
                  <th>Ngày</th>
                  <th>Chẩn đoán</th>
                  <th>Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15/03/2024</td>
                  <td>Viêm họng</td>
                  <td>
                    <button className="action-btn">Xem</button>
                  </td>
                </tr>
                <tr>
                  <td>10/03/2024</td>
                  <td>Cảm cúm</td>
                  <td>
                    <button className="action-btn">Xem</button>
                  </td>
                </tr>
                {/* Add more prescription history rows */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Column - Prescription Form */}
      <div className="prescription-column">
        <button className="create-new">Tạo toa mới</button>
        
        {/* Patient info form */}
        <div className="patient-info">
          <div className="form-row three-columns">
            <div className="form-group">
              <label>Họ tên:</label>
              <input type="text" className="full-width" />
            </div>
            <div className="form-group">
              <label>Ngày sinh:</label>
              <input type="date" className="full-width" />
            </div>
            <div className="form-group">
              <label>Tuổi:</label>
              <input type="text" className="full-width" />
            </div>
          </div>

          <div className="form-row three-columns">
            <div className="form-group">
              <label>Giới tính:</label>
              <select className="full-width">
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
            <div className="form-group">
              <label>Địa chỉ:</label>
              <input type="text" className="full-width" />
            </div>
            <div className="form-group">
              <label>Tỉnh/TP:</label>
              <select className="full-width">
                <option>TP. Hồ Chí Minh</option>
              </select>
            </div>
          </div>

          <div className="form-row vitals-row">
            <div className="form-group">
              <label>Mạch:</label>
              <input type="text" placeholder="lần/phút" />
            </div>
            <div className="form-group">
              <label>H.áp:</label>
              <input type="text" placeholder="mmHg" />
            </div>
          </div>
        </div>

        {/* Prescription table */}
        <div className="prescription-table">
          <div className="prescription-header">
            <h3 className="header-title">Danh sách thuốc & cách dùng</h3>
            <div className="header-controls">
              <button className="control-btn delete-btn">Xoá hết</button>
              <button className="control-btn add-btn">Thêm</button>
              <div className="prescription-settings">
                <div className="days-group">
                  <label>Số ngày thuốc:</label>
                  <input type="number" defaultValue="3" className="days-input" />
                </div>
                <div className="checkbox-group">
                  <input type="checkbox" id="followUp" />
                  <label htmlFor="followUp">Hẹn tái khám</label>
                </div>
                <div className="date-group">
                  <label>Ngày T.K:</label>
                  <input type="date" defaultValue="2024-03-26" className="date-input" />
                </div>
              </div>
            </div>
          </div>

          <div className="medicine-table-wrapper">
            <table className="medicine-table">
              <thead>
                <tr>
                  <th>Tên thuốc</th>
                  <th>S.lần/ngày</th>
                  <th>SL/lần</th>
                  <th>ĐVSD/lần</th>
                  <th>Tổng cộng</th>
                  <th>Đơn vị</th>
                  <th>P.thức</th>
                  <th>Ghi chú cách dùng</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty rows for demonstration */}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Medicine search section */}
          <div className="medicine-search-section">
            <div className="search-container">
              <input 
                type="text" 
                className="medicine-search-input"
                placeholder="Tìm kiếm thuốc..."
              />
            </div>
            <div className="search-actions">
              <button className="add-medicine-btn">
                <span className="btn-icon">+</span>
                Thêm vào toa
              </button>
              <button className="clear-btn">
                <span className="btn-icon">×</span>
                Xoá
              </button>
            </div>
          </div>

          {/* Medicine quick list */}
          <div className="medicine-quick-list">
            <table>
              <thead>
                <tr>
                  <th>SL tồn</th>
                  <th>Tên thuốc</th>
                  <th>Tên gốc</th>
                  <th>Quy cách</th>
                  <th>ĐVSD</th>
                  <th>P.thức</th>
                  <th>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>20% dextrose in water</td>
                  <td></td>
                  <td>chai</td>
                  <td>ml</td>
                  <td>Uống</td>
                  <td>Sáng:__ Trưa:__ Chiều:__ Tối:__</td>
                </tr>
                {/* Add more medicine rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToaThuoc