import React from "react";
import { GridContainer, GridItem } from "../../../components-stateless";
import { OptionCard } from "../index";

export default function CardGrid({ options, onClick, answer }) {
  const handleClick = (id, property, value) => {
    onClick({ id, property, value});
  };

  return (
    <>
      <GridContainer xs={1} sm={2} md={3} gap={16}>
        {options &&
          options.map((option) => (
            <GridItem
              key={option.title}
              onClick={() => handleClick(option.id, option.property, option.value)}
            >
              <OptionCard
                description={option.description}
                title={option.title}
                active={!!answer.find(({ id }) => id === option.id)}
              />
            </GridItem>
          ))}
      </GridContainer>
    </>
  );
}
