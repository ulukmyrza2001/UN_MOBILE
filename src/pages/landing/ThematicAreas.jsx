import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import thematicAreas from '../../constants/thematicAreas';
import media from '../../helpers/media'
import { ROUTES } from './../../constants/routes';
import PARAM_NAME from './../../constants/searchParams';

const Container = styled.div`
	padding-top: 24px;
	display: flex;
	flex-wrap: wrap;
`;

const Item = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	background: #FFFFFF;
	box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
	border-radius: 8px;
	margin-right: 8px;
	margin-bottom: 20px;
	cursor: pointer;
	width: 141px;

	${media.tablet`
		margin-right:16px;
	`}

	${media.mobile`
		width: 120px;
	`}
`;

const ItemPhoto = styled.img`
	max-width: 100%;
`;

const ItemText = styled.span`
	font-family: Mulish;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 24px;
	color: #16192C;
	padding: 12px 6px 6px 12px;
`;


const ThematicAreas = () => {
	const navigate = useNavigate();

	function handleThemeSelect(theme) {
		navigate(`${ROUTES.SEARCH_RESULT.path}?${PARAM_NAME.SEARCH_TEXT}=plastic&${PARAM_NAME.PAGE_INDEX}=1&${PARAM_NAME.DOCUMENT_TYPE}=&${PARAM_NAME.THEMATIC_AREA}=${theme}&${PARAM_NAME.LOCATION}=`);
	}

	function renderProductList() {
		const tAreas = thematicAreas.map(({ image, title, key }) => (
			<Item key={key} onClick={() => handleThemeSelect(key)}>
				<ItemPhoto src={image} />
				<ItemText>{title}</ItemText>
			</Item>
		));

		return tAreas;
	}

	return (
		<Container>
			{renderProductList()}
		</Container>
	);
};

export default ThematicAreas;
