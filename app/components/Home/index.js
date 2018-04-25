import PropTypes from 'prop-types';
import {
  Typography,
  withStyles,
} from 'material-ui';
import { scrollOptions } from '@/app/config';
import { handleClickAndScrollToTarget } from '@/app/helpers/scroll';

const styles = {
  root: {
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    display: 'block',
    padding: 0,
  },
  content: {
    alignItems: 'center',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, .5)',
    color: 'rgba(255, 255, 255, .8)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: '0 30px',
    position: 'absolute',
    width: '100%',
  },
  backgroundImage: {
    backgroundImage: 'url("static/images/home/home.jpg")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    webkitBackgroundSize: 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
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
          <div className={classes.backgroundImage} />
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
