import { render } from "@testing-library/react";
import FoodItem from "./FoodItem";

test("renders FoodItem component", () => {
  render(
    <FoodItem
      food={[
        "chickenBreast",
        {
          calories: "154kcal",
          name: "Chicken Breast",
          nutrients: {},
          serving: "100",
          unit: "gram",
        },
      ]}
    />
  );
});
