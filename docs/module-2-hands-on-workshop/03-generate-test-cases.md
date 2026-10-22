# 03. Generate Test Cases

## Why generate test cases?

Designing test cases by hand is slow, and it's easy to miss edge cases. The **Test Case Generation Agent** in Autopilot for Testers reads a requirement and proposes a set of test cases — each with a name, a description, and **manual test steps** — that cover the user flow and acceptance criteria.

You stay in control: you review the proposals, keep the ones you want, and edit them before they're saved.

## Generate them with UiPath Agent

1. Open the loan application requirement you evaluated in step 2.
2. Use **Autopilot** to **generate test cases** for it.
3. Open **Provide additional context**.

    With the project documents, the agent's test cases check the security and accessibility rules too. For test case generation, there are two ways to add them:

    | | Add documents | Leverage RAG |
    |---|---|---|
    | **What Autopilot reads** | The documents you select, **in full** | Only the **relevant passages** from a Context Grounding index |
    | **Best for** | A few specific documents | Large document sets |
    | **In this workshop** | ✅ **Yes** | NA |

    In **Add documents**, include:

    ✅ **UiBank Regression Tests.xlsx** — existing loan tests, so Autopilot matches their step style and avoids duplicates

    ✅ **UiBank Security Guidelines.pdf** — adds negative tests, such as invalid input in the form fields

    ✅ **UiBank Accessibility Guidelines.docx** — adds tests for form labels, error messages, and keyboard navigation

4. Add extra instructions if you like, for example *"Focus on the age and income rules in the acceptance criteria, and apply the security guidelines."*
5. Review the proposed test cases. Check that the steps are clear, the expected results match the acceptance criteria, and the rules from the documents are covered.
6. Identify and keep **3 or 4** test cases for the workshop
7. Create the test cases. They're saved in **Test Cases** and **linked to the requirement**.

**Check it:**

✅ The requirement shows the new test cases as linked (traceability from requirement to test case).

✅ Each test case has manual steps.

!!! tip "Keep one failing test case"
    The go/no-go report in step 12 is most interesting when something fails. Your trainer may ask you to keep one test case whose expected result **doesn't** match the application, so the report has a real failure to explain.

## Nice work!

You've gone from a requirement to a set of reviewed, linked test cases in minutes.

---

[Next → 04. Run Manual Tests](04-run-manual-tests.md){: .md-button .md-button--primary}

---
