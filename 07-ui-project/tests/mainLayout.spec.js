// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test('should render the main layout correctly', async ({ page }) => {
  await page.goto('/');

  // Check if Navbar title exists
  await expect(page.getByText('DIGITAL BANKING PLATFORM')).toBeVisible();

  // Check if the main dashboard heading is there
  await expect(page.getByRole('heading', { name: /Prospective Customer Segmentation/i })).toBeVisible();
});