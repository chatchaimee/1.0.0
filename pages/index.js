import Layout from '~/src/scenes/Layout';
import Home from '~/src/scenes/Home';
import Profile from '~/src/scenes/Profile';
import withRoot from '~/src/withRoot';
import { home, profile } from '~/src/config';

function Index () {
	return (
		<Layout>
			<Home {...home} />
			<Profile {...profile} />
		</Layout>
	);
}

export default withRoot(Index);
