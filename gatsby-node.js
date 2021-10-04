const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve) => {
    graphql(`{
      allDatoCmsNewpage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allDatoCmsNewpage.edges.map(({ node: page }) => {
        createPage({
          path: `${page.slug}`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: page.slug,
          },
        })
      })
      resolve()
    })
  })
}