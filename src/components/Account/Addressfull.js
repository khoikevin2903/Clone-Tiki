import React from 'react';

function Addressfull(props) {

	const { Arrays, name, width } = props;
	

	const elm = Arrays.map((arr, index) => {
		return <option value={arr} key={index}>{arr}</option>
	})

	const HandleChange = (event) => {
		
	}

	return (
		<div className={`inline-block relative font-thin ${width}`}>
			<select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 rounded leading-tight focus:outline-none focus:shadow-outline"
				name={name} value="" onChange={HandleChange}>
				{elm}
			</select>
			<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
				<svg className="fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
			</div>
		</div>
	);
}

export default Addressfull;