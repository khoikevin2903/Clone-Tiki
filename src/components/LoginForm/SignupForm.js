import React from 'react';

const onChange = () => {

}

function SignupForm(props) {
 
    return (
        <form>
            <label className="font-light ml-10 w-full flex align-items-center">
                <span className="flex items-center w-1/6 text-2xl font-normal"> Họ tên</span>
                <input type="text" className="border border-gray-400 text-2xl w-3/5 ml-4 pl-6 py-2 font-normal rounded-lg" placeholder="Nhập họ tên" />
            </label>
            <label className="font-light ml-10 w-full flex align-items-center mt-6">
                <span className="flex items-center w-1/6 text-2xl font-normal"> SĐT </span>
                <input type="text" className="text-2xl w-2/5 border border-gray-400 ml-4 pl-6 py-2 font-normal rounded-lg" placeholder="Nhập Số điện thoại" />
                <button className="border border-gray-200 px-2 bg-yellow-600 text-2xl font-normal py-2">
                    Gửi mã xác thực
                </button>
            </label>
            <label className="font-light ml-10 w-full flex mt-6">
                <span className="flex items-center w-1/6 text-2xl font-normal">Mã xác thực</span>
                <input type="text" className="border border-gray-400 text-2xl w-3/5 ml-4 pl-6 py-2 font-normal rounded-lg" placeholder="Nhập mã xác thực" />
            </label>
            <label className="font-light ml-10 w-full flex mt-6">
                <span className="flex items-center w-1/6 text-2xl font-normal">Email</span>
                <input type="text" className="border border-gray-400 text-2xl w-3/5 ml-4 pl-6 py-2 font-normal rounded-lg" placeholder="Nhập email" />
            </label>
            <label className="font-light ml-10 w-full flex mt-6">
                <span className="flex items-center w-1/6 text-2xl font-normal">Mật khẩu</span>
                <input type="text" className="border border-gray-400 text-2xl w-3/5 ml-4 pl-6 py-2 font-normal rounded-lg" placeholder="Mật khẩu từ 6 đến 32 ký tự" />
            </label>
            <label className="font-light ml-10 w-full flex mt-4 ">
                <span className="flex items-center w-1/6 text-2xl font-normal">Giới tính</span>
                <div className="w-3/5 pl-6 py-2 flex">
                    <label className="">
                        <input type="radio" checked="checked" onChange={onChange} className="h-8 w-8"/>
                        <span className="checkmark pl-4 mr-32 text-2xl font-normal">Nam</span>
                    </label>
                    <label className="">
                        <input type="radio"className="h-8 w-8"/>
                        <span className="checkmark pl-4 mr-32 text-2xl font-normal">Nữ</span>
                    </label>
                </div>
            </label>
            <label className="font-light w-full flex mt-4 ml-32 pl-20">
                <input type="checkbox" name="" id="" className="h-6 w-6"/>
                <span className="mt-2 text-lg font-medium ml-2 text-xl font-normal">Nhận các thông tin và chương trình khuyến mãi của Tiki qua email</span>
            </label>
            <button className="text-2xl ml-56 w-3/5 mt-6 py-4 font-normal rounded-lg bg-yellow-500">
                Tạo tài khoản
            </button>
            <span className="pl-48 mt-4 w-full pr-40 ml-10 block text-xl font-normal">Khi bạn nhấn Đăng ký, bạn đã đồng ý thực hiện mọi giao dịch mua bán theo <p className="font-bold text-blue-400 "> điều kiện sử dụng và chính sách của Tiki </p></span>
        </form>
    );
}

export default SignupForm;