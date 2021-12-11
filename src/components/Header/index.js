import React, { useState, useEffect } from 'react';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import NavigationMenu from '../ListMenu/NavigationMenu/NavigationMenu';
import { closeMessageAddCart } from './../../reducers/MessageAddCart';
import { Link } from 'react-router-dom';
import OptionLogin from './OptionLogin';
import MyAccount from './MyAccount';


function Header(props) {

    // const cartsChecked = useSelector(state => state.CartsChecked);

    // const elm = cartsChecked.map((cart, index) => {
    //     return <img src={cart.img} alt="" className="mx-10" height={100} key={index} />
    // })

    const Logined = useSelector(state => state.LoginSuccess);

    const { hoverMenu } = props;

    const messAddToCart = useSelector(state => state.MessAdd);

    const [messAdd, setMessAdd] = useState(false);

    useEffect(() => {
        setMessAdd(messAddToCart);
    }, [messAddToCart])

    const carts = useSelector(state => state.Carts);

    const Amount = carts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
    }, 0);

    const dispatch = useDispatch();

    const HandleCloseMess = () => {
        dispatch(closeMessageAddCart());
        setMessAdd(false);
    }

    //if (cartsChecked === 0 ) console.log(0)

    return (
        <div className="">
            <div className="Banner_Header">
                <div className="Banner_Header__ "></div>
            </div>
            <div className="Promotion_Header">
                <div className="Promotion_Header__  w-4/5 mr-auto ml-auto flex text-white justify-end items-center">
                    <div className="flex ml-8 items-center">
                        <img
                            className="mr-2"
                            src="https://salt.tikicdn.com/ts/upload/42/f9/5e/7ccf8b09de0e051cc9054bd535f7b1a1.png"
                            alt="" width={18} height={18}
                        /> <span className="text-xl font-normal">Ticketbox</span>
                    </div>
                    <div className="flex ml-8 items-center">
                        <img
                            className="mr-2"
                            src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png"
                            alt="" width={18} height={18}
                        /> <span className="text-xl font-normal">Trợ lý Tiki</span>
                    </div>
                    <div className="flex ml-8 items-center">
                        <i className="fas fa-coins text-yellow-400 mr-2" />
                        <span className="text-xl font-normal">Ưu đãi đối tác</span>
                    </div>
                    <div className="flex ml-8 items-center">
                        <i className="fas fa-hotel text-yellow-400 mr-2" />
                        <span className="text-xl font-normal">Đặt khách sạn</span>
                    </div>
                    <div className="flex ml-8 items-center">
                        <i className="fas fa-plane text-yellow-400 mr-2" />
                        <span className="text-xl font-normal">Đặt vé máy bay</span>
                    </div>
                    <div className="flex ml-8 items-center">
                        <i className="fas fa-fire-alt text-yellow-400 mr-2" />
                        <span className="text-xl font-normal">Khuyến mãi hot</span>
                    </div>
                    <div className="flex ml-8 items-center">
                        <i className="fas fa-globe text-yellow-400 mr-2" />
                        <span className="text-xl font-normal">Hàng quốc tế</span>
                    </div>
                    <div className="flex ml-8 items-center">
                        <i className="fas fa-dollar-sign text-yellow-400 mr-2" />
                        <span className="text-xl font-normal">Bán hàng cùng Tiki</span>
                    </div>
                </div>
            </div>
            <div className="w-full bg-blue-400">
                <div className="Home_Header  w-4/5 mr-auto ml-auto ">
                    <div className="Home_Header__one flex items-center">
                        <img src="data:image/png;base64,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"
                            alt="" className="mr-4" />
                        <img src="https://salt.tikicdn.com/ts/banner/33/ba/89/54c02d2475983f93a024c0cd13f238e4.png" alt="" className="" />
                        <input type="text" name="" className="outline-none h-16 ml-4 w-1/3 pl-2 text-xl font-normal" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." >
                        </input>
                        <button className="outline-none text-gray-600 bg-gray-200 h-16 pl-4 pr-2 focus:border-none"><i className="fas fa-search p2-4 text-2xl" />
                            <span className="text-2xl font-normal pl-2">Tìm kiếm</span>
                        </button>
                        <div className="flex text-white ml-12 items-center font-xl">
                            <i className="fas fa-id-card-alt mr-4 text-4xl" />
                            <Link to="/account/notification" className="text-xl hover:no-underline hover:text-white active:no-underline active:text-white">Theo dõi <br /> đơn hàng</Link>
                        </div>
                        <div className="flex text-white ml-12 items-center font-xl">
                            <i className="fas fa-bell mr-4 text-4xl" />
                            <span className="text-xl">Thông báo<br /> của tôi</span>
                        </div>
                        <div className="user-login">
                            <div className="flex text-white ml-12 items-center font-xl relative">
                                <i className="fas fa-user-alt mr-4 text-4xl" />
                                <span className="text-xl">{Logined ? 'Chào Khôi' : 'Đăng nhập'}<br /> tài khoản</span>
                            </div>
                            <div id="triangle-up" className="absolute "></div>
                            {Logined ? <MyAccount /> : <OptionLogin />}
                        </div>
                        <div className="hover:text-white hover:no-underline flex text-white ml-12 items-center font-xl border-2 border-white py-2 px-4 rounded-lg relative">
                            <div id="triangle-up_" className={`absolute messAdd_ flex flex-col items-center justify-center ${messAdd ? '' : 'hidden'}`}></div>
                            <div className={`absolute shadow-2xl p-4 bg-white messAdd ${messAdd ? '' : 'hidden'}`} style={{ borderRadius: '8px 8px 8px 8px' }}>
                                <i className="fas fa-times absolute text-gray-700 text-2xl close" onClick={HandleCloseMess}></i>
                                <div className="flex items-center justify-center messAdd__ text-xl">
                                    <i className="fas fa-check-circle mr-2 bg-white" style={{
                                        color: '#12da2f'
                                    }}></i>
                                    <p className="text-black">Thêm vào giỏ hàng thành công!</p>
                                </div>
                                <Link to="/checkout" className="px-2 py-4 text-xl w-full flex justify-center items-center mt-4 hover:text-white hover:no-underline hover:opacity-75"
                                    style={{ backgroundColor: '#f33939', borderRadius: '8px 8px 8px 8px' }}
                                    onClick={HandleCloseMess}
                                >
                                    Xem giỏ hàng và thanh toán
                                </Link>
                            </div>
                            <Link to="/checkout" className="hover:text-white hover:no-underline focus:text-white focus:no-underline">
                                <i className="fas fa-shopping-cart mr-4 text-3xl" />
                                <span className="text-xl">Giỏ hàng</span>
                                <span className="ml-2 p-2 bg-yellow-500  text-black font-bold">{Amount}</span>
                            </Link>
                        </div>

                    </div>
                    <div className="Home_Header__two">
                        <div className="flex text-white items-center font-xl relative DanhMuc">
                            <i className="fas fa-bars mr-4 text-4xl" />
                            <div className="absolute navigation text-black hover:shadow-2xl">
                                {hoverMenu && <NavigationMenu />}
                            </div>
                            <span className="text-xl font-normal">DANH MỤC SẢN PHẨM</span>
                        </div>
                        <div className="flex text-red-500 ml-16 items-center font-xl">
                            <i className="fas fa-map-marker-alt mr-4 text-3xl p-2 rounded-full bg-white h-10 w-10 flex items-center justify-center" />
                            <span className="text-white text-xl">Bạn muốn giao hàng tới đâu</span>
                        </div>
                        <div className="flex text-white ml-16 items-center font-xl checked_ relative">
                            <i className="fas fa-angle-down mr-4 text-2xl"></i>
                            <span className="text-white text-xl">Sản phẩm bạn đã xem</span>
                            {/* <div id="triangle-up" className="absolute "></div>
                                <div className="productchecked flex absolute">
                                    <ul className="flex flex items-center pl-6 bg-white py-16">
                                        {elm}
                                    </ul>
                                </div> */}
                        </div>
                        <div className="flex text-gray-600 ml-16 items-center font-xl">
                            <img src="https://salt.tikicdn.com/ts/upload/35/1f/42/881848473f9a789fc562d1a9cdac8ca2.png" alt=""
                                className="p-2 mr-4 bg-white rounded-full rounded-full py-2 px-4 h-10" />
                            <span className="text-white text-xl">Giao nhanh <br /> miễn phí</span>
                        </div>
                        <div className="flex text-gray-600 ml-10 items-center font-xl">
                            <img src="https://www.tiendauroi.com/wp-content/uploads/2020/05/TikiNgon.png" alt=""
                                className="p-2 mr-4 bg-white rounded-full rounded-full py-2 px-4 h-10" />
                            <span className="text-white text-xl">Thực phẩm <br /> tươi sống</span>
                        </div>
                        <div className="flex text-yellow-500 ml-10 items-center font-xl">
                            <i className="fas fa-medal mr-4 text-3xl p-2 rounded-full bg-white h-10 w-10 flex items-center justify-center" />
                            <span className="text-white text-xl">Sản phẩm <br /> chính hiệu</span>
                        </div>
                        <div className="flex text-yellow-500 ml-10 items-center font-xl">
                            <i className="fas fa-exchange-alt mr-4 text-3xl p-2 rounded-full bg-white h-10 w-10 flex items-center justify-center" />
                            <span className="text-white text-xl">30 ngày <br /> đổi trả</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;