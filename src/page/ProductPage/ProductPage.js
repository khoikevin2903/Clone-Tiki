import React, { useState, useRef, useEffect } from 'react';
import HeaderApp from './../../components/Header/index';
import './ProductPage.scss';
import Clock from './../../components/Clock/index';
import { useDispatch } from 'react-redux';
import { onAddToCart } from './../../reducers/cart';
import { openMessageAddCart } from './../../reducers/MessageAddCart';
import * as firebase from 'firebase';
import { formatCurrency } from './../../components/FormatMoney/FormatMoney';

function ProductPage({ history, location, match }) {

    const [product, setProduct] = useState({});

    useEffect(() => {

        const fetchData = () => {
            const db = new Promise((a, b) => {
                var dbRef = firebase.database().ref().child(`${match.url.split('/', 2).join('')}/${match.params.id}`);
                dbRef.on('value', snap => a(snap.val()));
            })
            return db;
        }

        fetchData().then(res => setProduct(res));
    }, [match.params.id, match.url])

    const ref = useRef();

    function scroll(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    const dispatch = useDispatch();

    const [amount, setAmout] = useState(1);

    const incAmout = () => {
        setAmout(amount + 1)
    }

    const decAmout = () => {
        if (amount > 1) {
            setAmout(amount - 1)
        }
    }

    const addToCart = (product, amount) => {
        scroll(ref);
        dispatch(onAddToCart({ ...product, amount: amount }));
        dispatch(openMessageAddCart());
    }

    return (
        <div className="bg-gray-200 product" ref={ref}>
            <HeaderApp hoverMenu={true} />
            <div className="container flex w-full">
                <div className="w-5/12  bg-white">
                    <div className="mt-10 flex w-full py-6 px-4">
                        <div className="inline-block py-6 px-2 cursor-pointer">
                            <img src={product.img} alt="" className="h-36 w-32 border-2 border-blue-800 rounded-lg py-4 px-2" />
                        </div>
                        <div className="inline-block relative pb-20">
                            <div className="text-white flex px-2 py-1 items-center justify-center freeship" >
                                <img src="https://salt.tikicdn.com/ts/talaria/88/95/a7/b408d46a7f7d2f8f65a0dc2ded5fd86d.png" alt=""
                                    className="h-8 w-8" />
                                <span className="font-black ml-2">Freeship</span>
                            </div>
                            <div className="ml-32 mt-4 flex px-1 cursor-pointer py-10 items-center justify-center border-2 border-blue-200">
                                <img src={product.img} alt="" className="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-7/12 border-l-2 border-blue-100  bg-white">
                    <div className="p-4 border-b mr-0">
                        <div className="flex pl-4">
                            <img src="https://salt.tikicdn.com/ts/upload/35/1f/42/881848473f9a789fc562d1a9cdac8ca2.png" alt=""
                                width={100} className="pr-4 border-r border-blue-400 cursor-pointer " />
                            <span className="flex items-end text-3xl pl-4 opacity-75">{product.name}</span>
                        </div>
                        <div style={{ color: '#bcd809' }} className="pl-4 mt-4">
                            <i className="fas fa-star text-2xl"></i>
                            <i className="fas fa-star text-2xl"></i>
                            <i className="fas fa-star text-2xl"></i>
                            <i className="fas fa-star text-2xl"></i>
                            <i className="fas fa-star-half-alt text-2xl"></i>
                            <span className="text-blue-600 text-xl ml-4">(Xem 3 đánh giá)</span>
                        </div>
                    </div>
                    <div className="px-4 pt-2 pb-4 flex items-center">
                        <div className="p-2 w-2/3">
                            <div>
                                <div className="bg-gray-200 p-4 flex mr-4 rounded-lg">
                                    <img src="https://salt.tikicdn.com/ts/upload/cd/74/0a/862aa1925b1d4c8b837c544e40e5d4cb.png"
                                        alt="" width={30} className="" />
                                    <span className="flex flex-wrap text-xl" style={{ color: 'green' }}>
                                        <p className="pr-1 pl-4 font-semibold">
                                            Miễn phí giao tiêu chuẩn (tối đa 30k)
                                        </p> cho đơn hàng từ 249k
                                    </span>
                                </div>
                                <div className="mt-4 mr-4">
                                    <p className="text-red-600 text-3xl font-bold">{product.salePrice ? formatCurrency(product.salePrice) : ''} <span className="underline"> đ</span></p>
                                    <p className="text-xl text-gray-500 mt-4">Tiết kiệm: {product.salePrice ? formatCurrency(product.price - product.salePrice) : ''}</p>
                                    <p className="text-xl text-gray-500 mt-2">Giá thị trường: {product.price ? formatCurrency(product.price) : ''}</p>
                                    <div className="flex items-center text-xl mt-8">
                                        <p className="pr-4">Khuyến mãi kết thúc sau <span className="text-2xl font-bold">{product.duration}</span> ngày </p>
                                        <div className="text-xl font-bold">
                                            <Clock />
                                        </div>
                                    </div>
                                    <div className="flex mt-2 pb-4 border-b">
                                        <span className="w-1/6 text-red-500 text-xl">Vừa mở bán</span>
                                        <div className="w-5/6 flex item-center  relative">
                                            <div className=" bg-gray-300 flex rounded-full w-full items-center">
                                                <div className="rounded-full absolute w-full bg-red pt-4"
                                                    style={{
                                                        backgroundColor: 'red',
                                                        width: `${product.sold / 10 * 100}%`,
                                                        zIndex: '999',
                                                        borderRadius: '8px 0 0 8px'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center items-center">
                                <div className="mr-10">
                                    <p>Số lượng: </p>
                                    <div className="flex mt-2 font-bold text-xl">
                                        <p className="px-4 py-2 border cursor-pointer" onClick={decAmout}>-</p>
                                        <p className="px-4 py-2 border cursor-pointer">{amount}</p>
                                        <p className="px-4 py-2 border cursor-pointer" onClick={incAmout}>+</p>
                                    </div>
                                </div>
                                <button className="mt-4 w-1/2 text-xl font-bold py-3 text-white flex justify-center items-center bg-red-600 rounded-lg hover:opacity-75"
                                    onClick={() => addToCart(product, amount)}>
                                    <i className="fas fa-cart-plus mr-4 text-2xl"></i>
                                    CHỌN MUA
                                </button>
                                <i className="far fa-heart text-red-500 text-6xl ml-10 mr-2 mt-4"></i>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div className="px-2 py-4 border boder-gray-300">
                                <div className="flex items-center">
                                    <i className="fas fa-store-alt w-1/6 text-3xl text-yellow-600"></i>
                                    <div className="text-xl">
                                        <p className="text-blue-500 font-semibold">Grasshoper</p>
                                        <p className="font-normal">Cam kết chính hiệu 100%</p>
                                    </div>
                                </div>
                                <button className="mt-4 flex justify-center items-center bg-blue-600 w-full py-1 rounded-lg text-white py-2">Xem shop</button>
                                <div className="mt-4 flex items-center">
                                    <i className="fab fa-bitcoin text-yellow-500 text-4xl w-1/6"></i>
                                    <div>
                                        <p className="text-xl font-semibold">Tiki hoàn tiền 111%</p>
                                        <p className="text-xl font-normal">Nếu phát hiện hàng giả</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 flex justify-center items-center">
                                <button className="text-white bg-blue-700 font-bold px-4 py-2 rounded-lg">
                                    <i className="fas fa-thumbs-up ">
                                    </i> Like 12
                                </button>
                                <button className="px-3 py-2 bg-blue-700 font-bold rounded-lg text-white ml-2">
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;