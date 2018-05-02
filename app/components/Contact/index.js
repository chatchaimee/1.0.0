import PropTypes from 'prop-types';
import {
  Typography,
  withStyles,
} from 'material-ui';
import { getEducation, getCareer } from '~/app/helpers/app';

const styles = {
  root: {
    padding: '40px 0 0',
    display: 'block',
    background: '#434242',
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
  line: {
    width: '80%',
    margin: '0 0 20px',
    color: '#fff',
  },
  contactContent: {
    width: '80%',
    textAlign: 'center',
    padding: '20px 0 30px',
  },
  icon: {
    fontSize: 48,
    color: '#fff',
    padding: '0 10px 0',
  }
};

function Contact(props) {
  const { classes } = props;
  
  return (
    <div id="CONTACT" className="component">
      <div className={classes.root}>
        <div className={classes.content}>
          <div data-aos="fade-down">
            <Typography className={classes.header} variant="display2" gutterBottom>
              Contact
            </Typography>
          </div>
          <hr className={classes.line}/>
          <div className={classes.contactContent} data-aos="fade-up">
            <a className={classes.icon} href="https://www.facebook.com/chatchai.cmee" target="_blank">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a className={classes.icon} href="https://www.linkedin.com/in/chatchai-meesuksabai" target="_blank">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a className={classes.icon} href="https://github.com/chatchaimee" target="_blank">
              <i className="fa fa-github-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
