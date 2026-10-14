# Replicating the "Coding Agent for Test Reporting" Demo

A step-by-step guide for re-creating the demo in `Test Cloud- Coding Agent for Test Reporting.mp4` against your own Test Manager project. You run every step yourself; nothing is automated for you.

Background reading: [Coding Agents fo Testing.md](Coding%20Agents%20fo%20Testing.md) (the Public Preview announcement, Example Workflow #4).

---

## What the video shows (~1 min 45 s)

1. **Starting point:** the Test Manager dashboard for project **UIB** ("UiBank Web Application").
2. **A fresh Claude Code session in a terminal**, with *auto mode* on. The presenter types one prompt:
   > *"Trigger the UiBank Smoke Test Set test set of Project UIB in Test Manager and wait for it to finish. Once finished, create a release manager report in pdf for that test set. I need a go/no-go summary before tonight's sign-off meeting. Highlight the failures blocking the release."*
3. **The agent then works on its own:**
   - It loads the `uipath:uipath-test` skill.
   - It checks login and the available CLI commands (`uip tm testcases --help --output json`).
   - It finds project UIB and then the test set.
   - It triggers the run: `uip tm testsets run --test-set-key UIB:9 --output json`.
   - It waits for the run to finish, then pulls results: `uip tm executions testcaselogs list --execution-id … --project-key UIB`.
   - For each failing test it checks past runs (`uip tm testcases list-result-history … --limit 10`) to tell new regressions apart from failures that keep recurring.
   - It renders a PDF. The first attempt failed because Edge was already running, so it retried.
4. **Result:** a summary in the terminal ("NO-GO", 5 passed / 4 failed) and a PDF titled *"Release Test Report — UiBank Smoke Test Set."* The PDF has:
   - a recommendation banner (NO-GO, conditional)
   - KPI tiles: total, passed, failed, pass rate, blocking failures
   - a "Failures Blocking the Release" table with failure details and run history
   - a table of all results
   - a Risk Assessment
   - "Conditions to Reach GO"

**In your version:** **Regression Test Set** takes the place of *UiBank Smoke Test Set*, and your project takes the place of *UIB*.

---

## Prerequisite

The `run` step only works if the test cases in **Regression Test Set** are **automated**. That means each one is linked to a published Studio automation (or a Playwright package), and the project has a folder with a robot available. Manual test cases can't be triggered. Step 3 checks this.

---

## Steps at a glance

| # | Step | Purpose |
|---|---|---|
| 1 | Check that the CLI is installed and you're logged in | The skill's first rule |
| 2 | Find your project key and the test set key | You'll need both for the prompt |
| 3 | Confirm the test set's cases are automated and a robot is available | Otherwise the run fails |
| 4 | Open a new terminal and start `claude` | Same setup as the video |
| 5 | Type the prompt, adapted to your project | The demo itself |
| 6 | Watch the agent work, approving commands if asked | |
| 7 | Open the PDF and compare it with the Test Manager UI | Check the report against the source |

---

## Step 1: Check the CLI and your login

```bash
uip login status --output json
```

**What to look for:** the output should show you're logged in, plus the organization and tenant where you created the project.

- **Not logged in?** Run `uip login` and finish the browser sign-in.
- **Wrong tenant?** Run `uip login tenant set <TENANT_NAME> --output json`.

---

## Step 2: Find your project key and test set key

Look up the project. Use its name, or the start of its key:

```bash
uip tm project list --filter <PROJECT_NAME_OR_KEY> --output json
```

Write down the project **key** (for example, `UIB` in the video).

Then find the test set:

```bash
uip tm testsets list --project-key UAPMEERA --filter "Regression" --output json
```

Write down the test set **key** (the format is `PROJECT:N`, like `UIB:9` in the video).

> Note: `--filter` matches the **start** of the name or key, not text anywhere inside it.

---

## Step 3: Confirm the test cases are automated

List the test cases in the test set:

```bash
uip tm testsets list-testcases --project-key UAPMEERA --test-set-key UAPMEERA:226 --output json
```

**What to look for:** each test case should have an automation linked to it. If they're all manual, the automated run in step 5 won't work. Fix that in Studio / Test Manager first, or ask for help linking automations.

Also confirm that the Orchestrator folder linked to the project has a robot that can run the tests. In the video, two tests failed only because the robot's browser extension wasn't working.

---

## Step 4: Open a new terminal and start Claude Code

Open a new terminal window and go to a folder where the PDF can be saved (this folder works). Then start Claude Code:

```bash
claude
```

The UiPath plugin is installed at user scope, so the `uipath-test` skill is already available. You'll see it activate in step 6.

> Optional: the video uses **auto mode** (press Shift+Tab to cycle modes), which lets commands run without asking each time. Leave it off if you want to approve each `uip` command and learn what the agent is doing.

---

## Step 5: Type the prompt

Fill in your own values:

> Trigger the **Regression Test Set** test set of Project **UAPMEERA** in Test Manager and wait for it to finish. Once finished, create a release manager report in pdf for that test set. I need a go/no-go summary before tonight's sign-off meeting. Highlight the failures blocking the release.

---

## Step 6: Watch the agent work

Expect roughly this sequence, matching the video:

1. `Skill(uipath:uipath-test)` loads.
2. Login check and a look at the CLI's commands (`--help`).
3. Project lookup → test set lookup.
4. `uip tm testsets run --test-set-key <KEY>`. **This starts a real execution on your robot.**
5. A wait or polling step until the execution finishes (several minutes, depending on the test set).
6. `uip tm executions testcaselogs list …`, the per-test results.
7. `uip tm testcases list-result-history …` for each failure, to classify it as a regression or a recurring failure.
8. A PDF is written to disk, and its path is printed.

If you're approving commands one by one, read each one before approving it. The only command that writes anything is the `run`; the rest only read data.

---

## Step 7: Check the report

1. Open the PDF path the agent printed.
2. Check it against Test Manager → your project → **Execution**. The pass/fail counts and failing test keys should match.
3. Compare the layout with the video's report: recommendation banner, KPI tiles, blocking-failures table, all results, risk assessment, conditions to reach GO.

---

## Repeating the demo

### Done once, no need to repeat

| Step | Why it stays done |
|---|---|
| Installing the CLI, tool and plugin | Already installed |
| Step 2: project and test set keys | Keys don't change: `UAPMEERA` / `UAPMEERA:226` |
| Step 3: automation check | Still valid as long as nobody edits the test cases or packages |

### Before each demo (about 2 minutes, ideally an hour ahead)

- [ ] **Check login.** Login tokens expire, so check this every time.
  ```bash
  uip login status --output json
  ```
  Confirm the org and tenant are right. If the session has expired, run `uip login --organization <orgName> --tenant <tenantName>` again (add `--authority https://<host>` if not on cloud.uipath.com).
- [ ] **Check that the robot is available** (Orchestrator → the folder → Machines/Robots). A busy or disconnected robot is the most likely thing to make the run hang during the demo.
- [ ] **Move or rename the earlier PDF**, so the new report clearly comes from the live run.
- [ ] **Close any Edge windows the agent may have opened.** The PDF step can fail if the browser is already running.
- [ ] **Open the Test Manager dashboard for UAPMEERA in a browser tab.** The video starts from that view.

### During the demo

1. **Step 4:** a new terminal, `cd` to this folder, then `claude`. Use a **new session** each time (or type `/clear`), so it starts clean like the video.
2. **Step 5:** paste the prompt.
3. **Step 6:** let it run. **Auto mode** (Shift+Tab) keeps the demo moving, because you don't have to stop and approve each command.
4. **Step 7:** open the PDF and compare it with the Test Manager UI.

### Two things to plan for

- **Waiting:** the run takes a few minutes. Use that time to talk through what's on screen: the skill loading, the JSON output, the run command. Or show a recording of the wait and skip ahead.
- **Results will vary:** every demo is a real run. If all 4 tests pass, the report recommends **GO**, not NO-GO. To make sure you get a failure to talk about, like the video does, keep one test that fails on purpose.

---

## Troubleshooting

| Symptom | Likely cause / fix |
|---|---|
| `HTTP 400: Please assign folder to project level before executing testcases.` | The project has no default folder. The skill knows how to recover from this exact error. |
| Run starts but tests fail with "Cannot communicate with the browser" | A robot-side problem (the browser extension). It isn't a product defect. |
| PDF generation fails on the first try | Seen in the video too: the browser was already running. The agent retries. |
| `401 Unauthorized` | Run `uip login` again. |
