import React, { useState } from 'react';
import './Login.scss';
import { useSelector, useDispatch } from 'react-redux';
import * as constTiltle from '../../constants/LoginTypes';
import ClassNames from 'classnames';
import { onLogin, onSignup } from '../../reducers/loginActive';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function LoginPage(props) {

    const dispatch = useDispatch();

    const HandleActive = (value) => {
        if (value === 0) {
            dispatch(onLogin())
            setTilte(constTiltle.TITLELOGIN)
            setContent(constTiltle.CONTENTLOGIN)
        }
        else {
            dispatch(onSignup())
            setTilte(constTiltle.TITLESIGNUP)
            setContent(constTiltle.CONTENTSIGNUP)
        }
    }

    const [title, setTilte] = useState(constTiltle.TITLELOGIN);
    const [content, setContent] = useState(constTiltle.CONTENTLOGIN);
    const Active = useSelector(state => state.LoginActive);
    return (
        <div className="loginForm bg-gray-200 flex">
            <div className="w-2/5 rigthContent bg-white">
                <h1 className="text-5xl font-hairline">{title}</h1>
                <p className="mt-8 text-gray-500 text-2xl font-hairline">{content}</p>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/graphic-map.png"
                    alt=""
                    className="mt-32"
                />
            </div>
            <div className="w-3/5 bg-white m-6">
                <ul className="flex border-b border-gray-300">
                    <li className={ClassNames(
                        'cursor-pointer pt-6 pl-8 text-3xl font-light hover:bg-white ml-20 mr-10',
                        {
                            'border-b-4 border-blue-600 text-blue-300': Active === 0
                        }
                    )} onClick={() => HandleActive(0)}>
                        Đăng Nhập
                    </li>
                    <li className={ClassNames(
                        'cursor-pointer pt-6 pl-8 text-3xl font-light hover:bg-white',
                        {
                            'border-b-4 border-blue-600 text-blue-300': Active === 1
                        }
                    )} onClick={() => HandleActive(1)} >
                        Tạo tài khoản
                    </li>
                </ul>
                <div className="mt-16">
                    {Active === 0 ? <LoginForm /> : <SignupForm />}
                </div>
            </div>
        </div>
    );
}

export default LoginPage;