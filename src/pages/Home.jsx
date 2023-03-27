import React from "react";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div className="app-home">
      <div className="home">
        <div id="homeh1">
          <h1>Academia de Estafadores </h1>
        </div>{" "}
        <br />
      </div>
      <div className="video">
        <ReactPlayer url={"https://www.youtube.com/watch?v=PBj8J4G_nmk&t=2s"} />
      </div>
    </div>
  );
};

export default Home;
