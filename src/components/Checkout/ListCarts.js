import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { formatCurrency } from './../FormatMoney/FormatMoney';
import { increaseAmount, reductionAmount } from './../../reducers/cart';
//import {fetchDataUser} from './../../reducers/UserInfo';

ListCarts.propTypes = {
    carts: PropTypes.array,
};

function ListCarts(props) {

    const dispatch = useDispatch();

    const carts = useSelector(state => state.Carts);

    //const user = useSelector(state => state.User);

    const incAmout = (index) => {
        dispatch(increaseAmount(index))
    }

    const decAmout = (index) => {
        dispatch(reductionAmount(index))
    }

    const elm = carts.map((cart, index) => {
        return (
            <div className="flex p-6" key={index}>
                <img src={cart.img} alt="" className="h-56 py-4 w-1/6" />
                <div className="ml-4 w-1/2 flex flex-col pt-4">
                    <p className="text-2xl flex flex-wrap">{cart.name}</p>
                    <p className="text-xl mt-6">Cung cấp bởi <span className="text-blue-400">The Galaxy Store</span></p>
                    <div className="flex text-blue-400 mt-6 text-xl">
                        <p>Xóa</p>
                        <p className="ml-6">Để dành mua sau</p>
                    </div>
                </div>
                <div className="ml-10 flex justify-end w-1/3 pt-4">
                    <div className="flex flex-col items-end mr-4">
                        <p className="text-2xl font-bold">{formatCurrency(cart.salePrice)}đ</p>
                        <div className="flex font-medium mt-2">
                            <p className="text-xl text-gray-600 line-through pr-3 border-r py-0 border-red-600">{formatCurrency(cart.price)}đ</p>
                            <p className="text-xl pl-3">{cart.percent}%</p>
                        </div>
                    </div>
                    <div className="flex font-bold text-xl ml-4 mb-2 mt-2 pb-40 mr-2">
                        <p className="px-3 py-1 border cursor-pointer flex items-center" onClick={() => decAmout(index)}>-</p>
                        <p className="px-3 py-1 border cursor-pointer flex items-center">{cart.amount}</p>
                        <p className="px-3 py-1 border cursor-pointer flex items-center" onClick={() => incAmout(index)}>+</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="w-3/4 bg-white rounded-lg">
            {elm}
        </div>

    );
}

export default ListCarts;