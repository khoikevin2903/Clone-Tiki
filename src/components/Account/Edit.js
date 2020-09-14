import React from 'react';
import PropTypes from 'prop-types';
import Calendar from './Calendar';
import { DAY, MONTH, YEAR } from './../../constants/calendar';
import { useState } from 'react';
import {useSelector } from 'react-redux';
import ClassNames from 'classnames';
import { useEffect } from 'react';


Edit.propTypes = {
    InfoActive: PropTypes.number,
};

function Edit() {

    const infoUser = useSelector(state => state.InfoUser);

    const [pass, setPass] = useState(false);

    const [info, setInfo] = useState({
        hoTen : "",
        SDT : "",
        Email: "",
        gender : "male",
        Date: "00/00/0000"
    })

    useEffect(() => {
        setInfo({
            ...info,
            hoTen : infoUser.hoTen,
            SDT : infoUser.SDT,
            Email: infoUser.Email,
            gender : infoUser.gender,
            Date: infoUser.Date
        })
    }, [infoUser])

    const HandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        setInfo({
            ...info,
            [name]: value
        })
    }

    const HandleUpdatePass = () => {
        setPass(!pass);
    }

    return (
        <div className="mt-8 py-2">
            <p className="text-3xl">
                Thông tin tài khoản
            </p>
            <div className="bg-white mt-2 rounded">
                <form className="w-2/3 p-6">
                    <label className="w-full text-2xl mb-4 flex justify-between items-center">
                        <span className="font-hairline w-1/4 text-xl text-gray-700">Họ tên</span>
                        <input type="text" value={info.hoTen || ""} onChange={HandleChange} name="hoTen"
                            className="outline-none w-3/4 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                    </label>
                    <label className="w-full text-2xl mb-4 flex justify-between items-center">
                        <span className="font-thin w-1/4 text-xl text-gray-700">Số điện thoại</span>
                        <input type="text" value={info.SDT || ""} onChange={HandleChange} name="SDT"
                            className="outline-none w-3/4 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                    </label>
                    <label className="w-full text-2xl mb-4 flex justify-between items-center">
                        <span className="font-thin w-1/4 text-xl text-gray-700">Email</span>
                        <input type="text" value={info.Email || ""} onChange={HandleChange} name="Email"
                            className="outline-none w-3/4 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                    </label>
                    <label className="w-full text-2xl mb-4 flex items-center">
                        <span className="font-thin w-1/4 text-xl text-gray-700">Giới tính</span>
                        <div className=" flex items-center">
                            <input type="radio" className="p-4 h-8 w-8 mr-3 mt-0" id="male" name="gender" value="male" checked={info.gender === "male"} onChange={HandleChange}/>
                            <label className="font-thin mr-10 mb-0">Nam</label>
                            <input type="radio" className="p-4 h-8 w-8 mr-3 mt-0" id="female" name="gender" value="female" checked={info.gender === "female"} onChange={HandleChange} />
                            <label className="font-thin">Nữ</label>
                        </div>
                    </label>
                    <label className="w-full text-2xl mb-4 flex justify-between items-center">
                        <div className="font-hairline w-1/4">
                            <p className="font-hairline text-xl text-gray-700">Ngày sinh</p>
                            <p className="text-xl text-gray-700">(không bắt buộc)</p>
                        </div>
                        <div className="w-3/4 flex justify-start">
                            <Calendar Arrays={DAY} val={info.Date ? parseInt(info.Date.substring(0,2)) : ""} name="Day"/>
                            <Calendar Arrays={MONTH} val={info.Date ? parseInt(info.Date.substring(3,5)) : ""} name="Month" />
                            <Calendar Arrays={YEAR} val={info.Date ? parseInt(info.Date.substring(6,10)) : ""} name="Year"/>
                        </div>
                    </label>
                    <div className="w-full text-2xl mb-4 flex justify-between items-center">
                        <div className="ml-64 flex items-center">
                            <input type="checkbox" className="h-8 w-8 mt-0" onChange={HandleUpdatePass} />
                            <span className="ml-10">Thay đổi mật khẩu</span>
                        </div>
                    </div>
                    <div className={ClassNames(
                        {
                            'hidden': pass === false
                        }
                    )}>
                        <label className="w-full text-2xl mb-4 flex justify-between items-center">
                            <span className="font-hairline w-1/4 text-xl text-gray-700">Mật khẩu cũ</span>
                            <input type="password" className="outline-none w-3/4 p-2 border border-gray-300 font-medium pl-4"
                                style={{ borderRadius: '5px 5px 5px 5px' }}
                                placeholder="Nhập mật khẩu cũ"
                            />
                        </label>
                        <label className="w-full text-2xl mb-4 flex justify-between items-center">
                            <span className="font-hairline w-1/4 text-xl text-gray-700">Mật khẩu mới</span>
                            <input type="password" className="outline-none w-3/4 p-2 border border-gray-300 font-medium pl-4"
                                style={{ borderRadius: '5px 5px 5px 5px' }}
                                placeholder="Mật khẩu từ 6 đến 32 ký tự"
                            />
                        </label>
                        <label className="w-full text-2xl mb-4 flex justify-between items-center">
                            <span className="font-hairline w-1/4 text-xl text-gray-700">Nhập lại</span>
                            <input type="password" className="outline-none w-3/4 p-2 border border-gray-300 font-medium pl-4"
                                style={{ borderRadius: '5px 5px 5px 5px' }}
                                placeholder="Nhập lại mật khẩu mới"
                            />
                        </label>
                    </div>
                    <button className="w-64 text-xl ml-64 flex justify-center items-center py-3 mb-16 hover:opacity-75 duration-500" style={{ background: '#fae62b', borderRadius: '5px 5px 5px 5px' }}>
                        <span className="text-gray-700 font-semibold">Cập nhật</span>
                    </button>
                </form>
            </div>
            <p className="text-3xl py-6">Liên kết tài khoản mạng xã hội</p>
            <div className="bg-white">
                <div className="flex items-center p-4 border-b border-gray-400 justify-between">
                    <div className="flex items-center">
                        <img src="https://salt.tikicdn.com/ts/upload/21/d4/7d/4b7de50b4141350b65b7e510074df3f6.png" alt="" className="h-16 w-16 mr-4" />
                        <span className="text-2xl font-bold">Zalo</span>
                    </div>
                    <p className="text-xl text-blue-400 font-semibold">Liên kêt</p>
                </div>
                <div className="flex items-center p-4 border-b border-gray-400 justify-between">
                    <div className="flex items-center">
                        <i className="fab fa-facebook-square mr-4 text-6xl text-blue-800 ml-1"></i>
                        <span className="text-2xl font-bold">Facebook</span>
                    </div>
                    <p className="text-xl text-blue-400 font-semibold">Liên kêt</p>
                </div>
                <div className="flex items-center p-4 justify-between">
                    <div className="flex items-center">
                        <i className="fab fa-google-plus mr-4 text-6xl text-red-700 ml-1"></i>
                        <span className="text-2xl font-bold">Google</span>
                    </div>
                    <p className="text-xl text-blue-400 font-semibold">Liên kêt</p>
                </div>
            </div>
        </div>
    );
}

export default Edit;