import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";

import Layout from "../layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Asesora Sandra Sánchez</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
