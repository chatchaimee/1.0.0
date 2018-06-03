import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import handleClickAndScrollToTarget, { scrollEvents } from '~/src/helpers/scroll';

const styles = theme => ({
	root: {
		flexGrow: 1,
		background: 'transparent'
	},
	tabs: {
		float: 'right'
	},
	tab: {
		height: 64,
		width: 150,
		minWidth: 120,
		display: 'flex',
		justifyContent: 'center'
	}
});

class TabMenu extends PureComponent {
	state = {
		tabNamber: 0,
		tabClick: false
	};

	componentDidMount () {
		// Set tabClick to false on scroll end
		scrollEvents.register('end', (to, element) => {
			this.setState({
				tabClick: false
			});
		});
	}

	handleSetActiveTabOnClick = (event, tabNamber) => {
		this.setState({
			tabNamber,
			tabClick: true
		});
	};

	render () {
		const { tabNamber, tabClick } = this.state;
		const {
			classes, menus, scrollOptions, scroll, activeTab
		} = this.props;

		return (
			<div className={classes.root}>
				<Tabs
					className={classes.tabs}
					value={tabClick ? tabNamber : activeTab}
					onChange={this.handleSetActiveTabOnClick}
					indicatorColor={scroll ? 'secondary' : 'primary'}
					fullWidth
				>
					{menus.map((menu, index) => (
						<Tab
							className={classes.tab}
							key={menu}
							label={menu}
							to={menu}
							onClick={() => handleClickAndScrollToTarget(menu, scrollOptions)}
						/>
					))}
				</Tabs>
			</div>
		);
	}
}

TabMenu.defaultProps = {
	classes: {},
	menus: [],
	scrollOptions: {},
	scroll: false,
	activeTab: 0
};

TabMenu.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string.isRequired,
		tabs: PropTypes.string.isRequired,
		tab: PropTypes.string.isRequired
	}),
	menus: PropTypes.arrayOf(PropTypes.node),
	scrollOptions: PropTypes.shape({
		offset: PropTypes.number.isRequired,
		smooth: PropTypes.bool.isRequired,
		duration: PropTypes.number.isRequired
	}),
	scroll: PropTypes.bool,
	activeTab: PropTypes.number
};

export default withStyles(styles)(TabMenu);
