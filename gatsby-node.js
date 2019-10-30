/**
 * Programmatically create new pages dynamically
 */

const { createFilePath } = require('gatsby-source-filesystem');

// can get access to each node
exports.onCreateNode = ({ node, getNode, actions }) => {
  // actions is using redux behind the scene
  const { createNodeField } = actions;

  // if we find our MarkdownRemark type of node we can create a unique slug for it
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ basePath, getNode, basePath: 'posts' });

    // pass this created file path to createNodeField
    createNodeField({
      node: node,
      name: 'slug',
      value: slug
    });
  }
};
