import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './../../constants/routes';
import documentTypes from '../../constants/documentTypes';
import PARAM_NAME from './../../constants/searchParams';


const Container = styled.div`
	padding-top: 24px;
	display: flex;
	flex-wrap: wrap;
`;

const Item = styled.div`
	margin-right: 16px;
	margin-bottom: 18px;
	padding: 0px 16px;
	background: #FFFFFF;
	box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	height: 56px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: fit-content;
`;

const ItemText = styled.span`
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.2px;
	color: #656770;
`;


const DocumentTypes = () => {
	const navigate = useNavigate();

	function handleDocumentTypeSelect(docType) {
		navigate(`${ROUTES.SEARCH_RESULT.path}?${PARAM_NAME.SEARCH_TEXT}=plastic&${PARAM_NAME.PAGE_INDEX}=1&${PARAM_NAME.DOCUMENT_TYPE}=${docType}&${PARAM_NAME.THEMATIC_AREA}=&${PARAM_NAME.LOCATION}=`);
	}

	function renderDocumentTypeList() {
		return (
			documentTypes.map(({ key, title }) => (
				<Item key={key} onClick={() => handleDocumentTypeSelect(key)}>
					<ItemText>{title}</ItemText>
				</Item>
			))
		);
	}

	return (
		<Container>
			{renderDocumentTypeList()}
		</Container>
	);
};

export default DocumentTypes;
