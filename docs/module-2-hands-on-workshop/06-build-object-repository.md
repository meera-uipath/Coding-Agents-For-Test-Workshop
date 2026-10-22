# 06. Build the Object Repository

## What's an Object Repository?

An **Object Repository** stores the UI elements of an application — its screens, buttons, fields, and labels — so automations can find them reliably. Each element is captured once and reused by every test case that needs it.

In step 7, Autopilot builds your automated test cases from these elements. In this step, **Delegate** builds the Object Repository for you: it opens UiBank and captures each element live. It doesn't create any test cases.

!!! warning "Check these first"
    ✅ Your Test Automation project is open in Studio, with the **UI Automation** package installed (step 5).

    ✅ **Delegate is signed in** to the workshop organization and tenant your trainer shared.

    ✅ **Your desktop is unlocked** while elements are captured. Capture fails on a lock screen.

## Part 1 — Open Delegate

[Open Delegate](../module-0-prerequisites/01-installation-guide.md#step-2-meet-delegate).

## Part 2 — Capture the UiBank elements

!!! example "It's your turn now!"
    1. Replace `<project name>`, `<YOUR_PROJECT_KEY>`, and the test case keys — use the test cases you'll automate in step 7 — then paste the prompt:

        ```text
        My UiPath Studio project is in Documents\UiPath\<project name>, and it's open in Studio. Open the UiBank application at https://uibank.uipath.com and capture the UI elements needed for the manual steps of the Test Manager test cases <KEY_1> and <KEY_2> in project <YOUR_PROJECT_KEY>. Add them to my project's Object Repository, screen by screen. Don't create any test cases or workflows.
        ```

    2. Watch it work. Expect it to read the manual steps, open UiBank in the browser, and capture the elements screen by screen.
    3. Don't use the browser while elements are being captured.

**Check it:** in Studio, open the **Object Repository** panel. It lists the UiBank screens — for example the loan application page — and their elements, such as **Email Address**, **Loan Amount**, and **Submit Loan Application**. If the panel is empty, reload the project.

## Nice work!

Your project now knows every UiBank element your test cases need. Next, Autopilot will use them to automate the test cases.

---

[Next → 07. Automate Test Cases](07-automate-test-cases.md){: .md-button .md-button--primary}

---
