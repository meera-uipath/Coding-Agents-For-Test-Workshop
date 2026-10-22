# 11. Create a Test Set

## What's a test set?

A **test set** is a group of test cases that run together. You choose the test cases, then run the whole set with one click — or, in step 12, with one prompt in Delegate.

Two kinds of test set are common:

| | Smoke test set | Regression test set |
|---|---|---|
| **Purpose** | Checks that the most critical features work at all | Checks that nothing that used to work is now broken |
| **Size** | Small — a few key test cases | Large — as many test cases as possible |
| **Run time** | Minutes | Can take hours |
| **When it runs** | After every build or deployment | Before a release |

For the workshop, either works. Your set will hold the **2 or more automated test cases** from step 7.

## Create it

!!! example "It's your turn now!"
    1. In your Test Manager project, go to **Planning → Test Sets**.
    2. Click **Create Test Set**.
    3. Name it **Smoke Test Set** or **Regression Test Set**, and click **Create**.
    4. Assign your **automated** test cases to it (static assignment — select them manually). Include the data-driven test case from step 8.

!!! note
    Test cases that can't be executed, such as manual ones, are skipped and logged with no result.

**Check it:**

✅ The test set lists your automated test cases.

✅ You've noted the **exact name** of the test set — you'll use it in the prompt in step 12.

## Do a test run (optional)

Make sure everything works before step 12:

1. Open your test set, click **Execute**, and choose **Automated**.
2. Go to **Execution** and wait for the run to finish.

✅ Every test case has a result (passed or failed). A test that failed because of a real defect is fine — that's what the report is for.

## Nice work!

Your automated test cases are grouped and ready to run. Everything is in place for step 12.

---

[Next → 12. Run and Report](12-run-and-report.md){: .md-button .md-button--primary}

---
