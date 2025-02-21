import React from "react";
import PCgame_intro from './PCgame_intro'
import PC_develoopment from './PC_develoopment'
import GameDevelopmentProcess from './GameDevelopmentProcess'
import GameDevTools from './GameDevTools'
import Benefits from "./Benefits";


const Body = () => {
  return (
    <div>
      <PCgame_intro/>
      <PC_develoopment/>
      <GameDevelopmentProcess/>
      <GameDevTools/>
      <Benefits/>
    </div>
  );
};

export default Body;
