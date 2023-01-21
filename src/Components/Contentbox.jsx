import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Card from "./Card/Card";

const Contentbox = () => {
  const { state } = useContext(AppContext);
  return (
    <Box w="80%">
      <SimpleGrid columns={["1", "2", "3"]} spacing={5}>
        {state.map((item) => (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Contentbox;
