# 03. Evaluate Requirements

Vague or incomplete requirements lead to gaps in testing. The **Evaluate Requirement Quality** built-in agent checks a requirement for clarity, completeness, and consistency, and suggests fixes.

## Evaluate it with a built-in agent

1. Open **Requirements** → **Submit Loan Request**.
2. Run the **Evaluate Requirement Quality** built-in agent on it.
3. Choose one of the built-in prompts to tell the agent how to evaluate the requirement.

    ??? info "Editing prompts and adding your own"
        The built-in prompts are editable, and you can add custom prompts of your own. Manage them in the **Prompt Library**, under **Project Settings**.

4. In **Provide additional context → Add documents**, select these project documents (marked **P**), so the agent checks the requirement against their rules:

    ✅ **UiBank Glossary of Terms.txt** — undefined banking terms

    ✅ **UiBank Security Guidelines.pdf** — input validation, data masking, sessions

    ✅ **UiBank Accessibility Guidelines.docx** — form labels, error messages, keyboard support

    ![Add documents tab in Provide additional context](../assets/images/Add%20Docs%20TC%20creation.png){ .img-equal }

    ??? tip "Where do these documents come from?"
        They're the project's attachments, under **Dashboard → Attachments**:

        ![Attachments tab of the Test Manager project](../assets/images/Attachments%20in%20TM.png){ .img-equal }

5. Apply the suggestions you agree with, and update the requirement.

!!! question "Think about it"
    Can you spot gaps in the acceptance criteria — an applicant who is exactly 18 or 65, or a loan amount that matches two approval rules? Did the agent find them?

## Nice work!

Your requirement is clearer and more testable — ready for generating test cases.

---

[Next → 04. Generate Test Cases](04-generate-test-cases.md){: .md-button .md-button--primary}

---
