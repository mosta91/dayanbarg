const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const TutorialPage = path.resolve(`src/templates/tutorial.tsx`);
  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allContentfulTutorial(limit: $limit) {
          nodes {
            id
            mSlug
            mSeries {
              id
              mSlug
            }
            mIndex
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allContentfulTutorial.nodes.forEach((node) => {
      console.log("node: ", node.slug);
      createPage({
        // Path for this page — required
        path: `/tutorial/${node.mSeries.mSlug}/${String(node.mIndex).padStart(
          2,
          "0"
        )}-${node.mSlug}`,
        component: TutorialPage,
        context: {
          id: node.id,
          // Add optional context data to be inserted
          // as props into the page component.
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      });
    });
  });
};
