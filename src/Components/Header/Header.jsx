import {
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <Container
      bg="#feca57"
      boxShadow=" 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
      borderRadius="10px"
    >
      <Heading align="center">
        Welcome to <span className={styles.name_in_header}>WebBuilder</span>
      </Heading>
    </Container>
  );
};

export default Header;
