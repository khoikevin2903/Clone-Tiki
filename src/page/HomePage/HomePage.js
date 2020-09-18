import React from 'react';
import ListMenu from './../../components/ListMenu/ListMenu';
import ShockPrice from './../../components/SockPrice/SockPrice';
import BranchCare from './../../components/BranchCare/Branch';
import JustForYou from './../../components/JustForYou/JustForYou';
import HeaderApp from './../../components/Header/index'; 
import HotSearch from '../../components/hotSearch/HotSearch';

function HomePage(props) {

    return (
        <div className="bg-gray-200 w-full relative">
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
            <div className="fixed cursor-pointer" style={{top: "230px" , left: "50px"}}>
                <img src="https://salt.tikicdn.com/cache/w150/ts/banner/93/4e/3b/3729318ad9c980ffcf326a88c2fd5bd3.png" alt="" width={70} className="" 
                />
            </div>
            <div className="fixed cursor-pointer" style={{top: "230px", right: "60px"}}>
                <img src="https://salt.tikicdn.com/cache/w150/ts/banner/93/4e/3b/3729318ad9c980ffcf326a88c2fd5bd3.png" alt="" width={70} className="" 
                />
            </div>
        </div>

    );
}

export default HomePage;