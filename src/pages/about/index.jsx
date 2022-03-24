import React from 'react';
import styled from 'styled-components';
import BackgroundMain from '../../assets/BackgroundMain.jpeg';
import media from '../../helpers/media';
import MainDescription from './MainDescription';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Container = styled.div`
	background: url(${BackgroundMain});
	background-size: cover;
	background-position: center;
`;

const Main = styled.div`
	padding: 2rem;
	max-width: 1200px;
	height: 712px;
	margin: 0 auto;
	padding-bottom: 40px;
	display: flex;
	flex-direction: column;
	justify-content: end;
	align-items: center;

	${media.tablet`
    	padding: 24px;
    `}

	${media.mobile`
    	padding: 24px;
    `}
`;

const Title = styled.h1`
	font-family: Mulish;
	font-weight: 800;
	font-size: 60px;
	line-height: 72px;
	text-transform: uppercase;
	color: #ffffff;
	
	${media.tablet`
		font-size: 44px;
		line-height: 57px;
    `}
	
	${media.mobile`
		font-size: 34px;
		line-height: 50px;
    `}
`;

const GroupText = styled.div`
	max-width: 849px;
`;

const Text = styled.p`
	font-family: Mulish;
	font-weight: 500;
	font-size: 16px;
	line-height: 28px;
	letter-spacing: 0.5px;
	color: #ffffff;

	${media.mobile`
    	font-size:14px;
    `}
`;

const AboutUs = () => {
	return (
		<>
			<Header />
			<Container>
				<Main>
					<GroupText>
						<Title>
							Plastic-free <br /> rivers through science
						</Title>
						<Text>
							National, regional and global policies, alliances
							and financial mechanisms are informed and influenced
							by the science on plastic pollution in rivers
							through best practices demonstrated from the Mekong
							and Ganges rivers examples
						</Text>
					</GroupText>
				</Main>
			</Container>
			<MainDescription />
			<Footer />
		</>
	)
}

export default AboutUs;