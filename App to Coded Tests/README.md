# App → Requirements → Coded Tests (multi-skill demo)

A step-by-step guide to making a coding agent combine several UiPath skills. The agent:

1. explores a live application
2. proposes test scenarios
3. creates requirements and test cases in Test Manager
4. writes **coded test cases** backed by an **Object Repository**
5. publishes and links them back to Test Manager

You run every step yourself; nothing is automated for you.

Related: [../README.md](../README.md) (the "Coding Agent for Test Reporting" demo: run a test set and get a go/no-go PDF).

---

## Skills involved

The skills hand work to each other by design. `uipath-test` sends Studio/RPA authoring to `uipath-rpa`, and `uipath-rpa` sends test reports to `uipath-test`.

| Stage | Skill | Key commands / artifacts |
|---|---|---|
| Explore the app | `uipath-rpa` | Live UI exploration through `uip rpa uia` |
| Propose test scenarios | the agent itself | No skill needed; it works from the screens it explored |
| Requirements and test cases in TM | `uipath-test` | `uip tm requirements create`, `uip tm testcases create`, `uip tm testcases steps …`, `uip tm requirements testcases --add-testcase-ids` |
| Coded test project + Object Repository | `uipath-rpa` | `uip rpa init` (coded) → `uia-configure-target` → `ObjectRepository.cs` → `[TestCase]` classes → `uip rpa validate` / `build` |
| Publish and link | `uipath-rpa` → `uipath-test` | `uip rpa pack` → `uip or packages upload` → `uip or folders list` → `uip tm testcases list-automations` → `uip tm testcases link-automation` |
| *(Optional)* Run and report | `uipath-test` | `uip tm testsets run` → `uip tm wait` → report |

**Why the order matters:** `uipath-rpa` builds its list of elements to capture from the manual test steps. Each "Click X / Enter Y / Verify Z" step becomes one Object Repository element. Writing good manual steps in Test Manager first (stage 3) leads directly to a clean Object Repository (stage 4).

---

## Project facts (fill in as we go)

| Item | Value |
|---|---|
| Test Manager project | `UAPMEERA` |
| Application under test | `<APP_URL or app name>` |
| Feature(s) in scope | `<e.g. login, transfer funds>` |
| Orchestrator folder (linked to UAPMEERA) | `<FOLDER_NAME>` |
| Coded project name / location | `<e.g. ./AppTests>` |
| New test set (optional) | `<e.g. App Coded Tests>` |

---

## Steps at a glance

| # | Step | Writes anything? |
|---|---|---|
| 0 | Check prerequisites | No |
| 1 | Explore the app and propose scenarios | No (it drives the browser) |
| 2 | Create requirements and test cases in Test Manager | **Yes** (TM) |
| 3 | Create the coded test project, capture the Object Repository, write the tests | **Yes** (local disk) |
| 4 | Build and run locally | Runs on your desktop |
| 5 | Publish and link to Test Manager | **Yes** (Orchestrator and TM) |
| 6 | *(Optional)* Add to a test set and run it from TM | **Yes** (execution) |
| 7 | Check everything in the UIs | No |

---

## Step 0: Prerequisites

Run these checks yourself:

```bash
uip login status --output json
```
You should be logged in to the same org and tenant as UAPMEERA.

```bash
uip rpa --help
```
Confirms the RPA command group is available.

Also confirm:

- [ ] **UiPath Studio is installed** on this machine. `uip rpa` uses it for validate, build and target capture.
- [ ] **`UiPath.UIAutomation.Activities` 26.10.2 or newer** is available. This is the minimum according to the skill's `uia-starter-guide.md`. Without it, live capture isn't possible and the agent falls back to **placeholder selectors marked `TODO Indicate`**. That still builds, but it makes a weaker demo. The agent must **ask before installing or upgrading** the package; it never does this silently.
- [ ] **The desktop is unlocked and interactive** during capture. Capture fails on a lock screen.
- [ ] **The application under test is reachable** and stable. A public demo site with a login and a form works well.
- [ ] **The Orchestrator folder linked to UAPMEERA** has a robot, for step 6.

---

## Step 1: Explore and propose (no changes yet)

Open a new terminal in this folder (`App to Coded Tests`), run `claude`, and type:

> Open `<APP_URL>` and explore the `<feature>` screens. Propose 3 test scenarios for them, each with a requirement name and manual test steps (Given / When / Then). Don't create anything yet.

**Watch for:** the `uipath-rpa` skill loading and the browser being driven. You should get a list of scenarios to review.

**Your job:** edit the scenarios until you're happy with them. Keep it to **2 or 3** for the demo.

---

## Step 2: Requirements and test cases in Test Manager

> In Test Manager project UAPMEERA, create a requirement for each approved scenario. Create a matching test case with those manual steps, and link each test case to its requirement.

**Watch for:** the `uipath-test` skill loading, then `requirements create` → `testcases create` → `testcases steps …` → `requirements testcases --add-testcase-ids`.

**Check it:** open Test Manager → UAPMEERA → **Requirements**. Each one should show a linked test case, and each test case should show its steps. Write down the new test case keys (`UAPMEERA:N`).

---

## Step 3: Coded test project and Object Repository

> Create a coded UiPath test project named `<PROJECT_NAME>` in this folder for the test cases you just created. Capture the UI elements into the Object Repository, write one coded test case per Test Manager test case, and build it.

**Expect the agent to:**

1. Ask about the target framework: **Windows** vs **Cross-platform**. Pick based on where the robot runs.
2. Run `uip rpa init` with an explicit framework and expression language.
3. Check the UIA package version, and ask before installing it.
4. Write a stub coded file first. This is needed for `ObjectRepository.cs` to be generated.
5. Capture elements **screen by screen** with `uia-configure-target`. It doesn't hand-write selectors.
6. Write `[TestCase]` classes in Arrange/Act/Assert (Given-When-Then) form, and register them in `project.json`.
7. Run `uip rpa validate` and `uip rpa build` until there are **0 errors**. Warnings are expected and fine.

**Check it:**

- `ObjectRepository.cs` lists the screens and elements.
- Each test file uses `Descriptors.*` from the Object Repository, not raw selectors.
- Open the project in Studio, then open the **Object Repository** panel.

---

## Step 4: Run locally

> Run the coded test cases locally and tell me the results.

If a selector fails at runtime, the skill has a recovery procedure for that. Let it run, and note what it changed.

---

## Step 5: Publish and link to Test Manager

> Publish the project to Orchestrator folder `<FOLDER_NAME>` and link each coded test case to its Test Manager test case in UAPMEERA.

**Expected sequence** (from the skill's `publish-and-link-guide.md`):

```
uip rpa pack            → .nupkg
uip or packages upload  → package on the Orchestrator feed
uip or folders list     → folder key
uip tm testcases list-automations  → test entry point names
uip tm testcases link-automation   → each test case is linked
```

**Check it:** in Test Manager, each test case should now show an **automation** linked to it.

---

## Step 6 (optional): Run from Test Manager

> Create a test set "`<TEST_SET_NAME>`" in UAPMEERA with these test cases, run it, wait for it to finish, and summarize the results.

This is the point where the earlier reporting demo ([../README.md](../README.md)) can take over.

---

## Step 7: Check end to end

- [ ] Requirements → test cases are linked (traceability).
- [ ] Test cases → automations are linked.
- [ ] The coded project builds, and the Object Repository is populated.
- [ ] (If step 6 was run) the execution in TM shows results for each test case.

---

## Demo planning notes

- **Stage 3 is long.** It captures screen by screen and reads several guides. Rehearse it, and keep a recording ready.
- **The safest live cut** is steps 1 and 2 live (fast and visual), then step 3 from a recording or a project you've already prepared, with a quick walk through `ObjectRepository.cs` and one test file.
- **Use a fresh `claude` session per rehearsal,** so the agent starts clean.
- **Cleanup between rehearsals:** delete the test requirements and test cases in TM (or use a scratch TM project), and remove the generated project folder.

---

## Troubleshooting

| Symptom | Likely cause / fix |
|---|---|
| Selectors come out as `TODO Indicate` placeholders | The UIA package is missing or older than 26.10.2, or live capture failed. Install or upgrade it, unlock the desktop, then retry. |
| Capture scans fail repeatedly | The desktop is locked or the session isn't interactive (`LogonUI` running). Unlock it. |
| `ObjectRepository.cs` isn't generated | No coded file existed when capture ran. The agent should write a stub `[Workflow]` first. |
| Project can't be opened in Studio Web | A Windows-framework project, or a bare project with no solution. Studio Web needs a Solution (`uipath-solution`). |
| `link-automation` can't find the test | The package wasn't uploaded to the folder linked to UAPMEERA. Check with `uip tm testcases list-automations`. |
| `HTTP 400: Please assign folder to project level…` on run | The project has no default folder. See the troubleshooting section in [../README.md](../README.md). |
