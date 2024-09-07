import { gql } from '@apollo/client';

const GET_BUILDINGS = gql`
  query getBuildings {
    buildings {
      id
      createdAt
      updatedAt
      name
      dateFounded
      address1
      address2
      city
      municipality
      country
      postalCode
    }
  }
`;
export { GET_BUILDINGS };
