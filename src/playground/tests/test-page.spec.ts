import { test, expect } from '@playwright/test';

test('test page shoul work', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('link-e2e-test1-page').click();
  // or await page.getByRole('link', { name: 'E2E Test Page' }).click();
  await page.getByTestId('some-input-field').click();
  await page.getByTestId('some-input-field').fill('aaww344');
  await page.getByTestId('some-button').click();
  await page.getByTestId('some-button').click();
  await page.getByTestId('some-button').click();
  await page.getByTestId('some-button').click();
  await expect(page.getByTestId('some-output')).toHaveText(
    /Some silly other value: 4 with a text of aaww344/
  );
});
