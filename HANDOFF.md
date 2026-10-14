# Handoff: Coding Agents for Test Workshop Guide

**Owner:** Meera Kannan · **Last updated:** 2026-10-14 · **Status:** First draft built. Not yet committed or published.

## What this is

An MkDocs (Material) site for the hands-on **Coding Agents for Test** workshop. Its theme and conventions are copied from <a href="https://meera-uipath.github.io/software-testing-ilt-guide/" target="_blank">software-testing-ilt-guide</a>. See [CLAUDE.md](CLAUDE.md) for the content standards.

- **Publishes to:** `https://meera-uipath.github.io/Coding-Agents-For-Test-Workshop/`, through `.github/workflows/deploy.yml` on every push to `main`
- **Preview locally:** `start-guide.bat` (uses `.venv`, which has `mkdocs-material` installed), then open http://127.0.0.1:8000

## Structure

| Module | Pages | Source |
|---|---|---|
| Home | `docs/index.md` | Old guide's home page |
| 0 - Prerequisites | Overview, Installation Guide | <a href="https://uipath-practice.github.io/AgenticCodingAgents/prerequisites/installation-guides/" target="_blank">AgenticCodingAgents</a> + `raw-content/coding-agent-test-reporting-demo.md` |
| 1 - Introduction | Test Cloud & Test Manager | Old guide pages 00, 01 and 02 + the Public Preview announcement |
| 2 - Hands-On Workshop | 01 Import → 02 Evaluate → 03 Generate → 04 Connect Studio → 05 Object Repository → 06 Automate → 07 Test data → 08 Publish → 09 Folder → 10 Test set → 11 Run and report, You Did It! | Old guide pages 01, 02, 06, 07, 09, 10 and 11 + the demo README |
| 3 - Troubleshooting & Next Steps | Overview, More Agent Prompts, Troubleshooting | Announcement's example workflows + demo README |

## Decisions

- The trainer provides the org and tenant. Nothing is hardcoded; commands use `<ORGANIZATION>` / `<TENANT>`.
- **"The Terminal":** participants pick their Terminal once in Prerequisites (*Choose your Terminal*: Claude Code, OpenAI Codex, or UiPath Delegate), and *Open your Terminal* explains how to open each. After setup, pages only say "open your Terminal" — no agent tabs or "coding agent" wording. Prompts name the project folder (`Documents\UiPath\<project name>`), so they work in any Terminal. Linked tabs (`content.tabs.link`) keep the choice across pages; tab labels must stay exactly `Claude Code`, `OpenAI Codex`, `UiPath Delegate`.
- Steps 5, 7 and 11 can be done with **Claude Code or Codex** (in Studio's Terminal panel or another terminal/IDE) or with **UiPath Delegate**. Studio's Terminal panel needs a Studio **STS** version, installed from https://download.uipath.com/UiPathStudioCloud.msi (Installation Guide, step 3).
- **Python and the .NET 8 SDK are left out of the prerequisites.** In step 7, the coding agent generates test data, uploads it to a **Data Fabric** entity (`uip df`), and links it to several test cases (`uip rpa test-data add-entity`). A Python coded agent and a low-code test data agent were both considered and dropped.
- The trainer grants participants **Data Fabric permissions** to create entities (step 7).
- **Test cases are automated only with Autopilot for Testers in Studio (step 6).** Coding agents are never shown creating test cases; they build the Object Repository (step 5), generate test data (step 7), and run and report (step 11). Participants automate **at least 2** test cases.
- Step 7 offers two paths in tabs: **Autopilot in Studio** or **Coding agent + Data Fabric**.
- Step 9 lets participants name the test set **Smoke** or **Regression**; prompts use `<YOUR_TEST_SET_NAME>`.
- **UiPath Delegate** is a third agent choice (tab label `UiPath Delegate`), highlighted in Prerequisites because it needs **no third-party AI license**: Delegate for Testing runs on the Test Cloud license (AppTestDeveloper / AppTesters). Install and setup follow <a href="https://docs.uipath.com/delegate/standalone/latest/user-guide/installation" target="_blank">Delegate installation</a>; it uses the Test Cloud plugin (`uipath-testcloud` skill) and the `uip` CLI.
- **Step 4 creates a new Test Automation project** in Studio; there's no starter project. `docs/assets/Files/Application Testing ILT - Students.zip` is no longer linked from any page.

## Open items

- [ ] **Add the `.tmh` project file:** put it in `docs/assets/Files/` and replace the placeholder block in `docs/module-2-hands-on-workshop/01-import-tm-project.md`
- [ ] **Check the UI wording** against the current product, and add screenshots, for:
  - step 2 (Autopilot "evaluate quality")
  - step 3 (Autopilot "generate test cases")
  - step 9 Part 2 (where the project's default folder is set in Test Manager)
  - step 7 (adding test data in Studio and choosing Autopilot as the source)
- [ ] **Rehearse step 7 (coding agent + Data Fabric):** entity create + `records import`, then `data-fabric-entities install` + `test-data add-entity` on Autopilot-generated low-code and coded test cases. Confirm a linked test case runs once per record
- [ ] **Codex screenshots:** test Codex in Studio's Terminal panel, then add its start/trust screenshots to the OpenAI Codex tab in step 5 (the Claude Code tab already has one)
- [ ] **Rehearse step 5:** the coding agent captures UiBank elements into a new low-code Test Automation project's Object Repository (`uipath-rpa`), and Autopilot in step 6 uses them
- [ ] Confirm the single test case run prompt in step 11 works with the current `uipath-test` skill
- [ ] **Rehearse steps 5, 7 and 11 with Delegate:** Object Repository capture, Data Fabric test data, and run and report. Delegate's docs list only the `uipath-testcloud` skill in its Test Cloud plugin, so confirm it handles steps 5 and 7
- [ ] Confirm which Delegate installer channel participants use (Community or Enterprise STS)
- [ ] Check the Studio **New Project → Test Automation** and **Manage Packages → Save** wording (step 4)
- [ ] Decide whether the root `README.md` (the original demo walkthrough) should stay as the repo README or be replaced with a short guide README. A copy is in `raw-content/`
- [ ] Commit and push to `main` to publish, and enable GitHub Pages (`gh-pages` branch) in the repo settings after the first deploy

## Log

| Date | Update |
|---|---|
| 2026-10-07 | First draft of all modules built; `mkdocs build --strict` passes. |
| 2026-10-14 | Workshop restructured into 10 steps: new pages for Connect Studio (04), Test data (06), and Test set (09); Autopilot or coding agent tabs in 05 and 06; optional Delegate demo in 10. `mkdocs build --strict` passes. |
| 2026-10-14 | Step 6 test data: second tab is now "Coding agent + Data Fabric" (generate → entity → link to test cases). Installation Guide step 7 installs the RPA and Data Fabric tools too. |
| 2026-10-14 | Confirmed: tool names `@uipath/rpa-tool` and `@uipath/data-fabric-tool` are correct; the trainer grants Data Fabric entity permissions. |
| 2026-10-14 | Test cases are now automated with Autopilot for Testers only; the coding agent path in step 5 was removed, and starting the agent moved to step 6. |
| 2026-10-14 | New step 05 Build the Object Repository (coding agent, `uipath-rpa`); steps 05–10 renumbered to 06–11. The agent is first started in step 5. |
| 2026-10-14 | UiPath Delegate added as a third agent tab: Prerequisites, Installation Guide steps 4 and 6, and step 11 (replaces the optional trainer demo). |
| 2026-10-14 | Removed "Private Preview" for Delegate: its release status couldn't be confirmed, so the guide doesn't state one. |
| 2026-10-14 | Delegate tabs added to steps 5 (with a first prompt naming the project folder) and 7 now works for any agent. |
| 2026-10-14 | Introduced "the Terminal": one choice at the start, no agent tabs or "coding agent" wording after setup. Also fixed review items (skills list, accounts, Delegate checks, ✅ lists, sentence-case headings, step 11 title and prompt). |
