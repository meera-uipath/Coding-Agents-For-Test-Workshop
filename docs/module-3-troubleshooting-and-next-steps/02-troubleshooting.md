# Troubleshooting

## Delegate

| Symptom | Likely cause / fix |
|---|---|
| Delegate isn't in UiPath Assistant's top ribbon | Your Studio version may be too old. Install the latest STS version from the [Installation Guide](../module-0-prerequisites/01-installation-guide.md), and ask your trainer to confirm your access. |
| Delegate asks for approval on every step | The approval mode is **Cautious**. In **Settings → Security**, switch it to **Adaptive**. |
| Delegate can't find your project | Delegate is signed in to the wrong tenant. Sign in again with the organization and tenant from your trainer, then click **+ New** to start a new task. |

## Execution

| Symptom | Likely cause / fix |
|---|---|
| `HTTP 400: Please assign folder to project level before executing testcases.` | The project has no default folder. Complete [02. Configure the Test Manager Folder, Part 2](../module-2-hands-on-workshop/02-configure-tm-folder.md#part-2-link-the-project-to-the-folder). |
| Test cases are skipped with no result | They're manual — not linked to a published automation. Complete [Publish the test cases](../module-2-hands-on-workshop/06-automate-with-studio-and-delegate.md#publish-the-test-cases) and check each test case shows an automation. |
| The run stays pending or hangs | The robot is busy or disconnected. In Orchestrator, check the machine in your folder is connected and has an **App Testing** runtime. |
| Tests fail with "Cannot communicate with the browser" | A robot-side problem with the UiPath browser extension, not a product defect. Check the extension is installed and enabled on the robot machine. |

## Report

| Symptom | Likely cause / fix |
|---|---|
| You can't find the report | Delegate shows the path when it finishes. If you chose **Current working directory**, the file is inside the Assistant install folder, which is hard to find. Ask Delegate *"Create a PDF of the report and copy to my Downloads folder"*. |
| The report numbers don't match Test Manager | Make sure you're comparing the **same execution**. Ask Delegate which execution ID it used. |

!!! info "Still stuck?"
    Ask your trainer, or ask in Delegate — for example *"Why did that last step fail, and how do I fix it?"*

---

[Back to Home](../index.md){: .md-button .md-button--primary}

---
