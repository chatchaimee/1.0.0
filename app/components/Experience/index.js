import PropTypes from 'prop-types';
import {
  Divider,
  Typography,
  withStyles,
} from 'material-ui';
import { getEducation, getCareer } from '@/app/helpers/app';

const styles = {
  root: {
    padding: '40px 0 0',
    display: 'block',
    background: '#E4EAEC',
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
    padding: '0 0 20px',
  },
  line: {
    width: '80%',
    margin: '0 0 20px',
  },
  timelineContent: {
    width: '80%',
  },
};

function Experience(props) {
  const { classes } = props;
  
  return (
    <div id="EXPERIENCE" className="component">
      <div className={classes.root}>
        <div className={classes.content}>
          <div data-aos="fade-down">
            <Typography className={classes.header} variant="display2" gutterBottom>
              Experience
            </Typography>
          </div>
          <Divider className={classes.line}/>
          <div className={classes.timelineContent}>
            <Typography className={classes.subHeader} variant="subheading">
              <div className="row example-centered">
                <ul className="timeline timeline-centered">
                  <li className="timeline-item period">
                    <div className="timeline-info"></div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h2 className="timeline-title text-title" style={{ color: '#22A39F' }} data-aos="fade-up">Education</h2>
                    </div>
                  </li>
                  {
                    getEducation().map((education, index) => (
                      <li key={education + index} className="timeline-item">
                        <div className="timeline-info" data-aos="fade-right">
                          <span>{education[1]['date']}</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content" data-aos="fade-left">
                          <h3 className="timeline-title text-title">{education[1]['title']}</h3>
                          <p>{education[1]['detail']}</p>
                        </div>
                      </li>
                    ))
                  }
                  <li className="timeline-item period">
                    <div className="timeline-info"></div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h2 className="timeline-title text-title" style={{ color: '#22A39F' }} data-aos="fade-up">Career</h2>
                    </div>
                  </li>
                  {
                    getCareer().map((career, index) => (
                      <li key={career + index} className="timeline-item">
                        <div className="timeline-info" data-aos="fade-right">
                          <span>{career[1]['date']}</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content" data-aos="fade-left">
                          <h3 className="timeline-title text-title">{career[1]['title']}</h3>
                          <p>{career[1]['detail']}</p>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);
