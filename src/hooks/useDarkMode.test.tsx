import { test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import useDarkMode from "./useDarkMode";

const TestComponent: React.FC = () => {
  const { colorTheme, setTheme } = useDarkMode();

  return (
    <button data-testid="test-button" onClick={() => setTheme(colorTheme)}>
      {colorTheme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
};

test("useDarkMode hook changes theme on button click", () => {
  render(<TestComponent />);
  const button = screen.getByTestId("test-button");
  expect(button.innerHTML).toContain("Switch to Light");

  fireEvent.click(button);
  expect(button.innerHTML).toContain("Switch to Dark");

  fireEvent.click(button);
  expect(button.innerHTML).toContain("Switch to Light");
});
