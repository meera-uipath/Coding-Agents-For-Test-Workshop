# 08. Run and Report

It's release night, and the release manager wants to know: **can we ship?** Ask Delegate to run the test set and write the go/no-go report — in one prompt.

!!! info "Check these first"
    ✅ **Your robot is available** — connected and not busy, in your Orchestrator folder.

    ✅ You know your **project key**, and **Regression Test Set** from [07. Create a Test Set](07-create-test-set.md) has your automated test cases.

## Run it

!!! example "It's your turn now!"
    1. [Open Delegate](../module-0-prerequisites/01-installation-guide.md#step-2-meet-delegate).
    2. Replace `<YOUR_PROJECT_KEY>`, then paste:

        ```text
        Trigger the Regression Test Set of project <YOUR_PROJECT_KEY> in Test Manager and wait for it to finish. Once finished, create a release manager report in PDF for that test set, and save it in Documents\UiPath\Reports. I need a go/no-go summary before tonight's sign-off meeting. Highlight the failures blocking the release.
        ```

    3. Approve the run when Delegate asks. It's the only action that changes anything — a **real execution** on your robot.
    4. Wait a few minutes while it runs the set, fetches the results, counts them, and finds the top failing test cases.
    5. If Delegate asks where to save the report, select **Other folder path** and enter `Documents\UiPath\Reports`, then select **Next**. Keep the default file name, and select **Submit**.

??? tip "Run a single test case instead"
    ```text
    Run test case <YOUR_TEST_CASE_KEY> in project <YOUR_PROJECT_KEY> in Test Manager, wait for it to finish, and tell me whether it passed. If it failed, explain why.
    ```

## Check the report

Delegate gives the path to the saved report and summarizes the key numbers in the chat. Compare them with **Execution** in Test Manager. The report shows:

✅ **Scope** — the executions it covers

✅ **Totals** — passed, failed, none, and restricted

✅ **Success rate**

✅ **Top failing test cases**

✅ **Recommendation** — GO or NO-GO, and why

??? tip "Saved as .md instead of PDF?"
    Ask Delegate:

    ```text
    Create a PDF of the report and copy to my Downloads folder
    ```

!!! question "Think about it"
    Does the recommendation match what you'd decide? What else would a release manager want to see? How long would this report take you to build by hand?

## Schedule it as a routine

A report you run once is useful. One that arrives every morning is better. You don't need to set this up today, but here's how it works.

**Save it as a routine.** Once Delegate has run a task, you can ask it to save the task as a reusable routine. For example: *"Save this run-and-report task as a routine called `<YOUR_PROJECT_KEY>` Release Report."* The routine appears under **Routines** in Delegate's left panel, ready to run again on demand.

**Put it on a schedule.** Under **Scheduled routines**, a Day / Week / Month calendar shows every routine with a time slot. New routines wait in the **Not scheduled** list below it. Drop one onto a time slot or set it to recur, for example weekdays at 8:00 AM.

!!! warning "The machine must be on"
    A scheduled routine runs only if the machine it runs on is powered on and signed in at the scheduled time.

## Go further

Stay in the same session — it remembers the run:

✅ *"Which requirement is at the highest risk based on this run?"*

✅ *"Summarize the failures in three bullet points I can paste into Slack."*

✅ *"Add a section to the report with recommended next steps for the developers."*

More ideas in **[More Prompts to Try](../module-3-troubleshooting-and-next-steps/01-more-agent-prompts.md)**.

---

[Next → You did it!](you-did-it.md){: .md-button .md-button--primary}

---
