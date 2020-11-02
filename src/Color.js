import React from 'react';
import { useState } from 'react';
import { Copy } from './Copy';

export const Color = ({ color }) => {
	const [copy, setCopy] = useState(false);
	const [copyText, setCopyText] = useState('Copy');
	const handleCopy = () => {
		navigator.clipboard.writeText(color);
		setCopyText('Copied');
		setCopy(true);
	};
	const handleMouseLeave = () => {
		setCopy(false);
		setCopyText('copy');
	};
	return (
		<>
			<div
				style={{
					backgroundColor: color,
					width: '150px',
					height: '150px',
					padding: '10px',
					margin: '10px',
					borderRadius: '5px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						fontSize: '20px',
						height: '100%',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<p style={{ margin: '0px', color: 'white' }}>{color}</p>

						<img
							src='https://img.icons8.com/dotty/80/000000/clipboard.png'
							alt='copy'
							style={{
								width: '40px',
								height: '40px',
								cursor: 'pointer',
							}}
							onClick={handleCopy}
							onMouseEnter={() => setCopy(true)}
							onMouseLeave={handleMouseLeave}
						/>
						{copy && <Copy text={copyText} />}
					</div>
				</div>
			</div>
		</>
	);
};
