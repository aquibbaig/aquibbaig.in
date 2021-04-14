const escapeStringRegexp = require("escape-string-regexp");
const pagePath = `content`;
const contentIndex = `Posts`;
const pathIndex = `Pages`;
const contentQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  },
}`
const pathQuery = `{
  paths: allSitePage {
    edges {
      node {
        path
        id
      }
    }
  }
}`
function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}
function pathToAlgoliaRecord({ node: { path, id, ...rest } }) {
  return {
    objectID: id,
    path,
    ...rest,
  }
}
const queries = [
  {
    query: contentQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName: contentIndex,
    // settings: { attributesToSnippet: [`excerpt:20`] },
  },
  {
    query: pathQuery,
    transformer: ({ data }) => data.paths.edges.map(pathToAlgoliaRecord),
    indexName: pathIndex,
  }
]
module.exports = queries
