import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import BackButton from '../components/button/backButton';

// getting data props from graphql query below, renaming to "post"
const PostTemplate = ({ data: post }) => {
  return (
    <Layout>
      <BackButton />
      <h2>{post.markdownRemark.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }}></div>
    </Layout>
  );
};

/**
 * This will be executed when our post-template loads, this query will be executed
 * Resolving into a result of the query called "data" given as props
 */
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default PostTemplate;
