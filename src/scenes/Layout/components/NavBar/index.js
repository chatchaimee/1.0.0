import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Hidden } from '@material-ui/core';
import { layout, scrollOptions } from '~/src/config';
import DrawerMenu from './components/DrawerMenu';
import TabMenu from './components/TabMenu';
import NavBarStyled from './styles';

function NavBar ({ title, scroll, activeTab }) {
	const { navbar } = layout;
	return (
		<NavBarStyled>
			<AppBar
				className={`navbar ${scroll ? '' : 'navbar-default'}`}
				position="fixed"
				color={scroll ? 'primary' : 'secondary'}
			>
				<Toolbar>
					{/* Hidden button burger on desktop */}
					<Hidden mdUp>
						<DrawerMenu
							title={title}
							menus={navbar.menus}
							scrollOptions={scrollOptions}
						/>
					</Hidden>
					<Typography variant="title" color="inherit">
						{title}
					</Typography>
					{/* Hidden menu on tablet and mobile */}
					<Hidden smDown>
						<TabMenu
							menus={navbar.menus}
							scrollOptions={scrollOptions}
							scroll={scroll}
							activeTab={activeTab}
						/>
					</Hidden>
				</Toolbar>
			</AppBar>
		</NavBarStyled>
	);
}

NavBar.defaultProps = {
	scroll: false,
	activeTab: 0
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	scroll: PropTypes.bool,
	activeTab: PropTypes.number
};

export default NavBar;
