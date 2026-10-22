# 03. Generate Test Cases

The **Test Case Generation Agent** reads a requirement and proposes test cases with manual steps. You review them before they're saved.

## Generate them with UiPath Agent

1. Open the loan application requirement.
2. Use **Autopilot** to **generate test cases** for it.
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

!!! tip "Keep one failing test case"
    Your trainer may ask you to keep one test case whose expected result **doesn't** match the app, so the step 12 report has a real failure.

## Nice work!

You've gone from a requirement to reviewed, linked test cases in minutes.

---

[Next → 04. Run Manual Tests](04-run-manual-tests.md){: .md-button .md-button--primary}

---
