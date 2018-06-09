import PropTypes from 'prop-types';
import { Divider, Typography, Grid } from '@material-ui/core';
import getData from '~/src/services/api';
import skills from '~/src/data/skill.json';
import tools from '~/src/data/tool.json';
import languages from '~/src/data/language.json';
import AbilitiesStyled from './styles';

function Abilities (props) {
	const { title, sectionContent } = props;
	const datas = {
		Skills: skills,
		Tools: tools,
		Languages: languages
	};
	return (
		<AbilitiesStyled>
			<div id="ABILITIES" className="component container">
				<div className="content">
					<div data-aos="fade-down">
						<Typography className="header" variant="display2" gutterBottom>
							{title}
						</Typography>
					</div>
					<Divider className="line" />
					{sectionContent.map((section, index) => (
						<div className="skill-content" data-aos="fade-up" key={section}>
							<Typography className="sub-header" variant="headline">
								<strong>{section}</strong>
							</Typography>
							<Typography className="detail" variant="subheading">
								<Grid container spacing={24}>
									{getData(datas[section]).map((skill, index) => (
										<Grid item xs={12} sm={6} key={skill}>
											<Grid container spacing={24}>
												<Grid item xs={12} sm={4}>
													<div data-aos="zoom-in">{skill[1].title}</div>
												</Grid>
												<Grid item xs={12} sm={8}>
													<div
														className="load-container"
														data-aos="fade-right"
													>
														<div
															className="skill-name"
															style={{
																width: `${skill[1].percent}%`,
																backgroundColor: '#22A39F'
															}}
														>
															{skill[1].percent}%
														</div>
													</div>
												</Grid>
											</Grid>
										</Grid>
									))}
								</Grid>
							</Typography>
						</div>
					))}
					<div className="last-detail" />
				</div>
			</div>
		</AbilitiesStyled>
	);
}

Abilities.propTypes = {
	title: PropTypes.string.isRequired,
	sectionContent: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Abilities;
