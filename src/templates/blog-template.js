import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';

const getMarkdownPosts = graphql`
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

const Blog = ({ data, pageContext }) => {
  const { currentPage, isFirstPage, isLastPage } = pageContext;
  const nextPage = `/blog/${String(currentPage + 1)}`;
  const prevPage =
    currentPage - 1 === 1 ? '/blog' : `/blog/${String(currentPage - 1)}`;

  return (
    <Layout>
      <div>
        <h2 style={{ display: 'inlineBlock', borderBottom: '1px solid' }}>
          Blog
        </h2>

        <h4>Total Blog Posts: {data.allMarkdownRemark.edges.totalCount}</h4>

        {data.allMarkdownRemark.edges.map((item) => (
          <div key={item} style={{ margin: '33px 0' }}>
            <h3>
              {console.log('Item:', item.node.fields.slug)}
              <Link to={`/posts/${item.node.fields.slug}`}>
                {item.node.frontmatter.title}
              </Link>
              <span style={{ color: '#bbb' }}>
                {item.node.frontmatter.date}
              </span>
            </h3>

            <div
              className="main-content"
              dangerouslySetInnerHTML={{ __html: item.node.excerpt }}
            ></div>
          </div>
        ))}

        {/* Pagination */}
        <div>
          {!isFirstPage && (
            <Link to={prevPage} rel="prev">
              Prev Page
            </Link>
          )}

          {!isLastPage && (
            <Link to={nextPage} rel="next">
              Next Page
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(skip: $skip, limit: $limit) {
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
