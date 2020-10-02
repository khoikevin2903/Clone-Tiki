import React from 'react';
import Left from '../../components/DealHot/Left';
import Head from '../../components/DealHot/Head';
import TitleDeal from './TitleDeal';
import SockPrice from '../../components/DealHot/SockPrice';
import HeaderApp from './../../components/Header/index'; 
import { Link } from 'react-router-dom';


function DealHotPage(props) {

    return (
        <div>
            <HeaderApp  hoverMenu={true}/>
            <div className="px-4 py-4 bg-gray-200" >
                <div className="relative flex items-center ml-40 pl-20">
                    <i className="fas fa-chevron-right absolute text-4xl text-gray-500"
                        style={{ left: '120px' }}
                    ></i>
                    <Link to="/" className="text-gray-500 mr-10 cursor-pointer text-2xl hover:text-gray-500 hover:no-underline">Trang chủ</Link>
                    <span className="cursor-pointer text-xl">Tiki Deal</span>
                </div>
            </div>
            <div className="container">
                <Head />
                <div className="flex">
                    <div className="w-1/5 pt-8">
                        <span className="text-2xl pl-6">Ngành Hàng Quan Tâm</span>
                        <Left />
                    </div>
                    <div className="border-l border-gray-200 w-4/5">
                        <TitleDeal />
                        <SockPrice />
                    </div>
                </div>
                <img src="//c0.anthill.vn/images/2020/07/09/05826dd5b72b6dd9c53e04e76e841217.jpg" alt=""/>
            </div>
        </div>
    );
}

export default DealHotPage;