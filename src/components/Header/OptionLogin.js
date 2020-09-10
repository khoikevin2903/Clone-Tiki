import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch } from 'react-redux';
import { openShowModal } from './../../reducers/showModal';
import { onLogin, onSignup } from './../../reducers/loginActive';

OptionLogin.propTypes = {
    LoginSuccess: PropTypes.bool,
};

function OptionLogin(props) {

    const dispatch = useDispatch();

    //const LoginSuccess = useSelector(state => state.LoginSuccess);

    const HandleShowModal = (value) => {
        dispatch(openShowModal());
        if (value === 0) {
            dispatch(onLogin());
        }
        if (value === 1) dispatch(onSignup());
    }

    return (
        <ul className="absolute mt-6 bg-white p-4 shadow-xl" style={{ zIndex: '1' }}>
            <li className="p-3 bg-yellow-500 text-black text-2xl flex justify-center mb-3 rounded-lg hover:bg-yellow-600"
                onClick={() => HandleShowModal(0)}>
                <span>Đăng nhập</span>
            </li>
            <li className="p-3 bg-yellow-500 text-black items-center text-2xl flex justify-center mb-3 rounded-lg hover:bg-yellow-600"
                onClick={() => HandleShowModal(1)}>
                <span> Tạo tài khoản</span>
            </li>
            <li className="text-white bg-blue-700 text-2xl p-2 items-center flex justify-center mb-3 rounded-lg hover:bg-blue-700">
                <i className="fab fa-facebook-f p-2 text-3xl border-r w-1/10 ml-0"></i>
                <span className="p-2 ml-2">Đăng nhập bằng Facebook</span>
            </li>
            <li className="text-white bg-red-600 p-2 items-center text-2xl flex justify- mb-3 rounded-lg hover:bg-red-600">
                <i className="fab fa-google-plus-g text-3xl mr-2 border-r py-2"></i>
                <span className="ml-2">Đăng nhập bằng Google</span>
            </li>
            <li className="text-white bg-blue-600 p-2 items-center text-2xl flex justify- rounded-lg hover:bg-blue-600">
                <i className="fab fa-google-plus-g text-3xl mr-2 border-r py-2"></i>
                <span className="ml-2">Đăng nhập bằng Zalo</span>
            </li>
        </ul>
    );
}

export default OptionLogin;