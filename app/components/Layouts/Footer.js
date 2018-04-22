import PropTypes from 'prop-types';
import {
  Typography,
  withStyles,
} from 'material-ui';

const styles = {
  root: {
    padding: '20px 0 0',
    display: 'block',
    backgroundColor: '#434242',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    color: '#fff',
    padding: '0 0 20px',
  },
  poweredContent: {
    width: '80%',
    textAlign: 'center',
    padding: '0 0 100px',
  },
  logo: {
    padding: '0 20px 0',
  },
};

function Powered(props) {
  const { classes } = props;
  
  return (
    <div id="POWERED" className="component">
      <div className={classes.root}>
        <div className={classes.content}>
          <Typography className={classes.header} variant="headline" gutterBottom>
            Powered by
          </Typography>
          <div className={classes.poweredContent}>
            <a className={classes.logo} href="https://github.com/zeit/next.js/" target="_blank">
              <i>
                <img src="static/images/powered/next-js.svg" alt="next.js" height="70" width="130" />
              </i>
            </a>
            <a className={classes.logo} href="https://material-ui-next.com/" target="_blank">
              <i>
                <img src="static/images/powered/material-ui.svg" alt="material-ui" height="60" width="60" />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Powered.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Powered);
