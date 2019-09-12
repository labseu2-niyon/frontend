import React, { Component } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from './head';


Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


export default class Page extends Component {
  render() {
    return (
      <Head />
    );
  }
}
