import PropTypes from 'prop-types';
import {
  Avatar,
  Divider,
  Typography,
  withStyles,
} from 'material-ui';
import { getProfile } from '@/app/helpers/app';

const styles = {
  root: {
    padding: '40px 0 0',
    textAlign: 'center',
    display: 'block',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    color: '#22A39F',
    padding: '0 0 20px',
  },
  subHeader: {
    color: '#000',
    padding: '20px 0 0',
  },
  detail: {
    color: '#000',
    padding: '0 0 50px',
  },
  avatar: {
    margin: 10,
    width: 246,
    height: 246,
  },
  line: {
    width: '80%',
    margin: '0 0 40px',
  },
};

function Profile(props) {
  const { classes } = props;
  
  return (
    <div id="PROFILE" className="component">
      <div className={classes.root}>
        <div className={classes.content}>
          <div data-aos="fade-down">
            <Typography className={classes.header} variant="display2" gutterBottom>
              Profile
            </Typography>
          </div>
          <Divider className={classes.line}/>
          <div data-aos="zoom-in">
            <Avatar
              alt="Chatchai Meesuskabai"
              src="static/images/profile/me.jpg"
              className={classes.avatar}
            />
          </div>
          <div data-aos="fade-up">
            <Typography className={classes.subHeader} variant="headline">
              Chatchai Meesuksabai
            </Typography>
            <Typography className={classes.detail} variant="subheading">
              {
                getProfile().map((profile, index) => (
                  <div key={profile + index}>
                    <br /><strong>{profile[0]}</strong> : {profile[1]}<br />
                  </div>
                ))
              }
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
