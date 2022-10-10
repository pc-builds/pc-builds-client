import React from "react";
import { GridContainer, GridItem } from "../../../components-stateless";
import { ImageOptionCard } from "../index";

export default function ImageCardGrid({ options, onClick, answer }) {
  const handleClick = (id, property, value) => {
    onClick({ id, property, value});
  };

  return (
    <>
      <GridContainer xs={1} sm={2} md={2} lg={3} gap={16}>
        {options &&
          options.map((option) => (
            <GridItem
              key={option.title}
              onClick={() => handleClick(option.id, option.property, option.value)}
            >
              <ImageOptionCard
                image={option.image}
                title={option.title}
                active={!!answer.find(({ id }) => id === option.id)}
              />
            </GridItem>
          ))}
      </GridContainer>
    </>
  );
}
