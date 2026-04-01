import { test, expect } from '@playwright/test';

test.describe('Customer Segment Cards', () => {

  test.beforeEach(async ({ page }) => {
  // 'networkidle' waits until there are no network connections for at least 500ms
  await page.goto('/', { waitUntil: 'networkidle' });
});

  test('should render multiple cards from mock data', async ({ page }) => {
    // Each Card component has a specific width and height class
    const cards = page.locator('.h-80.w-60');
    
    // This confirms your .map() function is working
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    console.log(`Successfully rendered ${count} cards.`);
  });

  test('individual card should display correct prop data', async ({ page }) => {
    const firstCard = page.locator('.relative.h-80.w-60').first();

    // 1. Check for the ID badge (the span inside the white circle)
    const idBadge = firstCard.locator('span.text-xs');
    await expect(idBadge).not.toBeEmpty();

    // 2. Check for the Content (the h5 tag)
    const cardContent = firstCard.locator('h5');
    await expect(cardContent).toBeVisible();

    // 3. Check for the Button Label
    const actionButton = firstCard.locator('button');
    await expect(actionButton).not.toBeEmpty();
  });
});