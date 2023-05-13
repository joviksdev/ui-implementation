import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
	children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
	return <Box>{children}</Box>;
};

const Box = styled('div')({
	maxWidth: '1200px',
	width: '100%',
	margin: 'auto',
});

export default Container;
