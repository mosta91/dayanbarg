import { PageProps, graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout/layout";

type IndexQueryProps = {
  site: {
    siteMetadata: {
      siteUrl: string;
      title: string;
      description: string;
    };
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

const AboutPage: React.FC<IndexPageProps> = (props: IndexPageProps) => {
  console.log("AboutPage");
  console.log(props);
  console.log(props.data.site.siteMetadata.title);
  return (
    <Layout pageTitle="Home">
      <title>About Page</title>
      <h1>درباره دایان برگ</h1>
      <p>دایان برگ تولید کننده قارچ شاه صدفی</p>
      <hr className="w-full"></hr>
    </Layout>
  );
};

export default AboutPage;
