import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {formatCurrency} from './../FormatMoney/FormatMoney';

TotalCarts.propTypes = {
    carts: PropTypes.array,
};

TotalCarts.defaultPorps = {
    carts: []
}

function TotalCarts(props) {

    const carts = useSelector(state => state.Carts);

    const total = carts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount * currentValue.salePrice;
    }, 0);

    return (
        <div className="ml-10">
            <div className="bg-white rounded-lg">
                <div className="text-2xl p-4 flex justify-between border-b border-gray-400">
                    <span className="text-gray-600 font-thin">Tạm tính</span>
                    <span className="font-light">{formatCurrency(total)}đ</span>
                </div>
                <div className="p-4 flex justify-between">
                    <span className="text-gray-600 font-thin text-2xl ">Thành tiền</span>
                    <div>
                        <span className="font-light text-4xl text-red-600">{formatCurrency(total)}đ</span>
                        <p className="text-gray-500">(Đã bao gồm VAT nếu có)</p>
                    </div>
                </div>
            </div>
            <button className="transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 bg-red-500 text-white text-2xl font-bold py-4 w-full mt-4 rounded-lg">
                Tiến hành đặt hàng
            </button>
            <div className="bg-white mt-4 rounded-lg">
                <p className="ml-2 font-medium border-b border-gray-400 text-2xl p-3">Mã giảm giá / Quà tặng</p>
                <div className="p-3 text-gray-600 flex w-full justify-center">
                    <input type="text" className="w-3/4 p-2 pl-4 text-xl border" placeholder="Nhập ở đây..." style={{ borderRadius: '4px 0 0 4px' }} />
                    <button className="p-3 text-xl flex justify-center items-center bg-yellow-300" style={{ borderRadius: '0px 4px 4px 0px' }}>
                        Đồng ý
                </button>
                </div>
            </div>
        </div>
    );
}

export default TotalCarts;