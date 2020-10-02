import React from 'react';
import { useSelector } from 'react-redux';
import HeaderApp from './../../components/Header/index';
import ListCarts from '../../components/Checkout/ListCarts';
import TotalCarts from '../../components/Checkout/TotalCarts';


function CheckOutPage(props) {

    const carts = JSON.parse(localStorage.getItem('cart'));

    const Amounts = carts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
    }, 0);

    return (
        <div className="bg-gray-200">
            <HeaderApp hoverMenu={true} />
            <div className="container mt-6">
                <div className="flex items-center mb-2">
                    <span className="text-3xl ml-2">GIỎ HÀNG </span>
                    <span className="text-xl text-gray-600 ml-2">{`(${Amounts})`}</span>
                </div>
                <div className="flex relative">
                    <ListCarts />
                    <div className="sticky w-1/4 h-full">
                        <TotalCarts />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOutPage;