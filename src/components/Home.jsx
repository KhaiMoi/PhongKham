import React, { useState } from "react";
import { motion } from "motion/react"
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative"
      style={{ backgroundImage: "url('bg-main.png')" }}
    >
      {/* Lớp phủ */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>      
      {/* Nội dung */}
      <div className="container relative z-10 text-center mx-auto py-4 px-[50px]">
        <motion.h1 
         initial={{opacity: 0, y: 100 }}
         transition={{duration:2}}
         whileInView={{opacity: 1, y: 0 }}
         viewport={{once:false}}
        className="text-white text-6xl font-medium inline-block">
          HỆ THỐNG QUẢN LÝ BỆNH NHÂN
        </motion.h1>
        <div className="mt-16 space-x-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-lg bg-blue-700 text-white px-8 py-3"
          >
            Đăng Nhập
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="relative w-full max-w-md px-4">
            <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Đăng Nhập
                </h3>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    Nhập email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    Nhập mật khẩu
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="text-sm ml-3">
                      <label
                        htmlFor="remember"
                        className="font-medium text-gray-900 dark:text-gray-300"
                      >
                        Nhớ tài khoản
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Đăng Nhập
                </button>
                
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
