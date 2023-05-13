import React from 'react';
import styled from 'styled-components';

const HeaderNav = () => {
	return (
		<NavContainer className=''>
			<li>Use Case</li>
			<li>Products</li>
			<li>Company</li>
			<li>Support</li>
		</NavContainer>
	);
};

const NavContainer = styled('nav')({
	display: 'flex',
	alignItems: 'center',
	gap: '20px',
	'& li': {
		listStyleType: 'none',
	},
});

export default HeaderNav;
