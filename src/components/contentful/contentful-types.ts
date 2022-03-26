import { IGatsbyImageData } from "gatsby-plugin-image";

export type ContentfulAsset = {
  contentful_id: string;
  title: string;
  description: string;
  gatsbyImageData: IGatsbyImageData;
  __typename: string;
};

export type ContentfulCodeBlock = {
  contentful_id: string;
  code: {
    code: string;
  };
  language: string;
  description: string;
  __typename: string;
};

export type ContentfulBlogPost = {
  id: string;
  title: string;
  headerImage: {
    gatsbyImageData: IGatsbyImageData;
  };
  description: string;
  text: {
    raw: string;
    references: [ContentfulAsset | ContentfulCodeBlock];
  };
};

export type ContentfulTutorial = {
  id: string;
  mTitle: string;
  mTitleEn: string;
  mSlug: string;
  mSeries: ContentfulTutorialSeries;
  mIndex: number;
  mDescription: string;
  mText: {
    raw: string;
    references: [ContentfulAsset | ContentfulCodeBlock];
  };
};

export type ContentfulTutorialSeries = {
  id: string;
  mTitle: string;
  mTitleEn: string;
  mSlug: string;
  mImage: {
    gatsbyImageData: IGatsbyImageData;
  };
  tutorial: ContentfulTutorial[];
};
