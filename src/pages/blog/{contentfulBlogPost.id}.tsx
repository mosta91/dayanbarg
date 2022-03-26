import { PageProps, graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout/layout";
import { ContentfulBlogPost } from "../../components/contentful/contentful-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ContentfulRichText from "../../components/contentful/rich-text/contentful-rich-text";
import SEO from "../../components/seo";

// TODO: use title as url (filename) - gatsby converts persian url to english (سلام to salam) automatically.
// TODO: search about @sindresorhus/slugify - for url conversion persian to english -- dynamic page
// slugify("سلام بر") -> slam-br

type BlogPostQueryProps = {
  site: {
    siteMetadata: {
      siteUrl: string;
      title: string;
      description: string;
    };
  };
  contentfulBlogPost: ContentfulBlogPost;
};

type BlogPostPageProps = PageProps<BlogPostQueryProps>;

export const query = graphql`
  query ($id: String) {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
    contentfulBlogPost(id: { eq: $id }) {
      id
      title
      headerImage {
        gatsbyImageData
      }
      description
      text {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
          ... on ContentfulCodeBlock {
            contentful_id
            code {
              code
            }
            description
            language
            __typename
          }
        }
      }
    }
  }
`;

const BlogPostPage: React.FC<BlogPostPageProps> = (
  props: BlogPostPageProps
) => {
  console.log("BlogPostPage");
  console.log(props);
  console.log(props.data.site.siteMetadata.title);
  const node = props.data.contentfulBlogPost;
  return (
    <Layout pageTitle="Blog">
      <SEO
        title={node.title}
        description={node.description}
        // image={node.mSeries.mImage..}
        article
      />
      <title>Blog Page</title>
      <h1 className="text-center">{node.title}</h1>
      <h2 className="mt-3 mb-16 text-sm font-normal text-center">
        {node.description}
      </h2>
      <GatsbyImage
        image={getImage(node.headerImage.gatsbyImageData)}
        alt=""
        className="w-4/5 self-center justify-self-center row-start-1 row-end-1 col-start-1 col-end-1 bg-slate-800/10 rounded-lg"
      />
      <ContentfulRichText richText={node.text} />
    </Layout>
  );
};

export default BlogPostPage;
