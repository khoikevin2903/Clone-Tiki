import React from 'react';

const image = [
    'https://salt.tikicdn.com/cache/w295/ts/banner/67/c5/74/825ff86fa6c1c60cfc97da6e6a0e8d0c.jpg',
    'https://salt.tikicdn.com/cache/w295/ts/banner/96/99/4f/7b96ed4d4f693d082b2dda594f0bba9d.jpg',
    'https://salt.tikicdn.com/cache/w295/ts/banner/89/ae/ac/920a3c9770d7ba6b3cea44275b5aaa32.jpg',
    'https://salt.tikicdn.com/cache/w295/ts/banner/12/33/b0/5365e638294f2cf4ad0236d205aaa7b5.jpg'
]

function BotProduct(props) {

    const elm = image.map((img, index) => {
        return (
            <li key={index} className="inline-block w-1/4 hover:bg-gray-300 cursor-pointer hover:opacity-75">
                <img src={img} alt=""/>
            </li>
        )
    })
    return (
        <ul className="w-full block mt-6">
            {elm}
        </ul>
    );
}

export default BotProduct;