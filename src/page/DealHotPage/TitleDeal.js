import React from 'react';
import { useState } from 'react';
import ClassNames from 'classnames';



function TitleDeal(props) {

    const [active, setActive] = useState(0);

    const HandleActive = (number) => {
        setActive(number);
    }

    return (
        <div className="flex border-b border-gray-200">
            <div className="w-1/4 flex justify-center item-center cursor-pointer hover:text-blue-300 titleDeal">
                <span
                    className={ClassNames(
                        'pt-12 pb-8 px-16 font-normal text-3xl opacity-50',
                        {
                            'border-b-4 border-blue-500 text-blue-600 opacity-100 transition-all': active === 0
                        }
                    )}
                    onClick={() => HandleActive(0)}>
                    ĐANG BÁN
                                </span>
            </div>
            <div className="w-1/4 flex justify-center item-center cursor-pointer hover:text-blue-300">
                <span
                    className={ClassNames(
                        'pt-12 pb-8 px-16 font-normal text-3xl opacity-50',
                        {
                            'border-b-4 border-blue-500 text-blue-600 opacity-100': active === 1
                        }
                    )}
                    onClick={() => HandleActive(1)}>
                    SẮP BÁN
                                </span>
            </div>
            <div className="w-1/4 flex justify-center item-center cursor-pointer hover:text-blue-300">
                <span
                    className={ClassNames(
                        'pt-12 pb-8 px-16 font-normal text-3xl opacity-50',
                        {
                            'border-b-4 border-blue-500 text-blue-600 opacity-100': active === 2 
                        }
                    )}
                    onClick={() => HandleActive(2)}>
                    ĐANG THEO DÕI
                                </span>
            </div>
            <div className="w-1/4 flex justify-center item-center cursor-pointer hover:text-blue-300">
                <span
                    className={ClassNames(
                        'pt-12 pb-8 px-16 font-normal text-3xl opacity-50',
                        {
                            'border-b-4 border-blue-500 text-blue-600 opacity-100': active === 3
                        }
                    )}
                    onClick={() => HandleActive(3)}>
                    CHÁY HÀNG
                                </span>
            </div>
        </div>
    );
}

export default TitleDeal;