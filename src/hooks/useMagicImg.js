import { useState, useEffect } from 'react';
import { useRef } from 'react';


function randomURL(currentUrl) {
    
const LIST_SALE_IMG = [
    'https://salt.tikicdn.com/cache/w584/ts/banner/58/6e/f3/bf84705bfdfb562d53cca53aef392cd6.png'
    ,
    'https://salt.tikicdn.com/cache/w584/ts/banner/59/7f/bd/2f8ed5d3fff002dbc1bae4a2cc8e7b57.jpg'
    ,
    'https://salt.tikicdn.com/cache/w584/ts/banner/f8/20/5b/f57e8c4b7bf668bbf6345a6ca2369f68.jpg'
    ,
    'https://salt.tikicdn.com/cache/w584/ts/banner/f4/c7/b8/ce56edc169a66b3b548575e538ad2adc.jpg'
    ,
    'https://salt.tikicdn.com/cache/w584/ts/banner/7c/18/52/8f8e00d7364c320a5b8146dbd253be76.jpg'
    ,
    'https://salt.tikicdn.com/cache/w584/ts/banner/f5/29/81/3d06d118b136d658fadd7bf01fa3e3c5.jpg'
]
    const currentIndex = LIST_SALE_IMG.indexOf(currentUrl);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 6);
    }

    return LIST_SALE_IMG[newIndex];
}


function useMagicImg() {
    const [url, setUrl] = useState('https://salt.tikicdn.com/cache/w584/ts/banner/58/6e/f3/bf84705bfdfb562d53cca53aef392cd6.png');
    const urlRef = useRef('transparent');
    
    useEffect(() => {
        const ImgInterval = setInterval(() => {
            const newUrl = randomURL(urlRef.current);
            setUrl(newUrl);

            urlRef.current = newUrl;
        }, 3000)

        return () => {
            clearInterval(ImgInterval);
        }
    }, [])
    return url;
}

export default useMagicImg;