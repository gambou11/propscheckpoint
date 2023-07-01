// Player.js

import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imageURL,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageURL: "",
};

export default Player;

