import Document, {
  Html, Head, Main, NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { bodyStyles } from '../lib/globalStyles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Niyon</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            href="https://cdn.jsdelivr.net/npm/inter-ui@3.9.0/inter.min.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="/static/nprogrss.css" />
          <script src="https://kit.fontawesome.com/51283197d2.js" />
        </Head>
        <body style={bodyStyles}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
