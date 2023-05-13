'use client';
import React from 'react';
import Container from '../layout/container';
import Button from '../button';
import Image from 'next/image';

const HomeHero = () => {
	return (
		<Container>
			<div className='min-h-[540px] flex items-center'>
				<div className='flex  gap-6 flex-col items-start '>
					<h2 className='text-[59px] leading-[59px]'>Business banking with</h2>
					<h1 className='text-[95px] leading-[64px]'>No credit check</h1>
					<p className='text-sm mt-6 text-gradient-to-r from-purple-400 to-pink-600'>
						Thousands of entrepreneurs bank on Winden to start or grow their
						business. Open an account in under 3 minutes.
					</p>
					<Button
						className='bg-[#6936F5] py-3 px-8'
						endIcon={
							<Image
								height={10}
								width={10}
								src={require('/public/images/arrow.png')}
								alt={'arrow'}
							/>
						}
					>
						Get Started
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default HomeHero;
