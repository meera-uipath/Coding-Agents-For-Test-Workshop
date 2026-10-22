# 06. Build the Object Repository

An **Object Repository** stores an app's screens and UI elements, so every test case reuses the same reliable elements. Delegate captures them for you, and Autopilot uses them in step 7.

!!! warning "Check these first"
    ✅ Your Test Automation project is open in Studio, with the **UI Automation** package (step 5).

    ✅ Your desktop stays unlocked during capture.

## Capture the UiBank elements

!!! example "It's your turn now!"
    1. [Open Delegate](../module-0-prerequisites/01-installation-guide.md#step-2-meet-delegate).
    2. Replace the placeholders, using the test cases you'll automate in step 7, then paste:

        ```text
        My UiPath Studio project is in Documents\UiPath\<project name>, and it's open in Studio. Open the UiBank application at https://uibank.uipath.com and capture the UI elements needed for the manual steps of the Test Manager test cases <KEY_1> and <KEY_2> in project <YOUR_PROJECT_KEY>. Add them to my project's Object Repository, screen by screen. Don't create any test cases or workflows.
        ```

    3. Don't use the browser while it captures.

**Check it:** Studio's **Object Repository** panel lists the UiBank screens and elements, such as **Email Address** and **Loan Amount**. If it's empty, reload the project.

## Nice work!

Your project has every UiBank element your test cases need.

---

[Next → 07. Automate Test Cases](07-automate-test-cases.md){: .md-button .md-button--primary}

---
