import React from "react";
import About from './../components/home/About';
import AboutTWo from './../components/home/AboutTwo';
import Banner from './../components/commoncomponents/Banner';
import NoticeBoard from './../components/commoncomponents/NoticeBoard';

const Home = () => {
  return (
    <>
      <Banner/>
      <AboutTWo/>
      <About/>
      <NoticeBoard/>
    </>
  );
};

export default Home;


