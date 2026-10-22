# Installation Guide


## Step 1 — Install UiPath Studio (latest STS)

!!! warning "Install the latest STS version"
    Delegate is included in **Short Term Support (STS)** versions of Studio. Install the latest one from the link below, even if you already have Studio.

1. Download the latest Studio STS installer, <a href="https://download.uipath.com/UiPathStudioCloud.msi" target="_blank">UiPathStudioCloud.msi</a> (about 760 MB), then run it and follow the steps.
2. Launch Studio and **sign in** to the workshop organization and tenant shared by your trainer.
3. Install the **UiPath browser extension** for Edge or Chrome: in Studio, go to **Home → Tools → UiPath Extensions** and select your browser.

**Check it:**

✅ Studio launches and shows you as signed in to the workshop tenant.

✅ The UiPath extension is enabled in your browser.


## Step 2 — Meet Delegate

**UiPath Delegate** is UiPath's productivity agent with the UiPath CLI and skills built in, so there's nothing else to set up. 

You describe a task in plain English, and Delegate does it for you from start to finish. It works on your real machine, in the actual browsers and desktop apps, not in a sandbox.

1. Open **UiPath Assistant**, and use the switcher next to the UiPath logo to open **Delegate**.
2. Press **Ctrl+N** to start a new task.


### Choose how much Delegate does on its own

The **security setting** decides when Delegate asks for your approval. Set it once as your default, or change it for a single conversation.

| Setting | What Delegate does |
|---|---|
| **Maximum** | Asks you to confirm every action before it runs |
| **Smart** *(recommended)* | Decides by risk: runs safe actions on its own, and asks before anything sensitive, such as triggering a test run |
| **Unrestricted** | Runs everything without asking — use it only in trusted environments |

Ask for an outcome in plain English:

    List the Test Manager projects in the workshop tenant.



!!! warning "Delegate acts on your behalf"
    Delegate works with your UiPath account and permissions. Anything it does in Test Manager or Orchestrator is done in your name, and every action is logged.



??? tip "Prefer Claude Code or OpenAI Codex?"
    You can run the same steps with your own coding agent instead. It takes extra setup — see **[Use Your Own Coding Agent](../optional-coding-agents/index.md)**.


---

[Next → Introduction: Test Cloud & Test Manager](../module-1-introduction/index.md){: .md-button .md-button--primary}

---
