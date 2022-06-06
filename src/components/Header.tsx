import { Box, Flex, Heading } from "@chakra-ui/react";
import { BorderedBox } from "./shared/BorderedBox";

export function Header() {
  return (
    <BorderedBox h="50px" display="flex" alignItems="center">
      <Flex as="header" p={4} pos="fixed">
        <Heading size="md">Home</Heading>
      </Flex>
    </BorderedBox>
  );
}
