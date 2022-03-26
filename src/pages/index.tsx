import { PageProps, graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout/layout";
import {
  ContentfulBlogPost,
  ContentfulTutorial,
  ContentfulTutorialSeries,
} from "../components/contentful/contentful-types";
import PostCard from "../components/contentful/contentful-blog-post-card";
import TSCard from "../components/contentful/ts-card";

type IndexQueryProps = {
  site: {
    siteMetadata: {
      siteUrl: string;
      title: string;
      description: string;
    };
  };
  allContentfulBlogPost: {
    nodes: [ContentfulBlogPost];
  };
  allContentfulTutorialSeries: {
    nodes: [ContentfulTutorialSeries];
  };
};

type IndexPageProps = PageProps<IndexQueryProps>;

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
  }
`;

const IndexPage: React.FC<IndexPageProps> = (props: IndexPageProps) => {
  console.log("IndexPage");
  console.log(props);
  console.log(props.data.site.siteMetadata.title);
  

  return (
    <Layout pageTitle="Home">
      <title>Home Page</title>
      <h1>دایان برگ</h1>
      <p>دایان برگ تولید کننده قارچ صدفی و شاه صدفی</p>
    </Layout>
  );
};

export default IndexPage;

{/* <p className="text-3xl mt-16 mb-4">تازه‌ها</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {props.data.allContentfulBlogPost.nodes.map((node) => (
    <PostCard
      key={node.id}
      item={node}
      to={`/blog/${node.id}`}
    ></PostCard>
  ))}
</div> */}

// for more info:
// https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript/
// --IMPORTANT-- Does NOT run type checking during build (see Caveats).
// https://github.com/gatsbyjs/gatsby/tree/master/examples/using-typescript
// https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/index.d.ts
// https://github.com/gatsby-inc/gatsby-interface/blob/main/docs/typescript.md
