import React from "react";
import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SidePanel from "./SidePanel";

test("renders SidePanel component", () => {
  render(<SidePanel />);
  const sidePanel = screen.getByTestId("links-text");
  expect(sidePanel).toBeTruthy();
});

test("renders Home and GitHub links", () => {
  render(<SidePanel />);
  const homeLink = screen.getByTestId("link-Codeng.co.uk");
  const githubLink = screen.getByTestId("link-Github repo");
  expect(homeLink).toBeTruthy();
  expect(githubLink).toBeTruthy();
});

test("opens SidePanel when hovering", async () => {
  render(<SidePanel />);
  const sidePanel = screen.getByTestId("links-text");
  fireEvent.mouseEnter(sidePanel);
  const homeLink = await screen.findByTestId("link-Codeng.co.uk");
  const githubLink = await screen.findByTestId("link-Github repo");
  expect(homeLink).toBeTruthy();
  expect(githubLink).toBeTruthy();
});
