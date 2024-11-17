import React from "react";
import { Card, Button } from "react-bootstrap";
import { Cart4, ArrowBarRight } from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const CardPizza = ({ name, price, ingredients, img }) => {
  var ingredientes = "";
  ingredients.forEach((ingredient, index) => {
    ingredientes += index === 0 ? `${ingredient}` : `, ${ingredient}`;
  });
  return (
    <Card style={{ width: "18rem", margin: "2em 0 2em 0" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Ingredientes:</Card.Text>
        <Card.Text style={{ display: "flex", justifyContent: "space-evenly" }}>
          <FontAwesomeIcon icon={faPizzaSlice} /> {ingredientes}
        </Card.Text>
        <Card.Text>
          <h3>Precio: ${price}</h3>
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button variant="primary" size="sm">
          Ver Mas <ArrowBarRight />{" "}
        </Button>
        <Button variant="success" size="sm">
          Agregar <Cart4 />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CardPizza;
