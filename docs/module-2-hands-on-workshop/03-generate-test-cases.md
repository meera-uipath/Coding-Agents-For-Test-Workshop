# 03. Generate Test Cases

The **Test Case Generation Agent** reads a requirement and proposes test cases with manual steps. You review them before they're saved.

## Generate them with UiPath Agent

1. Open the loan application requirement.
2. Use the **Generate Test Cases** built-in agent to generate test cases for it.
3. Choose one of the built-in prompts to tell the agent how to generate the test cases.

    ??? info "Editing prompts and adding your own"
        The built-in prompts are editable, and you can add custom prompts of your own. Manage them in the **Prompt Library**, under **Project Settings**.

4. In **Provide additional context → Add documents**, select:

    ✅ **UiBank Regression Tests.xlsx** — matches the existing step style, avoids duplicates

    ✅ **UiBank Security Guidelines.pdf** — adds negative tests

    ✅ **UiBank Accessibility Guidelines.docx** — adds tests for labels, errors, and keyboard use

    ??? tip "Add documents or Leverage RAG?"
        | | Add documents | Leverage RAG |
        |---|---|---|
        | **What the agent reads** | The documents you select, **in full** | Only the **relevant passages** from a Context Grounding index |
        | **Best for** | A few specific documents | Large document sets |

5. Optionally, add instructions, for example *"Focus on the age and income rules in the acceptance criteria, and apply the security guidelines."*
6. Review the proposals, keep **3 or 4**, and create them.

**Check it:** the requirement shows the new test cases as linked, each with manual steps.

!!! tip "Keep one failing test case"
    Your trainer may ask you to keep one test case whose expected result **doesn't** match the app, so the report in [08. Run and Report](08-run-and-report.md) has a real failure.

## Nice work!

You've gone from a requirement to reviewed, linked test cases in minutes.

---

[Next → 04. Run Manual Tests](04-run-manual-tests.md){: .md-button .md-button--primary}

---
