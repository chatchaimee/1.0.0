import Layout from '~/src/scenes/Layout';
import Home from '~/src/scenes/Home';
import Profile from '~/src/scenes/Profile';
import Experience from '~/src/scenes/Experience';
import Abilities from '~/src/scenes/Abilities';
import withRoot from '~/src/withRoot';
import { home, profile, experience, abilities } from '~/src/config';
import '~/static/css/styles.css';
import '~/static/css/aos.css';
import '~/static/css/preloader.css';

function Index () {
	return (
		<Layout>
			<Home {...home} />
			<Profile {...profile} />
			<Experience {...experience} />
			<Abilities {...abilities} />
		</Layout>
	);
}

export default withRoot(Index);
