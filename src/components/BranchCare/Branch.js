import React from 'react';
import './branchCare.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import ClassNames from 'classnames';
import * as firebase from 'firebase';
// import PropTypes from 'prop-types';

// branchCare.propTypes = {

// };

function Branch(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        FetchData().then(rs => setData(rs));
    }, []);

    async function FetchData() {
        const db = await new Promise((a,b)=> {
            var dbRef = firebase.database().ref().child('branch-care');
            dbRef.on('value', snap => a(snap.val()));
        })
        return db;
    }

    const elm = data.map((item, index) => {
        return (
            <div className="bg-white  cursor-pointer mx-2 pt-2" key={index}>
                <div className="flex justify-center items-center py-4">
                    <img className="" src={item.img} alt="" />
                </div>
                <span className="opacity-75 flex flex-wrap justify-center pb-4 text-2xl">{item.title}</span>
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
        if (change > -2520) {
            setChange(change + number)
        }
    }

    return (
        <div className="branchCare mt-4 relative">
            <div className="direction absolute text-5xl flex items-center">
                <i className={ClassNames(
                    'fas fa-chevron-circle-left icon_left opacity-50 hover:opacity-75 cursor-pointer',
                    {
                        'cursor-default': change === 0
                    }
                )}
                    onClick={() => HandleChangePlus(1260)}></i>
                <i className={ClassNames(
                    'fas fa-chevron-circle-right icon_right opacity-50 hover:opacity-75 cursor-pointer',
                    {
                        'cursor-default': change === -2520
                    }

                )} onClick={() => HandleChangeMinus(-1260)}></i>
            </div>
            <div className="branchCare__ flex delay-100"
                style={{ marginLeft: change }}>
                {elm}
            </div>
        </div>
    );
}

export default Branch;