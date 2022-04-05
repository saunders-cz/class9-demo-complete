import { useQuery } from "@apollo/client";
import React from "react";
import { GET_MEAL_CATEGORIES } from "./queries";
import { Grid, Typography } from "@mui/material";

export const CategoryList = () => {
  const { data, error, loading } = useQuery(GET_MEAL_CATEGORIES);
  if (error) return <Typography>Error! {error.message}</Typography>;
  if (loading) return <Typography>Loading...</Typography>;

  const { categories } = data;
  return (
    <Grid container spacing={2}>
      {categories.map((category, i) => (
        <Grid container spacing={2}>
          <Typography variant="h4">{category.title}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};
