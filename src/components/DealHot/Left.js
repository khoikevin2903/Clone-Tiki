import React from 'react';
import { useEffect } from 'react';
import callAPI from './../../util/callApi';
import { useState } from 'react';
import * as firebase from 'firebase';

function Left(props) {

    const [LeftMenu, setLetMenu] = useState([]);

    useEffect(() => {
        FetchData().then(rs => setLetMenu(rs));
    }, []);

    function FetchData() {
        const db = new Promise((a,b)=> {
            var dbRef = firebase.database().ref().child('branch-care');
            dbRef.on('value', snap => a(snap.val()));
        })
        return db;
    }

    const elmLeftMenu = LeftMenu.map((item, index) => {
        return (
            <div className="flex items-center py-2" key={index}>
                <input type="checkbox" name="" className="h-8 w-8 my-0" />
                <span className="text-xl ml-6 mt-2">{item.title}</span>
            </div>
        )
    })
    return (
        <div className="mt-4 pl-6">
            {elmLeftMenu}            
        </div>
    );
}

export default Left;