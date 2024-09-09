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
