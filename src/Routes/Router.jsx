import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import BenhNhan from '../components/BenhNhan'
import KhoThuoc from '../components/KhoThuoc'
import Home from '../components/Home'
import FirstPage from '../components/FirstPage'
import Layout from '../components/Layout'

const Router = () => {
  // Check for token in both localStorage and sessionStorage
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');

  return (
    <Routes>
      {/* Trang đăng nhập */}
      <Route path="/" element={
        token ? <Navigate to="/home" replace /> : <FirstPage />
      } />

      {/* FirstPage Route */}
      <Route path='/first-page' element={
        token ? <Navigate to="/home" replace /> : <FirstPage />
      } />

      {/* Home Route */}
      <Route path='/home' element={
        token ? (
          <Layout>
            <Home />
          </Layout>
        ) : (
          <Navigate to="/first-page" replace />
        )
      } />

      {/* Protected Routes */}
      <Route path='/danh-sach-benh-nhan' element={
        token ? (
          <Layout>
            <BenhNhan />
          </Layout>
        ) : (
          <Navigate to="/first-page" replace />
        )
      } />
      
      <Route path='/kho-thuoc' element={
        token ? (
          <Layout>
            <KhoThuoc />
          </Layout>
        ) : (
          <Navigate to="/first-page" replace />
        )
      } />

      {/* Catch all other routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default Router