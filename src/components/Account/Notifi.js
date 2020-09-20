import React from 'react';
import { useState } from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';

function Notifi() {

    const [active, setActive] = useState(0);

    const HandleActive = (value) => {
        setActive(value)
    }

    return (
        <div className="mt-8 py-2">
            <p className="text-3xl">
                Thông báo của tôi
            </p>
            <div className=" bg-white mt-2">
                <div>
                    <div className="border-b border-gray-400">
                        <i className={ClassNames(
                            'fas fa-home py-3 px-8 text-4xl text-gray-700 mx-8 cursor-pointer',
                            {
                                'border-b-2 border-blue-400': active === 0
                            }
                        )} onClick={() => HandleActive(0)}></i>
                        <i className={ClassNames(
                            'fas fa-gift py-3 px-8 text-4xl text-gray-700 mx-8 cursor-pointer',
                            {
                                'border-b-2 border-blue-400': active === 1
                            }
                        )} onClick={() => HandleActive(1)} ></i>
                        <i className={ClassNames(
                            'far fa-credit-card py-3 px-8 text-4xl text-gray-700 mx-8 cursor-pointer',
                            {
                                'border-b-2 border-blue-400': active === 2
                            }
                        )} onClick={() => HandleActive(2)}></i>
                        <i className={ClassNames(
                            'fas fa-history py-3 px-8 text-4xl text-gray-700 mx-8 cursor-pointer',
                            {
                                'border-b-2 border-blue-400': active === 3
                            }
                        )} onClick={() => HandleActive(3)}></i>
                    </div>
                </div>
                <div className="p-56">
                    <div className="flex justify-center items-center">
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg" alt="" />
                    </div>
                    <p className="flex justify-center text-2xl pt-4">Bạn chưa có thông báo nào</p>
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

export default Notifi;