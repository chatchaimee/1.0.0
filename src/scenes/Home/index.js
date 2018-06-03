import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { scrollOptions } from '~/src/config';
import handleClickAndScrollToTarget from '~/src/helpers/scroll';
import HomeStyled from './styles';

function Home ({ header, subHeader }) {
	return (
		<HomeStyled>
			<div id="HOME" className="component container">
				<div className="content">
					<div data-aos="zoom-in" data-aos-delay="1000">
						<Typography className="header" variant="display3" gutterBottom>
							{header}
						</Typography>
					</div>
					<div data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1400">
						<Typography className="sub-header" variant="display1">
							{subHeader}
						</Typography>
					</div>
					<div className="btn-scroll">
						<a onClick={() => handleClickAndScrollToTarget('PROFILE', scrollOptions)}>
							<span />
						</a>
					</div>
				</div>
			</div>
		</HomeStyled>
	);
}

Home.propTypes = {
	header: PropTypes.string.isRequired,
	subHeader: PropTypes.string.isRequired
};

export default Home;
