import HomePage from './page/HomePage/HomePage';
import DealHot from './page/DealHotPage/DealHotPage';
import ProductPage from './page/ProductPage/ProductPage';
import CheckOutPage from './page/CheckOutPage/CheckOutPage';
import Account from './page/Account/Account';

const ROUTES = [
    {
        path: '/',
        exact: true,
        main: HomePage
    },
    {
        path: '/deal-hot',
        exact: true,
        main: DealHot
    },
    {
        path: '/product/:id',
        exact: false,
        main: ProductPage
    },
    {
        path: '/checkout',
        exact: false,
        main: CheckOutPage
    },
    {
        path: '/account',
        exact: false,
        main: Account
    }
]

export default ROUTES;