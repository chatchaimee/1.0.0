import PropTypes from 'prop-types';
import FooterStyled from './styles';

function Footer ({ facebook, linkedin, github }) {
	return (
		<FooterStyled>
			<div className="container">
				<div className="content">
					<div className="contact">
						<a
							className="icon"
							href={facebook}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa fa-facebook-square fa-2x" />
						</a>
						<a
							className="icon"
							href={linkedin}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa fa-linkedin-square fa-2x" />
						</a>
						<a className="icon" href={github} target="_blank" rel="noopener noreferrer">
							<i className="fa fa-github-square fa-2x" />
						</a>
					</div>
				</div>
			</div>
		</FooterStyled>
	);
}

Footer.propTypes = {
	facebook: PropTypes.string.isRequired,
	linkedin: PropTypes.string.isRequired,
	github: PropTypes.string.isRequired
};

export default Footer;
