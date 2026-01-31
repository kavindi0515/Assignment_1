# 🎯 Swift Translator - Playwright Automation Test Suite

Automated end-to-end testing for Singlish to Sinhala translation using [Swift Translator](https://www.swifttranslator.com/).

## 🎬 Smart Test Execution

When you run `npm run test:swift`:
- **UI test** automatically runs with **VISIBLE BROWSER** 🎬
- **All other tests** run **HEADLESS** for speed ⚡
- **Report auto-opens** at http://localhost:9323/ 📊

**36 comprehensive tests in ~46-57 seconds!**

---

## 🚀 Quick Start

### Installation
```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Run Tests
```bash
# Run all tests (RECOMMENDED)
npm run test:swift
# UI test with visible browser + other tests headless

# Run specific categories
npm run test:ui-tests      # UI test only (headed)
npm run test:positive      # 24 Positive tests (headless)
npm run test:negative      # 10 Negative tests (headless)

# Other options
npm run test:all-headed    # All tests with visible browser
npm run show-report        # View HTML report
```

---

## 📊 Test Suite Overview

```
╔═══════════════════════════════════════════════════════════╗
║              SWIFT TRANSLATOR TEST SUITE                  ║
╠═══════════════════════════════════════════════════════════╣
║  🎬 UI Test:             1 (visible browser)              ║
║  ⚡ Positive Tests:      24 (headless)                    ║
║  ⚡ Negative Tests:      10 (headless)                    ║
║  ⚡ Summary Test:        1 (headless)                     ║
║  ─────────────────────────────────────────────────────    ║
║  ✅ Total:               36 tests                         ║
║  📊 Pass Rate:           100%                             ║
║  ⏱️  Duration:            ~46-57 seconds                  ║
║  🌐 Report:              http://localhost:9323/           ║
╚═══════════════════════════════════════════════════════════╝
```

---

## 📋 Complete Test Coverage

### 🎬 UI Test (1) - HEADED MODE

**UI-01: Complete UI Validation & Live Demo**
- Verifies all page elements (8 elements)
- Demonstrates 3 live translations with visual pauses
- Tests clear button functionality
- **Total: 12 validations**

**Elements Verified:**
- Page title and main heading
- Input textarea
- Output area (Sinhala)
- Convert button
- Clear button
- Singlish touchpad
- Language selector

**Live Demonstrations:**
1. `oyaa apee gedhara enavadha?` → `ඔයා අපේ ගෙදර එනවද?`
2. `mama hodhai` → `මම හොදෛ`
3. `ee mokakdha?` → `ඒ මොකක්ද?`

---

### ⚡ Positive Tests (24) - HEADLESS MODE

**Greetings & Common Phrases:**
- PASS-01: Are you coming to our house?
- PASS-02: I am fine
- PASS-03: What is that?
- PASS-09: What is your name?
- PASS-24: Yes, correct

**Statements & Actions:**
- PASS-06: I am going
- PASS-07: Come here
- PASS-08: I ate rice
- PASS-10: This is my book
- PASS-12: I am reading a book

**Questions:**
- PASS-04: Where are we going?
- PASS-05: How is your work?
- PASS-11: What is the time?
- PASS-13: Where is the school?

**Invitations & Social:**
- PASS-14: Come to my house
- PASS-15: Thank you very much

**Weather & Environment:**
- PASS-16: It is raining
- PASS-17: Is it hot?

**Food & Drink:**
- PASS-18: Give me water
- PASS-19: Do you want to eat?
- PASS-20: This is delicious

**Emotions & States:**
- PASS-21: I am happy
- PASS-22: I am tired
- PASS-23: I need help

---

### ⚡ Negative Tests (10) - HEADLESS MODE

**Edge Cases:**
- FAIL-01: Empty input field (should not crash)
- FAIL-02: Only whitespace (handle gracefully)
- FAIL-03: Special characters only (@#$%^&*())
- FAIL-04: Numbers only (1234567890)
- FAIL-05: Pure English text (should not translate)

**Language Handling:**
- FAIL-06: Already Sinhala text (preserve)
- FAIL-07: Very long text (863 characters)
- FAIL-08: Mixed languages (partial translation)

**Security:**
- FAIL-09: SQL injection attempt (`'; DROP TABLE users; --`)
- FAIL-10: XSS attempt (`<script>alert("XSS")</script>`)

---

### ⚡ Summary Test (1)

**SUMMARY: Batch Translation Consistency**
- Tests 3 translations in sequence
- Verifies consistency across multiple inputs
- Validates all return expected Sinhala output

---

## 🎬 What You'll See

### When Running `npm run test:swift`:

#### 1️⃣ Browser Opens (UI Test)
```
[chromium-ui-headed] › UI-01: Verify all page elements...

🌐 Opening Swift Translator website...
✓ Page loaded successfully
✓ Page title verified
✓ Main heading visible
✓ Input textarea verified
✓ Output area verified
✓ Convert button verified
✓ Clear button verified

🎬 DEMONSTRATION: Performing translation...

📝 Translation Demo 1:
   Input: oyaa apee gedhara enavadha?
   🔄 Clicking translate button...
   Output: ඔයා අපේ ගෙදර එනවද?
   ✅ Translation 1 successful!

[... 2 more demos ...]

🧹 Testing Clear Button:
   ✅ Input field cleared successfully!

═══════════════════════════════════════
📊 UI TEST SUMMARY:
═══════════════════════════════════════
✅ Page elements verified: 8
✅ Translations demonstrated: 3
✅ Clear button tested: 1
✅ Total validations: 12
═══════════════════════════════════════
🎉 UI Test Complete!
═══════════════════════════════════════
```

#### 2️⃣ Other Tests Run in Background
```
[chromium-headless] › PASS-01: Translate basic question... ✓
[chromium-headless] › PASS-02: Translate greeting... ✓
[chromium-headless] › PASS-03: Translate question... ✓
...
[chromium-headless] › PASS-24: Translate confirmation... ✓
[chromium-headless] › FAIL-01: Empty input field... ✓
...
[chromium-headless] › FAIL-10: XSS attempt... ✓
[chromium-headless] › SUMMARY: Batch translation... ✓
```

#### 3️⃣ Report Opens Automatically
```
✓ 36 passed (46.2s)

Opening HTML report at http://localhost:9323/
```

---

## ⚙️ Configuration

### Smart Headed/Headless Mode

The `playwright.config.js` uses **two projects**:

#### Project 1: chromium-ui-headed
- **Mode:** Headed (visible browser)
- **Target:** UI-01 test only
- **Viewport:** 1280×720
- **Purpose:** Visual demonstration

#### Project 2: chromium-headless
- **Mode:** Headless (no browser)
- **Target:** All other 35 tests
- **Purpose:** Fast execution

### Key Configuration Settings

```javascript
reporter: [
  ['html', {
    open: 'always',  // Auto-opens report
    port: 9323       // Custom port
  }]
]

projects: [
  {
    name: 'chromium-ui-headed',
    use: { 
      headless: false,  // Visible browser
      viewport: { width: 1280, height: 720 }
    },
    grep: /UI-01/  // Only UI test
  },
  {
    name: 'chromium-headless',
    use: { 
      headless: true   // No browser
    },
    grepInvert: /UI-01/  // Exclude UI test
  }
]
```

**Browser:** Chromium only (Firefox and WebKit disabled)

---

## 📁 Project Structure

```
Playwright_1/
├── tests/
│   ├── example.spec.js              # Sample Playwright tests
│   └── swift-translator.spec.js     # 36 comprehensive tests ⭐
├── playwright.config.js              # Smart headed/headless config ⭐
├── package.json                      # Dependencies & test scripts
└── README.md                         # This file
```

---

## 🔧 Test Architecture

### Helper Function

**`translateText(page, singlishText)`**
- Reusable translation logic
- Handles input filling, button clicking, output extraction
- Returns translated Sinhala text
- Used by all functional tests

```javascript
async function translateText(page, singlishText) {
  const inputBox = page.locator('textarea[placeholder*="Input Your Singlish Text"]');
  await inputBox.clear();
  await inputBox.fill(singlishText);

  const convertButton = page.locator('button').filter({ hasText: '' }).nth(1);
  await convertButton.click();

  await page.waitForTimeout(2000);

  const outputDiv = page.locator('.panel-title:has-text("Sinhala") + div.whitespace-pre-wrap');
  const translatedText = await outputDiv.textContent();

  return translatedText?.trim() || '';
}
```

### Test Organization

Tests are organized using `test.describe` blocks:

1. **UI Tests** - Visual validation & demonstration
2. **Positive Functional Tests** - Valid Singlish translations
3. **Negative Functional Tests** - Invalid inputs & edge cases
4. **Test Suite Summary** - Batch consistency validation

### Selectors Used

- **Input:** `textarea[placeholder*="Input Your Singlish Text"]`
- **Convert Button:** `button:filter({ hasText: '' }).nth(1)`
- **Output:** `.panel-title:has-text("Sinhala") + div.whitespace-pre-wrap`
- **Clear Button:** `button:has-text("Clear")`

---

## 💻 Technologies Used

- **Playwright** `^1.58.0` - Browser automation framework
- **Node.js** - JavaScript runtime
- **Chromium** - Browser engine for testing
- **HTML Reporter** - Test results visualization

---

## 📊 Performance Metrics

| Metric | Value |
|--------|-------|
| **Total Tests** | 36 |
| **Execution Time** | ~46-57 seconds |
| **Workers** | 4-6 (parallel) |
| **UI Test Duration** | ~25 seconds (headed) |
| **Other Tests Duration** | ~30 seconds (headless) |
| **Pass Rate** | 100% ✅ |

---

## 🎯 Use Cases

### Daily Development
```bash
npm run test:swift
```
- Fast feedback with visual confirmation
- See UI test in action
- Quick validation of changes

### Client Demonstrations
```bash
npm run test:swift
```
- Professional visual demo
- Shows live translation
- Proves automation works

### CI/CD Pipeline
```bash
CI=true npm run test:swift
```
- All tests run headless
- Faster execution
- No display required

### Debugging
```bash
npm run test:all-headed
```
- All tests with visible browser
- See exactly what's happening
- Troubleshoot issues

---

## 🏆 Features & Benefits

### ✅ Smart Execution
- Automatic headed/headless mode
- No manual configuration needed
- Best of both worlds (visual + speed)

### ✅ Comprehensive Coverage
- 36 tests across all scenarios
- UI validation
- Functional testing (positive & negative)
- Security testing (XSS, SQL injection)
- Edge case handling

### ✅ Developer Friendly
- Clear test names with prefixes (UI-, PASS-, FAIL-)
- Organized code structure
- Reusable helper functions
- Detailed console output

### ✅ Professional Reports
- Auto-opening HTML reports
- Custom port (9323)
- Screenshots on failures
- Execution timeline
- Detailed statistics

### ✅ Fast & Efficient
- Parallel test execution
- Optimized worker allocation
- Headed only where needed
- ~1 minute total execution

---

## 📖 Test Naming Convention

Tests use clear prefixes for easy identification:

- **UI-##:** User Interface tests (headed mode)
- **PASS-##:** Positive functional tests (valid inputs)
- **FAIL-##:** Negative functional tests (invalid/edge cases)
- **SUMMARY:** Batch consistency tests

---

## 🔍 Example Test Output

```
Running 36 tests using 6 workers

[1/36] [chromium-ui-headed] › UI-01: Verify all page elements and demonstrate translation
       🌐 Opening Swift Translator website...
       ✓ Page loaded successfully
       ✓ Page title verified
       ...
       📝 Translation Demo 1: oyaa apee gedhara enavadha? → ඔයා අපේ ගෙදර එනවද?
       📝 Translation Demo 2: mama hodhai → මම හොදෛ
       📝 Translation Demo 3: ee mokakdha? → ඒ මොකක්ද?
       🧹 Testing Clear Button: ✅
       📊 UI TEST SUMMARY: 12 validations ✅

[2/36] [chromium-headless] › PASS-02: Translate greeting - I am fine
       Input: mama hodhai
       Output: මම හොදෛ

[3/36] [chromium-headless] › PASS-03: Translate question - What is that?
       Input: ee mokakdha?
       Output: ඒ මොකක්ද?

...

[26/36] [chromium-headless] › FAIL-01: Empty input field - should not crash
        Input: (empty)
        Output: 

...

✓ 36 passed (46.2s)
```

---

## 🎉 Summary

```
╔═══════════════════════════════════════════╗
║     SWIFT TRANSLATOR TEST SUITE           ║
╠═══════════════════════════════════════════╣
║  Status:          ✅ Production Ready     ║
║  Total Tests:     36                      ║
║  Pass Rate:       100%                    ║
║  UI Demo:         🎬 Visible Browser      ║
║  Other Tests:     ⚡ Fast Headless        ║
║  Duration:        ~46-57s                 ║
║  Report:          Auto-opens on 9323      ║
║  Browser:         Chromium                ║
║  Documentation:   Complete                ║
╚═══════════════════════════════════════════╝
```

---

## 🚀 Get Started Now!

```bash
npm run test:swift
```

**Watch the magic happen!** 🎬✨

---

## 📝 Notes

- The UI test runs with a **visible browser** so you can watch translations happen in real-time
- All other tests run **headless** for maximum speed
- The HTML report automatically opens after tests complete
- Tests use **Chromium only** (Firefox and WebKit are disabled)
- All tests are **100% passing** and production-ready

---

**Happy Testing!** 🎊
