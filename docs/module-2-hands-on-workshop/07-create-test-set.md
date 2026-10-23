# 07. Create a Test Set

A **test set** groups test cases that run together. Either kind works for the workshop:

| | Smoke test set | Regression test set |
|---|---|---|
| **Purpose** | The most critical features work at all | Nothing that used to work is broken |
| **Size** | A few key test cases | As many as possible |
| **When it runs** | After every build | Before a release |

## Create it

!!! example "It's your turn now!"
    1. In Test Manager, go to **Planning → Test Sets → Create Test Set**.
    2. Name it **Smoke Test Set** or **Regression Test Set**, and click **Create**.
    3. Assign your **automated** test cases, including the data-driven one from step 5, Generate test data. Manual ones are skipped.

**Check it:** the test set lists your automated test cases. Note its **exact name** for step 8.

??? tip "Do a test run (optional)"
    Open the test set → **Execute → Automated**, then check **Execution**. Every test case should have a result. A real failure is fine — that's what the report is for.

## Nice work!

Everything is in place for step 8.

---

[Next → 08. Run and Report](08-run-and-report.md){: .md-button .md-button--primary}

---
