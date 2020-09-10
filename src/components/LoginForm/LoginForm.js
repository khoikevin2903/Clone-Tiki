import React, { useState } from 'react';
import { closeShowModal } from './../../reducers/showModal';
import { useDispatch } from 'react-redux';
import * as Mess from './../../constants/Message';
import { LoginActive } from './../../reducers/LoginSuccess';
// import PropTypes from 'prop-types';

// LoginForm.propTypes = {

// };

function LoginForm(props) {

    const [check, setCheck] = useState(true);

    const [mess, setMess] = useState(Mess.LOGIN_FAIL_INFO)

    const [account, setAccount] = useState({
        username: "",
        password: ""
    })

    const dispatch = useDispatch();

    const HandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        setAccount({
            ...account,
            [name]: value
        })
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (account.username !== "" && account.password !== "") {
            if (account.username.search('@gmail.com') !== -1) {
                if (account.username === "khoikevin2903@gmail.com" && account.password === "27100401") {
                    dispatch(closeShowModal());
                    dispatch(LoginActive());
                }
                else {
                    setMess(Mess.LOGIN_FAIL_PASS);
                    setCheck(false);
                }
            }
            else if (isNaN(account.username)) {
                setMess(Mess.LOGIN_FAIL_SDT);
                setCheck(false);
            }
        }
        else {
            setMess(Mess.LOGIN_FAIL_INFO);
            setCheck(false);
        }
    }

    return (
        <form>
            <label className="font-light ml-10 w-full flex align-items-center">
                <span className="flex items-center text-2xl font-normal"> Email / SĐT</span>
                <input type="text" className="border border-gray-400 text-2xl w-2/3 ml-10 pl-4 py-4 font-normal rounded-lg" placeholder="Nhập email hoặc Số điện thoại"
                    name="username"
                    value={account.username}
                    onChange={HandleChange}
                />
            </label>
            <label className="font-light ml-10 w-full flex align-items-center mt-8 relative">
                <span className="flex items-center pr-1 text-2xl font-normal"> Mật khẩu</span>
                <input type="password" className="border border-gray-400 text-2xl w-2/3 ml-16 pl-4 py-4 font-normal rounded-lg" placeholder="Mật khẩu từ 6 đến 32 ký tự"
                    name="password"
                    value={account.password}
                    onChange={HandleChange}
                />
            </label>
            {!check && <p className="text-lg ml-56 pl-0 text-xl font-normal text-red-400">{mess}</p>}
            <p className="text-lg ml-56 pl-0 text-2xl font-normal">Quên mật khẩu? nhấn vào <span className="text-blue-700 underline cursor-pointer">đây</span></p>
            <ul className="absolute right-0 mr-32 mt-4 bg-white p-4 w-5/12 pl-12">
                <button type="submit" className="p-3 bg-yellow-500 text-black text-2xl flex justify-center mb-4 rounded-lg hover:bg-yellow-600 w-full"
                    onClick={HandleSubmit}
                >
                    <span className="text-white">Đăng nhập</span>
                </button>
                <li className="text-white bg-blue-700 text-2xl flex items-center mb-4 rounded-lg hover:bg-blue-700 p-3">
                    <i className="fab fa-facebook-f text-3xl border-r w-1/6 flex justify-center"></i>
                    <span className="ml-20">Đăng nhập bằng Facebook</span>
                </li>
                <li className="text-white bg-red-600 text-2xl flex items-center mb-4 rounded-lg hover:bg-red-600 p-3">
                    <i className="fab fa-google-plus-g text-3xl border-r w-1/6 flex justify-center"></i>
                    <span className="ml-20">Đăng nhập bằng Google</span>
                </li>
                <li className="text-white bg-blue-600 text-2xl flex items-center rounded-lg hover:bg-blue-600 p-3">
                    <i className="fab fa-google-plus-g text-3xl border-r w-1/6 flex justify-center"></i>
                    <span className="ml-20">Đăng nhập bằng Zalo</span>
                </li>
            </ul>
        </form>
    );
}

export default LoginForm;