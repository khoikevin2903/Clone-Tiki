import React from 'react';
import ListMenu from './../../components/ListMenu/ListMenu';
import ShockPrice from './../../components/SockPrice/SockPrice';
import BranchCare from './../../components/BranchCare/Branch';
import JustForYou from './../../components/JustForYou/JustForYou';
import HeaderApp from './../../components/Header/index'; 
import HotSearch from '../../components/hotSearch/HotSearch';

function HomePage(props) {

    return (
        <div className="bg-gray-200 w-full">
            <HeaderApp hoverMenu={false}/>
            <div className="container">
                <ListMenu />
                <ShockPrice />
                <div className="mt-16">
                    <span className="text-3xl">NGÀNH HÀNG QUAN TÂM</span>
                    <BranchCare />
                </div>
                <div className="mt-16">
                    <span className="text-3xl">TỪ KHÓA HOT</span>
                    <HotSearch />
                </div>
                <div className="mt-16">
                    <span className="text-3xl pb-4">DÀNH RIÊNG CHO BẠN</span>
                    <JustForYou />
                </div>
            </div>
        </div>

    );
}

export default HomePage;