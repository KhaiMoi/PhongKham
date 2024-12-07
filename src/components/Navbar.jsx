import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { name: "Danh sách Bệnh Nhân", to: "/danh-sach-benh-nhan" },
    { name: "Danh Mục Thuốc", to: "/kho-thuoc" },
    { name: "Lịch Sử Khám", to: "#" },
    { name: "Toa Thuốc", to: "#" },
  ];

  return (
    <div className="left-0 w-full h-16 flex items-center px-10 bg-blue-100 ">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img className="w-[100px] cursor-pointer" src={"logo-main.png"} alt="Logo" />
      </div>

      {/* Menu Items */}
      <ul className="flex-1 flex justify-center gap-10">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="group cursor-pointer relative"
            onClick={() => setActiveItem(index)}
          >
            <Link
              to={item.to}
              className={`hover:text-blue-500 ${
                activeItem === index ? "text-blue-500" : ""
              }`}
            >
              {item.name}
            </Link>
            <span
              className={`absolute bottom-[-2px] left-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                activeItem === index ? "" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
