import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

import { FOOTER_LINKS } from '../../constants/routes';

const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
  	}
`

const Container = styled.footer`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-top: 1px solid #e2e2e2;
	margin-top: 20px;
`

const NavLink = styled(Link)`
	display: inline-flex;
	flex-wrap: wrap;
	text-decoration: none;
	font-family: Mulish;
	font-weight: 600;
	font-size: 14px;
	letter-spacing: 0.2px;
	color: #373f41;
	margin: 10px 24px;
`
const Nav = styled.div`
	margin-top: 84px;
	margin-bottom: 60px;
`

const FooterEnd = styled.div`
	margin-bottom: 54px;
	color: #656770;
`

const TextLink = styled(Link)`
	margin-bottom: 54px;
	color: #656770;
	text-decoration: underline;
`;

const Footer = () => {
	function renderFooterLinks() {
		const linkList = FOOTER_LINKS.map(({ label, path }) => (
			<NavLink key={path} to={path}>{label}</NavLink>
		));

		return <Nav>{linkList}</Nav>
	}

	return (
		<>
			<GlobalStyle />
			<Container>
				{renderFooterLinks()}
				<FooterEnd>
					© {new Date().getFullYear()} UNEP. All rights reserved.
					 {/* &nbsp;|&nbsp;&nbsp;
					<TextLink to={ROUTES.TERMS.path}>
						{ROUTES.TERMS.label}
					</TextLink> &nbsp;&nbsp;|&nbsp;&nbsp;
					<TextLink to={ROUTES.PRIVACY.path}>
						{ROUTES.PRIVACY.label}
					</TextLink> */}
				</FooterEnd>
			</Container>
		</>
	)
}

export default Footer;
