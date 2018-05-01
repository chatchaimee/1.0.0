import PropTypes from 'prop-types';
import {
  Hidden,
  Typography,
  withStyles,
} from 'material-ui';
import { scrollOptions } from '@/app/config';
import { handleClickAndScrollToTarget } from '@/app/helpers/scroll';

const styles = {
  root: {
    height: '100vh',
  },
  content: {
    textAlign: 'center',
    background: 'rgba(0, 0, 0, .5)',
    color: 'rgba(255, 255, 255, .8)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  backgroundImage: {
    backgroundImage: 'url("static/images/home/home.jpg")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
  header: {
    color: '#fff',
  },
  subHeader: {
    color: 'rgba(255, 255, 255, .8)',
  },
};

function Home(props) {
  const { classes } = props;

  return (
    <div id="HOME" className="container">
      <div className={classes.root}>
        <div className={classes.content}>
          <div data-aos="zoom-in" data-aos-delay="1000">
            <Typography className={classes.header} variant="display2" gutterBottom>
              Chatchai Meesuksabai
            </Typography>
          </div>
          <div data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1400">
            <Typography className={classes.subHeader} variant="headline">
              I'm developer
            </Typography>
          </div>
          <div className="btn-scroll">
            <a onClick={() => handleClickAndScrollToTarget('PROFILE', scrollOptions)}>
              <span />
            </a>
          </div>
          {/* No fixed background on tablet and mobile */}
          <Hidden mdUp>
            <div className={classes.backgroundImage} />
          </Hidden>
          {/* Fixed background on desktop */}
          <Hidden smDown>
            <div className={classes.backgroundImage} style={{ backgroundAttachment: 'fixed' }} />
          </Hidden>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
