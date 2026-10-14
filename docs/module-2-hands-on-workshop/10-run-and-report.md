# 10. Run and Report with a Coding Agent

It's release night. The sign-off meeting is in a few hours, and the release manager wants one thing: **can we ship?**

Instead of running the test set, waiting, exporting results, and writing a summary by hand, you'll ask a coding agent to do it all — in one prompt.

## See it in action

Watch the demo first (about 1 min 45 s). The presenter types one prompt, and the agent does the rest.

<video width="100%" controls style="border-radius: 6px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08); margin: 20px 0;">
  <source src="../../assets/Videos/coding-agent-go-no-go-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Before you start

!!! info "Check these first"
    ✅ **You're logged in** to the right tenant — login tokens expire, so check every time:

    ```powershell
    uip login status --output json
    ```

    If the session expired, run the `uip login` command from the [Installation Guide](../module-0-prerequisites/01-installation-guide.md#step-8-log-in-to-your-tenant) again.

    ✅ **Your robot is available** — in Orchestrator, open your folder and check the machine is connected and not busy.

    ✅ **Close any open Edge or Chrome windows** the agent may use — PDF rendering can fail if the browser is already running.

    ✅ You know your **project key** (step 1) and the exact **name of your test set** (step 9).

## Part 1 — Start the coding agent

Open a **new terminal**, go to a folder where the PDF can be saved, and start your coding agent.

=== "Claude Code"

    ```powershell
    mkdir go-no-go-report
    cd go-no-go-report
    claude
    ```

    !!! tip "Auto mode"
        The demo uses **auto mode** (press **Shift+Tab** to cycle modes), which lets commands run without asking each time. Leave it off if you'd rather approve each `uip` command and learn what the agent is doing.

=== "OpenAI Codex"

    ```powershell
    mkdir go-no-go-report
    cd go-no-go-report
    codex
    ```

    !!! tip "Approvals"
        Codex may ask before running commands. Read and approve each `uip` command as it comes — it's a good way to learn what the agent is doing.

!!! note "Start fresh"
    Use a **new session** each time (or type `/clear`), so the agent starts clean.

## Part 2 — Type the prompt

Replace `<YOUR_TEST_SET_NAME>` and `<YOUR_PROJECT_KEY>`, then paste the prompt into the agent:

```text
Trigger the <YOUR_TEST_SET_NAME> test set of Project <YOUR_PROJECT_KEY> in Test Manager and wait for it to finish. Once finished, create a release manager report in pdf for that test set. I need a go/no-go summary before tonight's sign-off meeting. Highlight the failures blocking the release.
```

??? tip "Run a single test case instead"
    To check one fix quickly, without running the whole set, ask for a single test case:

    ```text
    Run test case <KEY_1> in project <YOUR_PROJECT_KEY> in Test Manager, wait for it to finish, and tell me whether it passed. If it failed, explain why.
    ```

## Part 3 — Watch the agent work

The agent works on its own. Expect roughly this sequence:

| # | What the agent does | Command you'll see |
|---|---|---|
| 1 | Loads the Test Manager skill | `uipath-test` skill |
| 2 | Checks your login and the available commands | `uip login status`, `uip tm … --help` |
| 3 | Finds your project, then the test set | `uip tm project list`, `uip tm testsets list` |
| 4 | **Triggers the run** on your robot | `uip tm testsets run --test-set-key <KEY>` |
| 5 | Waits for the run to finish (several minutes) | polling the execution status |
| 6 | Pulls the result of each test case | `uip tm executions testcaselogs list …` |
| 7 | Checks past runs of each failure, to tell **new regressions** from **recurring failures** | `uip tm testcases list-result-history …` |
| 8 | Writes the PDF and prints its path | |

!!! warning "Only one command changes anything"
    `uip tm testsets run` starts a **real execution** on your robot. Every other command only reads data. If you're approving commands one by one, read each one before you approve it.

!!! tip "Use the waiting time"
    The run takes a few minutes. Use the time to look at what's on screen: the skill loading, the JSON output, the commands the agent chose — and how it recovers when something goes wrong.

## Part 4 — Check the report

When the agent finishes, it prints a summary in the terminal (for example **NO-GO — 5 passed / 4 failed**) and the path to the PDF.

1. Open the PDF.
2. Compare it with Test Manager → your project → **Execution**. The pass/fail counts and the failing test case keys should match.

A good release report includes:

✅ A **recommendation banner** — GO, NO-GO, or conditional

✅ **KPI tiles** — total, passed, failed, pass rate, blocking failures

✅ A **Failures Blocking the Release** table, with failure details and run history

✅ A table of **all results**

✅ A **Risk Assessment**

✅ **Conditions to Reach GO**

:material-file-pdf-box: [**Sample release test report (PDF)**](../assets/Files/sample-release-test-report.pdf) — see what the agent produced in the demo

!!! question "Think about it"
    Every run is real, so your result will differ from the demo. If all your tests pass, the report recommends **GO**. Which failures did the agent call *blocking*, and do you agree? How did it decide between a new regression and a recurring failure?

## Trainer demo (optional): UiPath Delegate

!!! info "Private Preview — for partners with preview access"
    **UiPath Delegate** is a desktop assistant with tools built to work across the **whole desktop environment**, not just a terminal or an IDE. It focuses on **attended, manual work**: tasks a person would otherwise do by hand at their own desk.

    Delegate is in **Private Preview** and is available only on the desktop. If your group has access to preview products and is interested, your trainer may show how Delegate handles the same kind of request from the desktop. This part is optional, and there's nothing for you to install.

## It's your turn now!

!!! example "Go further"
    Stay in the same session and ask follow-up questions — the agent remembers the run:

    ✅ *"Which requirement is at the highest risk based on this run?"*

    ✅ *"Summarize the failures in three bullet points I can paste into Slack."*

    ✅ *"Add a section to the report with recommended next steps for the developers."*

    More ideas in **[More Agent Prompts](../module-3-troubleshooting-and-next-steps/01-more-agent-prompts.md)**.

---

[Next → You Did It!](you-did-it.md){: .md-button .md-button--primary}

---
