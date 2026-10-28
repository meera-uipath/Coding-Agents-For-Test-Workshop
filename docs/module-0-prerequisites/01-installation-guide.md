# Installation Guide

## Step 1 — Install UiPath Studio (latest STS)

!!! warning "Install the latest STS version"
    Delegate is only in **Short Term Support (STS)** versions of Studio. Install the latest one, even if you already have Studio.

1. Download and run <a href="https://download.uipath.com/UiPathStudioCloud.msi" target="_blank">UiPathStudioCloud.msi</a> (about 760 MB).
2. Launch Studio and **sign in** to the workshop organization and tenant.
3. Install the **UiPath browser extension**: **Home → Tools → UiPath Extensions**, then select Edge or Chrome.

**Check it:** Studio shows you signed in to the workshop tenant, and the extension is enabled in your browser.

## Step 2 — Meet Delegate

**UiPath Delegate** is UiPath's agent, with the UiPath CLI and skills built in. Describe a task in plain English, and it does it on your machine, in your real browser and apps.

1. Open **UiPath Assistant**, and use the switcher next to the UiPath logo to open **Delegate**.
2. Press **Ctrl+N** to start a new task.

### Choose how much Delegate does on its own

| Security setting | What Delegate does |
|---|---|
| **Maximum** | Asks before every action |
| **Smart** *(recommended)* | Runs safe actions, asks before sensitive ones such as triggering a test run |
| **Unrestricted** | Never asks — trusted environments only |

Try it:

```text
List the tenant I am connected to.
```

!!! warning "Delegate acts on your behalf"
    It uses your UiPath account and permissions, and every action is logged in your name.

??? tip "Prefer Claude Code or OpenAI Codex?"
    See **[Use Your Own Coding Agent](../optional-coding-agents/index.md)**.

---

[Next → Introduction: Test Cloud & Test Manager](../module-1-introduction/index.md){: .md-button .md-button--primary}

---
