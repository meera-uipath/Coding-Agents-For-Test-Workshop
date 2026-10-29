# More Prompts to Try

Replace `<YOUR_PROJECT_KEY>`, then try these in Delegate. Ask for outcomes, not commands.

## Morning standup brief

```text
Summarize yesterday's test runs in project <YOUR_PROJECT_KEY> — how many passed, failed, or were blocked?
```

## Coverage check before a release

```text
In project <YOUR_PROJECT_KEY>, what percentage of requirements are covered by test cases, and which requirements have no test cases at all?
```

## Triggering a targeted test set

```text
Run the Regression Test Set in project <YOUR_PROJECT_KEY> and let me know when it's done.
```

## Flaky or recurring failures

```text
For the failed test cases in the latest run of the Regression Test Set in project <YOUR_PROJECT_KEY>, look at their last 10 results and tell me which ones are new regressions and which keep failing.
```

## Read-only exploration

```text
List the test sets in project <YOUR_PROJECT_KEY> and the test cases in each one. Don't change anything.
```

!!! warning "Prompts that write"
    Triggering runs or updating test cases changes Test Manager. Read each approval request before you approve it.

---

[Next → Troubleshooting](02-troubleshooting.md){: .md-button .md-button--primary}

---
