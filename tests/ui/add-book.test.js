const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    await page.goto('https://ludmil7703-exam-prep1.onrender.com/add-book');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  