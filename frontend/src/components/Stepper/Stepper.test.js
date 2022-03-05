import { render, screen } from "@testing-library/react";
import userEven from "@testing-library/user-event";

import Stepper from "./Stepper";

import React from "react";

test("stepper next button", () => {
  const TestComponent = () => {
    const [value, setValue] = React.useState(1);
    return (
      <>
        <Stepper currentStep={value} />
        <button
          data-testid="next-button"
          title={"current-step-" + value}
          onClick={() => setValue(value + 1)}
        ></button>
      </>
    );
  };
  const { getByTestId } = render(<TestComponent />);
  const button = screen.getByTestId("next-button");
  expect(screen.getByTestId("next-button")).toHaveProperty(
    "title",
    "current-step-1"
  );
  userEvent.click(button);
  expect(screen.getByTestId("next-button")).toHaveProperty(
    "title",
    "current-step-2"
  );
});
