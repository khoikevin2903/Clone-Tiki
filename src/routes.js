import HomePage from './page/HomePage/HomePage';
import DealHot from './page/DealHotPage/DealHotPage';
import ProductPage from './page/ProductPage/ProductPage';

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
        path: '/shock-price-product/:id',
        exact: true,
        main: ProductPage
    },
    {
        path: '/Just-For-You/:id',
        exact: true,
        main: ProductPage
    }
]

export default ROUTES;