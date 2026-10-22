# 02. Evaluate Requirements

## Why evaluate requirements?

Good test cases start with good requirements. A requirement that's vague, incomplete, or contradictory leads to gaps in testing — and gaps in testing lead to defects in production.

The **Evaluation Agent** in Test Manager analyzes a requirement for quality aspects such as clarity, completeness, and consistency, and generates a list of suggestions that you can review and implement directly.

## Evaluate it with UiPath Agent

1. In your project, go to **Requirements** and open the loan application requirement.
2. Use **Autopilot** to **evaluate the quality** of the requirement.
3. Open **Provide additional context → Add documents**.

    Rules about security, accessibility, and terminology often live outside the requirement, in **other documents**. When Autopilot reads them too, it can check the requirement against those rules as well.

    Your project's documents are already listed, marked **P** (project-level document). Select the ones that set the rules the requirement should meet:

    ✅ **UiBank Glossary of Terms.txt** — flags banking terms the requirement uses without defining them

    ✅ **UiBank Security Guidelines.pdf** — flags missing input validation, data masking, and session rules

    ✅ **UiBank Accessibility Guidelines.docx** — flags missing form labels, error messages, and keyboard support

    ![Add documents tab in Provide additional context](../assets/images/Add%20Docs%20TC%20creation.png){ .img-equal }

    ??? tip "Where do these documents come from?"
        They're the project's attachments, stored in Test Manager under **Dashboard → Attachments**:

        ![Attachments tab of the Test Manager project](../assets/images/Attachments%20in%20TM.png){ .img-equal }

4. Read the results. Autopilot gives a quality assessment and specific suggestions for improvement.
5. Apply the suggestions you agree with and update the requirement.

!!! question "Think about it"
    Look at the acceptance criteria in the requirement. Can you spot overlaps or gaps — for example, an applicant who is exactly 18 or 65, or a loan amount that matches more than one approval rule? Did Autopilot find them too?

## Nice work!

Your requirement is now clearer and more testable — a much better starting point for generating test cases.

---

[Next → 03. Generate Test Cases](03-generate-test-cases.md){: .md-button .md-button--primary}

---
