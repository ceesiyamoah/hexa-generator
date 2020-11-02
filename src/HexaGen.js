import React from 'react';
import { useState } from 'react';
import { Color } from './Color';
import { Header } from './Header';
import './App.css';

const Hexa = () => {
	const options = 'abcdef0123456789'.toUpperCase();

	let out = '';
	for (let i = 0; i < 6; i++) {
		out = out.concat(options[Math.floor(Math.random() * 16)]);
	}
	return `#${out}`;
};

export const HexaGen = () => {
	const [number, setNumber] = useState(0);
	const [colors, setColors] = useState([]);
	const handleGenerate = () => {
		if (number) {
			const newArr = [];
			for (let i = 0; i < number; i++) {
				newArr.push({ id: i, color: Hexa() });
			}
			setColors(newArr);
			setNumber('');
		}
	};
	return (
		<>
			<Header text='Hexa color generator' />
			<div style={{ textAlign: 'center' }}>
				<input
					type='number'
					style={{ fontSize: '20px' }}
					value={number}
					onChange={(e) => setNumber(e.target.value > 0 ? e.target.value : 0)}
				/>
				<button className='btn' onClick={handleGenerate}>
					Generate
				</button>
			</div>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					padding: '0 10%',
					justifyContent: 'space-around',
				}}
			>
				{colors.map(({ id, color }) => (
					<Color key={id} color={color} />
				))}
			</div>
		</>
	);
};
