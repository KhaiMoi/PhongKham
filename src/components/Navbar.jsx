import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const menuItems = [
    { name: "Danh sách Bệnh Nhân", to: "/danh-sach-benh-nhan" },
    { name: "Danh Mục Thuốc", to: "/kho-thuoc" },
    { name: "Lịch Sử Khám", to: "#" },
    { name: "Toa Thuốc", to: "#" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    alert('Đăng xuất thành công!');
    window.location.href = '/first-page';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="left-0 w-full h-16 flex items-center px-10 bg-blue-100 ">
      <a href="/first-page">
        <div className="flex-shrink-0">
          <img className="w-[100px] cursor-pointer" src={"logo-main.png"} alt="Logo" />
        </div>
      </a>

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

      <div className="relative" ref={dropdownRef}>
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src={"https://th.bing.com/th/id/OIP.2a-vLBPrTBFwYI7GWNUwzwHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7"}
          alt="Doctor Avatar"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
            <ul>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                Đăng xuất
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
