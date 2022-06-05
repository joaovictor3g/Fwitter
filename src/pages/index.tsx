import { AsideMenu } from "@/components/AsideMenu";
import { Box, Heading, Link, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <VStack maxW={1200} w="100%">
      <AsideMenu />
    </VStack>
  );
};

export default Home;
