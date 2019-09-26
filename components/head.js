import React from 'react';
import NextHead from 'next/head';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = ({
  title, description, url, ogImage,
}) => (
  <NextHead>
    <meta charSet="UTF-8" />
    {/* <title>{title || ''}</title> */}
    <title>{title || 'Niyon'}</title>
    <meta
      name="description"
      content={description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link
      href="https://cdn.jsdelivr.net/npm/inter-ui@3.9.0/inter.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="/static/nprogrss.css" />
    <script src="https://kit.fontawesome.com/51283197d2.js" />
    <meta property="og:url" content={url || defaultOGURL} />
    <meta property="og:title" content={title || ''} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <meta name="twitter:site" content={url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

// Head.propTypes = {
//   title: string.isRequired,
//   description: string.isRequired,
//   url: string.isRequired,
//   ogImage: string.isRequired,
// };

export default Head;
