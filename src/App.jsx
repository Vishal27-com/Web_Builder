import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Contentbox from "./Components/Contentbox";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
const App = () => {
  return (
    <Box className="App">
      <Header />
      <Flex gap="20px" m="20px" direction={["column", "row", "row"]}>
        <Sidebar />
        <Contentbox />
      </Flex>
    </Box>
  );
};

export default App;
