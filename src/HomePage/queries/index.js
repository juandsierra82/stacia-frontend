import { gql } from '@apollo/client';

const GET_BUILDINGS = gql`
  query getBuildings {
    buildings {
      id
      name
      dateFounded
      address1
      address2
      city
      municipality
      country
      postalCode
      units {
        id
        address
      }
    }
  }
`;
export { GET_BUILDINGS };
