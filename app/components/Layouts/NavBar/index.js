import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Hidden,
  Typography,
  withStyles,
} from 'material-ui';
import TabMenu from './TabMenu';
import DrawerMenu from './DrawerMenu';
import { scrollOptions } from '@/app/config';

const styles = {
  root: {
    flexGrow: 1,
  },
  navbar: {
    zIndex: 2,
    transition: 'padding 0.5s ease, background 0.5s ease, box-shadow 0.5s ease, border 0.5s ease',
  },
  navbarDefault: {
    background: 'transparent',
    boxShadow: 'none',
    padding: '1em 0em',
  },
  flex: {
    flex: 1,
  },
};

function NavBar(props) {
  const { classes, windowScroll = false, activeTab = 0 } = props;

  return (
    <div className={classes.root}>
      <AppBar
        className={`${classes.navbar} ` + (windowScroll ? '' : classes.navbarDefault)}
        position="fixed"
        color={windowScroll ? 'primary' : 'secondary'}
      >
        <Toolbar>
          {/* Hidden button burger on desktop */}
          <Hidden mdUp>
          <DrawerMenu
            scrollOptions={scrollOptions}
          />
          </Hidden>
          <Typography variant="title" color="inherit" className={classes.flex}>
            M. Chatchai
          </Typography>
          {/* Hidden menu on tablet and mobile */}
          <Hidden smDown>
            <TabMenu
              scrollOptions={scrollOptions}
              windowScroll={windowScroll}
              activeTab={activeTab}
            />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
