import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HornedBeast(props) {
  const [favorites, setFavorites] = useState(0);

  const addFavorite = () => {
    setFavorites(favorites + 1);
    props.displayAsModal(props.title);
  };

  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageUrl} onClick={addFavorite} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
          ❤️ Favoritos: {favorites}
        </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default HornedBeast;
