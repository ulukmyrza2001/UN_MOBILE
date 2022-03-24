import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import thematicAreas from '../../../constants/thematicAreas';
import Searchbar from '../../../components/searchBar';
import PARAM_NAME from '../../../constants/searchParams';
import Tabs from './Tabs';

const Container = styled.div`
	padding: 24px 66px 4px 66px;
	display: flex;
	align-items:center;
	width: -webkit-fill-available;
`;

const Logo = styled.img``;

const DropdownButton = styled(Button)`
	height: 40px;
	outline: none;
	border-radius: 6px;
`;

const DropDownOption = styled(Menu.Item)`
	height: 40px;
`;

const ThematicAreaSelectContainer = styled.div`
	margin-left: 40px;
`;

const LocationSelectContainer = styled.div`
	margin-left: 8px;
`;

const StyledSearchBar = styled(Searchbar)`
	height: 40px;
	margin: 0px;
	margin-left: 8px;
	width: 450px;
	padding: 0px 16px;
`;

const Topbar = ({ documentTypeList, locationList }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		if (searchText !== searchParams.get(PARAM_NAME.SEARCH_TEXT)) {
			setSearchText(searchParams.get(PARAM_NAME.SEARCH_TEXT));
		}
	}, [searchParams]);

	function capitalizeString(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function handleSearch() {
		if (searchText) {
			setSearchParams({
				[PARAM_NAME.SEARCH_TEXT]: searchText,
				[PARAM_NAME.PAGE_INDEX]: 1,
				[PARAM_NAME.DOCUMENT_TYPE]: searchParams.get(PARAM_NAME.DOCUMENT_TYPE),
				[PARAM_NAME.THEMATIC_AREA]: searchParams.get(PARAM_NAME.THEMATIC_AREA),
				[PARAM_NAME.LOCATION]: '',
			});
		}
	}

	function handleThematicAreaItemClick({ key }) {
		setSearchParams({
			[PARAM_NAME.SEARCH_TEXT]: searchText,
			[PARAM_NAME.PAGE_INDEX]: 1,
			[PARAM_NAME.DOCUMENT_TYPE]: '',
			[PARAM_NAME.THEMATIC_AREA]: key,
			[PARAM_NAME.LOCATION]: '',
		});
	}

	function handleLocationItemClick({ key }) {
		setSearchParams({
			[PARAM_NAME.SEARCH_TEXT]: searchText,
			[PARAM_NAME.PAGE_INDEX]: 1,
			[PARAM_NAME.DOCUMENT_TYPE]: '',
			[PARAM_NAME.THEMATIC_AREA]: '',
			[PARAM_NAME.LOCATION]: key,
		});
	}

	function renderThematicAreasSelector() {
		const thematicAreaList = [{ title: 'All categories', key: '' }, ...thematicAreas]
		const dropdownOptions = thematicAreaList.map(({ title, key }) => (
			<DropDownOption key={key}>
				{title}
			</DropDownOption>
		));

		const menu = (
			<Menu selectable onClick={handleThematicAreaItemClick} selectedKeys={[searchParams.get(PARAM_NAME.THEMATIC_AREA)]}>
				{dropdownOptions}
			</Menu>
		);

		const selectedKey = searchParams.get(PARAM_NAME.THEMATIC_AREA);
		const selectedItem = thematicAreaList.find((item) => item.key === selectedKey);

		return (
			<ThematicAreaSelectContainer>
				<Dropdown overlay={menu}>
					<DropdownButton> {selectedItem ? selectedItem.title : 'Thematic pages'} <DownOutlined /></DropdownButton>
				</Dropdown>
			</ThematicAreaSelectContainer>
		);
	}

	function renderLocationSelector() {
		const locations = locationList.map((item) => ({
			key: item,
			title: capitalizeString(item),
		}));
		const locationOptionList = [{ title: 'All locations', key: '' }, ...locations];

		const dropdownOptions = locationOptionList.map(({ title, key }) => (
			<DropDownOption key={key}>
				{title}
			</DropDownOption>
		));
		
		const menu = (
			<Menu selectable onClick={handleLocationItemClick} selectedKeys={[searchParams.get(PARAM_NAME.LOCATION)]}>
				{dropdownOptions}
			</Menu>
		);

		const selectedKey = searchParams.get(PARAM_NAME.LOCATION);
		const selectedItem = locationOptionList.find((item) => item.key === selectedKey);

		return (
			<LocationSelectContainer>
				<Dropdown overlay={menu}>
					<DropdownButton> {selectedItem ? selectedItem.title : 'Location'} <DownOutlined /></DropdownButton>
				</Dropdown>
			</LocationSelectContainer>
		);
	}

	return (
		<>
			<Container>
				<a href='/'>
					<Logo src={logo} />
				</a>
				{renderThematicAreasSelector()}
				<StyledSearchBar
					searchText={searchText}
					onSearchTextChange={setSearchText}
					onSearch={handleSearch}
					placeholder="Search for ..."
				/>
				{renderLocationSelector()}
			</Container>
			<Tabs documentTypeList={documentTypeList} />
		</>
	);
};

export default Topbar;