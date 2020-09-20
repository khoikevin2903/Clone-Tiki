import React from 'react';
import { useState } from 'react';
import ClassNames from 'classnames';

function TikiNow() {

    const [active, setActive] = useState(0)

    const HandleActive = (param) => {
        setActive(param);
    }

    return (
        <div className="mt-8 py-2">
            <p className="text-4xl text-gray-800">
                Thông tin TikiNow
            </p>
            <div className="bg-white mt-2 text-gray-600 flex">
                <div className={ClassNames("py-3 text-2xl mx-16 cursor-pointer",
                    {
                        "border-b-4 border-blue-400": active === 0
                    }
                )}
                    onClick={() => HandleActive(0)}
                >
                    <p className="px-4">TikiNOW của tôi</p>
                </div>
                <div className={ClassNames("py-3 text-2xl mx-16 cursor-pointer",
                    {
                        "border-b-4 border-blue-400": active === 1
                    }
                )}
                    onClick={() => HandleActive(1)}
                >
                    <p className="px-4">Lịch sử mua gói TikiNOW</p>
                </div>
                <div className={ClassNames("py-3 text-2xl mx-16 cursor-pointer",
                    {
                        "border-b-4 border-blue-400": active === 2
                    }
                )}
                    onClick={() => HandleActive(2)}
                >
                    <p className="px-4">Đơn hàng sử dụng TikiNOW</p>
                </div>
            </div>
            <div className="font-normal py-8 text-4xl text-gray-800">
                <p>
                    Thông tin TikiNow
                </p>
            </div>
            <div className="bg-white grid p-4 justify-center">
                <div className="flex justify-center">
                    <img src="https://salt.tikicdn.com/ts/upload/35/1f/42/881848473f9a789fc562d1a9cdac8ca2.png" alt="" width={80} />
                </div>
                <div className="flex justify-center my-3">
                    <p className="text-2xl">Tài khoản bạn chưa được kích hoạt</p>
                </div>
                <div>
                    <button className="py-3 px-16 bg-red-600 text-2xl text-white font-semibold" style={{opacity:0.85}}>
                        Mua ngay 499.000đ/1 NĂM
                    </button>
                </div>
            </div>
            <div className="font-normal py-8 text-4xl text-gray-800">
                <p>
                    Ưu đãi độc quyền TikiNow
                </p>
            </div>
            <div className="bg-white grid p-8 justify-center">
                <div className="flex justify-center">
                    <img src="https://vcdn.tikicdn.com/media/upload/2018/09/24/bc01a7fc0e4849a5432f95749f686ed5.png" alt="" width={80} />
                </div>
                <div className="flex justify-center my-3">
                    <div className="text-xl">
                        <div className="flex justify-center">
                            <strong>Miễn phí vận chuyển</strong>
                        </div>
                        <div className="flex justify-center">
                            <strong>Giao hàng chỉ trong vài giờ</strong>
                        </div>
                        <div className="flex justify-center">
                            <p>Mua sắm tiết kiệm với giao hàng chỉ trong</p>
                        </div>
                        <div className="flex justify-center">
                            <p>vài giờ tại <span className="font-semibold">TPHCM và Hà Nội </span>với hàng</p>
                        </div>
                        <div className="flex justify-center">
                            <span>trăm ngàn sản phẩm ký hiệu</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TikiNow;