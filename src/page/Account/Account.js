import React from 'react';
import HeaderApp from './../../components/Header/index';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import MyList from '../../components/Account/MyList';
import Edit from '../../components/Account/Edit';
import Notifi from '../../components/Account/Notifi';
import Order from '../../components/Account/Order';
import Paymentcard from '../../components/Account/Paymentcard';
import NhanxetSpDaMua from '../../components/Account/NhanXetSpDaMua';
import DanhRiengChoBan from '../../components/Account/DanhRiengChoBan';
import Wishlist from '../../components/Account/Wishlist';
import SaveForLater from '../../components/Account/SaveForLater';
import Review from '../../components/Account/Review';
import Productquestion from '../../components/Account/Productquestion';
import Address from './../../components/Account/Address';

function Account(props) {
    
    const Active = useSelector(state => state.InfoActive);

    return (
        <div className="bg-gray-200">
            <HeaderApp />
            <div className="px-4 py-4 bg-gray-300" >
                <div className="relative flex items-center ml-40 pl-12">
                    <i className="fas fa-chevron-right absolute text-4xl text-gray-500"
                        style={{ left: '105px' }}
                    ></i>
                    <Link to="/" className="text-gray-500 mr-10 cursor-pointer text-2xl hover:text-gray-500 hover:no-underline">Trang chủ</Link>
                    <span className="cursor-pointer text-xl ml-2">
                        {Active === 0 && 'Thông tin tài khoản'}
                        {Active === 1 && 'Thông báo của tôi'}
                        {Active === 2 && 'Quản lý đơn hàng'}
                        {Active === 3 && 'Số địa chỉ'}
                        {Active === 4 && 'Thông tin thanh toán'}
                        {Active === 5 && 'Nhận xét sản phẩm đã mua'}
                        {Active === 6 && 'Sản phẩm bạn đã xem'}
                        {Active === 7 && 'Sản phẩm yêu thích'}
                        {Active === 8 && 'Sản phẩm mua sau'}
                        {Active === 9 && 'Nhận xét của tôi'}
                        {Active === 10 && 'Hỏi đáp'}
                        {Active === 11 && 'Thông tin TikiNow'}
                        {Active === 12 && 'Mã giảm giá'}
                        {Active === 13 && 'Quản lý Tiki xu của tôi'}
                        {Active === 14 && 'BookCare của tôi'}
                    </span>
                </div>
            </div>
            <div className="container flex">
                <div className="w-1/5 mr-10">
                    <MyList />
                </div>
                <div className="w-4/5">
                    {Active === 0 && <Edit />}
                    {Active === 1 && <Notifi />}
                    {Active === 2 && <Order />}
                    {Active === 3 && <Address />}
                    {Active === 4 && <Paymentcard />}
                    {Active === 5 && <NhanxetSpDaMua />}
                    {Active === 6 && <DanhRiengChoBan />}
                    {Active === 7 && <Wishlist />}
                    {Active === 8 && <SaveForLater />}
                    {Active === 9 && <Review />}
                    {Active === 10 && <Productquestion />}
                    {/* {Active === 11 && 'Thông tin TikiNow'}
                    {Active === 12 && 'Mã giảm giá'}
                    {Active === 13 && 'Quản lý Tiki xu của tôi'}
                    {Active === 14 && 'BookCare của tôi'} */}
                </div>
            </div>
        </div>
    );
}

export default Account;