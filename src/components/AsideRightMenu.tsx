import { Flex, List } from "@chakra-ui/react";
import Link from "next/link";

export function AsideRightMenu() {
  return (
    <Flex as="section">
      <Flex
        as="nav"
        borderLeftWidth="1px"
        borderStyle="solid"
        borderColor="border"
        h="100vh"
        position="fixed"
        p="16"
      >
        <List display="flex" flexDir="column" gap="20px"></List>
      </Flex>
    </Flex>
  );
}
