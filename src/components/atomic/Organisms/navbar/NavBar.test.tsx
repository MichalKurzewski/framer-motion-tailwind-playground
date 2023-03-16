// NavBar.test.tsx
import { test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => {
      return {
        matches: query.includes("max-width: 639px"), // The breakpoint for sm:hidden media query
        addEventListener: () => {},
        removeEventListener: () => {},
        addListener: () => {},
        removeListener: () => {},
      };
    },
  });
});

test("renders NavBar component", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const switcher = screen.getByTestId("theme-toggle");
  const links = screen.getByTestId("links");
  const menuToggle = screen.getByTestId("menu-toggle");
  expect(switcher).toBeTruthy();
  expect(links).toBeTruthy();
  expect(menuToggle).toBeTruthy();
});

test("toggles menu when clicking the menu toggle button", async () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const menuToggle = screen.getByTestId("menu-toggle");
  fireEvent.click(menuToggle);
  const smallNavbar = await screen.findByTestId("small-navbar");
  expect(smallNavbar).toBeTruthy();
});
