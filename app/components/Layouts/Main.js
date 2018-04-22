import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Footer from './Footer';
import { handleScroll } from '@/app/modules/scroll/actions';
import config from '@/app/config';

class Main extends React.Component {
  componentDidMount() {
    const { menus } = config;
    const body = document.getElementsByTagName("BODY")[0];

    setTimeout(() => (body.className += " loaded"), 500);

    this.props.handleScroll(menus);
    this.addScrollEvent();

    AOS.init();
  }

  addScrollEvent() {
    const { menus } = config;

    window.addEventListener("scroll", () => this.props.handleScroll(menus));
  }

  removeScrollEvent() {
    window.removeEventListener("scroll", () => this.props.handleScroll());
  }

  render() {
    const { children } = this.props;
    
    return (
      <div>
        <NavBar {...this.props} />
        { children }
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  windowScroll: state.scroll.windowScroll,
  activeTab: state.scroll.activeTab,
});

const mapDispatchToProps = dispatch => ({
  handleScroll: bindActionCreators(handleScroll, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
