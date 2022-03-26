import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import persianJs from "persianjs";
import { ContentfulTutorial } from "./contentful-types";
import { getTutorialUrl } from "../../utils/utils";
import tw from "twin.macro";

// background-color: var(--card-bg);
// color: var(--text-color);
// hover filter: brightness(var(--hover-brightness));
const Container = tw(Link)`
  grid
  grid-cols-5
  gap-1
  rounded-xl
  brightness-90
  no-underline
  h-16
  m-0
  bg-gray-900/5
  hover:bg-gray-900/10
  dark:bg-gray-100/5
  dark:hover:bg-gray-100/10
`;

// row ends must deleted
const Number = tw.p`
  row-start-1
  col-start-1
  font-black
  text-center
  text-lg
  rounded-xl
  self-center
  justify-self-center
  z-10
`;

// background-color: var(--card-bg);
const NumberBackground = tw.div`
  row-start-1
  col-start-1
  brightness-50
  rounded-r-lg
  z-0
  bg-gray-900/0
  border-l-gray-900/50
  dark:border-l-gray-300/50  
  border-l-2
`;

const Title = tw.p`
  row-start-1
  row-end-1
  col-start-2
  col-end-6
  px-2
  text-sm
  self-center
  m-0  
`;

type TSCardLIProps = {
  item: ContentfulTutorial;
  seriesSlug: string;
};

const TSCardLI: React.FC<TSCardLIProps> = ({ item, seriesSlug }) => {
  const url = getTutorialUrl(seriesSlug, item.mIndex, item.mSlug);
  return (
    <Container to={url}>
      <NumberBackground></NumberBackground>
      <Number>
        {persianJs(item.mIndex.toString()).englishNumber().toString()}
      </Number>
      <Title>{item.mTitle}</Title>
    </Container>
  );
};

export default TSCardLI;
