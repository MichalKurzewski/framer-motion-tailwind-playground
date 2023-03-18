// tests/components/Item12OnHoverCircles.spec.tsx

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Item12OnHoverCircles from "./Item12OnHoverCircles";

describe("Item12OnHoverCircles", () => {
  it("renders without crashing", () => {
    render(<Item12OnHoverCircles />);
    expect(screen.getByText("Radial menu")).toBeInTheDocument();
  });

  it("shows children items when hovering over the radial menu", async () => {
    render(<Item12OnHoverCircles numChildren={7} />);

    const radialMenu = screen.getByText("Radial menu");
    fireEvent.mouseEnter(radialMenu);

    await screen.findByText("Item1");
    await screen.findByText("Item2");
    await screen.findByText("Item3");
    await screen.findByText("Item4");
    await screen.findByText("Item5");
    await screen.findByText("Item6");
    await screen.findByText("Item7");
  });

  it("hides children items when not hovering over the radial menu", async () => {
    render(<Item12OnHoverCircles numChildren={7} />);

    const radialMenu = screen.getByText("Radial menu");
    fireEvent.mouseEnter(radialMenu);

    await screen.findByText("Item1");
    fireEvent.mouseLeave(radialMenu);

    expect(screen.queryByText("Item1")).not.toBeVisible();
    expect(screen.queryByText("Item2")).not.toBeVisible();
    expect(screen.queryByText("Item3")).not.toBeVisible();
    expect(screen.queryByText("Item4")).not.toBeVisible();
    expect(screen.queryByText("Item5")).not.toBeVisible();
    expect(screen.queryByText("Item6")).not.toBeVisible();
    expect(screen.queryByText("Item7")).not.toBeVisible();
  });
});
