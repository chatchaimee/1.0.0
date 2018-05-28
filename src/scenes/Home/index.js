import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import HomeStyled from './styles';

function Home ({ header, subHeader }) {
	return (
		<HomeStyled>
			<div className="container">
				<div className="content">
					<Typography className="header" variant="display3" gutterBottom>
						{header}
					</Typography>
					<Typography className="sub-header" variant="display1">
						{subHeader}
					</Typography>
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
