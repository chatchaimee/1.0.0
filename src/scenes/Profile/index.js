import PropTypes from 'prop-types';
import { Avatar, Divider, Typography, Grid, withStyles } from '@material-ui/core';
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
		textAlign: 'center',
		color: '#000'
	},
	detailContainer: {
		width: '80%'
	},
	detailContent: {
		textAlign: 'justify',
		color: '#000',
		padding: '40px 0 50px'
	},
	detail: {
		textAlign: 'center'
	},
	avatar: {
		margin: 10,
		width: 246,
		height: 246
	},
	mainLine: {
		width: '80%',
		margin: '0 0 40px'
	},
	subLine: {
		margin: '10px 0 0'
	}
};

function Profile (props) {
	const { classes, title, name, imgPath } = props;
	return (
		<div id="PROFILE" className="component">
			<div className={classes.root}>
				<div className={classes.content}>
					<div data-aos="fade-down">
						<Typography className={classes.header} variant="display2" gutterBottom>
							{title}
						</Typography>
					</div>
					<Divider className={classes.mainLine} />
					<div data-aos="zoom-in">
						<Avatar alt={name} src={imgPath} className={classes.avatar} />
					</div>
					<div className={classes.detailContainer} data-aos="fade-down">
						<Typography className={classes.subHeader} variant="headline">
							{name}
						</Typography>
						<Typography className={classes.detailContent} variant="subheading">
							<Grid container spacing={24}>
								{getData(profiles).map((profile, index) => (
									<Grid item xs={12} sm={12} md={6} key={profile}>
										{profile[0] === 'About me' ? (
											<div>
												<div data-aos="fade-down">
													<Typography
														className={classes.subHeader}
														variant="title"
														style={{ color: '#22A39F' }}
													>
														<strong>{profile[0]}</strong>
													</Typography>
												</div>
												<Divider className={classes.subLine} />
												<div data-aos="fade-up">
													<blockquote>{profile[1]}</blockquote>
												</div>
											</div>
										) : (
											<div>
												<div data-aos="fade-down">
													<Typography
														className={classes.subHeader}
														variant="title"
														style={{ color: '#22A39F' }}
													>
														<strong>{profile[0]}</strong>
													</Typography>
												</div>
												<Divider className={classes.subLine} />
												<div className={classes.detail} data-aos="fade-up">
													<blockquote>
														{getData(profile[1]).map((detail, index) => (
															<div key={detail}>
																<strong>{detail[0]}</strong> : {detail[1]}
															</div>
														))}
													</blockquote>
												</div>
											</div>
										)}
									</Grid>
								))}
							</Grid>
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
		detailContainer: PropTypes.string.isRequired,
		detail: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		mainLine: PropTypes.string.isRequired,
		subLine: PropTypes.string.isRequired
	}),
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	imgPath: PropTypes.string.isRequired
};

export default withStyles(styles)(Profile);
