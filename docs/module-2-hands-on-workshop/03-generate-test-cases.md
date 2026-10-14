# 03. Generate Test Cases

## Why generate test cases?

Designing test cases by hand is slow, and it's easy to miss edge cases. The **Test Case Generation Agent** in Autopilot for Testers reads a requirement and proposes a set of test cases — each with a name, a description, and **manual test steps** — that cover the user flow and acceptance criteria.

You stay in control: you review the proposals, keep the ones you want, and edit them before they're saved.

!!! info "Why manual steps matter"
    The manual steps Autopilot generates here are what Autopilot in Studio — or a coding agent — will turn into automation in step 5. Clear **Given / When / Then** steps lead to cleaner automated test cases.

    ✅ **GIVEN** — set up the conditions for the test (data, starting page, application state)

    ✅ **WHEN** — perform the action being tested

    ✅ **THEN** — verify the expected result

## Generate them with Autopilot

!!! example "It's your turn now!"
    1. Open the loan application requirement you evaluated in step 2.
    2. Use **Autopilot** to **generate test cases** for it. You can add extra instructions, for example *"Focus on the age and income rules in the acceptance criteria."*
    3. Review the proposed test cases. Check that the steps are clear and the expected results match the acceptance criteria.
    4. Keep **3 or 4** test cases for the workshop (you'll automate at least 2 of them) — for example one approval, one rejection due to age, one rejection due to income, and one missing mandatory field.
    5. Create the test cases. They're saved in **Test Cases** and **linked to the requirement**.

**Check it:**

✅ The requirement shows the new test cases as linked (traceability from requirement to test case).

✅ Each test case has manual steps.

✅ Note the **test case keys** (for example `UIBMK:5`) — you'll see them again in the report.

!!! tip "Keep one failing test case"
    The go/no-go report in step 10 is most interesting when something fails. Your trainer may ask you to keep one test case whose expected result **doesn't** match the application, so the report has a real failure to explain.

## Nice work!

You've gone from a requirement to a set of reviewed, linked test cases in minutes.

---

[Next → 04. Connect Studio to Test Manager](04-connect-studio-to-tm.md){: .md-button .md-button--primary}

---
