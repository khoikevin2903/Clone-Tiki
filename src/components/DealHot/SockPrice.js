import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import FetchData from '../FetchDataDealHot/index';
import ClassNames from 'classnames';
import {ChangeLimitPage} from './../../reducers/LimitPage';
import { useDispatch } from 'react-redux';



const width = "w-1/4";

function SockPrice(props) {

    const ref = useRef();

    const dispatch = useDispatch()

    function scroll(ref) {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }

    const [pageProduct, setPageProduct] = useState({
        limit: 20,
        page: 1,
    })

    useEffect(() => {
        dispatch(ChangeLimitPage(pageProduct))
    }, [dispatch, pageProduct])

    const HandlePagePlus = () => {
        if (pageProduct.page < 5) {
            scroll(ref);
            setPageProduct({
                ...pageProduct,
                page: pageProduct.page + 1
            })
            dispatch(ChangeLimitPage({
                ...pageProduct,
                page: pageProduct.page + 1
            }))
        }

    }

    const HandlePageMinus = () => {
        if (pageProduct.page > 1) {
            scroll(ref);
            setPageProduct({
                ...pageProduct,
                page: pageProduct.page - 1
            })
            dispatch(ChangeLimitPage({
                ...pageProduct,
                page: pageProduct.page - 1
            }))

        }
    }

    const HandlePage = (num) => {
        scroll(ref);
        setPageProduct({
            ...pageProduct,
            page: num
        })
        dispatch(ChangeLimitPage({
            ...pageProduct,
            page: num
        }))
    }

    return (
        <div className="" ref={ref}>
            <FetchData width={width} />
            <div className='flex items-center justify-center mt-10 right-0 mb-10 mr-4'>
                <div className={ClassNames(
                    'rounded-full h-12 w-12 flex items-center justify-center border border-gray-500 ml-2  cursor-pointer',
                    {
                        'hidden': pageProduct.page === 1
                    }
                )}>
                    <i className="fas fa-chevron-left " onClick={() => HandlePageMinus()}></i>
                </div>
                <div className={ClassNames(
                    'rounded-full h-12 w-12 flex items-center justify-center ml-6  cursor-pointer text-xl font-normal',
                    {
                        'bg-blue-400': pageProduct.page === 1
                    }
                )} onClick={() => HandlePage(1)}>1</div>
                <div className={ClassNames(
                    'rounded-full h-12 w-12 flex items-center justify-center mx-2  cursor-pointer text-xl font-normal',
                    {
                        'bg-blue-400': pageProduct.page === 2
                    }
                )} onClick={() => HandlePage(2)} >2</div>
                <div className={ClassNames(
                    'rounded-full h-12 w-12 flex items-center justify-center mx-2  cursor-pointer text-xl font-normal',
                    {
                        'bg-blue-400': pageProduct.page === 3
                    }
                )} onClick={() => HandlePage(3)}>3</div>
                <div className={ClassNames(
                    'rounded-full h-12 w-12 flex items-center justify-center mx-2  cursor-pointer text-xl font-normal',
                    {
                        'bg-blue-400': pageProduct.page === 4
                    }
                )} onClick={() => HandlePage(4)}>4</div>
                <div className={ClassNames(
                    'rounded-full h-12 w-12 flex items-center justify-center mx-2  cursor-pointer text-xl font-normal',
                    {
                        'bg-blue-400': pageProduct.page === 5
                    }
                )} onClick={() => HandlePage(5)}>5</div>

                <div className={ClassNames(
                    'rounded-full h-12 w-12 flex items-center justify-center border border-gray-500 ml-2  cursor-pointer',
                    {
                        'hidden': pageProduct.page === 5
                    }
                )}>
                    <i className="fas fa-chevron-right" onClick={() => HandlePagePlus()}>
                    </i>
                </div>
            </div>
        </div>
    );
}

export default SockPrice;