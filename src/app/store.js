import {configureStore} from '@reduxjs/toolkit';
import ShowModal from './../reducers/showModal';
import LoginActive from './../reducers/loginActive';
import SockPrice from './../reducers/shockPriceProduct';
import Carts from './../reducers/cart';
import MessAdd from './../reducers/MessageAddCart';
import CartsChecked from './../reducers/cartChecked';
import User from '../reducers/UserInfo';
import LoginSuccess from './../reducers/LoginSuccess';
import InfoActive from './../reducers/InfoActive';
import InfoUser from './../reducers/InfoUser';
import LimitPage from './../reducers/LimitPage';

const rootReducer = {
    ShowModal: ShowModal,
    LoginActive: LoginActive,
    SockPrice: SockPrice,
    Carts: Carts,
    MessAdd: MessAdd,
    CartsChecked: CartsChecked,
    User: User,
    LoginSuccess: LoginSuccess,
    InfoActive: InfoActive,
    InfoUser: InfoUser,
    LimitPage: LimitPage,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;

