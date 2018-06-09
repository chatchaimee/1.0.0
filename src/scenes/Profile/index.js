import PropTypes from 'prop-types';
import { Avatar, Divider, Typography, withStyles } from '@material-ui/core';
import getData from '~/src/services/api';
import profiles from '~/src/data/profile.json';

const styles = {
	root: {
		padding: '40px 0 0',
		textAlign: 'center',
		display: 'block'
	},
	content: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column'
	},
	header: {
		color: '#22A39F',
		padding: '0 0 20px'
	},
	subHeader: {
		color: '#000',
		padding: '20px 0 0'
	},
	detail: {
		color: '#000',
		padding: '0 0 50px'
	},
	avatar: {
		margin: 10,
		width: 246,
		height: 246
	},
	line: {
		width: '80%',
		margin: '0 0 40px'
	}
};

function Profile (props) {
	const {
		classes, title, name, imgPath
	} = props;
	return (
		<div id="PROFILE" className="component">
			<div className={classes.root}>
				<div className={classes.content}>
					<div data-aos="fade-down">
						<Typography className={classes.header} variant="display2" gutterBottom>
							{title}
						</Typography>
					</div>
					<Divider className={classes.line} />
					<div data-aos="zoom-in">
						<Avatar alt={name} src={imgPath} className={classes.avatar} />
					</div>
					<div data-aos="fade-up">
						<Typography className={classes.subHeader} variant="headline">
							{name}
						</Typography>
						<Typography className={classes.detail} variant="subheading">
							{getData(profiles).map((profile, index) => (
								<div key={profile}>
									<br />
									<strong>{profile[0]}</strong> : {profile[1]}
									<br />
								</div>
							))}
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}

Profile.defaultProps = {
	classes: {}
};

Profile.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		header: PropTypes.string.isRequired,
		subHeader: PropTypes.string.isRequired,
		detail: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		line: PropTypes.string.isRequired
	}),
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	imgPath: PropTypes.string.isRequired
};

export default withStyles(styles)(Profile);
