"use client"
import React from "react";
import { Card, Heading, Icon } from "@chakra-ui/react";

const InterestsCard = ({ interest, icon }) => {
  
  return (
    <Card
      display="grid"
      gridTemplateColumns="30% 70%"
      alignItems="center"
      width={["80vw","80vw","17.5rem"]}
      height="5rem"
      borderRadius="0"
      backgroundColor="#213363"
      fontSize="2.5rem"
      padding="16px"
      cursor="pointer"
      transition="background-color .3s ease-in-out"
      _hover={{
        backgroundColor: "#213d8d",
      }}
    >
      <Icon as={icon} />
      <Heading size="md">{interest}</Heading>
    </Card>
  );
};

export default InterestsCard;