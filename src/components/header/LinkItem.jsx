import React from 'react';
import styled from 'styled-components';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import media from '../../helpers/media';


const NavLink = styled(Link)`
	text-decoration: none;
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 18px;
	letter-spacing: 0.2px;
	color: #373F41;
	margin: 0px 24px;
	border-bottom-width: 2px;
	border-bottom-style: solid;
	border-bottom-color: ${props => props.active ? '#3281F7' : '#00000000'};

	${media.mobile`
		display: none;
	`}

	${media.tablet`
		display: none;
	`}
`;

const LinkItem = ({ to, label }) => {
	const resolved = useResolvedPath(to);
	const match = useMatch({ path: resolved.pathname, end: true });

	return (
		<NavLink active={match} to={to}>
			{label}
		</NavLink>
	);
};

LinkItem.propTypes = {
	to: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

export default LinkItem;
