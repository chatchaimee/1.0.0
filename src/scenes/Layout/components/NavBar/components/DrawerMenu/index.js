import { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Divider,
	withStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import handleClickAndScrollToTarget from '~/src/helpers/scroll';

const styles = theme => ({
	menuButton: {
		marginLeft: -12,
		marginRight: 5
	},
	drawerPaper: {
		width: 300
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	drawerTextHeader: {
		position: 'absolute',
		padding: 14,
		fontSize: '1.3125rem',
		fontWeight: 500
	},
	drawerMenu: {
		padding: 0
	}
});

class DrawerMenu extends PureComponent {
	state = {
		open: {
			left: false
		}
	};

	handletoggleDrawer (side, open) {
		const drawerState = {};

		drawerState[side] = open;

		this.setState({
			open: drawerState
		});
	}

	handleDrawerOpen = () => {
		this.handletoggleDrawer('left', true);
	};

	handleDrawerClose = () => {
		this.handletoggleDrawer('left', false);
	};

	render () {
		const { open } = this.state;
		const { left } = open;
		const {
			classes, title, menus, scrollOptions
		} = this.props;

		return (
			<Fragment>
				<IconButton
					className={classes.menuButton}
					color="inherit"
					aria-label="Menu"
					onClick={this.handleDrawerOpen}
				>
					<MenuIcon />
				</IconButton>
				<Drawer
					classes={{
						paper: classes.drawerPaper
					}}
					open={left}
					onClose={this.handleDrawerClose}
					onClick={this.handleDrawerClose}
				>
					<Typography className={classes.drawerTextHeader} type="title">
						{title}
					</Typography>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<List className={classes.drawerMenu}>
						{menus.map((menu, index) => (
							<div key={menu}>
								<ListItem
									button
									component="a"
									onClick={() =>
										handleClickAndScrollToTarget(menu, scrollOptions)}
								>
									<ListItemText primary={menu} />
								</ListItem>
								<Divider />
							</div>
						))}
					</List>
				</Drawer>
			</Fragment>
		);
	}
}

DrawerMenu.defaultProps = {
	classes: {},
	menus: [],
	scrollOptions: {}
};

DrawerMenu.propTypes = {
	classes: PropTypes.shape({
		menuButton: PropTypes.string.isRequired,
		drawerPaper: PropTypes.string.isRequired,
		drawerHeader: PropTypes.string.isRequired,
		drawerTextHeader: PropTypes.string.isRequired,
		drawerMenu: PropTypes.string.isRequired
	}),
	title: PropTypes.string.isRequired,
	menus: PropTypes.arrayOf(PropTypes.node),
	scrollOptions: PropTypes.shape({
		offset: PropTypes.number.isRequired,
		smooth: PropTypes.bool.isRequired,
		duration: PropTypes.number.isRequired
	})
};

export default withStyles(styles)(DrawerMenu);
