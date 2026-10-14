# 02. Evaluate Requirements

## Why evaluate requirements?

Good test cases start with good requirements. A requirement that's vague, incomplete, or contradictory leads to gaps in testing — and gaps in testing lead to defects in production.

The **Evaluation Agent** in Autopilot for Testers analyzes a requirement and tells you how to improve it. It checks for:

✅ **Clarity** — is it unambiguous?

✅ **Completeness** — are the user flow, inputs, and expected outcomes all covered?

✅ **Testability** — can each statement be verified with a test?

## The requirement you'll work with

Your imported project contains requirements for the **UiBank** loan application. If your project doesn't include it, create a new requirement in **Requirements** and paste in the text below.

```text
As a potential UiBank customer, I want to apply for a loan via the UiPath Banking Application, so that I can quickly secure the funds I need.

## User Flow

* The applicant starts the loan application in the 'Loans' screen
* The applicant clicks 'Apply For A Loan'
* The system redirects to https://uibank.uipath.com/loans/apply
* The applicant provides an 'Email Address'.
  * This field requires an email address in a valid format.
* The applicant enters a 'Loan Amount'.
  * This field accepts only positive integer values.
* The applicant selects a 'Loan Term'.
  * This field provides the options '1', '3', '5', and '10' years.
* The applicant enters their 'Yearly Income'.
  * This field accepts only positive integer values.
* The applicant enters their 'Age'.
  * This field accepts only positive integer values.
* The applicant then clicks the 'Submit Loan Application'
* The applicant is notified whether the loan application is approved or rejected on the next page

## Acceptance Criteria

* Applicants under 18 and over 65 years of age:
  * Reject with "Not approved due to age."
* Missing at least one mandatory field on submission:
  * No error, no action, applicant remains on the same page.
* Applicants 18-65 years old, requesting >$100,000 without income >3x loan amount:
  * Reject with "Not approved over $100,000 without sufficient income."
* Applicants 18-65 years old, requesting <=$100,000, any term, with income >= loan amount:
  * Approve with "Congrats! You've been approved for a loan with UiBank!"
* Applicants 18-65, requesting over $50,000 for a term >5 years, with income >3x loan amount:
  * Approve with "Congrats! You've been approved for a loan with UiBank!"
* Applicants 18-65, requesting >$20,000 for 1 year, with income >=2x loan amount:
  * Approve with "Congrats! You've been approved for a loan with UiBank!"
* Applicants 18-65, loan <=$50,000, term <=5 years, income >= loan amount:
  * Approve with "Congrats! You've been approved for a loan with UiBank!"
* Applicants 18-65, requesting <=$10,000, any term, without specific income ratio requirements:
  * Approve with "Congrats! You've been approved for a loan with UiBank!"
```

## Evaluate it with Autopilot

!!! example "It's your turn now!"
    1. In your project, go to **Requirements** and open the loan application requirement.
    2. Use **Autopilot** to **evaluate the quality** of the requirement.
    3. Read the results. Autopilot gives a quality assessment and specific suggestions for improvement.
    4. Apply the suggestions you agree with and update the requirement.

!!! question "Think about it"
    Look at the acceptance criteria above. Can you spot overlaps or gaps — for example, an applicant who is exactly 18 or 65, or a loan amount that matches more than one approval rule? Did Autopilot find them too?

## Nice work!

Your requirement is now clearer and more testable — a much better starting point for generating test cases.

---

[Next → 03. Generate Test Cases](03-generate-test-cases.md){: .md-button .md-button--primary}

---
