import React from "react";
import Suggestions from "./Suggestions";
const Suggestedforu = () => {
  const suggestions = [
    { user: "Hariraj", username: "hr999" },
    { user: "Pluto", username: "plut0_9" },
    { user: "James", username: "jypsyhunt" },
    { user: "Klan", username: "clanwith_k" },
    { user: "Ani", username: "Anyketh" },
  ];
  return (
    <div className="suggested-for-you-box">
      <header>
        <h4>Suggestions for you</h4>
        <div className="mybtn-again">See all</div>
      </header>
      {suggestions.map((suggestions) => (
        <Suggestions user={suggestions.user} username={suggestions.username} />
      ))}
    </div>
  );
};
export default Suggestedforu;
