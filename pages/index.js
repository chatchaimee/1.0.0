import { Fragment } from 'react';
import Home from '~/src/scenes/Home';
import withRoot from '~/src/withRoot';
import { home } from '~/src/config';

function Index () {
	return (
		<Fragment>
			<Home header={home.header} subHeader={home.subHeader} />
		</Fragment>
	);
}

export default withRoot(Index);
