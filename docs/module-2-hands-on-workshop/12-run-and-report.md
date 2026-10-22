# 12. Run and Report

It's release night. The sign-off meeting is in a few hours, and the release manager wants one thing: **can we ship?**

Instead of running the test set, waiting, exporting results, and writing a summary by hand, you'll ask Delegate to do it all — in one prompt.

## See it in action

Watch the demo first (about 1 min 45 s). The presenter types one prompt, and the agent does the rest. The demo was recorded with a coding agent in a terminal — Delegate follows the same steps.

<video width="100%" controls style="border-radius: 6px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08); margin: 20px 0;">
  <source src="../../assets/Videos/coding-agent-go-no-go-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Before you start

!!! info "Check these first"
    ✅ **Delegate is signed in** to the workshop organization and tenant your trainer shared.

    ✅ **Your robot is available** — in Orchestrator, open your folder and check the machine is connected and not busy.

    ✅ **Close any open Edge or Chrome windows** — PDF rendering can fail if the browser is already running.

    ✅ You know your **project key** (step 1) and the exact **name of your test set** (step 11).

## Part 1 — Open Delegate

[Open Delegate](../module-0-prerequisites/01-installation-guide.md#step-2-meet-delegate) and start a **new session**, so it starts clean.

## Part 2 — Type the prompt

Replace `<YOUR_TEST_SET_NAME>` and `<YOUR_PROJECT_KEY>`, then paste the prompt into Delegate:

```text
Trigger the <YOUR_TEST_SET_NAME> test set of project <YOUR_PROJECT_KEY> in Test Manager and wait for it to finish. Once finished, create a release manager report in PDF for that test set, and save it in Documents\UiPath\Reports. I need a go/no-go summary before tonight's sign-off meeting. Highlight the failures blocking the release.
```

??? tip "Run a single test case instead"
    To check one fix quickly, without running the whole set, ask for a single test case:

    ```text
    Run test case <KEY_1> in project <YOUR_PROJECT_KEY> in Test Manager, wait for it to finish, and tell me whether it passed. If it failed, explain why.
    ```

## Part 3 — Watch it work

Delegate works on its own. Expect roughly this sequence:

1. Finds your project, then the test set.
2. Asks you to approve, then **triggers the run** on your robot.
3. Waits for the run to finish (several minutes).
4. Pulls the result of each test case.
5. Checks past runs of each failure, to tell **new regressions** from **recurring failures**.
6. Writes the PDF and shows its path.

!!! warning "Only one action changes anything"
    Triggering the test set starts a **real execution** on your robot. Every other action only reads data. Read the request before you approve it.

!!! tip "Use the waiting time"
    While the run finishes, look at what's on screen: the steps it chose, the data it read — and how it recovers when something goes wrong.

## Part 4 — Check the report

When it finishes, Delegate shows a summary (for example **NO-GO — 5 passed / 4 failed**) and the path to the PDF.

1. Open the PDF.
2. Compare it with Test Manager → your project → **Execution**. The pass/fail counts and the failing test case keys should match.

A good release report includes:

✅ A **recommendation banner** — GO, NO-GO, or conditional

✅ **KPI tiles** — total, passed, failed, pass rate, blocking failures

✅ A **Failures Blocking the Release** table, with failure details and run history

✅ A table of **all results**

✅ A **Risk Assessment**

✅ **Conditions to Reach GO**

:material-file-pdf-box: [**Sample release test report (PDF)**](../assets/Files/sample-release-test-report.pdf) — see the report from the demo

!!! question "Think about it"
    Every run is real, so your result will differ from the demo. If all your tests pass, the report recommends **GO**. Which failures were called *blocking*, and do you agree? How did it decide between a new regression and a recurring failure?

## It's your turn now!

!!! example "Go further"
    Stay in the same session and ask follow-up questions — it remembers the run:

    ✅ *"Which requirement is at the highest risk based on this run?"*

    ✅ *"Summarize the failures in three bullet points I can paste into Slack."*

    ✅ *"Add a section to the report with recommended next steps for the developers."*

    ✅ **Save it as a routine.** Ask Delegate to save this run-and-report task as a **routine**, so you — or your team — can re-run it at the next release with one prompt.

    More ideas in **[More Prompts to Try](../module-3-troubleshooting-and-next-steps/01-more-agent-prompts.md)**.

---

[Next → You did it!](you-did-it.md){: .md-button .md-button--primary}

---
