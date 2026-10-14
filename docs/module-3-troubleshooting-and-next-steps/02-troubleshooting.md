# Troubleshooting

## Installation

| Symptom | Likely cause / fix |
|---|---|
| A command isn't recognized right after installing | Your PowerShell window still has the old `PATH`. Close **all** PowerShell windows and open a new one. |
| Claude Code install fails with a scripts permission error | Run `npm config set allow-scripts=@anthropic-ai/claude-code --location=user`, then install again. |
| `npm --version` isn't 11.x | Run `npm install --global npm@11`. |
| `uip tm` isn't a recognized command | The Test Manager tool isn't installed. Run `uip tools install @uipath/test-manager-tool`. |
| `uip rpa` or `uip df` isn't a recognized command | The RPA or Data Fabric tool isn't installed. Run `uip tools install @uipath/rpa-tool` or `uip tools install @uipath/data-fabric-tool`. |
| The Terminal doesn't use the UiPath skills | **Claude Code or Codex:** run `uip skills install` again, then start a **new** session. For Claude Code, check the plugin is installed (`claude plugin install uipath@uipath-marketplace`). **Delegate:** check **Add-ons & Integrations → Plugins → Test Cloud** is turned on. |
| Delegate isn't in the UiPath Assistant switcher | Check Assistant is connected to your tenant (**Preferences → Orchestrator connection**), and ask your trainer to confirm your access. |

## Login

| Symptom | Likely cause / fix |
|---|---|
| `401 Unauthorized` | Your session expired. Run the `uip login` command again with the organization and tenant from your trainer. |
| Your project doesn't show up in `uip tm project list` | You're logged in to the wrong tenant. Check with `uip login status --output json` and switch with `uip login tenant set <TENANT> --output json`. |

## Execution

| Symptom | Likely cause / fix |
|---|---|
| `HTTP 400: Please assign folder to project level before executing testcases.` | The project has no default folder. Complete [Part 2 of step 9](../module-2-hands-on-workshop/09-configure-tm-folder.md#part-2-link-the-project-to-the-folder). The `uipath-test` skill also knows how to recover from this error. |
| Test cases are skipped with no result | They're manual — not linked to a published automation. Complete [step 8](../module-2-hands-on-workshop/08-publish-test-cases.md) and check each test case shows an automation. |
| The run stays pending or hangs | The robot is busy or disconnected. In Orchestrator, check the machine in your folder is connected and has an **App Test Robot** runtime. |
| Tests fail with "Cannot communicate with the browser" | A robot-side problem with the UiPath browser extension, not a product defect. Check the extension is installed and enabled on the robot machine. |

## PDF report

| Symptom | Likely cause / fix |
|---|---|
| PDF generation fails on the first try | The browser was already running. The Terminal usually retries on its own; if not, close Edge and Chrome and ask it to try again. |
| You can't find the PDF | The Terminal shows the path when it finishes. The step 11 prompt saves it in `Documents\UiPath\Reports`. |
| The report numbers don't match Test Manager | Make sure you're comparing the **same execution**. Ask the Terminal which execution ID it used. |

!!! info "Still stuck?"
    Ask your trainer, or ask in your Terminal — for example *"Why did the last command fail, and how do I fix it?"* The `--help` output of every `uip` command is the authoritative reference, and the Terminal can read it for you.

---

[Back to Home](../index.md){: .md-button .md-button--primary}

---
