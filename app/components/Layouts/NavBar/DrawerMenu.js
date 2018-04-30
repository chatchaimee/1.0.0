import React from 'react';
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
  withStyles,
} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import { handleClickAndScrollToTarget } from '@/app/helpers/scroll';
import config from '@/app/config';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 5,
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
    padding: 18,
    fontSize: '1.3125rem',
    fontWeight: 500,
  },
  drawerMenu: {
    padding: 0,
  },
});

class DrawerMenu extends React.Component {
  state = {
    open: {
      left: false
    }
  };

  handletoggleDrawer = (side, open) => {
    const drawerState = {};

    drawerState[side] = open;

    this.setState({
      open: drawerState
    });
  };

  handleDrawerOpen = () => this.handletoggleDrawer('left', true);

  handleDrawerClose = () => this.handletoggleDrawer('left', false);

  render() {
    const { open } = this.state;
    const { classes, scrollOptions } = this.props;
    const { left } = open;
    const { menus } = config;

    return (
      <>
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
            M. Chatchai
          </Typography>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List className={classes.drawerMenu}>
            {menus.map((menu, index) => (
              <div key={index + menu}>
                <ListItem
                  button
                  component="a"
                  onClick={() => handleClickAndScrollToTarget(menu, scrollOptions)}
                >
                  <ListItemText primary={menu} />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Drawer>
      </>
    );
  }
}

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  scrollOptions: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerMenu);
