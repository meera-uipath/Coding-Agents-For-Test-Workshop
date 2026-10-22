# 07. Automate Test Cases

In this step, you'll use **Autopilot for Testers** in Studio to turn your manual test cases into **automated test cases**. Automate **at least 2** test cases: you'll group them into a test set in step 11.

!!! info "Before you start"
    ✅ Studio is connected to Test Manager, and your manual test cases appear in Test Explorer (step 5).

    ✅ Your Test Automation project from step 5 is open in Studio.

    ✅ The project's **Object Repository** lists the UiBank screens and elements (step 6).

## Autopilot for Testers in Studio

Autopilot for Testers reads the manual steps you created in step 3 and builds the automation for you. It can generate both **low-code** and **coded** (C#) test cases. Clear **Given / When / Then** steps give you cleaner automated test cases.

## Generate the automated test cases

!!! example "It's your turn now!"
    1. Open the **Test Explorer** panel and go to **Overview**.
    2. Right-click a manual test case and select **Generate Test Case with Autopilot**.
    3. Review what Autopilot builds. Check that the steps use elements from the **Object Repository** and that the verification steps match the expected results.
    4. Adjust it if needed, then **run** it locally.
    5. Repeat for at least one more test case.

![Test Explorer Listing](../assets/images/TExpl%20listing.png)

**Check it:**

✅ At least **2** automated test cases run locally, and you can see their results in **Test Explorer**.

!!! note "Test Explorer is session-based"
    Results in Test Explorer are cleared when you close Studio. That's fine — Test Manager keeps the results of published runs.

## Nice work!

Your manual test cases now have automations behind them. Next, you'll give them better data to test with.

---

[Next → 08. Generate Test Data](08-generate-test-data.md){: .md-button .md-button--primary}

---
