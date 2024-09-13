import { gql } from '@apollo/client';

const UPSERT_BUILDING = gql`
  mutation upsertBuilidngs(
    $where: BuildingWhereInput
    $create: BuildingDataInput
    $update: BuildingDataInput
  ) {
    upsertBuilding(create: $create, where: $where, update: $update) {
      id
      name
      address1
      address2
      dateFounded
      city
      municipality
      postalCode
      country
      description
      units {
        id
        address
      }
    }
  }
`;

export { UPSERT_BUILDING };
