# 04. Run Manual Tests

There are three ways to run a manual test case. Each records its results in Test Manager.

| | Who runs the steps | Apps it can test | Setup needed |
|---|---|---|---|
| **Manual execution assistant** | You | Any | None |
| **Run autonomously** | Autopilot, on a robot | Web apps | A robot in the project's default folder (step 10) |
| **Delegate** | Delegate, on your machine | Web and desktop apps | None |

??? tip "Manual execution assistant"
    1. Open a test set, select **Execute → Manually**. Allow pop-ups for Test Manager.
    2. Perform each step, then select **Set Passed** or **Set Failed** (comment on failures). **Set Passed Until Here** passes several steps at once.
    3. If there's a postcondition, select **Condition Met** when it holds.
    4. Select **Next**, then **Done** after the last test case.

    See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/executing-test-sets-manually" target="_blank">Executing test sets manually</a>.

??? tip "Run autonomously"
    **Autonomous Test Execution** runs a manual test case with Autopilot, in one click, on a robot.

    1. Open a manual test case → **Manual Steps** tab → **Run Autonomously**.

        ![Run Autonomously in the Manual Steps tab](../assets/images/TM%20Run%20autonomously.png)

    2. On **Setup**, enter the app URL, for example `https://uibank.uipath.com`, and select an AI model.
    3. Select **Run**.

    See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/running-autonomous-test-execution" target="_blank">Running Autonomous Test Execution</a>.

??? tip "No test case yet? Explore the requirement autonomously"
    **Autonomous Exploration** is exploratory testing with Autopilot: it learns the app, designs tests, and runs them within a time-box.

    1. Open a requirement → **+ Autonomous Exploration**.
    2. Enter the app URL, set a **time-box**, and select an AI model.
    3. Select **Start**. When it's **Completed**, select **Show report**.

    Needs a Windows robot in the project's default folder (step 10), with the UiPath browser extension set to **Allow in Incognito**. See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/running-autonomous-exploration" target="_blank">Running Autonomous Exploration</a>.

## Run them with Delegate

[Open Delegate](../module-0-prerequisites/01-installation-guide.md#step-2-meet-delegate) and start a **new session**.

### Part 1 — Run a test case

!!! example "It's your turn now!"
    1. Replace `<YOUR_TEST_CASE_KEY>` with a test case from step 3, then paste:

        ```text
        Run the manual test case <YOUR_TEST_CASE_KEY>. Open UiBank at https://uibank.uipath.com, follow the test case's manual steps in the browser, and check every expected result. Take a screenshot at the final validation step and upload it to the test case's assertions. Push the results to Test Manager. If any step failed, explain the reason.
        ```

    2. Approve when Delegate asks to push the result.
    3. For any failure, decide: **defect in UiBank**, or **problem with the test case**?

!!! tip "Test data already used?"
    Tests like registering a new user fail if the data was used before. Ask Delegate:

    ```text
    Rerun test case <YOUR_TEST_CASE_KEY> with new registration data that hasn't been used before, and push the new result to Test Manager.
    ```

**Check it:** **Execution** → open the new execution → select your test case key. It shows the result, with the screenshot under **Assertions**.

!!! question "Think about it"
    Did Delegate stumble on a step? Autopilot automates these same steps in step 7, so fix them now:

    ```text
    Rewrite the steps of test case <YOUR_TEST_CASE_KEY> that were unclear during this run, so each one has a single clear action and expected result. Show me the changes before you save them to Test Manager.
    ```

### Part 2 — Add steps to an empty test case

Your project has a test case, **Request Loan**, with no steps.

!!! example "Let's build it with Delegate!"
    1. Replace `<REQUEST_LOAN_KEY>` with its key, then paste:

        ```text
        Test case <REQUEST_LOAN_KEY> currently has no steps. Add test steps to it based on the linked requirement document and the navigation flow below.

        Navigation flow:

        Welcome page (https://uibank.uipath.com/welcome)
        Open the Products drop-down menu and select Loans.
        Expected result: The Loans page opens.

        Loans page (https://uibank.uipath.com/loans)
        Click the Apply for Loan button.
        Expected result: The loan application form is displayed.

        Loan application form (https://uibank.uipath.com/loans/apply)
        Fill in every required field with the values and rules from the requirement document.
        Click Submit.
        Expected result: The application is accepted, and the confirmation or result shown matches the acceptance criteria in the requirement.

        Instructions:

        Take all field names, valid test data, validation rules and expected outcomes from the requirement document. Don't make up any values.
        Give each step one action and one expected result.
        If the requirement leaves out details a step needs, such as a missing field value or an unclear acceptance criterion, list them as open questions. Don't guess.
        Before saving the steps to <REQUEST_LOAN_KEY>, show them to me for review.
        ```

    2. Then follow Delegate:
        1. **No requirement linked** — ask it to link the loan application requirement it suggests.
        2. **Test data** — choose the **approval path**.
        3. **Open questions** — answer them.
        4. **Save the steps** — give permission.
        5. **Run it** — say yes.

**Check it:** **Request Loan** has manual steps, is linked to the requirement, and has a new result in **Execution**.

??? info "Beyond running tests — Delegate across the whole manual testing cycle"
    Try these on your own project:

    === "1. Find test ideas"

        ```text
        Read the loan application requirement in Test Manager project <YOUR_PROJECT_KEY> and suggest test ideas that cover its acceptance criteria, including boundary and negative cases.
        ```

        Or attach a screenshot:

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

## Nice work!

Your test cases are proven against the real application, with results in Test Manager. Next, you'll connect Studio to automate them.

---

[Next → 05. Connect Studio to Test Manager](05-connect-studio-to-tm.md){: .md-button .md-button--primary}

---
