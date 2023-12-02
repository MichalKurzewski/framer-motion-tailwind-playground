import React from "react";
import { test, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Item from "./Item";

test("renders without crashing", async () => {
  render(<Item label="Test Label" />);
  await expect(screen.getByText("Test Label")).toBeInTheDocument();
});

test("renders children", () => {
  render(
    <Item label="Test Label">
      <div data-testid="test-child" />
    </Item>
  );
  expect(screen.getByTestId("test-child")).toBeInTheDocument();
});

test("triggers onClick handler", async () => {
  let clicked = false;
  const handleClick = () => {
    clicked = true;
  };
  render(<Item label="Test Label" onClick={handleClick} />);

  fireEvent.click(screen.getByText("Test Label"));
  expect(clicked).toBe(true);
});

test("applies additional styling", () => {
  render(<Item label="Test Label" additionalStyling="bg-red-500" />);
  const item = screen.getByText("Test Label");
  expect(item.parentElement).toHaveClass("bg-red-500");
});
