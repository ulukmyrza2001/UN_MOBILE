import React, { useState } from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { DATA_SET } from '../../../constants/documentTypes';
import PARAM_NAME from '../../../constants/searchParams';
import { DATA_CATALOG_URL } from './../../../api';

const Container = styled.div`
	width: 100%;
`;

const StyledMenu = styled(Menu)`
	padding-left: 160px;
`;

const MenuItemText = styled.span`
	font-family: Mulish;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.2px;
	text-transform: uppercase;
	color: ${props => props.active ? '#000' : '#868686'};
`;


const Tabs = ({ documentTypeList }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	function handleTabChange(e) {
		if (e.key === DATA_SET) {
			return window.open(`${DATA_CATALOG_URL}/dataset/?q=${searchParams.get(PARAM_NAME.SEARCH_TEXT)}`, '_blank').focus();;
		}
		setSearchParams({
			[PARAM_NAME.SEARCH_TEXT]: searchParams.get(PARAM_NAME.SEARCH_TEXT),
			[PARAM_NAME.PAGE_INDEX]: 1,
			[PARAM_NAME.DOCUMENT_TYPE]: e.key,
			[PARAM_NAME.THEMATIC_AREA]: '',
			[PARAM_NAME.LOCATION]: '',
		});
	}

	function renderMenuItemList() {
		return [{ key: '', title: 'All' }, {key: DATA_SET, title: DATA_SET}, ...documentTypeList.map((item) => ({ key: item, title: item }))].map(({ key, title }) => (
			<Menu.Item key={key}>
				<MenuItemText active={`${key}` === searchParams.get(PARAM_NAME.DOCUMENT_TYPE)}>{title}</MenuItemText>
			</Menu.Item>
		));
	}

	return (
		<Container>
			<StyledMenu onClick={handleTabChange} selectedKeys={[searchParams.get(PARAM_NAME.DOCUMENT_TYPE)]} mode="horizontal">
				{renderMenuItemList()}
			</StyledMenu>
		</Container>
	);
};

export default Tabs;
