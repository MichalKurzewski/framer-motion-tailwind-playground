import { test, expect } from "@playwright/test";

test.describe("test", () => {
  test("test", async ({ page }) => {
    await page.goto("http://localhost:4000/framer-motion-tailwind-playground/");
    await page.getByRole("button", { name: "First" }).click();
    await expect(page).toHaveURL(/.*First/);
    await page.getByRole("button", { name: "Second" }).click();
    await expect(page).toHaveURL(/.*Second/);
  });
});
