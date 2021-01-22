import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import SwipeButtons from "./SwipeButtons";
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/tinder/cards");

      setPeople(res.data);
    }

    fetchData();
  }, []);

  console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log(nameToDelete + " left the screen");
  };
   
  const outOfFrame = (name) => {
    console.log(name + ' left the screen');
  };

    return (
      <>
      <div className="tinderCards">
        <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div style={{backgroundImage: `url(${person.imgUrl})` }}
            className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
        </div>
      </div>
      <div>
          <SwipeButtons users={people} swiped={swiped} />
      </div>
      </>
    );

}

export default TinderCards;
