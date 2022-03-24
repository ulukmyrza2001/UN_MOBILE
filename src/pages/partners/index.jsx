import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import media from '../../helpers/media';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Cards from './Cards';

const GlobalStyle = createGlobalStyle`
	margin: 0;
	padding:0;
	box-sizing: border-box;
`;

const Container = styled.div`
	max-width: 1062px;
	margin: 0 auto;
	padding: 100px 10px;

	${media.tablet`
		padding: 100px 20px;
	`}
`;

const Title = styled.h1`
	font-family: Mulish;
	font-weight: 800;
	font-size: 50px;
	line-height: 64px;
	text-transform: uppercase;
	color: #373f41;

	${media.tablet`
		font-size: 38px;
	`}

	${media.mobile`
		font-size: 34px;
		line-height: 40px;
	`}
`;

const Text = styled.p`
	max-width: 824px;
	font-family: Mulish;
	font-weight: 500;
	font-size: 16px;
	line-height: 32px;
	letter-spacing: 0.5px;
	color: #4f4f4f;
	
	${media.mobile`
		font-size: 14px;
	`}
`;

const Partners = () => (
	<>
		<GlobalStyle />
		<Header />
		<Container>
			<Title>partners</Title>
			<Text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Scelerisque molestie faucibus faucibus tincidunt egestas
				neque, euismod ac.
			</Text>
			<br />
			<Cards />
		</Container>
		<Footer />
	</>
);

export default Partners;