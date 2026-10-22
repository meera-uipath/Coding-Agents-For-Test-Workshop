# 08. Generate Test Data

Most loan defects hide at the edges, such as an applicant aged exactly 18 or 65. A **data-driven test case** runs once per row of test data, each with its own inputs and expected result.

Good test data covers:

✅ **Valid values** — applicants who should be approved

✅ **Boundaries** — ages 17, 18, 65, 66; loans of exactly $10,000, $50,000, $100,000

✅ **Invalid values** — a missing field, or a badly formatted email

✅ **The expected message** for each row, from the acceptance criteria

## Generate it

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

    !!! warning "Check these first"
        ✅ Your Test Automation project is **open in Studio**.

        ✅ You have **permission to create Data Fabric entities**.

    ### Part 1 — Generate the data in Data Fabric

    1. In Delegate, replace the placeholders and paste:

        ```text
        Read the loan application requirement in Test Manager project <YOUR_PROJECT_KEY> and generate 12 rows of test data from its acceptance criteria: Scenario, Email, LoanAmount, LoanTerm (1, 3, 5 or 10), YearlyIncome, Age, and ExpectedResult (the exact message from the acceptance criteria). Cover the age and loan amount boundaries. Then create a Data Fabric entity named LoanTestData<YOUR_INITIALS> at tenant level and import the rows into it. Show me the schema and the rows before you create anything.
        ```

    2. Check the schema and rows, fix any wrong expected result, and approve.

    **Check it:** **Data Fabric** has **LoanTestData&lt;YOUR_INITIALS&gt;** with 12 records.

    ### Part 2 — Link the data to your test cases

    ```text
    In my Studio project (Documents\UiPath\<project name>), install the Data Fabric entity LoanTestData<YOUR_INITIALS> and add it as test data to the test cases for <KEY_1> and <KEY_2>. Bind the entity's fields to each test case's inputs and expected result. Then build the project.
    ```

    Reload the project in Studio and run a test case. It runs once per record.

    !!! warning "Every linked test case gets every row"
        There's no row filter, so each test case checks the row's **ExpectedResult**. For a subset of rows, ask Delegate for a **separate entity**.

**Check it:** your test case runs once per variation, and each expected result matches the acceptance criteria.

!!! question "Think about it"
    Did the data expose an overlap in the rules — say, age 30, $60,000 over 10 years, income $150,000? Which rule applies?

## Nice work!

Your test case now checks the loan rules at their edges.

---

[Next → 09. Publish Test Cases](09-publish-test-cases.md){: .md-button .md-button--primary}

---
