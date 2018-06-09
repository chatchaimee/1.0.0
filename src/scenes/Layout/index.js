/* eslint-disable react/prop-types, no-undef */

import { Fragment, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import handleScroll from '~/src/services/scroll/actions';
import { layout, footer } from '~/src/config';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

class Layout extends PureComponent {
	componentDidMount () {
		const { navbar } = layout;
		const body = document.getElementsByTagName('BODY')[0];

		AOS.init();

		this.props.handleScroll(navbar.menus);
		this.addScrollEvent(navbar.menus);

		setTimeout(() => {
			body.className += ' loaded';
		}, 500);
	}

	addScrollEvent (menus) {
		window.addEventListener('scroll', () => this.props.handleScroll(menus));
	}

	removeScrollEvent () {
		window.removeEventListener('scroll', () => this.props.handleScroll());
	}

	render () {
		const { children, scroll, activeTab } = this.props;
		const { navbar } = layout;

		return (
			<Fragment>
				<NavBar title={navbar.title} scroll={scroll} activeTab={activeTab} />
				{children}
				<Footer {...footer} />
			</Fragment>
		);
	}
}

function mapStateToProps (state) {
	return {
		scroll: state.scroll.scroll,
		activeTab: state.scroll.activeTab
	};
}

function mapDispatchToProps (dispatch) {
	return {
		handleScroll: bindActionCreators(handleScroll, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
