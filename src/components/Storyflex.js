import React from "react";
import Stories from "./Stories";
const Storyflex = () => {
  const storiesuser = [
    { username: "ronny" },
    { username: "junior" },
    { username: "ani" },
    { username: "pooja" },
    { username: "aisha" },
    { username: "hari" },
    { username: "rocky" },
    { username: "cena" },
    { username: "skrill" },
    { username: "supraboi" },
    { username: "burnout" },
    { username: "byg" },
    { username: "cristiano" },
    { username: "luna" },
    { username: "reo" },
    { username: "thar" },
    { username: "tata" },
    { username: "gypsum" },
    { username: "galvar" },
    { username: "race3" },
    { username: "aslam" },
  ];
  return (
    <div className="story-flex">
      {storiesuser.map((storiesuser) => (
        <div className="stories">
          <Stories username={storiesuser.username} />
        </div>
      ))}
    </div>
  );
};
export default Storyflex;
