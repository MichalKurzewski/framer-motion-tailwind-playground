import React from "react";
import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Switcher from "./Switcher";
import * as useDarkModeModule from "../../../hooks/useDarkMode";

function mockUseDarkMode(colorTheme: string, setTheme: () => void) {
  const original = useDarkModeModule.default;
  Object.defineProperty(useDarkModeModule, "default", {
    value: () => ({ colorTheme, setTheme }),
    writable: true,
  });
  return () => {
    Object.defineProperty(useDarkModeModule, "default", {
      value: original,
      writable: true,
    });
  };
}

test("renders Switcher component", () => {
  const restore = mockUseDarkMode("light", () => {});
  render(<Switcher />);
  const button = screen.getByTestId("theme-toggle");
  expect(button).toBeTruthy();
  restore();
});

test("renders Moon icon when color theme is light", () => {
  const restore = mockUseDarkMode("light", () => {});
  render(<Switcher />);
  const moonIcon = screen.getByTestId("moon-icon");
  expect(moonIcon).toBeTruthy();
  restore();
});

test("renders Sun icon when color theme is dark", () => {
  const restore = mockUseDarkMode("dark", () => {});
  render(<Switcher />);
  const sunIcon = screen.getByTestId("sun-icon");
  expect(sunIcon).toBeTruthy();
  restore();
});

test("switches theme when clicking on the button", () => {
  let theme = "light";
  const setTheme = () => {
    theme = theme === "light" ? "dark" : "light";
  };
  const restore = mockUseDarkMode("light", setTheme);
  render(<Switcher />);
  const button = screen.getByTestId("theme-toggle");
  fireEvent.click(button);
  expect(theme).toBe("dark");
  restore();
});
