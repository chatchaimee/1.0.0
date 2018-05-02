import Main from '~/app/components/Layouts/Main';
import Home from '~/app/components/Home';
import Profile from '~/app/components/Profile';
import Experience from '~/app/components/Experience';
import Abilities from '~/app/components/Abilities';
import Contact from '~/app/components/Contact';
import withRoot from '~/app/withRoot';
import { reduxConnect } from '~/app/helpers/connect';

const Index = () => {
  return (
    <Main>
      <Home />
      <Profile />
      <Experience />
      <Abilities />
      <Contact />
    </Main>
  );
}

export default reduxConnect()(withRoot(Index));
