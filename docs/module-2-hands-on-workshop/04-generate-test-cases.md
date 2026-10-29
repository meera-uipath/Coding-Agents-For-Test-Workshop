# 04. Generate Test Cases

The **Generate Test Cases** built-in agent reads a requirement and proposes test cases with manual steps. You review them before they're saved.

## Generate them with a built-in agent

1. Open the **Submit Loan Request** requirement.
2. Run the **Generate Test Cases** built-in agent on it.
3. In **Provide additional context → Add documents**, select:

    ✅ **UiBank Regression Tests.xlsx** — matches the existing step style, avoids duplicates

    ✅ **UiBank Security Guidelines.pdf** — adds negative tests

    ✅ **UiBank Accessibility Guidelines.docx** — adds tests for labels, errors, and keyboard use

    ??? tip "Add documents or Leverage RAG?"
        | | Add documents | Leverage RAG |
        |---|---|---|
        | **What Autopilot reads** | The documents you select, **in full** | Only the **relevant passages** from a Context Grounding index |
        | **Best for** | A few specific documents | Large document sets |

4. Optionally, add instructions, for example *"Focus on the age and income rules in the acceptance criteria, and apply the security guidelines."*
5. Review the proposals, keep **3 or 4**, and create them.

**Check it:** the requirement shows the new test cases as linked, each with manual steps.

!!! tip "Create one test case that fails"
    Your trainer guides you to create a test case that's meant to fail. You'll automate it in [06. Automate Test Cases with Studio Desktop and Delegate](06-automate-with-studio-and-delegate.md) and add it to the test set in [07. Create a Test Set](07-create-test-set.md), so the report in [08. Run and Report](08-run-and-report.md) has a real failure to show.

## Nice work!

You've gone from a requirement to reviewed, linked test cases in minutes.

---

[Next → 05. Run Manual Tests](05-run-manual-tests.md){: .md-button .md-button--primary}

---
