import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ClassNames from 'classnames';

function Adress(props) {

    const [create, setCreate] = useState(false)

    const HandleCreate = () => {
        setCreate(!create);
    }

    const HandleChange = (e) => {
        var target = e.target;
        // var name = target.name;
        // var value = target.value;
    }


    return (
        <div className="mt-8 py-2">
            <div className={ClassNames(
                {
                    'hidden': create === true
                }
            )}>
                <p className="text-3xl">
                    Số địa chỉ
                </p>
                <div className="mt-2">
                    <Link to="/account/address/create" className=" no-underline hover:no-underline hover:text-black focus:no-underline bg-white py-4 flex justify-center items-center border-dotted border-2 border-gray-600 cursor-pointer border-opacity-50"
                        onClick={HandleCreate}
                    >
                        <i className="fas fa-plus text-3xl mr-10 opacity-75"></i>
                        <p className="text-2xl text-blue-600">Thêm địa chỉ mới</p>
                    </Link>
                </div>
            </div>
            <div className={ClassNames(
                {
                    'hidden': create === false
                }
            )}>
                <p className="text-3xl">
                    Tạo sổ địa chỉ
                </p>
                <div className="bg-white mt-2 rounded">
                    <form className="w-2/3 p-6">
                        <label className="w-full text-2xl mb-4 flex justify-between items-center">
                            <span className="font-hairline w-1/4 text-xl text-gray-700">Họ tên:</span>
                            <input type="text" value="" onChange={HandleChange} name="hoTen"
                                className="outline-none w-3/4 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                        </label>
                        <label className="w-full text-2xl mb-4 flex justify-between items-center">
                            <span className="font-thin w-1/4 text-xl text-gray-700">Công ty:</span>
                            <input type="text" value="" onChange={HandleChange} name="Cty"
                                className="outline-none w-3/4 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                        </label>
                        <label className="w-full text-2xl mb-4 flex justify-between items-center">
                            <span className="font-thin w-1/4 text-xl text-gray-700">Số điện thoại:</span>
                            <input type="text" value="" onChange={HandleChange} name="SDT"
                                className="outline-none w-3/4 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                        </label>
                        <label className="w-full text-2xl mb-4 flex justify-between items-center">
                            <span className="font-thin w-1/4 text-xl text-gray-700">Tỉnh/Thành phố:</span>
                            <input type="text" value="" onChange={HandleChange} name="Cty"
                                className="outline-none w-3/4 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                        </label>
                        <label className="w-full text-2xl mb-4 flex justify-between items-center">
                            <span className="font-thin w-1/4 text-xl text-gray-700">Quận huyện:</span>
                            <input type="text" value="" onChange={HandleChange} name="Cty"
                                className="outline-none w-3/4 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                        </label>
                        <label className="w-full text-2xl mb-4 flex justify-between items-center">
                            <span className="font-thin w-1/4 text-xl text-gray-700">Phường xã</span>
                            <input type="text" value="" onChange={HandleChange} name="Cty"
                                className="outline-none w-3/4 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                        </label>
                        <label className="w-full text-2xl mb-4 flex items-center">
                            <span className="font-thin w-1/4 text-xl text-gray-700">Loại địa chỉ:</span>
                            <div className=" flex items-center">
                                <input type="radio" className="p-4 h-8 w-8 mr-3 mt-0" id="male" name="gender" value="male" checked="" onChange={HandleChange} />
                                <label className="font-thin mr-10 mb-0">Nhà riêng / Chung cư</label>
                                <input type="radio" className="p-4 h-8 w-8 mr-3 mt-0" id="female" name="gender" value="female" checked="female" onChange={HandleChange} />
                                <label className="font-thin">Cơ quan / Công ty</label>
                            </div>
                        </label>
                        <div className="w-full text-2xl mb-8 flex justify-between items-center pt-4">
                            <div className="ml-56 pl-4 flex items-center">
                                <input type="checkbox" className="h-8 w-8 mt-0"/>
                                <span className="ml-10">Đặt làm địa chỉ mặc định</span>
                            </div>
                        </div>
                        <button className="w-64 text-xl ml-64 flex justify-center items-center py-3 mb-16" style={{ background: '#fae62b', borderRadius: '5px 5px 5px 5px' }}>
                            <span className="text-gray-700 font-semibold">Cập nhật</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Adress;