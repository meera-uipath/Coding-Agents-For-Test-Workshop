# 06. Generate Test Data

## Why test data matters

A test case that always uses the same input proves only one thing. The UiBank loan rules depend on **age**, **loan amount**, **loan term**, and **yearly income**, and most defects hide at the edges: an applicant who is exactly 18 or 65, or a loan of exactly $100,000.

A **data-driven test case** runs the same steps once per row of test data. Each row is a **data variation**, with its own inputs and expected result. Instead of writing rows by hand, you can generate them from the acceptance criteria — with **Autopilot in Studio**, or with your **coding agent**, which stores the data in **Data Fabric** and links it to your test cases.

!!! info "What good test data covers"
    ✅ **Valid values** — typical applicants who should be approved

    ✅ **Boundary values** — ages 17, 18, 65, and 66; loans of exactly $10,000, $50,000, and $100,000

    ✅ **Invalid values** — a missing field, or an email in the wrong format

    ✅ **The expected message** for each row, taken from the acceptance criteria

## Generate it

Give test data to your automated test cases from step 5. With Autopilot, start with **one** test case; with the coding agent, link the data to **all** of them.

=== "Autopilot in Studio"

    !!! example "It's your turn now!"
        1. In the **Project** panel or **Test Explorer**, right-click your test case and add **test data** to it.
        2. Choose **Autopilot** as the source, and describe what you need, for example:

            ```text
            Generate 8 loan applications for UiBank: email, loan amount, loan term (1, 3, 5 or 10), yearly income, age, and the expected result message. Include ages 17, 18, 65 and 66, and loans of exactly 10000, 50000 and 100000.
            ```

        3. Review the variations Autopilot proposes. Fix any expected result that doesn't match the acceptance criteria.
        4. Bind the test data columns to the test case's inputs, then **run** the test case. It runs once per variation.

=== "Coding agent + Data Fabric"

    Here your coding agent generates the test data, stores it in **Data Fabric**, and links it to your test cases — all from the terminal.

    **Data Fabric** is UiPath's structured data store in Automation Cloud. Data is kept in **entities** (tables with typed fields) and **records** (rows). Test data stored there is **shared**: any test case, robot, or teammate in the tenant can use the same rows, and you update them in one place.

    The coding agent uses two UiPath skills:

    | Skill | What it does here | Commands you'll see |
    |---|---|---|
    | `uipath-platform` | Creates the entity and uploads the rows | `uip df entities create`, `uip df records import` |
    | `uipath-rpa` | Links the entity to your test cases in the Studio project | `uip rpa data-fabric-entities install`, `uip rpa test-data add-entity` |

    !!! warning "Check these first"
        ✅ **You're logged in** to the right tenant: `uip login status --output json`

        ✅ Your **Test Automation project is open in Studio** — `uip rpa` commands work through the running Studio instance.

        ✅ `uip df --help` and `uip rpa --help` work (Installation Guide, step 7).

        ✅ Your trainer has given you **permission to create Data Fabric entities**.

    ### Part 1 — Generate the data and upload it to Data Fabric

    1. In the same agent session as step 5 (or a new one started in Studio's **Terminal** panel), replace the placeholders and paste the prompt:

        ```text
        Read the loan application requirement in Test Manager project <YOUR_PROJECT_KEY> and generate 12 rows of test data from its acceptance criteria: Scenario, Email, LoanAmount, LoanTerm (1, 3, 5 or 10), YearlyIncome, Age, and ExpectedResult (the exact message from the acceptance criteria). Cover the age and loan amount boundaries. Then create a Data Fabric entity named LoanTestData<YOUR_INITIALS> at tenant level and import the rows into it. Show me the schema and the rows before you create anything.
        ```

    2. Review the **schema** and the **rows** the agent shows you. Correct any expected result that doesn't match the acceptance criteria.
    3. Approve. The agent creates the entity, then imports the rows.

    !!! note "Why the agent asks first"
        Creating an entity changes your tenant, so the skill always previews the schema and waits for your approval. Your initials in the entity name keep it separate from other participants' entities on the shared tenant.

    **Check it:** in Automation Cloud, open **Data Fabric** and find **LoanTestData&lt;YOUR_INITIALS&gt;**. It has 12 records.

    ### Part 2 — Link the data to your test cases

    The same entity can be linked to **several test cases** — the agent repeats the link command for each one.

    ```text
    In this Studio project, install the Data Fabric entity LoanTestData<YOUR_INITIALS> and add it as test data to the test cases for <KEY_1> and <KEY_2>. Update each test case to take its inputs and expected result from the entity's fields instead of hard-coded values. Then build the project.
    ```

    Expect the agent to:

    1. Install the entity into the project (`uip rpa data-fabric-entities install --add …`), so Studio knows its fields.
    2. Run `uip rpa test-data add-entity` **once per test case**. Each test case gets a new argument named after the entity.
    3. Replace hard-coded values in the test steps with the entity's fields, and build until there are **0 errors**.

    Reload the project in Studio and run one of the test cases. It runs **once per record**.

    !!! warning "Every linked test case gets every row"
        When a test case uses an entity as its data source, it runs once for **each record** in the entity — the link command has no row filter. That's why the prompt makes each test case check the **ExpectedResult** from the data, so the same test passes for approvals and rejections alike. If a test case should only use some rows, ask the agent to put those rows in a **separate entity**.

**Check it:**

✅ Your test case has **test data** with at least 8 variations — or, on the coding agent path, your test cases are linked to the Data Fabric entity.

✅ Each variation has an **expected result** that matches the acceptance criteria.

✅ The test case runs once per variation, and you can see a result for each one.

!!! question "Think about it"
    Did the generated data find any overlap in the rules? For example, an applicant aged 30 asking for $60,000 over 10 years with an income of $150,000 — which approval rule applies?

## Nice work!

Your test case now checks the loan rules at their edges, not just with one happy-path input.

---

[Next → 07. Publish Test Cases](07-publish-test-cases.md){: .md-button .md-button--primary}

---
