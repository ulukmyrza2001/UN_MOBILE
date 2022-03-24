import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../helpers/media';

const Container = styled.div`
	width: 100%;
	padding: 24px 0px;
	border-top: ${props => props.withoutBorder ? 0 : 1}px solid #E2E2E2;
`;

const Title = styled.a`
	font-family: 'Mulish';
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 28px;
	color: #114296;

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
`;

const Description = styled.span`
	font-family: 'Mulish';
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 20px;
	display: flex;
	align-items: center;
	color: #484E4C;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
`;

const ResultItem = ({ title, description, url, withoutBorder }) => (
	<Container withoutBorder={withoutBorder}>
		<Title href={url} target="_blank">{title}</Title>
		<Description>{description}</Description>
	</Container>
);

ResultItem.protpTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	withoutBorder: PropTypes.bool.isRequired,
};

export default ResultItem;
