import PropTypes from 'prop-types';
import {
  Divider,
  Typography,
  Grid,
  withStyles,
} from 'material-ui';
import { getSkill, getTool, getLanguage } from '@/app/helpers/app';

const styles = {
  root: {
    padding: '40px 0 0',
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
    color: '#22A39F',
    padding: '40px 0 30px',
    textAlign: 'center',
  },
  detail: {
    color: '#000',
    padding: '20px 0 20px',
  },
  lastDetail: {
    color: '#000',
    padding: '20px 0 80px',
  },
  line: {
    width: '80%',
    margin: '0 0 20px',
  },
  skillContent: {
    width: '80%',
  },
  container: {
    width: '100%',
    backgroundColor: '#ddd',
  },
  skills: {
    textAlign: 'right',
    paddingRight: 20,
    lineHeight: 1.5,
    color: 'white',
  },
};

function Abilities(props) {
  const { classes } = props;
  
  return (
    <div id="ABILITIES" className="component">
      <div className={classes.root}>
        <div className={classes.content}>
          <div data-aos="fade-down">
            <Typography className={classes.header} variant="display2" gutterBottom>
              Abilities
            </Typography>
          </div>
          <Divider className={classes.line}/>
          <div className={classes.skillContent} data-aos="fade-up">
            <Typography className={classes.subHeader} variant="headline">
              <b>Skills</b>
            </Typography>
            <Typography className={classes.detail} variant="subheading">
              <Grid container spacing={24}>
                {
                  getSkill().map((skill, index) => (
                    <Grid item xs={12} sm={6} key={skill + index}>
                      <Grid container spacing={24}>
                        <Grid item xs={12} sm={4}>
                          {skill[1]['title']}
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <div className={classes.container}>
                            <div className={classes.skills} style={{ width: `${skill[1]['percent']}%`, backgroundColor: '#22A39F' }}>{skill[1]['percent']}%</div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                }
              </Grid>
            </Typography>
          </div>
          <div className={classes.skillContent} data-aos="fade-up">
            <Typography className={classes.subHeader} variant="headline">
              <b>Tools</b>
            </Typography>
            <Typography className={classes.detail} variant="subheading">
              <Grid container spacing={24}>
                {
                  getTool().map((tool, index) => (
                    <Grid item xs={12} sm={6} key={tool + index}>
                      <Grid container spacing={24}>
                        <Grid item xs={12} sm={4}>
                          {tool[1]['title']}
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <div className={classes.container}>
                            <div className={classes.skills} style={{ width: `${tool[1]['percent']}%`, backgroundColor: '#22A39F' }}>{tool[1]['percent']}%</div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                }
              </Grid>
            </Typography>
          </div>
          <div className={classes.skillContent} data-aos="fade-up">
            <Typography className={classes.subHeader} variant="headline">
              <b>Languages</b>
            </Typography>
            <Typography className={classes.lastDetail} variant="subheading">
              <Grid container spacing={24}>
                {
                  getLanguage().map((language, index) => (
                    <Grid item xs={12} sm={6} key={language + index}>
                      <Grid container spacing={24}>
                        <Grid item xs={12} sm={4}>
                          {language[1]['title']}
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <div className={classes.container}>
                            <div className={classes.skills} style={{ width: `${language[1]['percent']}%`, backgroundColor: '#22A39F' }}>{language[1]['percent']}%</div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                }
              </Grid>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

Abilities.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Abilities);
