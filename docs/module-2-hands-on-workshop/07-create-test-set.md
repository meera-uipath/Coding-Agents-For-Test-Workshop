# 07. Create a Test Set

A **test set** groups test cases that run together. You'll create a **regression** test set: it checks that nothing that used to work is broken, and it runs before a release.

## Create it

!!! example "It's your turn now!"
    1. In Test Manager, go to **Test Sets → Create Test Set**.
    2. Name it **Regression Test Set**, and click **Create**.
    3. Open the test set → **Tasks → Assign Test Cases**. Choose one, then select **Assign**:

        ✅ **Static Assignment** — pick your automated test cases, including the one meant to fail. The set always runs exactly these.

        ✅ **Dynamic Assignment** — enter labels. Each time the set runs, it includes every test case with at least one of them. Use a label only your automated test cases have.

    See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/quickstart-assigning-test-cases-to-test-sets" target="_blank">Assigning test cases to test sets</a>.

**Check it:** **Regression Test Set** lists your automated test cases, including the one meant to fail.

??? tip "Do a test run (optional)"
    Open the test set → **Execute → Automated**, then check **Execution**. Every test case should have a result. A real failure is fine — that's what the report is for.

## Nice work!

Everything is in place to run and report.

---

[Next → 08. Run and Report](08-run-and-report.md){: .md-button .md-button--primary}

---
