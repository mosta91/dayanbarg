import React from "react";
import PropTypes from "prop-types";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Options } from "@contentful/rich-text-react-renderer";
import "./elements";
import { Code, Hyperlink, LI, OL, UL } from "./elements";

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
    [MARKS.ITALIC]: (text) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => {
      if (text.toString().startsWith("||"))
        return (
          <pre>
            <Code>{text.toString().substring(2).replace("===", "\n")}</Code>
          </pre>
        );
      else
        return (
          <span>
            <code>{text}</code>
          </span>
        );
    },
  },

  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <Hyperlink href={node.data.uri} target="_blank" rel="noreferrer">
        {children}
      </Hyperlink>
    ),
    [BLOCKS.HEADING_1]: (node, children) => <h1> {children} </h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2> {children} </h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3> {children} </h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4> {children} </h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5> {children} </h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6> {children} </h6>,
    [BLOCKS.OL_LIST]: (node, children) => <OL> {children} </OL>,
    [BLOCKS.UL_LIST]: (node, children) => <UL> {children} </UL>,
    [BLOCKS.LIST_ITEM]: (node, children) => <LI> {children} </LI>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="leading-loose">{children}</p>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>"{children}"</blockquote>,
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target;
      return (
        <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const { __typename } = node.data.target;
      switch (__typename) {
        case "ContentfulCodeBlock":
          const { language, code } = node.data.target;
          return (
            <pre className={language}>
              <Code>{code.code}</Code>
            </pre>
          );
        default:
          return null;
      }
    },
  },
};

const ContentfulRichText = ({ richText }) => {
  const r = renderRichText(richText, options);
  // console.log(JSON.stringify(richText, null, 2));
  return <div>{r}</div>;
};

ContentfulRichText.propTypes = {
  richText: PropTypes.any.isRequired,
};

export default ContentfulRichText;
