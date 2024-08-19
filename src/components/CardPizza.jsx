import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const CardPizza = ({ foto, titulo, ingredientes, valor }) => {
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={foto} />
        <Card.Title>Pizza {titulo}</Card.Title>
        <ListGroup className="list-group-flush" style={{ fontSize: 'small', alignItems: 'center' }}>
          <ListGroup.Item>
            <strong>Ingredientes:</strong>
            <br />
            <img style={{ width: '20px' }} src='https://web.whatsapp.com/emoji/v1/15/1/2/single/w/64/01f355.png' className='pizzaimg' /> {ingredientes}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body style={{ fontSize: '20px', alignItems: 'center' }}>
          <strong>Precio: ${valor}</strong>
          <br />
          <Button variant="outline-dark" className="me-2" style={{ fontSize: 'small' }}>
            <span className="material-icons"></span> Ver más 👀
          </Button>
          <Button variant="dark" className="me-2" style={{ fontSize: 'small' }}>
            <span className="material-icons"></span> Añadir 🛒
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPizza;