'use client';
import React from 'react';
import styled from 'styled-components';

interface Props {
	message: string;
}

const Alert: React.FC<Props> = ({ message }) => {
	return (
		<Container>
			<p>{message}</p>
		</Container>
	);
};

const Container = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export default Alert;
