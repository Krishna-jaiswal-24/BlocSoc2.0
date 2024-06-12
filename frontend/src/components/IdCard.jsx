import React from 'react';
import Logo from '../assets/BlocSoc-Transparent.png';

const IdCard = () => {
	return (
		<div
			className="xl:w-1/4 xl:h-1/5 lg:w-1/2 lg:h-1/6 rounded-2xl bg-gradient-to-r from-[#D9D9D966] to-[rgba(217, 217, 217, 0.15)] flex items-center justify-between p-8 ">
			<div className="text-[#C7C7C0] font-semibold">
				<h1 className="text-lg">Krishna Jaiswal</h1>
				<p>1000-9999-0000</p>
				<h2>Vice President</h2>
			</div>
			<div>
				<div >
					<img src={Logo} alt="Logo" className="w-[10rem]"/>
				</div>
			</div>
		</div>
	);
};

export default IdCard;