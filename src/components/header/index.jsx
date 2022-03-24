import React, { useState } from 'react';
import styled from 'styled-components';
import { Drawer, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.svg';
import media from '../../helpers/media';
import { HOME_PAGE_LINKS } from '../../constants/routes';
import LinkItem from './LinkItem';
import { Link } from 'react-router-dom';

const Container = styled.div`
	padding: 24px 66px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: -webkit-fill-available;

	${media.tablet`
		padding: 24px 40px;
	`}

	${media.mobile`
		position: sticky;
		background: #fff;
		z-index: 10;
		top: 0px;
		padding: 24px 25px;
		box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.15);
	`}
`;

const Logo = styled.img``;

const BurgerMenuIcon = styled(MenuOutlined)`
	color: #00AEEF;
	font-size: 24px;
`;

const Navs = styled.div``;

const NavBarBurger = styled.div`
	cursor: pointer;
	display: none;
	
	${media.tablet`
		display: block;
	`}
	
	${media.mobile`
		display: block;
	`}
`;

export const StyledDrawer = styled(Drawer)`
	& .ant-drawer-header-title {
		display: flex;
		flex-direction: row-reverse;
	}

	& .ant-drawer-close {
		margin: 0px;
		padding: 0px 0px 0px 6px;
	}

	& .ant-drawer-body {
		padding: 0 0.35rem 0 0;
	}
`;

const Header = () => {
	const navigate = useNavigate();
	const [visible, setVisible] = useState(false);

	function handleToggleHamburgerMenu() {
		setVisible((state) => !state);
	}

	function handleMenuItemClick({ key }) {
		const navItem = HOME_PAGE_LINKS.find((item) => item.path === key);
		if (!navItem) return;

		navigate(navItem.path);
	}

	function renderMobileMenuItems() {
		const menuItemList = HOME_PAGE_LINKS.map(({ path, label }) => (
			<Menu.Item key={path}>{label}</Menu.Item>
		));

		return menuItemList;
	}

	function renderNavLinks() {
		
		
		const linkList = HOME_PAGE_LINKS.map(({ path, label }) => (
			<LinkItem key={path} label={label} to={path} />
		));

		return (
			<Navs>
				{linkList}
			</Navs>
		);
	}

	return (
		<Container>
			<StyledDrawer
				title={'Menu'}
				height="80%"
				onClose={handleToggleHamburgerMenu}
				visible={visible}
				placement='top'
				closeIcon={<CloseOutlined />}
			>
				<Menu
					onClick={handleMenuItemClick}
					style={{ width: "100%" }}
					mode="inline"
				>
					{renderMobileMenuItems()}
				</Menu>
			</StyledDrawer>
			<Link to="/">
				<Logo src={logo} />
			</Link>
			{renderNavLinks()}
			<div />
			<NavBarBurger onClick={handleToggleHamburgerMenu}>
				<BurgerMenuIcon />
			</NavBarBurger>
		</Container>
	);
};

export default Header;