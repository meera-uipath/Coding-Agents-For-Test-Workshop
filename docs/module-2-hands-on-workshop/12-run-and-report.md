# 12. Run and Report

It's release night, and the release manager wants to know: **can we ship?** Ask Delegate to run the test set and write the go/no-go report — in one prompt.

!!! info "Check these first"
    ✅ **Your robot is available** — connected and not busy, in your Orchestrator folder.

    ✅ **Edge and Chrome are closed** — PDF rendering can fail if the browser is already running.

    ✅ You know your **project key** and the exact **test set name** (step 11).

## Run it

!!! example "It's your turn now!"
    1. [Open Delegate](../module-0-prerequisites/01-installation-guide.md#step-2-meet-delegate) and start a **new session**.
    2. Replace the placeholders, then paste:

        ```text
        Trigger the <YOUR_TEST_SET_NAME> test set of project <YOUR_PROJECT_KEY> in Test Manager and wait for it to finish. Once finished, create a release manager report in PDF for that test set, and save it in Documents\UiPath\Reports. I need a go/no-go summary before tonight's sign-off meeting. Highlight the failures blocking the release.
        ```

    3. Approve the run when Delegate asks. It's the only action that changes anything — a **real execution** on your robot.
    4. Wait a few minutes while it runs the set, pulls the results, and checks past runs of each failure.

??? tip "Run a single test case instead"
    ```text
    Run test case <KEY_1> in project <YOUR_PROJECT_KEY> in Test Manager, wait for it to finish, and tell me whether it passed. If it failed, explain why.
    ```

## Check the report

Open the PDF and compare it with **Execution** in Test Manager: the counts and failing keys should match. The report includes:

✅ A **GO / NO-GO** recommendation, and KPI tiles

✅ **Failures blocking the release**, with run history

✅ All results, a **risk assessment**, and **conditions to reach GO**

!!! question "Think about it"
    Which failures were called *blocking*, and do you agree? How did it tell a new regression from a recurring failure?

## Go further

Stay in the same session — it remembers the run:

✅ *"Which requirement is at the highest risk based on this run?"*

✅ *"Summarize the failures in three bullet points I can paste into Slack."*

✅ *"Add a section to the report with recommended next steps for the developers."*

✅ *"Save this run-and-report task as a routine."* — rerun it at the next release with one prompt.

More ideas in **[More Prompts to Try](../module-3-troubleshooting-and-next-steps/01-more-agent-prompts.md)**.

---

[Next → You did it!](you-did-it.md){: .md-button .md-button--primary}

---
