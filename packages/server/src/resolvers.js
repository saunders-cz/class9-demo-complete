import { meals, categories } from "../data/meals.js";

export const resolvers = {
  Query: {
    meals: (parent, args) => {
      return meals.map((meal) => {
        const category = categories.find((c) => c.id === meal.categoryId);
        return {
          ...meal,
          category,
        };
      });
    },
    meal: (parent, args) => {
      const meal = meals.find((m) => m.id === parseInt(args.id));

      if (meal === undefined) {
        return null;
      }
      const category = categories.find((c) => c.id === meal.categoryId);
      return {
        ...meal,
        category,
      };
    },
  },
};
