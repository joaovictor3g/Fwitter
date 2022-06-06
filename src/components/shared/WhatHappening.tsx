import { Avatar, Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { BorderedBox } from "./BorderedBox";

export function WhatHappening() {
  const [text, setText] = useState("");

  return (
    <BorderedBox display="flex" p="6" gap="20px">
      <Avatar name="João Victor" />

      <Box
        h="100px"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        w="100%"
      >
        <Input
          variant="unstyled"
          placeholder="What's happening?"
          fontSize="20px"
          value={text}
          onChange={({ target }) => setText(target.value)}
        />

        <Button
          borderRadius="36px"
          bg="blue"
          disabled={!text}
          alignSelf="flex-end"
        >
          Fweet
        </Button>
      </Box>
    </BorderedBox>
  );
}
