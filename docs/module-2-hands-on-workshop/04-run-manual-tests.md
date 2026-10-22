# 04. Run Manual Tests

A manual test case has steps and expected results, but no automation behind it. There are three ways to run one, and each records its results in Test Manager:

| | Who runs the steps | Apps it can test | Setup needed |
|---|---|---|---|
| **Manual execution assistant** | You | Any | None |
| **Run autonomously** | Autopilot, on a robot | Web apps | A robot in the project's default folder (step 10) |
| **Delegate** | Delegate, on your machine | Web and desktop apps | None |

??? tip "Manual execution assistant"
    A tester runs the steps by hand, and Test Manager records the result of each one.

    1. Open a test set, select **Execute**, and choose **Manually**. The **manual execution assistant** opens in a new window, so allow pop-ups for Test Manager.
    2. Perform each step in the application, then select **Set Passed** or **Set Failed**. Add a comment for every failed step. To pass several steps at once, select **Set Passed Until Here**.
    3. If the test case has a postcondition, check it and select **Condition Met** if it holds.
    4. Select **Next** to move to the next test case, and **Done** after the last one.

    The results appear in the project's **Execution** section. See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/executing-test-sets-manually" target="_blank">Executing test sets manually</a>.

??? tip "Run autonomously"
    **Autonomous Test Execution** runs a manual test case with **Autopilot** in one click: it reads the manual steps and performs them in a browser on a robot, with no tester and no Studio automation.

    1. Open a manual test case and go to the **Manual Steps** tab.
    2. In the right-hand panel, select **Run Autonomously**.

        ![Run Autonomously in the Manual Steps tab](../assets/images/TM%20Run%20autonomously.png)

    3. On the **Setup** tab, enter the URL of the application under test, for example `https://uibank.uipath.com`. **Run** stays disabled until you do.
    4. Select an AI model. Optionally, turn on live streaming to watch the run.
    5. Select **Run**. You can watch the run, take remote control, or cancel it.

    See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/running-autonomous-test-execution" target="_blank">Running Autonomous Test Execution</a>.

??? tip "No test case yet? Explore the requirement autonomously"
    **Autonomous Exploration** is **exploratory testing** with Autopilot: instead of following fixed steps, an agent learns the application, designs tests, and runs them in real time, guided by a requirement and a time-box. It's a good way to find what your test cases don't cover.

    1. Open a requirement, for example the loan application requirement, and select **+ Autonomous Exploration**.
    2. On the **Instructions** tab, enter the URL of the application under test, for example `https://uibank.uipath.com`.
    3. Optionally, add a prompt from the **Prompt Library** to steer the exploration, for example to focus on the age and income boundaries.
    4. Set a **time-box** and select an AI model. Optionally, turn on live streaming to watch it explore.
    5. Select **Start**. When the status shows **Completed**, select **Show report** to see what it tried and found.

    Like **Run autonomously**, it needs a robot in the project's default folder (step 10), on a Windows machine. It opens an incognito browser, so the UiPath browser extension on that machine must have **Allow in Incognito** turned on. See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/running-autonomous-exploration" target="_blank">Running Autonomous Exploration</a>.

## Run them with Delegate

Think of **Delegate** as a tester's hands on the keyboard. It works inside the application under test on your machine, and Test Manager stays the **system of record** for the steps and the results. If it needs something it can't find, such as a login, it asks you.

### Part 1 — Open Delegate

[Open Delegate](../module-0-prerequisites/01-installation-guide.md#step-2-meet-delegate) and start a **new session**.

### Part 2 — Run the manual test cases

!!! example "It's your turn now!"
    1. Replace `<YOUR_TEST_CASE_KEY>` with the key of a test case you created in step 3 (for example `UIBAS:12`), then paste the prompt:

        ```text
        Run the manual test case <YOUR_TEST_CASE_KEY>. Open UiBank at https://uibank.uipath.com, follow the test case's manual steps in the browser, and check every expected result. Take a screenshot at the final validation step and upload it to the test case's assertions. Push the results to Test Manager. If any step failed, explain the reason.
        ```

    2. Watch it work. Expect Delegate to:
        1. Read the test case's manual steps from Test Manager.
        2. Open UiBank in the browser and perform each step.
        3. Compare what it sees with each expected result, and take a screenshot at the final validation step.
        4. Ask you to approve, then push a **pass** or **fail** result, with the screenshot, to Test Manager.
    3. Read Delegate's summary. For any failure, decide: is it a **defect in UiBank**, or a **problem with the test case**?

!!! tip "Test data already used? Rerun with new data"
    Some test cases only pass once with the same data — for example, registering a new user. If the email or username was already used in an earlier run, the step fails and Delegate tells you why. Ask it to rerun with fresh data:

    ```text
    Rerun test case <YOUR_TEST_CASE_KEY> with new registration data that hasn't been used before, and push the new result to Test Manager.
    ```

**Check it:** in Test Manager, open your project and go to **Execution**. Open the new execution, then select your test case's **key** to open its test case log. It shows the **result**, and the screenshot appears under **Assertions**.

!!! question "Think about it"
    Did Delegate get stuck on a step, or interpret one differently than you would? Steps that confuse Delegate will confuse automation too. Fix them in Test Manager now — in step 7, Autopilot builds the automation from these same steps.

??? info "Beyond running tests — Delegate across the whole manual testing cycle"
    Running existing test cases is only one part. Delegate can help with the whole manual testing loop, from the first test idea to the result in Test Manager. Try these prompts on your own project, one tab at a time:

    === "1. Find test ideas"

        Start from a requirement in Test Manager:

        ```text
        Read the loan application requirement in Test Manager project <YOUR_PROJECT_KEY> and suggest test ideas that cover its acceptance criteria, including boundary and negative cases.
        ```

        Or from text, an image, or a video — for example a screenshot of the screen under test:

        ```text
        Here's a screenshot of the UiBank loan application form. Suggest test ideas for it, including boundary and negative cases.
        ```

    === "2. Write the steps"

        ```text
        Turn these test ideas into manual test cases, with clear steps and an expected result for each step. Upload them to Test Manager project <YOUR_PROJECT_KEY> and link them to the loan application requirement.
        ```

    === "3. Run them with you"

        ```text
        Run test case <KEY_1> of project <YOUR_PROJECT_KEY> in the browser. Whenever a step needs input you don't have, such as login details, stop and ask me.
        ```

    === "4. Record the results"

        ```text
        Create the test results for the test cases you just ran, with a screenshot of each failed step, and upload them to Test Manager project <YOUR_PROJECT_KEY>.
        ```

    ✅ Test Manager stays the system of record: the test cases, steps, and results all end up there.

## Nice work!

Your test cases are now proven against the real application, and Test Manager has their first results — without a single click by hand. Next, you'll connect Studio so you can automate them.

---

[Next → 05. Connect Studio to Test Manager](05-connect-studio-to-tm.md){: .md-button .md-button--primary}

---
