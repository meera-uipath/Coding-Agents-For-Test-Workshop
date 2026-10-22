# Set Up Your Coding Agent

Work through these steps in order. Each one ends with a quick check so you know it worked before moving on. Complete the workshop [Installation Guide](../module-0-prerequisites/01-installation-guide.md) first — you still need Studio and the browser extension.

!!! tip "Use a fresh PowerShell window after each install"
    Installers update your `PATH`. If a command isn't recognized right after installing, close **all** PowerShell windows and open a new one.

## Step 1 — Node.js (LTS) and npm 11

The UiPath CLI, Claude Code, and Codex are installed with **npm**, which comes with Node.js.

1. Install the **LTS** version of Node.js:

    === "Method 1 — winget (quickest)"

        ```powershell
        winget install --id OpenJS.NodeJS.LTS -e --source winget
        ```

        If prompted, type `Y` and press **Enter**.

    === "Method 2 — installer"

        Download and run the **LTS** installer from <a href="https://nodejs.org" target="_blank">nodejs.org</a>, accepting the default options.

2. Open a **new** PowerShell window, then upgrade npm to version 11:

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

Claude Code, Codex, and the UiPath skills use Git to work with files and projects.

=== "Method 1 — winget (quickest)"

    ```powershell
    winget install --id Git.Git -e --source winget
    ```

    If prompted, type `Y` and press **Enter**.

=== "Method 2 — installer"

    1. Go to <a href="https://git-scm.com/download/win" target="_blank">git-scm.com/download/win</a> and run the **64-bit** installer.
    2. On the **Adjusting your PATH environment** screen, select the middle option: **Git from the command line and also from 3rd-party software**.

**Check it** (in a new PowerShell window):

```powershell
git --version
```

✅ You see something like `git version 2.45.1.windows.1`.

## Step 3 — Studio's Terminal tab

To run your coding agent inside Studio, you need Studio's **Terminal** tab. It's only available in **Short Term Support (STS)** versions of Studio — the version linked in the [Installation Guide](../module-0-prerequisites/01-installation-guide.md).

**Check it:**

✅ Studio shows a **Terminal** tab in the panel at the bottom of the window, next to **Output** and **Errors**.

![Terminal tab in Studio](../assets/images/Terminal%20in%20Studio%20STS.png)

You can also skip the Terminal tab and run your coding agent from any other terminal or IDE.

## Step 4 — Install your coding agent

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

    Then sign in with your OpenAI account:

    ```powershell
    codex login
    ```

    !!! note "Codex runs commands in a sandbox"
        Codex can run commands in a sandbox that doesn't share your `uip` login. If the agent says you aren't logged in when `uip login status` says you are, ask it to run UiPath CLI commands with escalated permissions.

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

```powershell
uip skills list
```

✅ The list includes **`uipath-test`**, **`uipath-rpa`**, and **`uipath-platform`**.

!!! info "Skills load automatically"
    You don't need to call a skill by name. When you ask about Test Manager, the agent loads `uipath-test` on its own. If it doesn't recognize UiPath tasks, close it and open it again so it reloads its plugins.

## Step 7 — UiPath CLI tools

Tools add command groups to the UiPath CLI. The skills rely on them:

| Tool | Commands | Used for |
|---|---|---|
| Test Manager tool | `uip tm` | Test cases, test sets, executions, and reports |
| RPA tool | `uip rpa` | Studio projects: Object Repository and test data links |
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

Replace `<ORGANIZATION>` and `<TENANT>` with the values your trainer shares:

```powershell
uip login --authority https://cloud.uipath.com --organization <ORGANIZATION> -t <TENANT>
```

A browser window opens. Complete the sign-in, then return to PowerShell.

**Check it:**

```powershell
uip login status --output json
```

✅ The output shows you're logged in to the **organization and tenant** your trainer shared.

!!! tip "Wrong tenant?"
    Switch with `uip login tenant set <TENANT> --output json`.

## Step 9 — Warm up

1. **Explore the built-in help.** Help output is the authoritative reference, and your coding agent uses it too.

    ```powershell
    uip --help
    uip docsai ask "How do I list Test Manager projects with the UiPath CLI?"
    uip tm project list --output json
    ```

2. **Ask your coding agent.** [Open your coding agent](index.md#open-your-coding-agent), and ask for an outcome in plain English:

    ```text
    Which UiPath skills can I use? List the Test Manager projects in the tenant I'm logged in to.
    ```

    ✅ The agent runs `uip` commands on its own and answers both questions.

!!! warning "Your coding agent acts as you"
    ✅ The agent uses **your** `uip login` session, with your permissions. Anything it does in Test Manager or Orchestrator is done in your name.

    ✅ **Don't approve a blanket rule for all `uip` commands** — that would include commands that change or delete data. Approve read and list commands as they come up.

## Keep everything up to date

The CLI, tools, and skills are updated often. Update them before you use them, and again whenever something behaves unexpectedly:

```powershell
npm install -g @uipath/cli@latest
uip tools update
uip skills update
```

Then close your coding agent and open it again, so it picks up the new skills.

## Setup checklist

- [ ] `npm --version` shows 11.x.x, and `git --version` works
- [ ] `claude --version` or `codex --version` works, and you've signed in
- [ ] `uip --version` shows 1.195.1 or later
- [ ] `uip skills list` includes `uipath-test`, `uipath-rpa`, and `uipath-platform`
- [ ] `uip tm --help`, `uip rpa --help`, and `uip df --help` work
- [ ] `uip login status --output json` shows the workshop organization and tenant
- [ ] Your coding agent answers *"Which UiPath skills can I use?"*

## Troubleshooting

| Symptom | Likely cause / fix |
|---|---|
| A command isn't recognized right after installing | Your PowerShell window still has the old `PATH`. Close **all** PowerShell windows and open a new one. |
| Claude Code install fails with a scripts permission error | Run `npm config set allow-scripts=@anthropic-ai/claude-code --location=user`, then install again. |
| `npm --version` isn't 11.x | Run `npm install --global npm@11`. |
| `uip tm` isn't a recognized command | The Test Manager tool isn't installed. Run `uip tools install @uipath/test-manager-tool`. |
| `uip rpa` or `uip df` isn't a recognized command | Run `uip tools install @uipath/rpa-tool` or `uip tools install @uipath/data-fabric-tool`. |
| The agent doesn't use the UiPath skills | Run `uip skills install` again, then start a **new** session. For Claude Code, check the plugin is installed (`claude plugin install uipath@uipath-marketplace`). |
| `401 Unauthorized` | Your session expired. Run the `uip login` command from step 8 again. |
| Your project doesn't show up in `uip tm project list` | You're logged in to the wrong tenant. Check with `uip login status --output json` and switch with `uip login tenant set <TENANT> --output json`. |

---

[Back to Home](../index.md){: .md-button .md-button--primary}

---
