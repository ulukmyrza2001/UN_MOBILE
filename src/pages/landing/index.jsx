import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './../../constants/routes';
import Searchbar from '../../components/searchBar';
import Header from '../../components/header';
import UNlogo from '../../assets/logo.svg';
import CMlogo from '../../assets/cm-logo.svg'
import DocumentTypes from './DocumentTypes';
import ThematicAreas from './ThematicAreas';
import Footer from '../../components/footer';
import media from '../../helpers/media';
import PARAM_NAME from './../../constants/searchParams';

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Content = styled.div`
	padding-top: 75px;
	padding-bottom: 75px;
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 600px;

	${media.tablet`
		padding:75px 35px 0 35px ;
	`}
	${media.mobile`
		padding:75px 30px 0 35px ;
	`}
`;

const Title = styled.div`
	font-family: Mulish;
	font-style: normal;
	font-weight: bold;
	font-size: 54px;
	line-height: 70px;
	text-align: center;
	letter-spacing: 0.2px;
	color: #4C3F64;
	margin-bottom: 16px;

	${media.tablet`
		font-size:40px;
	`}
	${media.mobile`
		font-size:36px;
	`}
`;

const Subtitle = styled.p`
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 28px;
	text-align: center;
	letter-spacing: 0.3px;
	color: rgba(7, 32, 79, 0.5);
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Logo = styled.img`
	padding: 30px 20px;
`;

const Section = styled.div`
	margin-top: 50px;
	width: 100%;
`;

const SectionTitle = styled.div`
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.2px;
	color: #000000;
`;

const SectionSubtitle = styled.div`
	font-family: Mulish;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #868686;
	margin-top: 8px;
`;

const Landing = () => {
	const [searchText, setSearchText] = useState('');
	const navigate = useNavigate();

	function handleSearch() {
		if (searchText) {
			navigate(`${ROUTES.SEARCH_RESULT.path}?${PARAM_NAME.SEARCH_TEXT}=${searchText}&${PARAM_NAME.PAGE_INDEX}=1&${PARAM_NAME.DOCUMENT_TYPE}=&${PARAM_NAME.THEMATIC_AREA}=&${PARAM_NAME.LOCATION}=`);
		}
	}

	return (
		<Container>
			<Header />
			<Content>
				<Title>Plastic-free Rivers</Title>
				<Subtitle>A space to promote knowledge sharing increase awaraness about plastic leakage and pollution reduction in Asia and the Pacific region</Subtitle>
				<LogoContainer>
					<Logo src={CMlogo} />
					<Logo src={UNlogo} />
				</LogoContainer>
				<Searchbar
					searchText={searchText}
					onSearchTextChange={setSearchText}
					onSearch={handleSearch}
				/>
				<Section>
					<SectionTitle>Knowledge products</SectionTitle>
					<SectionSubtitle>Please select related Knowledge product  to explore.</SectionSubtitle>
					<DocumentTypes />
				</Section>
				<Section>
					<SectionTitle>Thematic areas</SectionTitle>
					<SectionSubtitle>Please select related Thematic areas  to explore.</SectionSubtitle>
					<ThematicAreas />
				</Section>
			</Content>
			<Footer />
		</Container>
	);
};

export default Landing;
