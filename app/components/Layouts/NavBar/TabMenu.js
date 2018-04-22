import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import config from '@/app/config';
import {
  scrollEvents,
  handleClickAndScrollToTarget
} from '@/app/helpers/scroll';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: 'transparent',
    width: 300,
  },
  tab: {
    height: 64,
    width: 120,
    minWidth: 100,
    display: 'flex',
    justifyContent: 'center',
  },
});

class TabMenu extends React.Component {
  state = {
    tabNamber: 0,
    tabClick: false
  };

  componentDidMount() {
    // Set tabClick to false on scroll end
    scrollEvents.register("end", (to, element) => {
      this.setState({
        tabClick: false
      });
    });
  }

  handleSetActiveTabOnClick = (event, tabNamber) => {
    this.setState({
      tabNamber: tabNamber,
      tabClick: true
    });
  };

  render() {
    const { classes, scrollOptions, windowScroll = false, activeTab = 0 } = this.props;
    const { tabNamber, tabClick } = this.state;
    const { menus } = config;

    return (
      <div className={classes.root}>
        <Tabs
          value={tabClick ? tabNamber : activeTab}
          onChange={this.handleSetActiveTabOnClick}
          indicatorColor={windowScroll ? 'secondary' : 'primary'}
          fullWidth
        >
          {
            menus.map((menu, index) => (
              <Tab
                className={classes.tab}
                key={menu + index}
                label={menu}
                to={menu}
                onClick={() => handleClickAndScrollToTarget(menu, scrollOptions)}
              />
            ))
          }
        </Tabs>
      </div>
    );
  }
}

TabMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  scrollOptions: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabMenu);
