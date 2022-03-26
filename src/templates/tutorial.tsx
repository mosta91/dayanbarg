import { PageProps, graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ContentfulRichText from "../components/contentful/rich-text/contentful-rich-text";
import {
  ContentfulTutorial,
  ContentfulTutorialSeries,
} from "../components/contentful/contentful-types";
import persianJs from "persianjs";
import TCard from "../components/contentful/t-card";
import SEO from "../components/seo";

// TODO: use title as url (filename) - gatsby converts persian url to english (سلام to salam) automatically.
// TODO: search about @sindresorhus/slugify - for url conversion persian to english -- dynamic page
// slugify("سلام بر") -> slam-br
// solution: use gatsby-node.js for building dynamic pages

type TutorialQueryProps = {
  site: {
    siteMetadata: {
      siteUrl: string;
      title: string;
      description: string;
    };
  };
  contentfulTutorial: ContentfulTutorial;
  // allContentfulTutorialSeries: ContentfulTutorialSeries[];
};

type TutorialPageProps = PageProps<TutorialQueryProps>;

export const query = graphql`
  query ($id: String) {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
    contentfulTutorial(id: { eq: $id }) {
      id
      mTitle
      mTitleEn
      mSeries {
        id
        mTitle
        mTitleEn
        mSlug
        mImage {
          gatsbyImageData
        }
        tutorial {
          id
          mTitle
          mSlug
          mDescription
          mIndex
        }
      }
      mIndex
      mDescription
      mText {
        raw
      }
    }
  }
`;

const TutorialPage: React.FC<TutorialPageProps> = (
  props: TutorialPageProps
) => {
  console.log("TutorialPage");
  console.log(props);
  console.log(props.data.site.siteMetadata.title);
  const node = props.data.contentfulTutorial;
  const tutorialNodes = props.data.contentfulTutorial.mSeries.tutorial.sort(
    (a, b) => a.mIndex - b.mIndex
  );
  return (
    <Layout pageTitle="Blog">
      <SEO
        title={node.mTitle}
        description={node.mDescription}
        // image={node.mSeries.mImage..}
        article
      />
      <title>Blog Page</title>
      {/* color: "var(--text-color)", */}
      <p className="text-center mt-4">{node.mSeries.mTitle}</p>
      <p className="text-6xl text-center mt-4">
        {persianJs(node.mIndex.toString()).englishNumber().toString()}
      </p>
      <h1 className="text-center">{node.mTitle}</h1>
      <h2 className="mt-3 mb-16 text-sm font-normal text-center">
        {node.mDescription}
      </h2>
      {/* background: "var(--card-bg)", */}
      <GatsbyImage
        image={getImage(node.mSeries.mImage.gatsbyImageData)}
        alt=""
        className="w-4/5 self-center justify-self-center row-start-1 row-end-1 col-start-1 col-end-1 bg-slate-800/10 rounded-lg"
      />
      <ContentfulRichText richText={node.mText} />

      <div className="grid grid-cols-2 gap-8 mt-24">
        {/* prev */}
        {1 < node.mIndex ? (
          <TCard
            item={tutorialNodes[node.mIndex - 2]}
            seriesSlug={node.mSeries.mSlug}
            isRight={true}
          ></TCard>
        ) : (
          <p></p>
        )}

        {/* next */}
        {tutorialNodes.length > node.mIndex ? (
          <TCard
            item={tutorialNodes[node.mIndex]}
            seriesSlug={node.mSeries.mSlug}
            isRight={false}
          ></TCard>
        ) : (
          <p></p>
        )}
      </div>
    </Layout>
  );
};

export default TutorialPage;
