# 05. Automate Test Cases

In this step, you'll turn your manual test cases into **automated test cases**. You can use either of two assistants:

| | Autopilot in Studio | Coding agent (Claude Code or Codex) |
|---|---|---|
| **Where you work** | Inside Studio, from Test Explorer | In Studio's **Terminal** panel |
| **What it creates** | Low-code test cases | **Coded** test cases (C#) |
| **Best for** | Developers who like visual design | Developers who prefer code and plain-English prompts |

Pick one, or try both on different test cases. Either way, automate **at least 2** test cases: you'll group them into a test set in step 9.

!!! info "Before you start"
    ✅ Studio is connected to Test Manager, and your manual test cases appear in Test Explorer (step 4).

    ✅ Your Test Automation project from step 4 is open in Studio.

## Generate the automated test cases

=== "Autopilot in Studio"

    **Autopilot for Developers** helps you build and test automations faster in Studio. It creates workflows, coded workflows, and **test cases** from natural-language instructions.

    !!! example "It's your turn now!"
        1. Open the **Test Explorer** panel and go to **Overview**.
        2. Right-click a manual test case and select **Generate Test Case with Autopilot**.
        3. Review what Autopilot builds. Check that the steps interact with the right UiBank screens and that the verification steps match the expected results.
        4. Adjust it if needed, then **run** it locally.
        5. Repeat for at least one more test case.

    ![Test Explorer Listing](../assets/images/TExpl%20listing.png)

=== "Coding agent"

    Your coding agent uses two UiPath skills that work together: **`uipath-rpa`** writes the coded test cases, and **`uipath-test`** reads your test cases from Test Manager and links the automations back to them.

    !!! warning "Check these first"
        ✅ **`UiPath.UIAutomation.Activities` 26.10.2 or newer** is available. With an older version, the agent can't capture UI elements live and writes placeholder selectors marked `TODO Indicate` instead. The agent asks before installing or upgrading the package.

        ✅ **Your desktop is unlocked** while the agent captures elements. Capture fails on a lock screen.

        ✅ **You're logged in** to the right tenant: `uip login status --output json`

    !!! example "It's your turn now!"
        1. In Studio, select the **Terminal** tab in the bottom panel. It opens in your project folder.

            ![Terminal tab in Studio](../assets/images/Terminal%20in%20Studio%20STS.png)

            Start your agent:

            === "Claude Code"

                ```powershell
                claude
                ```

                The first time you start Claude Code in a folder, it asks whether you trust it. This is your own project, so select **Yes, I trust this folder** and press **Enter**.

                ![Claude Code folder trust prompt in Studio's Terminal](../assets/images/claude%20access%20permission%20in%20Studio.png)

            === "OpenAI Codex"

                ```powershell
                codex
                ```
        2. Replace `<YOUR_PROJECT_KEY>` and the test case keys, then paste the prompt:

            ```text
            In this UiPath project, write one coded test case for each of the Test Manager test cases <KEY_1> and <KEY_2> in project <YOUR_PROJECT_KEY>. Follow their manual steps, capture the UiBank UI elements into the Object Repository, build the project, and run the tests locally. Don't publish anything yet.
            ```

        3. Watch the agent work. Expect it to read the manual steps, open UiBank and capture its UI elements screen by screen, write `[TestCase]` classes in **Arrange / Act / Assert** form, and run `uip rpa build` until there are **0 errors**.
        4. Back in Studio, reload the project and open the new test case files.

    !!! tip "Why manual steps matter here"
        The agent turns each **Click / Enter / Verify** step into an **Object Repository** element and a line of test code. The Object Repository stores the application's UI elements (buttons, fields, labels), so tests can find them reliably. Clear steps from step 3 give you cleaner tests.

    **Check it:** the project's **Object Repository** lists the UiBank screens and elements, and each test case uses them instead of raw selectors.

**Check it:**

✅ At least **2** automated test cases run locally, and you can see their results in **Test Explorer** (or in the agent's output).

!!! note "Test Explorer is session-based"
    Results in Test Explorer are cleared when you close Studio. That's fine — Test Manager keeps the results of published runs.

## Nice work!

Your manual test cases now have automations behind them. Next, you'll give them better data to test with.

---

[Next → 06. Generate Test Data](06-generate-test-data.md){: .md-button .md-button--primary}

---
