import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { changeActive } from '../../reducers/InfoActive';
import { Link } from 'react-router-dom';

MyLish.propTypes = {
    InfoActive: PropTypes.number,
};

function MyLish(props) {

    const InfoActive = useSelector(state => state.InfoActive);

    const dispatch = useDispatch();

    const HandleActive = (value) => {
        dispatch(changeActive(value))
    }

    return (
        <ul>
            <li className="p-3 flex items-center">
                <img src="https://salt.tikicdn.com/desktop/img/avatar.png"
                    className="w-1/6 rounded-full mr-6"
                    alt="" />
                <span className="w-5/6">
                    <p className="opacity-75 text-xl">Tài khoản của</p>
                    <p className="text-2xl">Khôi Trần</p>
                </span>
            </li>
            <Link to="/account/edit" className={ClassNames(
                'p-3 flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 0
                }
            )} onClick={() => HandleActive(0)}>
                <i className="fas fa-user opacity-50 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 0
                    }
                )}>Thông tin tài khoản</p>
            </Link>
            <Link to="/account/notification" className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 1
                }
            )} onClick={() => HandleActive(1)}>
                <i className="fas fa-bell opacity-50 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 1
                    }
                )}>Thông báo của tôi</p>
            </Link>
            <Link to="/account/order" className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 2
                }
            )} onClick={() => HandleActive(2)}>
                <i className="fas fa-tasks opacity-50 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 2
                    }
                )}>Quản lý đơn hàng</p>
            </Link>
            <Link to="/account/address" className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 3
                }
            )} onClick={() => HandleActive(3)}>
                <i className="fas fa-map-marker-alt opacity-50 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 3
                    }
                )}>Số địa chỉ</p>
            </Link>
            <Link to="/account/paymentcard" className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 4
                }
            )} onClick={() => HandleActive(4)}>
                <i className="fas fa-window-restore opacity-50 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 4
                    }
                )}>Thông tin thanh toán</p>
            </Link>
            <Link to="/account/nhan-xet-san-pham-da-mua" className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 5
                }
            )} onClick={() => HandleActive(5)}>
                <i className="far fa-list-alt opacity-50 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 5
                    }
                )}>Nhận xét sản phẩm đã mua</p>
            </Link>
            <Link to="/account/danh-rieng-cho-ban" className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 6
                }
            )} onClick={() => HandleActive(6)}>
                <i className="fas fa-eye opacity-50 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 6
                    }
                )}>Sản phẩm bạn đã xem</p>
            </Link>
            <Link to="/account/wishlist" className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 7
                }
            )} onClick={() => HandleActive(7)}>
                <i className="fas fa-heart opacity-50 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 7
                    }
                )}>Sản phẩm yêu thích</p>
            </Link>
            <Link to="/account/save_for_later" className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 8
                }
            )} onClick={() => HandleActive(8)}>
                <i className="fas fa-shopping-cart opacity-50 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 8
                    }
                )}>Sản phẩm mua sau</p>
            </Link>
            <Link to="/account/review" className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 9
                }
            )} onClick={() => HandleActive(9)}>
                <i className="fas fa-star-half-alt opacity-50 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 9
                    }
                )}>Nhận xét của tôi</p>
            </Link>
            <Link to="/account/productquestion" className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 10
                }
            )} onClick={() => HandleActive(10)}>
                <i className="fas fa-question-circle opacity-50 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 10
                    }
                )}>Hỏi đáp</p>
            </Link>
            <li className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 11
                }
            )} onClick={() => HandleActive(11)}>
                <div className="w-1/6 flex justify-center mr-6">
                    <img src="https://mgg.vn/wp-content/uploads/2019/08/tiki-mien-phi-giao-hang.jpg"
                        alt="" style={{ height: '20px' }} />
                </div>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 11
                    }
                )}>Thông tin TikiNOW</p>
            </li>
            <li className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 12
                }
            )} onClick={() => HandleActive(12)}>
                <i className="fas fa-tags text-yellow-600 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 12
                    }
                )}>Mã giảm giá</p>
            </li>
            <li className={ClassNames(
                'p-3 no-underline flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 13
                }
            )} onClick={() => HandleActive(13)}>
                <i className="fab fa-bitcoin text-yellow-600 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 13
                    }
                )}>Quản lý Tiki Xu của tôi</p>
            </li>
            <li className={ClassNames(
                'p-3 no-underline  flex items-center cursor-pointer hover:bg-gray-300 hover:no-underline hover:text-black focus:no-underline',
                {
                    'bg-gray-300': InfoActive === 14
                }
            )} onClick={() => HandleActive(14)}>
                <i className="fas fa-book text-blue-400 w-1/6 mr-6 text-3xl flex justify-center"></i>
                <p className={ClassNames(
                    'text-xl font-medium opacity-75',
                    {
                        'opacity-100': InfoActive === 14
                    }
                )}>BookCare của tôi</p>
            </li>
        </ul>
    );
}

export default MyLish;