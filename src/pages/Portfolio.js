import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import ProjectCard from "../components/Project";
import SocialMediaCard from "../components/SC_Card";

const Portfolio = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "web_development",
    1: "social_media"
  };

  const indexToTabName = {
    web_development: 0,
    social_media: 1
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/react-portfolio/portfolio/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Web Development" />
          <Tab label="Social Media" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <ProjectCard />}
      {selectedTab === 1 && <SocialMediaCard />}
    </>
  );
};

export default Portfolio;
