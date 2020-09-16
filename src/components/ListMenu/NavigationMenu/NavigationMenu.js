import React from 'react';
import './navigationMenu.scss';
// import PropTypes from 'prop-types';

// NavigationMenu.propTypes = {

// };

function NavigationMenu(props) {
    return (
        <ul className="bg-white border border-gray-200 mt-4 Nvgt">
            <li className="cursor-pointer">
                <i className="fas fa-mobile-alt opacity-50"></i>
                <span className="text-xl">Điện Thoại - Máy Tính Bảng </span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-tv opacity-50"></i>
                <span>Điện Tử - Điện Lạnh</span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-headphones opacity-50"></i>
                <span> Phụ Kiện - Thiết Bị Số </span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-laptop opacity-50"></i>
                <span>Laptop - Thiết Bị IT</span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-camera opacity-50"></i>
                <span>Máy Ảnh - Quay Phim </span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-charging-station opacity-50"></i>
                <span>Điện Gia Dụng</span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-house-damage opacity-50"></i>
                <span>Nhà Cửa - Đời Sống</span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-spray-can opacity-50"></i>
                <span>Hàng Tiêu Dùng - Thực Phẩm</span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-futbol opacity-50"></i>
                <span>Đồ chơi, Mẹ & Bé</span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-marker opacity-50"></i>
                <span>Làm Đẹp - Sức Khỏe</span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-tshirt opacity-50"></i>
                <span>Thời Trang - Phụ Kiện</span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-running opacity-50"></i>
                <span>Thể Thao - Dã Ngoại</span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-biking opacity-50"></i>
                <span>Xe Máy, Ô Tô, Xe Đạp </span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-globe opacity-50"></i>
                <span>Hàng Quốc Tế</span>
            </li>
            <li className="cursor-pointer">
                <i className="fas fa-book-open opacity-50"></i>
                <span>Sách, VPP & Quà Tặng</span>
            </li>
            <li className="cursor-pointer">
                <i className="fab fa-cc-paypal opacity-50"></i>
                <span>Voucher - Dịch Vụ - Thẻ Cào</span>
            </li>
        </ul>
    );
}

export default NavigationMenu;