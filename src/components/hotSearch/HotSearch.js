import React from 'react';
import './hotSearch.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import ClassNames from 'classnames';
import * as firebase from 'firebase';

const COLOR_LIST = ['bg-indigo-400', 'bg-indigo-700', 'bg-teal-600', 'bg-teal-800','bg-green-700','bg-green-400', 'bg-yellow-500', 'bg-orange-600', 'bg-red-600','bg-gray-500'];

function HotSerach(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        //FetchData().then(rs => setData(rs));
        FetchData().then(rs => setData(rs));
    }, []);

    function FetchData() {
        // const db = await callAPI('hotSearch', 'GET', null).then(res => res.data);
        const db = new Promise((a,b) => {
            var dbRef = firebase.database().ref().child("hotSearch");
            dbRef.on('value', snap => a(snap.val()));
        })
        return db;
    }

    const elm = data.map((item, index) => {
        return (
            <div className={`text-white mx-12 rounded-lg cursor-pointer justify-center items-center flex py-4 px-0 ${COLOR_LIST[Math.trunc(Math.random() * COLOR_LIST.length)]}`}  key={index}>
                <span className="text-2xl flex flex-wrap justify-center items-center opacity-75">{item.name}</span>
            </div>
        )
    })

    const [change, setChange] = useState(0);

    const HandleChangePlus = (number) => {
        if (change < 0) {
            setChange(change + number);
        }
    }

    const HandleChangeMinus = (number) => {
        if (change > -2480) {
            setChange(change + number)
        }
    }

    return (
        <div className="hotSearch mt-4 relative">
            <div className="Hotdirection absolute text-5xl flex items-center text-white">
                <i className={ClassNames(
                    'fas fa-chevron-left icon_left opacity-50 hover:opacity-75 cursor-pointer',
                )}
                    onClick={() => HandleChangePlus(1240)}></i>
                <i className={ClassNames(
                    'fas fa-chevron-right icon_right opacity-50 hover:opacity-75 cursor-pointer',
                )} onClick={() => HandleChangeMinus(-1240)}></i>
            </div>
            <div className="hotSearch__ flex delay-100 px-6"
                style={{ marginLeft: change }}>
                {elm}
            </div>
        </div>
    );
}

export default HotSerach;