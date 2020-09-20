import React from 'react';
import { Link } from 'react-router-dom';

function Paymentcard() {

    return (
        <div className="mt-8 py-2">
            <p className="text-3xl">
                Thông tin thanh toán
            </p>
            <div className=" bg-white mt-2">
                <div className="p-56 justify-center flex flex-column">
                    <div className="flex justify-center items-center" >
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg" alt="" />
                    </div>
                    <p className="flex justify-center text-2xl pt-4">Lưu lại thông tin thanh toán giúp bạn đặt hàng nhanh chóng và dễ dàng hơn</p>
                    <div className="flex justify-center items-center">
                        <Link to="/" className="flex w-1/3 justify-center text-2xl py-3 mt-4 hover:text-black hover:no-underline" style={{ borderRadius: '5px 5px 5px 5px', background: '#fae62b' }}>
                            <p className="px-12 opacity-75">Tiếp tục mua sắm</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Paymentcard;