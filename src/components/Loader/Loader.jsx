import React from 'react';

const Loader = ({ loading }) => {
    return (
		<div className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-60 z-[999999] ${ loading ? 'flex' : 'hidden'}`}>
			<div className="animate-spin rounded-full border-t-4 border-white h-16 w-16"></div>
		</div>
    );
};

export default Loader;
