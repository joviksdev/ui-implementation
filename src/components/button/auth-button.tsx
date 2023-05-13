import React from 'react';
import styled from 'styled-components';

const AuthButton = () => {
	return (
		<Container>
			<button>Login in</button>
			<button className='border-solid border-1 px-4 py-3 border-[rgba(255, 255, 255, 0.05)]'>
				Sign up
			</button>
		</Container>
	);
};

const Container = styled('div')({
	display: 'flex',
	alignItems: 'center',
	gap: '30px',
});
export default AuthButton;
