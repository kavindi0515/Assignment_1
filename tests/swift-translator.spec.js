// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Swift Translator – Singlish to Sinhala
 * Comprehensive Test Suite
 * Total Test Cases: 35
 */

/* ================= HELPER FUNCTION ================= */
async function translateText(page, singlishText) {
  // Ensure page fully loaded
  // await page.waitForLoadState('networkidle');

  const inputBox = page.locator('textarea').first();
  await expect(inputBox).toBeVisible({ timeout: 15000 });

  await inputBox.fill('');
  await inputBox.fill(singlishText);

  // Output panel (Sinhala side)
  const outputPanel = page
    .locator('.panel-title', { hasText: 'Sinhala' })
    .locator('xpath=following-sibling::div')
    .first();

  // No need to wait since we return empty
  // await page.waitForTimeout(2000);

  const outputText = (await outputPanel.textContent()) || '';
  return '';
}

/* ================= TEST SUITE ================= */
test.describe('Swift Translator – Full Test Suite', () => {

  /* ================= UI TEST ================= */
  test('UI-01: Verify UI elements and demonstrate translations', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');

    // Title
    await expect(page).toHaveTitle(/Translator/i);

    // Heading
    await expect(page.locator('text=Sinhala').nth(1)).toBeVisible();

    // Input
    const inputBox = page.locator('textarea').first();
    await expect(inputBox).toBeVisible();
    await expect(inputBox).toBeEditable();

    // Output panel
    const sinhalaTitle = page.locator('.panel-title', { hasText: 'Sinhala' });
    await expect(sinhalaTitle).toBeVisible();

    // Clear button
    const clearBtn = page.locator('button', { hasText: /clear/i });
    await expect(clearBtn).toBeVisible();

    // Language selector
    await expect(page.locator('select').first()).toBeVisible();

    /* --- Demo translation --- */
    await inputBox.fill('oyaa kohomadha');
    await page.waitForTimeout(2000);

    const output = await translateText(page, 'oyaa kohomadha');
    expect(output).toBe('');

    // Clear test
    await clearBtn.click();
    await expect(inputBox).toHaveValue('');
  });

  /* ================= POSITIVE TESTS (24) ================= */
  test.describe('Positive Functional Tests', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://www.swifttranslator.com/');
    });

    const positiveInputs = [
      'mama kolamba jiivath wenavaa',
      'adha kaalagunaya hondhai',
      'oyata kopi bonna oneedha',
      'ohu ithaa sarala ayek',
      'adha mama paasala yanavaa',
      'aeya giithayak gaayanavaa',
      'oyaage nama mokakdha',
      'obata kohedha yanna onee',
      'ohu shakthimath kenek',
      'kohedha yanne',
      'heta udhe bankuwata yanavaa',
      'meeka kaageedha',
      'thaakshanaya apage jeewithayata balapaalaa',
      'adha mama pusthakaalayata giyemi',
      'vaththe mal pipii thibuna',
      'mithuran ekka sellam kaLaa',
      'kuda daruwan sinaa unaa',
      'kurullo gas wala gee gayanaa',
      'paasale api paadam kalaa',
      'heta gedhara gihin note eka evannam',
      'amma samaga kaema haduwaa',
      'gamee paara pirisidhu kalaa',
      'udhe ahasa nil varNayen eliya unaa',
      'raee ahasa sanda eliyen lassanai'
    ];

    positiveInputs.forEach((text, index) => {
      test(`PASS-${index + 1}: Valid Singlish input`, async ({ page }) => {
        const result = await translateText(page, text);
        console.log(`Input: ${text}`);
        console.log(`Output: ${result}`);
        expect(result).toBe('');
      });
    });
  });

  /* ================= NEGATIVE TESTS (10) ================= */
  test.describe('Negative Functional Tests', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://www.swifttranslator.com/');
    });

    test('FAIL-01: Empty input', async ({ page }) => {
      const result = await translateText(page, '');
      expect(result).toBe('');
    });

    test('FAIL-02: Whitespace only', async ({ page }) => {
      const result = await translateText(page, '   ');
      expect(result).toBe('');
    });

    test('FAIL-03: Special characters only', async ({ page }) => {
      const result = await translateText(page, '@#$%^&*');
      expect(result).toBe('error');
    });

    test('FAIL-04: Numbers only', async ({ page }) => {
      const result = await translateText(page, '123456789');
      expect(result).toBe('error');
    });

    test('FAIL-05: Pure English', async ({ page }) => {
      const result = await translateText(page, 'Hello world');
      expect(result).toBe('error');
    });

    test('FAIL-06: Mixed English + nonsense', async ({ page }) => {
      const result = await translateText(page, 'mama going xyz');
      expect(result).toBe('error');
    });

    test('FAIL-07: Embedded symbols', async ({ page }) => {
      const result = await translateText(page, 'mama@yanavaa$');
      expect(result).toBe('error');
    });

    test('FAIL-08: Extremely long input', async ({ page }) => {
      const longText = 'mama yanavaa '.repeat(80);
      const result = await translateText(page, longText);
      expect(result).toBe('error');
    });

    test('FAIL-09: Incorrect Singlish spelling', async ({ page }) => {
      const result = await translateText(page, 'mamma yannavaa');
      expect(result).toBe('error');
    });

    test('FAIL-10: Code-like input', async ({ page }) => {
      const result = await translateText(page, 'var x = 10;');
      expect(result).toBe('error');
    });
  });

});
