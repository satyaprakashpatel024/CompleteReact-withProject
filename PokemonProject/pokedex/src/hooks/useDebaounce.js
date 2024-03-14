/* eslint-disable no-unused-vars */
// import React from 'react'

const useDebaounce = (cb, delay = 2000) => {
	let timerId;
	return (...args) => {
		timerId = setTimeout(() => {
            cb(...args);
        },delay);
	};
};

export default useDebaounce;
