import { Box, Center, Img, Text } from "@chakra-ui/react";
import styles from "./Card.module.css";
const Card = ({ image, title, subtitle }) => {
  return (
    <Box>
      <Center className={styles.cardBox}>
        <Img h="200px" src={image} alt={image} />
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.subtitle}>{subtitle}</Text>
      </Center>
    </Box>
  );
};

export default Card;
