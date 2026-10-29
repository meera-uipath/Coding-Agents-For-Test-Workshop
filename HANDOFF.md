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
| 2 - Hands-On Workshop | 01 Import → 02 Evaluate → 03 Generate → 04 Connect Studio → 05 Object Repository → 06 Automate → 07 Test data → 08 Publish → 09 Folder → 10 Test set → 11 Run and report, You Did It! | Old guide pages 01, 02, 06, 07, 09, 10 and 11 + `raw-content/coding-agent-test-reporting-demo.md` |
| 3 - Troubleshooting & Next Steps | Overview, More Agent Prompts, Troubleshooting | Announcement's example workflows + `raw-content/coding-agent-test-reporting-demo.md` |

## Decisions

- The trainer provides the org and tenant. Nothing is hardcoded; commands use `<ORGANIZATION>` / `<TENANT>`.
- **Delegate for every agent step:** steps 4, 6, 8 and 12 (and More Prompts) use **Delegate** only — no agent tabs. Delegate needs no third-party AI license and no setup: it ships with the **latest Studio STS** version, with the `uip` CLI and UiPath skills built in, and uses the Studio sign-in. The only install prerequisite is the latest Studio STS (plus the browser extension). Pages say "open Delegate" and link to *Open Delegate* in Prerequisites.
- **Claude Code and Codex are optional**, in a separate nav section at the end (`docs/optional-coding-agents/`): concepts, UiPath plugin and skills, the `uip` CLI, install steps (Node.js, Git, Studio STS Terminal tab, agent, CLI, skills, tools, login), how to open the agent, and their troubleshooting. Main pages only point there from Prerequisites, Home and Troubleshooting.
- **Python and the .NET 8 SDK are left out of the prerequisites.** In step 8, the coding agent generates test data, uploads it to a **Data Fabric** entity (`uip df`), and links it to several test cases (`uip rpa test-data add-entity`). A Python coded agent and a low-code test data agent were both considered and dropped.
- The trainer grants participants **Data Fabric permissions** to create entities (step 8).
- **Test cases are automated only with Autopilot for Testers in Studio (step 7).** Coding agents are never shown creating test cases; they build the Object Repository (step 6), generate test data (step 8), and run and report (step 12). Participants automate **at least 2** test cases.
- Step 8 offers two paths in tabs: **Autopilot in Studio** or **Delegate + Data Fabric**.
- Step 10 lets participants name the test set **Smoke** or **Regression**; prompts use `<YOUR_TEST_SET_NAME>`.
- **UiPath Delegate** runs on the Test Cloud license (AppTestDeveloper / AppTesters). Install follows <a href="https://docs.uipath.com/delegate/standalone/latest/user-guide/installation" target="_blank">Delegate installation</a>.
- **Step 5 creates a new Test Automation project** in Studio; there's no starter project. `docs/assets/Files/Application Testing ILT - Students.zip` is no longer linked from any page.

## Open items

- [x] **Add the `.tmh` project file:** step 1 links `docs/assets/Files/Agentic Testing Workshop - Sample Test Manager Project.zip`
- [ ] **Check the UI wording** against the current product, and add screenshots, for:
  - step 2 (Autopilot "evaluate quality")
  - step 3 (Autopilot "generate test cases")
  - step 10 Part 2 (where the project's default folder is set in Test Manager)
  - step 8 (adding test data in Studio and choosing Autopilot as the source)
- [ ] **Rehearse step 8 (Delegate + Data Fabric):** entity create + records import, then link the entity to Autopilot-generated low-code and coded test cases. Confirm a linked test case runs once per record
- [ ] **Codex screenshots:** test Codex in Studio's Terminal panel, then add its start screenshot to the OpenAI Codex tab in *Use Your Own Coding Agent → Open your coding agent*
- [ ] **Rehearse step 6:** Delegate captures UiBank elements into a new low-code Test Automation project's Object Repository, and Autopilot in step 7 uses them
- [ ] Confirm the single test case run prompt in step 12 works with Delegate
- [ ] **Confirm Delegate UI details not covered by the CFD deck:** opening it (Assistant switcher next to the UiPath logo), **Ctrl+N** for a new task, where the security setting (Maximum / Smart / Unrestricted) is changed, and how Delegate signs in to the tenant
- [ ] Rehearse the new prompts: "save as a routine" (step 12 Go further) and the new step 4 (Delegate runs manual test cases and pushes results to Test Manager) — confirm the result upload and what the Execution page shows
- [ ] **Rehearse steps 6, 8 and 12 with Delegate:** Object Repository capture, Data Fabric test data, and run and report. Delegate's docs list only the `uipath-testcloud` skill in its Test Cloud plugin, so confirm it handles steps 6 and 8
- [ ] Check the Studio **New Project → Test Automation** and **Manage Packages → Save** wording (step 5)
- [x] Root `README.md` replaced with a guide README (what the workshop covers, trainer setup, preview, contributing)
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
| 2026-10-15 | Delegate is now the only agent in the main content ("the Terminal" removed). Prerequisites and the Installation Guide cut to Studio + Delegate. Claude Code / Codex setup moved to the optional *Use Your Own Coding Agent* section. Step 11 notes the demo video was recorded with a coding agent. Links checked by script; `mkdocs build --strict` not run (MkDocs not installed on this machine). |
| 2026-10-15 | Delegate ships with the latest Studio STS (CLI and skills built in): Installation Guide is now one install + a Delegate warm-up. Removed the UiPath Platform installer, QA/Testing profile and Test Cloud plugin steps; tenant checks in steps 5, 7, 11 now point to the Studio sign-in. |
| 2026-10-15 | Delegate facts aligned with `docs/assets/Files/UiPath Delegate  - CFD.pptx`: security settings Maximum / Smart (recommended) / Unrestricted replace "Adaptive"; licensing is "included with your UiPath user license" (not tied to App Test Developer / App Tester); Delegate described as a productivity agent on the real machine, fully integrated with Test Manager. Removed the unverified "uses your Studio sign-in" claim. Added routines (step 11) and running a manual test locally (More Prompts). |
| 2026-10-15 | New step 04 Run Manual Tests with Delegate (runs manual test cases autonomously, pushes results to TM); old steps 04–11 renamed and renumbered to 05–12. Home map Phase 1 is now "Plan & test". The manual-run prompt moved from More Prompts into step 4. |
| 2026-10-29 | Configure the Test Manager Folder moved from step 06 to step 02, right after the import, so the folder and robot exist before Run autonomously (step 5) and publishing (step 6). Old steps 02–05 renumbered to 03–06; Home map phases regrouped (Set up / Plan & test / Build / Run & report). Removed the "Published before creating the folder?" tip. |
