import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
        }
      }
    }
  }
`;

const Blog = () => {
  return (
    <Layout>
      <div>
        <h2 style={{ display: 'inlineBlock', borderBottom: '1px solid' }}>
          Blog
        </h2>

        <StaticQuery
          query={getMarkdownPosts}
          render={(data) => (
            <>
              <h4>Total Blog Posts: {data.allMarkdownRemark.totalCount}</h4>

              {data.allMarkdownRemark.edges.map((item) => (
                <div key={item} style={{ margin: '33px 0' }}>
                  <h3>
                    {item.node.frontmatter.title}{' '}
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
            </>
          )}
        />
      </div>
    </Layout>
  );
};

export default Blog;
