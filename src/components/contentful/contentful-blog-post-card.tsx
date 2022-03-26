import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ContentfulBlogPost } from "./contentful-types";
import tw from "twin.macro";

// aspect-ratio: 8/6;
// background: var(--card-bg);
// &:hover {
//   background: var(--card-bg);
//   filter: brightness(var(--hover-brightness));
// }
const Card = tw(Link)`
  grid
  grid-cols-1
  grid-rows-5
  bg-cover
  overflow-hidden
  no-underline  
  rounded-lg
  bg-gray-900/5
  hover:bg-gray-900/10
  dark:bg-gray-100/5
  dark:hover:bg-gray-100/10
`;

type PostCardProps = {
  item: ContentfulBlogPost;
  to: string;
};

const PostCard: React.FC<PostCardProps> = ({ item, to }) => {
  return (
    <Card to={to} style={{ aspectRatio: "8/6" }}>
      {/* color: "var(--text-color)", */}
      <p className="my-1 mx-4 text-xl">{item.title}</p>

      {/* color: "var(--text-color)", */}
      <p className="my-1 mx-4 text-sm opacity-75">{item.description}</p>

      <GatsbyImage
        image={getImage(item.headerImage.gatsbyImageData)}
        alt=""
        className="row-start-1 row-end-4 col-start-1 col-end-1 bg-slate-500/0 self-stretch justify-self-stretch"
      />
    </Card>
  );
};

export default PostCard;
