import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Card from 'react-bootstrap/Card';
import { GET_BUILDINGS } from './queries';

const HomePage = () => {
  const [building, setBuildingState] = useState(false);

  const { loading, error, data } = useQuery(GET_BUILDINGS);
  useEffect(() => {
    if (data && data.buildings.length) {
      setBuildingState(data.buildings[0]);
    }
  }, [data]);
  if (loading) return null;
  if (error) return `Error! ${error}`;
  if (building) {
    return (
      <div>
        <Card className="bg-dark text-white">
          <Card.Img src="royalpalm.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{building.address1}</Card.Title>
            {building.address2 && (
              <Card.Subtitle>{building.address2}</Card.Subtitle>
            )}
            <Card.Subtitle>
              {building.city}, {building.municipality} {building.postalCode}
            </Card.Subtitle>
            <Card.Text>{building.description}</Card.Text>
            <Card.Text>Founded in {building.dateFound || 1974}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
  return <div>No Building selected Right now please add new one</div>;
};

export default HomePage;
