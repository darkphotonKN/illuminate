import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  console.log('Index Data:', data);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-page">
        <div className="home-intro">
          <h2>Hey, there.</h2>
          <h2 style={{ marginTop: '20px', fontSize: '5rem' }}>I'm Kranti.</h2>

          <div style={{ marginTop: '150px' }}></div>

          <p style={{ marginTop: '40px' }}>
            I've been coding in javascript since 2015 and react since 2017.
          </p>
          <p style={{ marginTop: '40px' }}>
            My primary focus has been on creating complex UI templates and
            building modern websites and applications.
          </p>

          <p style={{ marginTop: '80px' }}>
            Enjoy coding challenges and fiddling on my guitar during my
            pasttime.
          </p>
          <p style={{ marginTop: '40px' }}>
            Dont hesitate to{' '}
            <Link href="/contact">
              <a>contact me</a>
            </Link>
            .
          </p>
        </div>
        <div className="latest-blog">
          <h3>Latest</h3>
          <p>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</p>
          <p>
            {data.allMarkdownRemark.edges[0].node.excerpt}
            {console.log('Test: ', data.allMarkdownRemark.edges[0].node)}
          </p>
          <Link to={'/blog'}>
            <button
              className="btn btn-more"
              style={{ marginTop: '25px', float: 'right' }}
            >
              More
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
