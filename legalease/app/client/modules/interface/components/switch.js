import React,{ Component } from 'react';

const Switch = ({keys, value}) => {
	const state = keys;
	return (state[value] || null);
};

export default Switch;
