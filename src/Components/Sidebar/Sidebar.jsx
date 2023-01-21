import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
const initdetails = {
  image: "",
  title: "",
  subtitle: "",
};
const Sidebar = () => {
  const [formData, setFormData] = useState(initdetails);
  const { state, setState } = useContext(AppContext);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submitHandler = () => {
    setState([...state, formData]);
  };
  return (
    <Box w={["100%", "50%", "20%"]}>
      <Stack bg="#54a0ff" p="10px" borderRadius="10px">
        <Text fontSize="25px" fontWeight="600" align="center">
          Details
        </Text>
        <Input
          type="url"
          name="image"
          placeholder="URL"
          onChange={changeHandler}
        />
        <Input
          type="text"
          name="title"
          placeholder="Title"
          onChange={changeHandler}
        />
        <Input
          type="text"
          name="subtitle"
          placeholder="Sub-Title"
          onChange={changeHandler}
        />
        <Button onClick={submitHandler} colorScheme="blue">
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default Sidebar;
