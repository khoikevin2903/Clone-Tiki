import React from 'react';

const listItemSale = [
  'https://salt.tikicdn.com/cache/w292/ts/banner/cc/2e/ef/3380c4da8f4ec66e0384af0ebb198af7.jpg',
  'https://salt.tikicdn.com/cache/w292/ts/banner/69/1f/bd/139f689acce4a5c4a78a4382efedc3ca.jpg'
]

function ItemSale(props) {
    const elmList = listItemSale.map((item,index) => {
        return (
            <div className="cursor-pointer w-1/2 inline-block hover:opacity-75 hover:delay-100" key={index}>
                <img src={item} alt="" /> 
            </div>
        )
    })
    return (
        <div>
            {elmList}
        </div>
    );
}

export default ItemSale;