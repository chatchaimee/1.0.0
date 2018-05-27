/* eslint-disable react/prop-types */

import { Fragment } from 'react';
import App, { Container } from 'next/app';

function Layout ({ children }) {
	return (
		<Fragment>
			{children}
		</Fragment>
	);
}

class MyApp extends App {
	render () {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Container>
		);
	}
}

export default MyApp;
