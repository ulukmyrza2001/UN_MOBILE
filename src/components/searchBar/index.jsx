import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/search.svg'
import media from '../../helpers/media';

const SearchbarContainer = styled.div`
	background: #FFFFFF;
	border: 1.5px solid #D2D2D2;
	box-sizing: border-box;
	border-radius: 8px;
	width: 100%;
	height: 56px;
	padding: 0px 24px;
	margin-top: 20px;
	display: flex;
    align-items: center;
`;

const SearchIcon = styled.img`
	cursor: pointer;
`;

const SearchInput = styled.input`
	font-family: Mulish;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.2px;
	color: #000000CC;
	border: none;
	outline: none;
	flex: 1;

	${media.mobile`
		font-size:14px;
	`}

	& ::placeholder { 
		opacity: 1;
		font-family: Mulish;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0.2px;
		color: #868686;
	  }
`;

const SearchBar = ({ searchText, onSearchTextChange, onSearch, className, placeholder='What would you like to know?' }) => {
	function handleOnSearchTextChange(e) {
		onSearchTextChange(e.target.value);
	}

	function onKeyPress(e) {
		if (e.key === "Enter") {
			onSearch();
		}
	}

	return (
		<SearchbarContainer className={className}>
			<SearchInput
				value={searchText}
				onChange={handleOnSearchTextChange}
				onKeyPress={onKeyPress}
				placeholder={placeholder}
			/>
			<SearchIcon onClick={onSearch} src={searchIcon} />
		</SearchbarContainer>
	);
};

export default SearchBar;