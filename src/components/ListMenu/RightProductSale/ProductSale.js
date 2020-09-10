import React from 'react';
// import PropTypes from 'prop-types';

// ProductSale.propTypes = {

// };

const listProductSale = [
    'https://salt.tikicdn.com/cache/w206/ts/banner/a8/8e/1a/8221338cf4530906012fb2067a3dfcc7.jpg',
    'https://salt.tikicdn.com/cache/w206/ts/banner/65/57/c5/a27dc8248a2ddea80c6c12a6c28e79de.jpg',
    'https://salt.tikicdn.com/cache/w206/ts/banner/50/14/f1/f39920fe68f34c1ce8dc4796cdc9dba1.jpg',
    'https://salt.tikicdn.com/cache/w206/ts/banner/3b/78/81/e29568bed44eed701103545221657eaa.jpg',
    'https://salt.tikicdn.com/cache/w206/ts/banner/9f/58/bd/5def9ca6bd1e8593d0551b76722e7f4c.jpg',
    'https://salt.tikicdn.com/cache/w206/ts/banner/59/75/d9/e21e73660546afd1c171588cb8c5e814.jpg'
]

function ProductSale(props) {

    const elmList = listProductSale.map((product, index) => {
        return (
            <img src={product} alt="" className="cursor-pointer w-1/2 hover:opacity-75 hover:delay-100" key={index} />
        )
    })
    return (
        <div className="w-4/12 mt-4 flex flex-wrap">
            {elmList}

        </div>
    );
}

export default ProductSale;