import React from "react";
import { GridContainer, GridItem } from "../../../components-stateless";
import { OptionCard } from "../index";

export default function CardGrid({ options, onClick, answer }) {
  const handleClick = (value) => {
    onClick(value);
  };

  console.log(answer);

  return (
    <>
      <GridContainer xs={1} sm={2} md={3} gap={16}>
        {options &&
          options.map((option) => (
            <GridItem
              key={option.title}
              onClick={() => handleClick(option.value)}
            >
              <OptionCard
                description={option.description}
                title={option.title}
                active={answer === option.value}
              />
            </GridItem>
          ))}
      </GridContainer>
    </>
  );
}
