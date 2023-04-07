import { test, expect } from "@playwright/test";

test.describe("Framer Motion Tailwind Playground", () => {
  test("should navigate to different pages on button click", async ({
    page,
  }) => {
    // Navigate to the home page of the Framer Motion Tailwind Playground
    await page.goto("http://localhost:4000/framer-motion-tailwind-playground/");

    // Click the "First" button and verify that the URL changes
    await page.getByRole("button", { name: "First" }).click();
    await expect(page).toHaveURL(/.*First/);

    // Click the "Second" button and verify that the URL changes again
    await page.getByRole("button", { name: "Second" }).click();
    await expect(page).toHaveURL(/.*Second/);
  });
});
