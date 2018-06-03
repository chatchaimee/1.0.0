import styled from 'styled-components';

const NavBarStyled = styled.div`
	.navbar {
		z-index: 2;
		transition: padding 0.5s ease, background 0.5s ease, box-shadow 0.5s ease, border 0.5s ease;
	}

	.navbar-default {
		background: transparent;
		box-shadow: none;
		padding: 1em 0em;
	}
`;

export default NavBarStyled;
