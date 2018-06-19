import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import flush from 'styled-jsx/server';
import getPageContext from '~/src/getPageContext';
import Preloader from '~/src/scenes/Preloader';

class MyDocument extends Document {
	static async getInitialProps (...args) {
		const documentProps = await super.getInitialProps(...args);
		const styles = flush();
		return { ...documentProps, styles };
	}

	render () {
		const sheet = new ServerStyleSheet();
		const main = sheet.collectStyles(<Main />);
		const styleTags = sheet.getStyleElement();
		const { pageContext, buildManifest: { css } } = this.props;

		return (
			<html lang="en" dir="ltr">
				<Head>
					<title>Chatchai Meesuksabai - Developer</title>
					<meta charSet="utf-8" />
					{/* Use minimum-scale=1 to enable GPU rasterization */}
					<meta
						name="viewport"
						content={
							'user-scalable=0, initial-scale=1, ' +
							'minimum-scale=1, width=device-width, height=device-height'
						}
					/>
					{/* PWA primary color */}
					<meta name="theme-color" content={pageContext.theme.palette.primary.main} />
					<link rel="shortcut icon" href="static/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
					/>
					{css.map(file => <link key={file} rel="stylesheet" href={`_next/${file}`} />)}
					{styleTags}
					<script src="static/js/aos.js" async defer />
				</Head>
				<body>
					<Preloader />
					{main}
					<NextScript />
				</body>
			</html>
		);
	}
}

MyDocument.getInitialProps = function (ctx) {
	// Resolution order
	//
	// On the server:
	// 1. page.getInitialProps
	// 2. document.getInitialProps
	// 3. page.render
	// 4. document.render
	//
	// On the server with error:
	// 2. document.getInitialProps
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. page.getInitialProps
	// 3. page.render

	// Get the context of the page to collected side effects.
	const pageContext = getPageContext();
	const page = ctx.renderPage(Component => props => (
		<JssProvider
			registry={pageContext.sheetsRegistry}
			generateClassName={pageContext.generateClassName}
		>
			<Component pageContext={pageContext} {...props} />
		</JssProvider>
	));

	return {
		...page,
		pageContext,
		styles: (
			<React.Fragment>
				<style
					id="jss-server-side"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{
						__html: pageContext.sheetsRegistry.toString()
					}}
				/>
				{flush() || null}
			</React.Fragment>
		)
	};
};

export default MyDocument;
