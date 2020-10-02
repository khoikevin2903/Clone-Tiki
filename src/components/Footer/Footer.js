import React from 'react';

function Footer(props) {
    return (
        <div className="container pt-40 pb-10 flex">
            <img className="h-40 w-1/6" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png" alt="" />
            <span className="flex-column items-end font-bold ml-10 text-3xl pt-16 opacity-75 w-5/12">
                <span className="block"> Đăng ký nhận bản tin Tiki</span>
                <span className="text-2xl"> Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</span>
            </span>
            <div className="w-5/12 flex">
                <input type="text" className="rounded-lg pl-6 mt-20 py-1 w-2/3 border border-blue-300 text-2xl font-normal" placeholder="Địa chỉ email của bạn" />
                <button className="ml-4 rounded-lg px-8 mt-20 py-1 border border-blue-300 bg-blue-500 text-white text-2xl font-normal">Đăng ký</button>
            </div>
        </div>
    );
}

export default Footer;