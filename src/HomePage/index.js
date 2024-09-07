import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const HomePage = () => {
  const [building] = useState(false);
  if (building) {
    return (
      <div>
        <Card className="bg-dark text-white">
          <Card.Img src="royalpalm.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>1821 Jefferson Avenue</Card.Title>
            <Card.Subtitle>Miami Beach, Fl 33139</Card.Subtitle>
            <Card.Text>
              A 21 unit building at the heart of south beach. Great community
              and wonderful neighborhood.
            </Card.Text>
            <Card.Text>Founded in 1974</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
  return <div>No Building selected Right now please add new one</div>;
};

export default HomePage;
