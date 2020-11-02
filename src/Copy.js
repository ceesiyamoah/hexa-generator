import React from 'react';
const styles = {
	position: 'relative',
	left: '94%',
	bottom: '30%',
	borderRadius: '1px',
	height: '2em',
	fontSize: '15px',
	padding: '0 5px 0 5px',
	opacity: '.8',
	backgroundColor: 'grey',
};

export const Copy = ({ text }) => {
	return <div style={styles}>{text}</div>;
};
