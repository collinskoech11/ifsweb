import React from "react";
import Hero from "./sections/Hero";
import Team from "./sections/Team";
import Trademark from "./sections/Trademark";
import TabListing from "../components/TabListing";

function Home() {
  return (
    <>
      <Hero />
      <Trademark />
      <TabListing/>
      <Team />
    </>
  );
}

export default Home;
