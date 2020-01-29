import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-page">
      <h2>Hey, there.</h2>
      <h2>I'm Kranti.</h2>
      <h2> Nice to meet you.</h2>

      <div style={{ marginTop: '150px' }}></div>

      <p style={{ marginTop: '40px' }}>
        I've been coding in javascript since 2015 and react since 2017.
      </p>
      <p style={{ marginTop: '40px' }}>
        My primary focus has been on creating complex UI templates and building
        modern websites and applications.
      </p>

      <p style={{ marginTop: '80px' }}>
        Enjoy coding challenges and fiddling on my guitar during my pasttime.
      </p>
      <p style={{ marginTop: '40px' }}>
        Dont hesitate to{' '}
        <Link href="/contact">
          <a>contact me</a>
        </Link>
        .
      </p>
    </div>
  </Layout>
);

export default IndexPage;
