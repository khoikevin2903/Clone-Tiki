import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ROUTES from './routes';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ShowModal from './components/ShowModal/ShowModal';
import Footer from './components/Footer/Footer';
import history from './components/History/history';
import Account from './page/Account/Account';
import { useEffect } from 'react';
import { fetchInfoUser } from './reducers/InfoUser';
import {fetchSockPrice,SaveProduct} from './reducers/shockPriceProduct';
import CheckOutPage from './page/CheckOutPage/CheckOutPage';


App.propTypes = {
	showModal: PropTypes.bool,
};

function App() {

	const Routes = ROUTES;

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchInfoUser('khoikevin'));
		dispatch(fetchSockPrice('shock-price-product'));
	}, [dispatch])

	const loginSuccsess = useSelector(state => state.LoginSuccess);

	const products = useSelector(state => state.SockPrice);
	dispatch(SaveProduct(products));

	if (loginSuccsess) {
		Routes.push(
			{
				path: '/checkout',
				exact: false,
				main: CheckOutPage
			},
			{
				path: '/account/:name',
				exact: false,
				main: Account
			},
			{
				path: '/account/address:name',
				exact: false,
				main: Account
			}

		);
	}

	const showModal = useSelector(state => state.ShowModal);
	return (
		<Router history={history}>
			<div style={{ fontFamily: 'sans-serif' }}>
				<div className="Tiki-App">
					<div className="w-full">
						{showContentMenus(ROUTES)}
					</div>
					<div className="w-full bg-gray-200">
						<Footer />
					</div>
				</div>
				{showModal && <ShowModal />}
			</div>
		</Router>
	);
}

const showContentMenus = (routes) => {
	var result = null;
	if (routes.length > 0) {
		result = routes.map((route, index) => {
			return (<Route
				key={index}
				path={route.path}
				exact={route.exact}
				render={props => <route.main {...props} />}
			/>)

		})
	}
	return <Switch>{result}</Switch>
}

export default App;
