import { Link } from "gatsby";
import React from "react";
import persianJs from "persianjs";
import { ContentfulTutorial } from "./contentful-types";
import { getTutorialUrl } from "../../utils/utils";
import tw from "twin.macro";
import styled from "styled-components";

// color: var(--text-color);
const Container0 = tw(Link)`
  block
  py-0
  px-4
  rounded
  no-underline
`;

const Container = styled(Container0)<{ isRight: boolean }>(({ isRight }) => ({
  textAlign: `${isRight === true ? "right" : "left"}`,
}));

const Title = tw.div`
  row-start-1     
  row-end-1  
  col-start-2
  col-end-2
  text-sm
  self-center
`;

type TCardProps = {
  item: ContentfulTutorial;
  seriesSlug: string;
  isRight: boolean;
};

const TCard: React.FC<TCardProps> = ({ item, seriesSlug, isRight }) => {
  const url = getTutorialUrl(seriesSlug, item.mIndex, item.mSlug);
  return (
    <Container to={url} isRight={isRight}>
      <p className="opacity-90">{!isRight ? "گام بعدی" : "گام قبلی"}</p>
      <p className="font-black text-3xl m-0">
        {persianJs(item.mIndex.toString()).englishNumber().toString()}
      </p>
      <Title>
        <h4>{item.mTitle}</h4>
      </Title>
    </Container>
  );
};

export default TCard;
