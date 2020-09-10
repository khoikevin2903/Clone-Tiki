import React from 'react';
import './SockPrice.scss';
import FetchData from './../FetchDataDealHot/index';
import { Link } from 'react-router-dom';
import {ChangeLimitPage} from './../../reducers/LimitPage';
import { useDispatch } from 'react-redux';

const filters = {
    limit: 10,
    page: 1,
}

const width = "w-1/5";



function SockPrice(props) {

    const dispatch = useDispatch();
    dispatch(ChangeLimitPage(filters));

    return (
        <div className="w-full bg-white sock-price">
            <div className="pl-10 pt-10 title pb-8 border-b border-gray-400">
                <div className="flex">
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" alt="" />
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/flash.gif" alt="" className="h-12" />
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="" />
                </div>
            </div>
            <FetchData width={width}/>
            <div className="flex justify-center pb-10 pt-10 ">
                <Link to="/deal-hot" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 py-2 px-24 hover:bg-blue-500 hover:text-white border border-blue-600 rounded-lg text-blue-400 text-2xl">
                    Xem thêm
                </Link>
            </div>
        </div>
    );
}


export default SockPrice;