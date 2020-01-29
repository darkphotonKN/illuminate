/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Nav from './nav';
// import './layout.css'; // for component-specific css

const getSiteMetaData = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        author
        createDate
      }
    }
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(getSiteMetaData);

  return (
    <div className="app">
      <Nav />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <section id="main-content">
        <main>{children}</main>
        <footer>
          {data.site.siteMetadata.author} © {data.site.siteMetadata.createDate}
        </footer>
      </section>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
