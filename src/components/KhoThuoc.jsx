import React from "react";

const KhoThuoc = () => {
  const thuoc = [
    {
      stt: 1,
      tenthuoc: "panadon",
      date: "12/12/2025",
      giaban: "12000",
      soluong: 123,
      loai: "Thuoc",
    },
    {
      stt: 2,
      tenthuoc: "panadon",
      date: "12/12/2025",
      giaban: "12000",
      soluong: 123,
      loai: "Thuoc",
    },
    {
      stt: 3,
      tenthuoc: "Paracetamol",
      date: "12/12/2025",
      giaban: "12000",
      soluong: 123,
      loai: "Thuoc",
    },
    {
      stt: 4,
      tenthuoc: "panadon",
      date: "12/12/2025",
      giaban: "12000",
      soluong: 123,
      loai: "Thuoc",
    },
    {
      stt: 5,
      tenthuoc: "Dau bung",
      date: "12/12/2025",
      giaban: "12000",
      soluong: 123,
      loai: "Thuoc",
    },
    {
      stt: 6,
      tenthuoc: "panadon",
      date: "12/12/2025",
      giaban: "12000",
      soluong: 123,
      loai: "Thuoc",
    },
    {
      stt: 7,
      tenthuoc: "Dau dau",
      date: "12/12/2025",
      giaban: "12000",
      soluong: 123,
      loai: "Thuoc",
    },
  ];
  return (
    <div className="w-full m-10">
      <div className="items-center justify-center">
        <div className="mb-5">
          <h1 className="mb-5 text-center text-4xl font-bold ">Kho Thuoc</h1>
        </div>
        <div>
          <div className="flex gap-5 mb-5">
            <button className="rounded bg-blue-400 py-3 px-8">
              Them Moi Thuoc
            </button>
          </div>
          <table className="border-collapse table-auto w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-3">STT</th>
                <th className="px-6 py-3">Tên Thuốc</th>
                <th className="px-6 py-3">Ngày Hết Hạn</th>
                <th className="px-6 py-3">Giá Bán</th>
                <th className="px-6 py-3">Số Lượng</th>
                <th className="px-6 py-3">Loại</th>
                <th className="px-6 py-3">Tác Vụ</th>
              </tr>
            </thead>
            <tbody>
              {thuoc.map((danhsachthuoc, index) => (
                <tr className="hover:bg-gray-50" key={index}>
                  <td className="px-6 py-4">{danhsachthuoc.stt}</td>
                  <td className="px-6 py-4">{danhsachthuoc.tenthuoc}</td>
                  <td className="px-6 py-4">{danhsachthuoc.date}</td>
                  <td className="px-6 py-4">{danhsachthuoc.giaban}VND</td>
                  <td className="px-6 py-4">{danhsachthuoc.soluong}</td>
                  <td className="px-6 py-4">{danhsachthuoc.loai}</td>
                  <td className="px-6 py-4 text-white">
                    <button className="rounded bg-green-600 m-3 p-2">Chi Tiet</button>
                    <button className="rounded bg-red-600 m-3 p-2">Xoa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KhoThuoc;
