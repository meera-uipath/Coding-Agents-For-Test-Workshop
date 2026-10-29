# Handoff: Coding Agents for Test Workshop Guide

**Owner:** Meera Kannan · **Last updated:** 2026-10-29 · **Status:** Review fixes on branch `feature/move-folder-setup`, not yet merged to `main`.

## What this is

An MkDocs (Material) site for the hands-on **Coding Agents for Test** workshop. Its theme and conventions are copied from <a href="https://meera-uipath.github.io/software-testing-ilt-guide/" target="_blank">software-testing-ilt-guide</a>. See [CLAUDE.md](CLAUDE.md) for the content standards.

- **Publishes to:** `https://meera-uipath.github.io/Coding-Agents-For-Test-Workshop/` and `https://uipath-practice.github.io/CodingAgentsTestingWorkshop/`, through `.github/workflows/deploy.yml` on every push to `main`. Push every change to both remotes: `origin` (meera-uipath) and `practice` (uipath-practice).
- **Preview locally:** `start-guide.bat` (uses `.venv`, which has `mkdocs-material` installed), then open http://127.0.0.1:8000

## Structure

| Module | Pages |
|---|---|
| Home | `docs/index.md` |
| 0 - Prerequisites | Overview, Installation Guide (Studio STS + Delegate) |
| 1 - Introduction | Test Cloud & Test Manager |
| 2 - Hands-On Workshop | 01 Import → 02 Configure the folder → 03 Evaluate → 04 Generate → 05 Run manual tests → 06 Automate with Studio and Delegate → 07 Test set → 08 Run and report, You did it! |
| 3 - Troubleshooting & Next Steps | Overview, More Prompts to Try, Troubleshooting |

## Sources

- **Trusted:** the UiPath FUSION 2026 workshop PDF, *Agentic Testing: Exploring the Dark Testing Factory* (kept outside the repo). Follow it when the guide disagrees, and don't add details that it, UiPath docs or a product screenshot don't confirm.
- **Corrections to the PDF:** Delegate is in UiPath Assistant's top ribbon, and **+ New** is in Delegate's left panel. Delegate doesn't need the PDF's `uip login status` check.
- `docs/assets/Files/UiPath Delegate  - CFD.pptx` is useful for positioning and routines, but its security setting names are out of date.

## Decisions

- **The trainer provides a dedicated, new tenant and the group permissions.** That includes Project Owner rights, which learners need to import the `.tmh` and to create the custom field in step 5.
- **Each learner creates a personal folder in step 2**, as the trainer guides them, and assigns their machine (with an **App Testing** runtime) to it. It's set as the project's **Default Folder** (Project Settings → Automation tab). Which folder Studio publishes to doesn't matter.
- **Delegate is the only agent.** It ships with the latest Studio STS, with the `uip` CLI and the `uipath-testcloud` skill built in. Its consumption is included in the UiPath user license. The Claude Code / Codex section was removed on 2026-10-29; it's in git history before that date.
- **Delegate setup (Installation Guide step 2):** open it from the top ribbon, set **Work profile** to **QA / Testing** (Settings → Behavior preferences), then **+ New**. Approval mode is in **Settings → Security**: Cautious / Adaptive (recommended, with a Smart approvals toggle) / Full access.
- **Built-in agents** are named **Evaluate Requirement Quality** (step 3) and **Generate Test Cases** (step 4). The requirement is **Submit Loan Request**.
- **The project file** is `docs/assets/Files/Agentic Testing Workshop - Sample Test Manager Project.zip` (project "UiPath Autopilot Playground", prefix `UAP`). Learners rename the project and prefix with their own name.
- **Test cases are automated only with Autopilot for Testers in Studio (step 6).** Delegate builds the Object Repository. Learners automate **at least 2** test cases. Step 6 creates a new Test Automation project; there's no starter project.
- **The trainer guides each learner to create a test case meant to fail** (step 4). Learners automate it (step 6) and add it to Regression Test Set (step 7), so the step 8 report has a real failure.
- **Step 7:** learners create **Regression Test Set**, and assign test cases statically or dynamically (by label).
- **Step 8:** the report content, save questions and PDF follow-up come from the Fusion PDF. Routines are a read-through, not hands-on.
- Python and the .NET 8 SDK are left out of the prerequisites.

## Open items

- [ ] **Generate test data (step 6) is still "TBD".** Prerequisites (Data Fabric), the Home map, step 6's Nice work and *You did it* still mention test data.
- [ ] **Rehearse step 8's prompt:** trigger the test set *and* write the report in one prompt, saved as a PDF in `Documents\UiPath\Reports`. The PDF only shows reporting on past executions. Also check whether Delegate still asks before triggering the run with **Adaptive** and **Smart approvals** on, and try the single test case prompt.
- [ ] **Rehearse step 5 with Delegate:** the manual run (result and screenshot pushed to Test Manager), Request Loan, the loan lookup PDD, and the Test Tier custom field.
- [ ] **Rehearse step 6:** Delegate captures UiBank elements into the Object Repository, and Autopilot uses them. Check the Studio **New Project → Test Automation** and **Manage Packages** wording.
- [ ] **Check step 2, Exercise 1** against the product: Personal Automation + Personal workspace, the Automation Developer role, and Custom Windows credentials with no password have no source.
- [ ] **Confirm how Delegate signs in to the tenant.** Prerequisites still says "Connect UiPath Assistant to your Cloud account".
- [ ] **Add screenshots** for steps 3 and 4 (the built-in agents).
- [ ] Merge `feature/move-folder-setup` to `main` to publish, and enable GitHub Pages (`gh-pages` branch) in the repo settings after the first deploy.

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
| 2026-10-29 | Removed the optional *Use Your Own Coding Agent* section (overview and setup pages, nav entry, its two screenshots, and the links from Home, Installation Guide, Introduction, Troubleshooting and README). |
| 2026-10-29 | Review pass against the Fusion PDF: Delegate setup (top ribbon, + New, QA / Testing work profile, approval mode names), `uipath-testcloud` skill, built-in agent names, Submit Loan Request, App Testing runtime, personal folder and Default Folder path, static / dynamic test set assignment, step 8 report content, routines as a read-through. Removed defect creation, the Edge/Chrome tip, "Send feedback", the 760 MB size, and the coding-agent Learn more links. Decisions and Open items rewritten. |
