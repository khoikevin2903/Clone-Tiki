import React from 'react';
import './JustForYou.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {formatCurrency} from './../FormatMoney/FormatMoney';
import * as firebase from 'firebase';


function JustForYou(props) {

    const [data, setData] = useState([]);

    const [count, setCount] = useState(10);

    useEffect(() => {
        FetchData().then(rs => HandleCount(rs));
    }, [count]);

    const HandleCount = (rs) => {
        rs = rs.filter(item => item.id < count);
        setData(rs);
    }

    function FetchData() {
        const db = new Promise((a,b) => {
            var dbRef = firebase.database().ref().child('Just-For-You');
            dbRef.on('value', snap => a(snap.val()));
        })
        return db;
    }

    const elm = data.map((item, index) => {
        return (
            <Link to={'/Just-For-You/'+item.id} className="w-1/5 mt-0 pt-8 pb-2 px-4 cursor-pointer hover:no-underline hover:text-black Link" key={index}>
                <img className="ml-4" src={item.img} alt="" />
                <p className="ml-2 text-gray-600 mt-2 text-xl">{item.name}</p>
                <div className="mt-6 ml-2 items-center">
                    <div className="flex items-center">
                        <span className="font-bold text-2xl flex">{formatCurrency(item.salePrice)}<p className="underline ml-1"> đ</p></span>
                        <span className="opacity-50 ml-6 text-xl">-{item.percent}%</span>
                    </div>
                    <span className="opacity-50 line-through text-xl">{formatCurrency(item.price)}đ</span> 
                </div>
            </Link>
        )
    })

    return (
        <div className="w-full bg-white sock-price pt-6">
            <div className="list">
                <ul className="flex flex-wrap pb-10">
                    {elm}
                </ul>
            </div>
            <div className="flex justify-center pb-10 ">
                <button className="transition duration-500 hover:no-underline ease-in-out transform hover:-translate-y-1 hover:scale-110 py-2 px-24 hover:bg-blue-500 hover:text-white border border-blue-600 rounded-lg text-blue-400 text-2xl"
                        onClick={() => setCount(count + 10)}
                >
                    Xem thêm
                </button>
            </div>
        </div>
    );
}


export default JustForYou;