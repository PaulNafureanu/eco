import * as React from "react";
import AnnouncementBar from "./announcementBar";
import Header from "./header";
import "./../css/home.css";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div id="Home">
      <AnnouncementBar announcement="Welcome to our store" />
      <Header />
    </div>
  );
};

export default Home;
