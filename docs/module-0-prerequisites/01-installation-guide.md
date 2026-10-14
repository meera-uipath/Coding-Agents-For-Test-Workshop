# Installation Guide

Work through these steps in order. Each one ends with a quick check so you know it worked before moving on.

!!! warning "Windows required for Studio"
    UiPath Studio runs on **Windows**. Run the whole installation on the Windows machine you'll bring to the workshop.

!!! tip "Use a fresh terminal after each install"
    Installers update your `PATH`. If a command isn't recognized right after installing, close **all** terminals and open a new one.

## Step 1 — Node.js (LTS) and npm 11

The UiPath CLI and the coding agents are installed with **npm**, which comes with Node.js.

1. Download and install the **LTS** version from <a href="https://nodejs.org" target="_blank">nodejs.org</a>.
2. Upgrade npm to version 11:

    ```powershell
    npm install --global npm@11
    ```

**Check it:**

```powershell
node --version
npm --version
```

✅ `npm --version` shows **11.x.x**.

## Step 2 — Git

Coding agents use Git to work with files and projects.

=== "Method 1 — winget (quickest)"

    ```powershell
    winget install --id Git.Git -e --source winget
    ```

    If prompted, type `Y` and press **Enter**.

=== "Method 2 — installer"

    1. Go to <a href="https://git-scm.com/download/win" target="_blank">git-scm.com/download/win</a> and run the **64-bit** installer.
    2. On the **Adjusting your PATH environment** screen, select the middle option: **Git from the command line and also from 3rd-party software**.

**Check it** (in a new terminal):

```powershell
git --version
```

✅ You see something like `git version 2.45.1.windows.1`.

## Step 3 — UiPath Studio and the browser extension

You'll automate test cases in Studio (with Autopilot or a coding agent), and the robot runs them in the browser.

1. Download Studio from <a href="https://www.uipath.com/start-trial" target="_blank">uipath.com/start-trial</a> and install it.
2. Launch Studio and **sign in** to the workshop organization and tenant shared by your trainer.
3. Install the **UiPath browser extension** for Edge or Chrome: in Studio, go to **Home → Tools → UiPath Extensions** and select your browser.

**Check it:**

✅ Studio launches and shows you as signed in.

✅ The UiPath extension is enabled in your browser.

!!! note "A browser for the PDF report"
    The coding agent uses **Microsoft Edge** or **Google Chrome** to render the go/no-go report as a PDF. Make sure at least one of them is installed.

## Step 4 — Install a coding agent

Install **Claude Code**, **Codex CLI**, or both.

=== "Claude Code"

    ```powershell
    npm install -g @anthropic-ai/claude-code
    ```

    **Check it:**

    ```powershell
    claude --version
    ```

    Then run `claude` once and sign in when prompted.

    !!! failure "Installation fails with a scripts permission error?"
        Allow the Claude Code install scripts, then retry:

        ```powershell
        npm config set allow-scripts=@anthropic-ai/claude-code --location=user
        npm install -g @anthropic-ai/claude-code
        ```

=== "OpenAI Codex"

    ```powershell
    npm install -g @openai/codex
    ```

    **Check it:**

    ```powershell
    codex --version
    ```

    Then run `codex` once and sign in when prompted.

## Step 5 — UiPath CLI

```powershell
npm install -g @uipath/cli@latest
```

**Check it:**

```powershell
uip --version
```

✅ The version is **1.195.1 or later**.

## Step 6 — UiPath plugin and skills

This adds the UiPath skills, including **`uipath-test`**, to your coding agent.

=== "Claude Code"

    ```powershell
    # 1. Add the marketplace (once)
    claude plugin marketplace add https://github.com/UiPath/skills
    # 2. Install the plugin from it
    claude plugin install uipath@uipath-marketplace
    # 3. Install the skills
    uip skills install
    ```

=== "OpenAI Codex"

    ```powershell
    # 1. Add the marketplace (once)
    codex plugin marketplace add UiPath/skills --ref main
    # 2. Install the skills
    uip skills install
    ```

**Check it:**

✅ The output of `uip skills install` lists **`uipath-test`** among the installed skills (along with `uipath-rpa`, `uipath-platform`, and others).

!!! info "Skills load automatically"
    You don't need to call a skill by name. When you ask the agent about Test Manager, it loads `uipath-test` on its own.

## Step 7 — UiPath CLI tools

Tools add command groups to the UiPath CLI. The skills rely on them:

| Tool | Commands | Used for |
|---|---|---|
| Test Manager tool | `uip tm` | Test cases, test sets, executions, and reports |
| RPA tool | `uip rpa` | Studio projects: coded test cases and test data links |
| Data Fabric tool | `uip df` | Data Fabric entities and records (test data) |

```powershell
uip tools install @uipath/test-manager-tool
uip tools install @uipath/rpa-tool
uip tools install @uipath/data-fabric-tool
```

**Check it:**

```powershell
uip tools list --output table
uip tm --help
```

✅ All three tools appear in the list, and `uip tm --help` shows command groups such as `project`, `testsets`, `testcases`, and `executions`.

## Step 8 — Log in to your tenant

!!! info "Provided by your trainer"
    Replace `<ORGANIZATION>` and `<TENANT>` with the values your trainer shares.

```powershell
uip login --authority https://cloud.uipath.com --organization <ORGANIZATION> -t <TENANT>
```

A browser window opens. Complete the sign-in, then return to the terminal.

**Check it:**

```powershell
uip login status --output json
```

✅ The output shows you're logged in to the **organization and tenant** your trainer shared.

!!! tip "Wrong tenant?"
    Switch with `uip login tenant set <TENANT> --output json`.

## Step 9 — Warm up with the CLI

Get comfortable with the CLI before the agent starts driving it for you. These commands only **read** data.

1. **Explore the built-in help.** Help output is the authoritative reference, and agents use it too.

    ```powershell
    uip --help
    uip tools list --output table
    ```

2. **Ask the docs from your terminal.** `docsai` answers UiPath questions grounded in the official documentation.

    ```powershell
    uip docsai ask "How do I list Test Manager projects with the UiPath CLI?"
    ```

3. **Read your Test Manager data.**

    ```powershell
    uip tm project list --output json
    ```

✅ You see a list of Test Manager projects in your tenant (it may be short or empty before step 1 of the workshop).

## Setup checklist

Before the workshop, confirm every item:

- [ ] `npm --version` shows 11.x.x
- [ ] `git --version` works
- [ ] Studio launches and is signed in; the UiPath browser extension is enabled
- [ ] Edge or Chrome is installed
- [ ] `claude --version` or `codex --version` works, and you've signed in once
- [ ] `uip --version` shows 1.195.1 or later
- [ ] `uip skills install` lists `uipath-test`
- [ ] `uip tm --help`, `uip rpa --help`, and `uip df --help` work
- [ ] `uip login status --output json` shows the workshop organization and tenant

---

[Next → Introduction: Test Cloud & Test Manager](../module-1-introduction/index.md){: .md-button .md-button--primary}

---
