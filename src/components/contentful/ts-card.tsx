import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ContentfulTutorialSeries } from "./contentful-types";
import persianJs from "persianjs";
import ListItem from "./ts-card-li";
import tw from "twin.macro";

// background-color: var(--card-bg);
// hover filter: brightness(var(--hover-brightness));
const Card = tw.div`
  grid
  grid-cols-4
  gap-4
  
  p-0
  overflow-hidden
  
  border-r-gray-900
  dark:border-r-gray-200
  border-r-4
`;
// bg-white/40
//   dark:bg-black/40

const ImageSection = tw.div`
  row-start-1
  row-end-1
  col-start-1
  col-end-1
  self-center
  justify-self-stretch
  overflow-hidden
`;

// transition: transform 0.2s;
const TitleSection = tw.div`
  row-start-1
  row-end-1
  col-start-2
  col-end-5
  self-center
  justify-self-stretch
  overflow-hidden
  text-right
  z-10
`;

// grid-auto-rows: 4rem;
const ListSection = tw.div`
  grid  
  gap-4
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3

  col-start-1
  col-end-5
  row-auto

  p-4
  pt-1
  overflow-y-scroll
  overflow-x-hidden
`;

type TSCardProps = {
  tutorialSeries: ContentfulTutorialSeries;
};

// TS: Tutorial Series
const TSCard: React.FC<TSCardProps> = ({ tutorialSeries }) => {
  const itemList = tutorialSeries.tutorial.sort((a, b) => a.mIndex - b.mIndex);
  return (
    <Card>
      {/* backgroundColor: "var(--card-bg)", */}
      {/* filter: "brightness(var(--hover-brightness))", */}
      <div className="row-start-1 row-end-1 col-start-1 col-end-3"></div>
      <ImageSection>
        <GatsbyImage
          image={getImage(tutorialSeries.mImage.gatsbyImageData)}
          alt=""
        />
      </ImageSection>
      <TitleSection>
        {/* style={{ color: "var(--text-color)", fontSize: "1.1rem" }} */}
        <p className="text-lg">{tutorialSeries.mTitle}</p>
        {/* color: "var(--text-color)", */}
        <p className="opacity-70 text-sm">
          {persianJs(itemList.length.toString()).englishNumber().toString()} بخش
        </p>
      </TitleSection>
      <ListSection>
        {itemList.map((t) => (
          <ListItem
            key={t.id}
            item={t}
            seriesSlug={tutorialSeries.mSlug}
          ></ListItem>
        ))}
      </ListSection>
    </Card>
  );
};

export default TSCard;
