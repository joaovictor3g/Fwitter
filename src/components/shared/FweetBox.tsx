import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  Icon as ChakraIcon,
} from "@chakra-ui/react";
import { BorderedBox } from "./BorderedBox";

import { GoVerified } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

type Counter = "comments" | "refweets" | "likes";

type ButtonType = {
  Icon: () => JSX.Element;
  name: Counter;
};

const fweet =
  "Lorem ipsum dolor sit, amet consectetur #adipisicing elit. Aliquam dicta optio dignissimos corrupti possimus dolore, repellendus velit neque qui obcaecati tenetur quis labore, in suscipit minima similique provident illum voluptates.";

const buttons: ButtonType[] = [
  {
    Icon: () => <FaRegComment size={16} />,
    name: "comments",
  },
  {
    Icon: () => <AiOutlineRetweet size={18} />,
    name: "refweets",
  },
  {
    Icon: () => <AiOutlineHeart size={18} />,
    name: "likes",
  },
];

export function FweetBox() {
  const [counter, setCounter] = useState({
    comments: 0,
    refweets: 0,
    likes: 0,
  });

  function handleChangeCounter(type: Counter) {
    setCounter({
      ...counter,
      [type]: counter[type] + 1,
    });
  }

  return (
    <BorderedBox display="flex" p="6" gap="20px">
      <Avatar name="João Victor" />

      <Box
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        w="100%"
        gap="10px"
      >
        <Flex gap="5px" alignItems="center">
          <Text as="span">João Victor</Text>
          <GoVerified color="white" />
          <Text as="span" color="gray">
            @joaovictor
          </Text>
        </Flex>
        <Text as="p">{fweet}</Text>

        <ButtonGroup gap="50px">
          {buttons.map(({ Icon, name }) => (
            <Button
              key={name}
              variant="unstyled"
              h="max-content"
              color="gray"
              display="flex"
              gap="5px"
              fontWeight="normal"
              fontSize="13px"
              onClick={() => handleChangeCounter(name)}
            >
              <ChakraIcon as={Icon} />
              <Text>{counter[name]}</Text>
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </BorderedBox>
  );
}
