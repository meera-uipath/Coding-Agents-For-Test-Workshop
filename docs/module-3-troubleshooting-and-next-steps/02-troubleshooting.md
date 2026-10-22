# Troubleshooting

## Delegate

| Symptom | Likely cause / fix |
|---|---|
| Delegate isn't in the UiPath Assistant switcher | Your Studio version may be too old. Install the latest STS version from the [Installation Guide](../module-0-prerequisites/01-installation-guide.md), and ask your trainer to confirm your access. |
| Delegate can't find your project | Delegate is signed in to the wrong tenant. Sign in again with the organization and tenant from your trainer, then start a new task with **Ctrl+N**. |
| Delegate asks for approval on every step | The security setting is **Maximum**. Switch it to **Smart**. |

Using Claude Code or Codex instead? See the troubleshooting table in [Set Up Your Coding Agent](../optional-coding-agents/01-setup.md#troubleshooting).

## Execution

| Symptom | Likely cause / fix |
|---|---|
| `HTTP 400: Please assign folder to project level before executing testcases.` | The project has no default folder. Complete [Part 2 of step 10](../module-2-hands-on-workshop/10-configure-tm-folder.md#part-2-link-the-project-to-the-folder). The `uipath-test` skill also knows how to recover from this error. |
| Test cases are skipped with no result | They're manual — not linked to a published automation. Complete [step 9](../module-2-hands-on-workshop/09-publish-test-cases.md) and check each test case shows an automation. |
| The run stays pending or hangs | The robot is busy or disconnected. In Orchestrator, check the machine in your folder is connected and has an **App Test Robot** runtime. |
| Tests fail with "Cannot communicate with the browser" | A robot-side problem with the UiPath browser extension, not a product defect. Check the extension is installed and enabled on the robot machine. |

## PDF report

| Symptom | Likely cause / fix |
|---|---|
| PDF generation fails on the first try | The browser was already running. Delegate usually retries on its own; if not, close Edge and Chrome and ask it to try again. |
| You can't find the PDF | Delegate shows the path when it finishes. The step 12 prompt saves it in `Documents\UiPath\Reports`. |
| The report numbers don't match Test Manager | Make sure you're comparing the **same execution**. Ask Delegate which execution ID it used. |

!!! info "Still stuck?"
    Ask your trainer, or ask in Delegate — for example *"Why did that last step fail, and how do I fix it?"*

---

[Back to Home](../index.md){: .md-button .md-button--primary}

---
