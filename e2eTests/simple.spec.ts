import { test, expect } from "@playwright/test";

test("should display the correct title", async ({ page }) => {
  await page.goto("http://localhost:4000/framer-motion-tailwind-playground/");
  await expect(page).toHaveTitle(/Framer Motion Playground/);
});
