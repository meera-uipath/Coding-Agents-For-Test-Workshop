# More Agent Prompts

The go/no-go report is one example. With the `uipath-test` skill, your coding agent can **read**, **write**, and **run** across Test Manager. Try these prompts in your project — replace `<YOUR_PROJECT_KEY>` with your project key and `<YOUR_TEST_SET_NAME>` with the test set from step 9.

!!! tip "Ask for outcomes, not commands"
    You don't need to know the `uip tm` syntax. Describe what you want, and let the agent pick the commands. If you're curious, ask it: *"Which commands did you run, and why?"*

## Morning standup brief

```text
Summarize yesterday's test runs in project <YOUR_PROJECT_KEY> — how many passed, failed, or were blocked?
```

The agent fetches the latest execution results and returns a summary broken down by status — no trip to the dashboard.

## Coverage check before a release

```text
In project <YOUR_PROJECT_KEY>, what percentage of requirements are covered by test cases, and which requirements have no test cases at all?
```

The agent queries coverage per requirement and surfaces the gaps, so you can decide what to address before shipping.

## Triggering a targeted test set

```text
Run the <YOUR_TEST_SET_NAME> test set in project <YOUR_PROJECT_KEY> and let me know when it's done.
```

The agent triggers the test set and monitors the execution — no manual setup in the UI.

## Flaky or recurring failures

```text
For the failed test cases in the latest run of the <YOUR_TEST_SET_NAME> test set in project <YOUR_PROJECT_KEY>, look at their last 10 results and tell me which ones are new regressions and which keep failing.
```

The agent compares each failure with its result history.

## Read-only exploration

```text
List the test sets in project <YOUR_PROJECT_KEY> and the test cases in each one. Don't change anything.
```

A safe way to see how the agent finds its way around your project.

!!! warning "Prompts that write"
    Some prompts change data in Test Manager — for example triggering a run, creating defects, or updating test cases. The agent shows each command before running it (unless auto mode is on). Read write commands carefully before approving them.

## Send feedback

Found a problem or have an idea? Ask the agent:

```text
Send UiPath feedback: <describe the issue or improvement>
```

---

[Next → Troubleshooting](02-troubleshooting.md){: .md-button .md-button--primary}

---
