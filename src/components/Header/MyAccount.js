import React from 'react';
import { useDispatch } from 'react-redux';
import { LogOut } from './../../reducers/LoginSuccess';
import { Link } from 'react-router-dom';
import { changeActive } from './../../reducers/InfoActive';
// import PropTypes from 'prop-types';

// MyAccount.propTypes = {

// };

function MyAccount(props) {

    const dispatch = useDispatch();


    const HandleLogOut = () => {
        dispatch(LogOut());
    }

    const HandleActive = (value) => {
        dispatch(changeActive(value));
    }

    return (
        <ul className="absolute mt-6 bg-white shadow-xl rounded-lg py-2 px-4" style={{ zIndex: '1', width: '250px' }}>
            <Link to="/account/oder" className="p-3 text-black hover:no-underline text-xl flex justify-start hover:bg-blue-300 w-full items-center rounded-lg"
                onClick={() => HandleActive(2)}
            >
                Đơn hàng của tôi
           </Link>
            <Link to="/account/notification" className="p-3 hover:no-underline text-black text-xl flex justify-start hover:bg-blue-300 w-full items-center rounded-lg"
                onClick={() => HandleActive(1)}
            >
                Thông báo của tôi
           </Link>
            <Link to="/account/edit" className="p-3 hover:no-underline text-black text-xl flex justify-start hover:bg-blue-300 w-full items-center rounded-lg"
                onClick={() => HandleActive(0)}
            >
                Tài khoản của tôi
           </Link>
            <Link to="/account/product" className="p-3 hover:no-underline text-black text-xl flex justify-start hover:bg-blue-300 w-full items-center rounded-lg">
                Nhận xét sản phẩm đã mua
           </Link>
            <Link to="/account/tikinow" className="p-3 hover:no-underline text-black text-xl flex justify-start hover:bg-blue-300 w-full items-center rounded-lg">
                <div className="w-1/5 text-2xl">
                    <img src="https://mgg.vn/wp-content/uploads/2019/08/tiki-mien-phi-giao-hang.jpg" alt="" />
                </div>
                <div className="w-4/5">
                    <p>TikiNOW</p>
                    <p>Đăng kí sử dụng ngay</p>
                </div>
            </Link>
            <Link to="/account/counpons" className="p-3 hover:no-underline text-black text-xl flex justify-start hover:bg-blue-300 w-full items-center rounded-lg">
                <div className="w-1/5 text-2xl">
                    <i className="fas fa-tags text-yellow-600"></i>
                </div>
                <div className="w-4/5">
                    <p>Mã giảm giá</p>
                    <p>Bạn đang có 0 mã giảm giá</p>
                </div>
            </Link>
            <Link to="/account/reward" className="p-3 hover:no-underline text-black text-xl flex justify-start hover:bg-blue-300 w-full items-center rounded-lg">
                <div className="w-1/5 text-2xl">
                    <i className="fab fa-bitcoin text-yellow-600"></i>
                </div>
                <div className="w-4/5">
                    <p>Thông tin Tiki xu</p>
                    <p>Bạn đang có 0 tiki xu</p>
                </div>
            </Link>
            <Link to="/account/bookcare" className="p-3 hover:no-underline text-black text-xl flex justify-start hover:bg-blue-300 w-full items-center rounded-lg">
                <div className="w-1/5 text-2xl">
                    <i className="fas fa-book text-blue-400"></i>
                </div>
                <div className="w-4/5">
                    <p>Thông tin Bookcare</p>
                    <p>Bạn đang có 0 Bookcare</p>
                </div>
            </Link>
            <Link to="/account" className="p-3 text-black hover:no-underline text-xl flex justify-start hover:bg-blue-300 w-full items-center rounded-lg">
                Đổi trả dễ dàng
           </Link>
            <Link to="/" className="p-3 text-black text-xl flex hover:no-underline justify-start hover:bg-blue-300 w-full items-center rounded-lg"
                onClick={HandleLogOut}
            >
                Thoát tài khoản
           </Link>
        </ul>
    );
}

export default MyAccount;