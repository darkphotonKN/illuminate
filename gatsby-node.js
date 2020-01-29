const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');
const template = path.resolve('./src/templates/post-template.js');

/**
 * Programmatically create new pages dynamically
 */

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    // create a custom slug if node type matches MarkdownRemark
    const slug = createFilePath({ node, getNode, basePath: 'posts' });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const query = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const posts = query.data.allMarkdownRemark.edges;

  // create a new page per individual slug
  posts.forEach(({ node: post }) => {
    // create a page per unique post
    createPage({
      // provide path of page
      path: `posts${post.fields.slug}`,
      // provide a react component template
      component: template,
      context: {
        slug: post.fields.slug
      }
    });
  });
};

/**
 * 
 * To then query for these dynamically generated posts in graphql, use:
 * 
 * $slug signifies a variable called "slug", ":String!" denotes it must be a 
 * String and is required
 query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
    }
  }

  QUERY VARIABLES (bottom of GraphiQL window)

  {
    "slug": "/post-two/"
  }

 */
