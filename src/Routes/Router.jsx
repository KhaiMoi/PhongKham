import React from 'react'
import {Route, Routes } from 'react-router-dom'
import BenhNhan from '../components/BenhNhan'
import KhoThuoc from '../components/KhoThuoc'

const Router = () => {
  return (
    <Routes>
        <Route path='/danh-sach-benh-nhan' element={<BenhNhan/>}></Route>
        <Route path='/kho-thuoc' element={<KhoThuoc/>}></Route>
      </Routes>
    
  )
}

export default Router