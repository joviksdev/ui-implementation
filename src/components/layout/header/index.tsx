'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Container from '../container';
import HeaderNav from '../nav/header-nav';
import AuthButton from '@/components/button/auth-button';

const Header = () => {
	return (
		<Container>
			<Main className='dflex align-center space-between'>
				<div className='flex align-center gap-2'>
					<Image
						width={20}
						height={20}
						alt={'App logo'}
						src={require('/public/images/app-icon.png')}
					/>
					<h3 className='font-bold'>Winden</h3>
				</div>
				<HeaderNav />
				<AuthButton />
			</Main>
		</Container>
	);
};

const Main = styled('header')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '15px 0px',
});

export default Header;
