import React from "react";

const BenhNhan = () => {
    const benhnhan = [
        {
          stt: 1,
          ten: "Trương Thị Hoa",
          gioitinh: "Nữ",
          date: "12/12/2025",
          sdt: "0909090231",
          canang: 34,
          chieucao: 170,
          BHYT: "5126836989812",
          CCCD: "08352351239",
        },
        {
          stt: 2,
          ten: "Nguyễn Văn Bình",
          gioitinh: "Nam",
          date: "25/11/2023",
          sdt: "0912123456",
          canang: 68,
          chieucao: 175,
          BHYT: "5126836989822",
          CCCD: "08352351240",
        },
        {
          stt: 3,
          ten: "Phạm Thị Lan",
          gioitinh: "Nữ",
          date: "18/06/2024",
          sdt: "0987654321",
          canang: 52,
          chieucao: 160,
          BHYT: "5126836989833",
          CCCD: "08352351241",
        },
        {
          stt: 4,
          ten: "Lê Minh Tuấn",
          gioitinh: "Nam",
          date: "10/03/2025",
          sdt: "0933331234",
          canang: 80,
          chieucao: 180,
          BHYT: "5126836989844",
          CCCD: "08352351242",
        },
        {
          stt: 5,
          ten: "Hoàng Thu Hương",
          gioitinh: "Nữ",
          date: "15/09/2023",
          sdt: "0921234567",
          canang: 45,
          chieucao: 155,
          BHYT: "5126836989855",
          CCCD: "08352351243",
        },
        {
          stt: 6,
          ten: "Trần Quốc Anh",
          gioitinh: "Nam",
          date: "20/02/2024",
          sdt: "0945678901",
          canang: 74,
          chieucao: 178,
          BHYT: "5126836989866",
          CCCD: "08352351244",
        },
        {
          stt: 7,
          ten: "Vũ Thị Thanh",
          gioitinh: "Nữ",
          date: "05/05/2025",
          sdt: "0956781234",
          canang: 50,
          chieucao: 165,
          BHYT: "5126836989877",
          CCCD: "08352351245",
        },
        {
          stt: 8,
          ten: "Đặng Văn Hùng",
          gioitinh: "Nam",
          date: "30/12/2023",
          sdt: "0967890123",
          canang: 62,
          chieucao: 172,
          BHYT: "5126836989888",
          CCCD: "08352351246",
        },
        {
            stt: 9,
            ten: "Đặng Văn Hùng",
            gioitinh: "Nam",
            date: "30/12/2023",
            sdt: "0967890123",
            canang: 62,
            chieucao: 172,
            BHYT: "5126836989888",
            CCCD: "08352351246",
          },
      ];
      
      
  return (
    <div>
      <div className="w-full m-10">
        <div className="items-center justify-center">
          <div className="mb-5 text-center text-4xl font-bold ">
            <h1>Danh Sach Benh Nhan</h1>
          </div>
          <div>
            <div className="flex gap-5 mb-5">
              <button className="rounded bg-green-400 py-3 px-8">
                Them Moi Benh Nhan
              </button>
            </div>
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
                  <th className="px-6 py-3">BHYT</th>
                  <th className="px-6 py-3">CCCD</th>
                  <th className="px-6 py-3">Tác Vụ</th>
                </tr>
              </thead>
              <tbody>
                {benhnhan.map((danhsachbenhnhan, index) => (
                  <tr className="hover:bg-gray-50" key={index}>
                    <td className="px-6 py-4">{danhsachbenhnhan.stt}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.ten}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.gioitinh}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.date}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.sdt}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.canang} kg</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.chieucao} cm</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.BHYT}</td>
                    <td className="px-6 py-4">{danhsachbenhnhan.CCCD}</td>
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
