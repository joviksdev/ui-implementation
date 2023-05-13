import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	endIcon?: ReactNode;
	children: any;
}

const Button: React.FC<Props> = ({ children, endIcon, ...rest }) => {
	return (
		<ButtonContainer {...rest}>
			{children} {endIcon}
		</ButtonContainer>
	);
};

const ButtonContainer = styled('button')((props: any) => ({
	...props,
	display: 'flex',
	gap: '15px',
	alignItems: 'center',
}));

export default Button;
