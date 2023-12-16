const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    await page.goto('https://ludmil7703-exam-prep1.onrender.com/books');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  