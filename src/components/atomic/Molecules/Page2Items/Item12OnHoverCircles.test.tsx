import { test } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Item12OnHoverCircles from "./Item12OnHoverCircles";


test("renders without crashing", () => {
  render(<Item12OnHoverCircles />);
  expect(screen.getByText("Radial menu")).toBeInTheDocument();
});

test("renders initial number of children", () => {
  render(<Item12OnHoverCircles initNumberOfChildren={4} />);
  expect(screen.getAllByText(/Item\d+/)).toHaveLength(4);
});

test("hovering expands menu", async () => {
  render(<Item12OnHoverCircles />);
  const radialMenu = screen.getByText("Radial menu");

  fireEvent.mouseEnter(radialMenu);
  const items = await screen.findAllByText(/Item\d+/);
  expect(items).toHaveLength(4);
});

test("changing input value updates number of children", async () => {
  render(<Item12OnHoverCircles initNumberOfChildren={4} />);
  const input = screen.getByRole("slider");
  fireEvent.input(input, { target: { value: "6" } });

  fireEvent.mouseEnter(screen.getByText("Radial menu"));
  const items = await screen.findAllByText(/Item\d+/);
  expect(items).toHaveLength(6);
});