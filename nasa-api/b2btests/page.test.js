import { test, expect } from '@playwright/test';

test('should load the NASA images page and display images', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await page.waitForSelector('.image-container img')
  const images = await page.$$('.image-container img')
  expect(images.length).toBeGreaterThan(0)
})