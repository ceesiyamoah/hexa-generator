import React from 'react';

const headerStyle = {
	fontSize: '50px',
	textAlign: 'center',
	paddingTop: '40px',
};

export const Header = ({ text }) => {
	return (
		<>
			<h1 style={headerStyle}>{text}</h1>
		</>
	);
};
