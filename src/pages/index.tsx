import { FweetBox } from "@/components/shared/FweetBox";
import { WhatHappening } from "@/components/shared/WhatHappening";
import { Page } from "@/layout/Page";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Page>
      <WhatHappening />

      <FweetBox />
      <FweetBox />
      <FweetBox />

      <FweetBox />

      <FweetBox />
    </Page>
  );
};

export default Home;
