# Installation Guide

## Step 1 — Install UiPath Studio (latest STS)

!!! warning "Install the latest STS version"
    Delegate is only in **Short Term Support (STS)** versions of Studio. Install the latest one, even if you already have Studio.

1. Download and run <a href="https://download.uipath.com/UiPathStudioCloud.msi" target="_blank">UiPathStudioCloud.msi</a>.
2. Launch Studio and **sign in** to the workshop organization and tenant.
3. Install the **UiPath browser extension**: **Home → Tools → UiPath Extensions**, then select Edge or Chrome.

**Check it:** Studio shows you signed in to the workshop tenant, and the extension is enabled in your browser.

## Step 2 — Meet Delegate

**UiPath Delegate** is UiPath's agent, with the UiPath CLI and skills built in. Describe a task in plain English, and it does it on your machine, in your real browser and apps.

1. Open **UiPath Assistant**, and select **Delegate** in the top ribbon.
2. Set the work profile: click the chevron next to your user name (bottom left) → **Settings** → **Behavior preferences**, and set **Work profile** to **QA / Testing**.
3. Click **+ New** in the left panel to start a new task.

### Choose how much Delegate does on its own

Set this in **Settings → Security → Approval mode**:

| Approval mode | What Delegate does |
|---|---|
| **Cautious** | Asks before every operation |
| **Adaptive** *(recommended)* | Auto-approves known safe operations, and asks before the rest. **Smart approvals** also approves what Delegate judges safe |
| **Full access** | Never asks — trusted environments only |

Try it:

```text
List the tenant I am connected to.
```

!!! warning "Delegate acts on your behalf"
    It uses your UiPath account and permissions, and every action is logged in your name.

---

[Next → Introduction: Test Cloud & Test Manager](../module-1-introduction/index.md){: .md-button .md-button--primary}

---
