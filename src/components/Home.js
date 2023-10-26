import React from "react";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} Liza is a Web Developer from  New York{props.city}
      </h1>
    </div>
  );
}

export default Home;
