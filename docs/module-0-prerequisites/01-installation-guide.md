# Installation Guide

Work through these steps in order. Each one ends with a quick check so you know it worked before moving on.

!!! warning "Windows required for Studio"
    UiPath Studio runs on **Windows**. Run the whole installation on the Windows machine you'll bring to the workshop.

!!! tip "Use a fresh PowerShell window after each install"
    Installers update your `PATH`. If a command isn't recognized right after installing, close **all** PowerShell windows and open a new one.

## Step 1 — Node.js (LTS) and npm 11

The UiPath CLI — and Claude Code or Codex — are installed with **npm**, which comes with Node.js.

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

## Step 3 — UiPath Studio and the browser extension

You'll automate test cases in Studio with Autopilot, and the robot runs them in the browser. With Claude Code or Codex, you can also open your Terminal inside Studio.

!!! warning "Install a Studio STS version"
    Studio's **Terminal** tab is only available in **Short Term Support (STS)** versions of Studio. Install Studio from the STS download link below.

1. Download the Studio STS installer, <a href="https://download.uipath.com/UiPathStudioCloud.msi" target="_blank">UiPathStudioCloud.msi</a> (about 760 MB), then run it and follow the steps.
2. Launch Studio and **sign in** to the workshop organization and tenant shared by your trainer.
3. Install the **UiPath browser extension** for Edge or Chrome: in Studio, go to **Home → Tools → UiPath Extensions** and select your browser.

**Check it:**

✅ Studio launches and shows you as signed in.

✅ Studio shows a **Terminal** tab in the panel at the bottom of the window, next to **Output** and **Errors**.

![Terminal tab in Studio](../assets/images/Terminal%20in%20Studio%20STS.png)

✅ The UiPath extension is enabled in your browser.

!!! note "A browser for the PDF report"
    The Terminal uses **Microsoft Edge** or **Google Chrome** to render the go/no-go report as a PDF. Make sure at least one of them is installed.

## Step 4 — Install your Terminal

Install the option you picked in [Choose your Terminal](index.md#choose-your-terminal): **Claude Code**, **OpenAI Codex**, or **UiPath Delegate**.

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

=== "UiPath Delegate"

    Delegate is part of the **UiPath Platform** installer, together with UiPath Assistant.

    1. Download the Windows installer for your release channel — your trainer tells you which one:

        | Channel | Installer |
        |---|---|
        | Community | <a href="https://download.uipath.com/connected-installer/latest/community/UiPathPlatform.msi" target="_blank">UiPathPlatform.msi</a> |
        | Enterprise STS | <a href="https://download.uipath.com/connected-installer/latest/sts/UiPathPlatformSTS.msi" target="_blank">UiPathPlatformSTS.msi</a> |

    2. Run the installer and select **Assistant, Delegate & Cartographer**. **Robot** and **Extensions** are selected automatically.
    3. Accept the License Agreement, select **Install**, and wait for it to finish.
    4. Open **UiPath Assistant**, go to **Preferences → Orchestrator connection**, sign in with your UiPath account, and select the workshop **tenant**.
    5. Use the switcher next to the UiPath logo to open **Delegate**.
    6. In Delegate, go to **Settings → Behavior preferences** and select the **QA/Testing** profile. This turns on the **Test Cloud** plugin (**Add-ons & Integrations → Plugins → Test Cloud**).

    **Check it:**

    ✅ **Delegate** appears in the switcher next to the UiPath logo.

    ✅ **Add-ons & Integrations → Plugins** shows **Test Cloud** turned on.

    !!! info "Delegate still uses the UiPath CLI"
        Delegate reads and updates Test Manager through the `uip` CLI. Complete steps 5, 7, and 8 below as well — the CLI must be installed and logged in.

    !!! tip "Approval mode"
        Next to the chat box, set the approval mode to **Adaptive** (recommended): Delegate runs safe actions on its own and asks before high-impact ones.

    See <a href="https://docs.uipath.com/delegate/standalone/latest/user-guide/installation" target="_blank">Delegate installation</a> for hardware requirements and macOS.

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

This adds the UiPath skills, including **`uipath-test`**, to your Terminal.

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

=== "UiPath Delegate"

    Nothing to install here. Delegate gets its Test Manager skill from the **Test Cloud** plugin you turned on in step 4.

**Check it:**

```powershell
uip skills list
```

✅ The list includes **`uipath-test`**, **`uipath-rpa`**, and **`uipath-platform`** — the three skills this workshop uses.

!!! info "Skills load automatically"
    You don't need to call a skill by name. When you ask about Test Manager, the Terminal loads `uipath-test` on its own. If it doesn't recognize UiPath tasks, close it and open it again so it reloads its plugins.

## Step 7 — UiPath CLI tools

Tools add command groups to the UiPath CLI. The skills rely on them:

| Tool | Commands | Used for |
|---|---|---|
| Test Manager tool | `uip tm` | Test cases, test sets, executions, and reports |
| RPA tool | `uip rpa` | Studio projects: test data links |
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

A browser window opens. Complete the sign-in, then return to PowerShell.

**Check it:**

```powershell
uip login status --output json
```

✅ The output shows you're logged in to the **organization and tenant** your trainer shared.

!!! tip "Wrong tenant?"
    Switch with `uip login tenant set <TENANT> --output json`.

## Step 9 — Warm up with the CLI

Get comfortable with the CLI before the Terminal starts using it for you. These commands only **read** data.

1. **Explore the built-in help.** Help output is the authoritative reference, and the Terminal uses it too.

    ```powershell
    uip --help
    uip tools list --output table
    ```

2. **Ask the docs from PowerShell.** `docsai` answers UiPath questions grounded in the official documentation.

    ```powershell
    uip docsai ask "How do I list Test Manager projects with the UiPath CLI?"
    ```

3. **Read your Test Manager data.**

    ```powershell
    uip tm project list --output json
    ```

✅ You see a list of Test Manager projects in your tenant (it may be short or empty before step 1 of the workshop).

4. **Ask in your Terminal.** [Open your Terminal](index.md#open-your-terminal), and ask for an outcome in plain English:

    ```text
    Which UiPath skills can I use? List the Test Manager projects in the tenant I'm logged in to.
    ```

    ✅ The Terminal runs `uip` commands on its own and answers both questions.

!!! warning "Your Terminal acts as you"
    ✅ The Terminal uses **your** `uip login` session, with your permissions. Anything it does in Test Manager or Orchestrator is done in your name.

    ✅ **Don't approve a blanket rule for all `uip` commands** — that would include commands that change or delete data. Approve read and list commands as they come up.


## Keep everything up to date

Coding Agents for Test is in **Public Preview**, and the CLI, tools, and skills are updated often. Update them **before the workshop**, and again whenever something behaves unexpectedly:

```powershell
npm install -g @uipath/cli@latest
uip tools update
uip skills update
```

Then close your Terminal and open it again, so it picks up the new skills.

## Setup checklist

Before the workshop, confirm every item:

- [ ] `npm --version` shows 11.x.x
- [ ] `git --version` works
- [ ] Studio (an STS version) launches and is signed in, and shows the **Terminal** panel
- [ ] The UiPath browser extension is enabled
- [ ] Edge or Chrome is installed
- [ ] Your Terminal is installed: `claude --version` or `codex --version` works and you've signed in, or **Delegate** appears in the UiPath Assistant switcher
- [ ] `uip --version` shows 1.195.1 or later
- [ ] `uip skills list` includes `uipath-test`, `uipath-rpa`, and `uipath-platform`
- [ ] `uip tm --help`, `uip rpa --help`, and `uip df --help` work
- [ ] `uip login status --output json` shows the workshop organization and tenant
- [ ] Your Terminal answers *"Which UiPath skills can I use?"*
- [ ] You ran the update commands in **Keep everything up to date**

---

[Next → Introduction: Test Cloud & Test Manager](../module-1-introduction/index.md){: .md-button .md-button--primary}

---
