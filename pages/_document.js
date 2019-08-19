import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body style={{ margin: 0, padding: 0, fontFamily: 'Lato' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}