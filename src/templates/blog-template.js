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
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext;
  const nextPage = `/blog/${String(currentPage + 1)}`;
  const prevPage =
    currentPage - 1 === 1 ? '/blog' : `/blog/${String(currentPage - 1)}`;

  return (
    <Layout>
      <section id="blog">
        <h2 className="section-title">Blog</h2>

        <h4>
          There are currently {data.allMarkdownRemark.totalCount} total blog
          posts.
        </h4>

        {data.allMarkdownRemark.edges.map((item) => (
          <div key={item} className="blog-post-block">
            <h3>
              {console.log('Item:', item.node.fields.slug)}
              <Link to={`/posts/${item.node.fields.slug}`}>
                {item.node.frontmatter.title}
              </Link>
              <span style={{ color: '#bbb', marginLeft: '12px' }}>
                {item.node.frontmatter.date}
              </span>
            </h3>

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: item.node.excerpt }}
            ></div>
          </div>
        ))}

        {/* Pagination */}
        <div className="pagination">
          {!isFirstPage && (
            <Link to={prevPage} rel="prev">
              Prev Page
            </Link>
          )}
          {/* Making a length of an array with total length supplied, as well mapping over with a build in map function */}
          {Array.from({ length: totalPages }, (_, index) => (
            <Link to={`/blog/${index === 0 ? '' : index + 1}`} key={index}>
              {index + 1}
            </Link>
          ))}

          {!isLastPage && (
            <Link to={nextPage} rel="next">
              Next Page
            </Link>
          )}
        </div>
      </section>
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
