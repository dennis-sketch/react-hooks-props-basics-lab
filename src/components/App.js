import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App(props) {
  return (
    <div>
      <NavBar />

      <Home name={props.name} city={props.city}  color={props.color}/>
      <About  about={props.bio}
      github={user.links.github}
      linkedin={user.links.github}/>
      <Links/>
      
    </div>
  );
}

export default App;
