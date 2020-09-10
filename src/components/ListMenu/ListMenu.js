import React from 'react';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import SlideSale from './MainProductSale/SlideSale';
import ProductSale from './RightProductSale/ProductSale';
import ItemSale from './MainProductSale/ItemSale';
import BottomProduct from './BottomProduct/BotProduct';
// import PropTypes from 'prop-types';

// ListMenu.propTypes = {

// };

function ListMenu(props) {
    return (
        <div className="listMenu w-full mx-auto" >
            <div className="w-full flex">
                <div className="w-1/5">
                    <NavigationMenu />
                </div>
                <div className="w-1/2">
                    <SlideSale />
                    <ItemSale />
                </div>
                <ProductSale />
            </div>
            <BottomProduct />
        </div>

    );
}

export default ListMenu;