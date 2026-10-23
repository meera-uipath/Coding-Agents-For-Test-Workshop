# 05. Automate Test Cases with Studio Desktop and Delegate

Turn your manual test cases into automated ones in Studio, with Delegate doing most of the work. Each automation stays **linked** to its test case in Test Manager.

!!! warning "Access required"
    You need an **App Test Developer** license to create and publish Test Automation projects.

Paste the prompts in [Delegate](../module-0-prerequisites/01-installation-guide.md#step-2-meet-delegate).

## Part 1 — Create a Test Automation project

!!! example ""
    Paste:

    ```text
    Create a new Test Automation project in Studio desktop. Name it UiBank Tests.
    ```

**Check it:** **UiBank Tests** opens in Studio, saved in default folder `Documents\UiPath\UiBank Tests`.

## Part 2 — Install the UI Automation package

!!! example ""
    Paste:

    ```text
    Install the latest stable UI Automation activities package in this project so the workflow can interact with web pages and desktop apps.
    ```

**Check it:** **Manage Packages → Project Dependencies** lists **UiPath.UIAutomation.Activities**.

## Part 3 — Link Studio to your Test Manager project

!!! example "It's your turn now!"
    1. **Design** ribbon → **Test Manager → Test Manager Settings**.
    2. Enter your Test Manager URL, click **Connect**, and sign in.
    3. In **Default Project**, select your project from step 1, and click **OK**.

![Connect to Test Manager](../assets/images/test-manager-connect.png)

**Check it:** the connection icon is green, and **Test Explorer** lists your test cases from step 3 as manual test cases.

![Test Explorer](../assets/images/testExplorer.png)

## Part 4 — Build the Object Repository

An **Object Repository** stores an app's screens and UI elements, so every test case reuses the same reliable elements. Delegate captures them, and Autopilot uses them in Part 5.

!!! example "It's your turn now!"
    1. Replace the placeholders, using the test cases you'll automate in Part 5, then paste:

        ```text
        My UiPath Studio project is in Documents\UiPath\UiBank Tests, and it's open in Studio. Open the UiBank application at https://uibank.uipath.com and capture the UI elements needed for the manual steps of the Test Manager test cases <KEY_1> and <KEY_2> in project <YOUR_PROJECT_KEY>. Add them to my project's Object Repository, screen by screen. Don't create any test cases or workflows.
        ```

    2. Keep your desktop unlocked, and don't use the browser while it captures.

**Check it:** Studio's **Object Repository** panel lists the UiBank screens and elements, such as **Email Address** and **Loan Amount**. If it's empty, reload the project.

## Part 5 — Automate the test cases

**Autopilot for Testers** in Studio turns a manual test case into an automated one, low-code or coded (C#). Automate **at least 2** — you'll group them into a test set in step 7.

!!! example "It's your turn now!"
    1. In **Test Explorer**, right-click a manual test case and select **Generate Test Case with Autopilot**.
    2. Check that it uses **Object Repository** elements and that the checks match the expected results.
    3. **Run** it locally.
    4. Repeat for at least one more test case.

![Test Explorer Listing](../assets/images/TExpl%20listing.png)

**Check it:** at least **2** automated test cases run locally, with results in **Test Explorer**. Test Explorer clears them when you close Studio.

## Part 6 — Generate test data

Most loan defects hide at the edges, such as an applicant aged exactly 18 or 65. A **data-driven test case** runs once per row of test data, each with its own inputs and expected result.

Good test data covers:

✅ **Valid values** — applicants who should be approved

✅ **Boundaries** — ages 17, 18, 65, 66; loans of exactly $10,000, $50,000, $100,000

✅ **Invalid values** — a missing field, or a badly formatted email

✅ **The expected message** for each row, from the acceptance criteria

=== "Autopilot in Studio"

    !!! example "It's your turn now!"
        1. Right-click one automated test case and add **test data**, with **Autopilot** as the source:

            ```text
            Generate 8 loan applications for UiBank: email, loan amount, loan term (1, 3, 5 or 10), yearly income, age, and the expected result message. Include ages 17, 18, 65 and 66, and loans of exactly 10000, 50000 and 100000.
            ```

        2. Fix any expected result that doesn't match the acceptance criteria.
        3. Bind the columns to the test case's inputs, and **run** it.

=== "Delegate + Data Fabric"

    **Data Fabric** stores the rows in a shared **entity** that any test case in the tenant can use.

    !!! warning "Check this first"
        ✅ You have **permission to create Data Fabric entities**.

    **A. Generate the data in Data Fabric**

    1. Replace the placeholders and paste:

        ```text
        Read the loan application requirement in Test Manager project <YOUR_PROJECT_KEY> and generate 12 rows of test data from its acceptance criteria: Scenario, Email, LoanAmount, LoanTerm (1, 3, 5 or 10), YearlyIncome, Age, and ExpectedResult (the exact message from the acceptance criteria). Cover the age and loan amount boundaries. Then create a Data Fabric entity named LoanTestData<YOUR_INITIALS> at tenant level and import the rows into it. Show me the schema and the rows before you create anything.
        ```

    2. Check the schema and rows, fix any wrong expected result, and approve.

    **Check it:** **Data Fabric** has **LoanTestData&lt;YOUR_INITIALS&gt;** with 12 records.

    **B. Link the data to your test cases**

    ```text
    In my Studio project (Documents\UiPath\UiBank Tests), install the Data Fabric entity LoanTestData<YOUR_INITIALS> and add it as test data to the test cases for <KEY_1> and <KEY_2>. Bind the entity's fields to each test case's inputs and expected result. Then build the project.
    ```

    Reload the project in Studio and run a test case. It runs once per record.

    !!! warning "Every linked test case gets every row"
        There's no row filter, so each test case checks the row's **ExpectedResult**. For a subset of rows, ask Delegate for a **separate entity**.

**Check it:** your test case runs once per variation, and each expected result matches the acceptance criteria.

!!! question "Think about it"
    Did the data expose an overlap in the rules — say, age 30, $60,000 over 10 years, income $150,000? Which rule applies?

## Part 7 — Publish the test cases

Publish your test cases to Orchestrator so Test Manager can run them. They're **drafts** until you set them as publishable.

!!! warning "Before you publish"
    Your **UiPath Assistant** (robot) must be connected to Orchestrator.

!!! example "It's your turn now!"
    1. In the **Project** panel, select your test cases, right-click, and choose **Set as publishable**.

        ![Set as Publishable](../assets/images/Studio%20Set%20As%20Publishable.png)

    2. Click **Publish** on the ribbon.

        ![Publish Button](../assets/images/Studio%20Publish%20button.jpg)

    3. Enter the project name and version, and confirm.

        ![Publish Test Case Window](../assets/images/Studio%20Publish%20TC%20Window.png)

**Check it:** in Test Manager, each automated test case shows a linked **automation**. Only these can run in step 8.

## Nice work!

Your manual test cases are automated, data-driven, and published, ready to run from Test Manager.

---

[Next → 06. Configure the Test Manager Folder](06-configure-tm-folder.md){: .md-button .md-button--primary}

---
