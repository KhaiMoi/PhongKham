import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import BenhNhan from '../components/BenhNhan'
import KhoThuoc from '../components/KhoThuoc'
import Home from '../components/Home'
import FirstPage from '../components/FirstPage'
import Layout from '../components/Layout'
import ProtectedRoute from '../components/ProtectedRoute'

const Router = () => {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      {/* Trang đăng nhập */}
      <Route path="/" element={
        token ? <Navigate to="/home" replace /> : <FirstPage />
      } />

      {/* Các route được bảo vệ */}
      <Route path='/home' element={
        <ProtectedRoute>
          <Layout>
            <Home />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path='/danh-sach-benh-nhan' element={
        <ProtectedRoute>
          <Layout>
            <BenhNhan />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path='/kho-thuoc' element={
        <ProtectedRoute>
          <Layout>
            <KhoThuoc />
          </Layout>
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default Router