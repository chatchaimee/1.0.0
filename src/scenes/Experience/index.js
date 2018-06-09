import PropTypes from 'prop-types';
import { Divider, Typography } from '@material-ui/core';
import getData from '~/src/services/api';
import educations from '~/src/data/education.json';
import careers from '~/src/data/career.json';
import ExperienceStyled from './styles';

function Experience (props) {
	const { title, sectionContent } = props;
	return (
		<ExperienceStyled>
			<div id="EXPERIENCE" className="component container">
				<div className="content">
					<div data-aos="fade-down">
						<Typography className="header" variant="display2" gutterBottom>
							{title}
						</Typography>
					</div>
					<Divider className="line" />
					<div className="timeline-section">
						<Typography className="sub-header" variant="subheading">
							<div className="row example-centered">
								<ul className="timeline timeline-centered">
									<li className="timeline-item period">
										<div className="timeline-info" />
										<div className="timeline-marker" />
										<div className="timeline-content">
											<h2
												className="timeline-title text-title"
												style={{ color: '#22A39F' }}
												data-aos="fade-up"
											>
												{sectionContent[0]}
											</h2>
										</div>
									</li>
									{getData(educations).map((education, index) => (
										<li key={education} className="timeline-item">
											<div className="timeline-info" data-aos="fade-right">
												<span>{education[1].date}</span>
											</div>
											<div className="timeline-marker" />
											<div className="timeline-content" data-aos="fade-left">
												<h3 className="timeline-title text-title">
													{education[1].title}
												</h3>
												<p>{education[1].detail}</p>
											</div>
										</li>
									))}
									<li className="timeline-item period">
										<div className="timeline-info" />
										<div className="timeline-marker" />
										<div className="timeline-content">
											<h2
												className="timeline-title text-title"
												style={{ color: '#22A39F' }}
												data-aos="fade-up"
											>
												{sectionContent[1]}
											</h2>
										</div>
									</li>
									{getData(careers).map((career, index) => (
										<li key={career} className="timeline-item">
											<div className="timeline-info" data-aos="fade-right">
												<span>{career[1].date}</span>
											</div>
											<div className="timeline-marker" />
											<div className="timeline-content" data-aos="fade-left">
												<h3 className="timeline-title text-title">
													{career[1].title}
												</h3>
												<p>{career[1].detail}</p>
											</div>
										</li>
									))}
								</ul>
							</div>
						</Typography>
					</div>
				</div>
			</div>
		</ExperienceStyled>
	);
}

Experience.propTypes = {
	title: PropTypes.string.isRequired,
	sectionContent: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Experience;
