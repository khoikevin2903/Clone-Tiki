import React from 'react';
import Clock from '../../components/Clock/index';
import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './FetchData.scss';
import { Link } from 'react-router-dom';
import { formatCurrency } from './../FormatMoney/FormatMoney';
import { onAddToCartChecked } from '../../reducers/cartChecked';
import { useDispatch, useSelector } from 'react-redux';

FetchData.propTypes = {
    width: PropTypes.string,
};

const products = JSON.parse(localStorage.getItem('products'));

function FetchData(props) {

    const { width } = props;

    const filters = useSelector(state => state.LimitPage);

    const { limit, page } = filters;
 
    const [data, setData] = useState(products);

    const dispatch = useDispatch();

    useEffect(() => {
        setData(products.filter(x => check(x) === true));
    }, [filters]);


    const check = (item) => {
         if (item.id <= limit * page && (limit * page - limit + 1) <= item.id) return true;
         return false;
        
    }

    const AddToCartChecked = (item) => {
        dispatch(onAddToCartChecked(item));
    }

    const elm = data.map((item, index) => {
        const sells = item.sold;
        let stringSell = '';
        if (sells === 0) stringSell = 'vừa mở bán'
        else if (sells === 10) stringSell = 'Hết hàng'
        else stringSell = `Đã bán ${sells}`;
        return (
            <Link to={'/product/' + item.id} className={ClassNames(
                'mt-0 Link pt-8 pb-2 px-4 inline cursor-pointer hover:no-underline hover:text-black', width)}
                key={index} onClick={() => AddToCartChecked(item)}>
                <img className="ml-4" src={item.img} alt="" />
                <p className="ml-2 opacity-75 text-xl">{item.name}</p>
                <div className="flex mt-6 ml-2 items-center">
                    <span className="font-bold text-2xl flex">{formatCurrency(item.salePrice)}<p className="underline ml-1"> đ</p></span>
                    <span className="opacity-50 line-through ml-6 text-xl">{formatCurrency(item.price)}đ</span>
                </div>
                <div className="flex items-center mt-4">
                    <div className="relative w-1/2 ml-0 pl-0 mr-2 flex">
                        <div className="absolute h-full flex text-base justify-center py-1 bg-orange-600 font-bold"
                            style={{
                                borderRadius: sells === 10 ? '10px 10px 10px 10px' : '10px 0px 0px 10px',
                                width: `${sells / 10 * 100}%`
                            }}
                        >

                        </div>
                        <div className="flex text-base justify-center w-full px-8 py-1 text-white bg-orange-300 font-bold rounded-full">
                            <p style={{ zIndex: '999' }}>{stringSell}</p>
                        </div>
                    </div>
                    <p className="mr-2 text-xl">{item.duration} ngày</p>
                    <Clock />
                </div>
            </Link>
        )
    })
    return (
        <div className="list">
            <ul className="flex flex-wrap pb-10" id="list-fetch">
                {elm}
            </ul>
        </div>
    );
}

export default FetchData;