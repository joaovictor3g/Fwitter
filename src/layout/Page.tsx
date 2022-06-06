import { AsideMenu } from "@/components/AsideMenu";
import { AsideRightMenu } from "@/components/AsideRightMenu";
import { Header } from "@/components/Header";
import { Box, Grid } from "@chakra-ui/react";

export function Page({ children }: any) {
  return (
    <Grid templateColumns="275px 600px 325px" maxW="1200px" w="100%" m="0 auto">
      <AsideMenu />
      <Box as="section">
        <Header />
        {children}
      </Box>
      <AsideRightMenu />
    </Grid>
  );
}
