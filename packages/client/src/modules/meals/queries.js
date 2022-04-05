import { gql } from "@apollo/client";

export const GET_MEAL_CATEGORIES = gql`
  query GET_MEAL_CATEGORIES {
    categories {
      title
      id
      meals {
        id
        title
        description
        price
      }
    }
  }
`;
