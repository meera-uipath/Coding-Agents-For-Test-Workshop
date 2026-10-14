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
| 2 - Hands-On Workshop | 01 Import → 02 Evaluate → 03 Generate → 04 Connect Studio → 05 Automate → 06 Test data → 07 Publish → 08 Folder → 09 Test set → 10 Run and report, You Did It! | Old guide pages 01, 02, 06, 07, 09, 10 and 11 + the demo README + `App to Coded Tests/README.md` (coding agent path in 05) |
| 3 - Troubleshooting & Next Steps | Overview, More Agent Prompts, Troubleshooting | Announcement's example workflows + demo README |

## Decisions

- The trainer provides the org and tenant. Nothing is hardcoded; commands use `<ORGANIZATION>` / `<TENANT>`.
- Claude Code and OpenAI Codex are both supported. Participants **choose their agent once** in Prerequisites; **linked tabs** (`content.tabs.link`) then show that agent's steps on every page. Tab labels must stay exactly `Claude Code` and `OpenAI Codex`.
- In steps 5 and 6, the coding agent runs in **Studio's Terminal panel**, which needs a Studio **STS** version, installed from https://download.uipath.com/UiPathStudioCloud.msi (Installation Guide, step 3).
- **Python and the .NET 8 SDK are left out of the prerequisites.** In step 6, the coding agent generates test data, uploads it to a **Data Fabric** entity (`uip df`), and links it to several test cases (`uip rpa test-data add-entity`). A Python coded agent and a low-code test data agent were both considered and dropped.
- The trainer grants participants **Data Fabric permissions** to create entities (step 6).
- Steps 5 and 6 offer two paths in tabs: **Autopilot in Studio** or a **coding agent** (coded test cases via `uipath-rpa`). Participants automate **at least 2** test cases.
- Step 9 lets participants name the test set **Smoke** or **Regression**; prompts use `<YOUR_TEST_SET_NAME>`.
- **UiPath Delegate** (Private Preview, desktop-only, attended manual work) appears in step 10 as an **optional trainer demo** for partners with preview access only.
- **Step 4 creates a new Test Automation project** in Studio; there's no starter project. Its Object Repository starts empty: the coding agent path captures UiBank elements live. `docs/assets/Files/Application Testing ILT - Students.zip` is no longer linked from any page.

## Open items

- [ ] **Add the `.tmh` project file:** put it in `docs/assets/Files/` and replace the placeholder block in `docs/module-2-hands-on-workshop/01-import-tm-project.md`
- [ ] **Check the UI wording** against the current product, and add screenshots, for:
  - step 2 (Autopilot "evaluate quality")
  - step 3 (Autopilot "generate test cases")
  - step 8 Part 2 (where the project's default folder is set in Test Manager)
  - step 6 (adding test data in Studio and choosing Autopilot as the source)
- [ ] **Rehearse the coding agent paths** in steps 5 and 6 against a new Test Automation project: coded test cases plus Object Repository capture, data-driven conversion, and publish-and-link in step 7
- [ ] **Rehearse step 6 (coding agent + Data Fabric):** entity create + `records import`, then `data-fabric-entities install` + `test-data add-entity` on both a low-code (Autopilot) and a coded test case. Confirm a linked test case runs once per record
- [ ] **Codex screenshots:** test Codex in Studio's Terminal panel, then add its start/trust screenshots to the OpenAI Codex tab in step 5 (the Claude Code tab already has one)
- [ ] Confirm the single test case run prompt in step 10 works with the current `uipath-test` skill
- [ ] Add a short description of what the trainer shows in the optional Delegate demo (step 10), once the demo is decided
- [ ] Confirm Autopilot's **Generate Test Case with Autopilot** works in a new project with an empty Object Repository, and check the Studio **New Project → Test Automation** wording (step 4)
- [ ] Decide whether the root `README.md` (the original demo walkthrough) should stay as the repo README or be replaced with a short guide README. A copy is in `raw-content/`
- [ ] Commit and push to `main` to publish, and enable GitHub Pages (`gh-pages` branch) in the repo settings after the first deploy

## Log

| Date | Update |
|---|---|
| 2026-10-07 | First draft of all modules built; `mkdocs build --strict` passes. |
| 2026-10-14 | Workshop restructured into 10 steps: new pages for Connect Studio (04), Test data (06), and Test set (09); Autopilot or coding agent tabs in 05 and 06; optional Delegate demo in 10. `mkdocs build --strict` passes. |
| 2026-10-14 | Step 6 test data: second tab is now "Coding agent + Data Fabric" (generate → entity → link to test cases). Installation Guide step 7 installs the RPA and Data Fabric tools too. |
| 2026-10-14 | Confirmed: tool names `@uipath/rpa-tool` and `@uipath/data-fabric-tool` are correct; the trainer grants Data Fabric entity permissions. |
