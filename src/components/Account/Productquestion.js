import React from 'react';
import { Link } from 'react-router-dom';

function Productquestion() {

    return (
        <div className="mt-8 py-2">
            <p className="text-3xl">
               Hỏi đáp
            </p>
            <div className=" bg-white mt-2">
                <div className="grid justify-center items-center p-56">
                    <div className="flex justify-center items-center">
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg" alt=""/>
                    </div>
                    <p className="flex justify-center text-xl pt-4">Bạn chưa có bất kỳ câu hỏi hoặc câu trả lời nào</p>
                    <Link to="/" className="flex justify-center text-2xl py-3 mt-4 hover:text-black hover:no-underline" style={{ borderRadius: '5px 5px 5px 5px', background: '#fae62b' }}>
                        <p className="px-12 opacity-75">Tiếp tục mua sắm</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}   

export default Productquestion;