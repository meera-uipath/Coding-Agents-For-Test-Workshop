# Coding Agents for Test — Hands-On Workshop Guide

The learner's handbook for the UiPath **Coding Agents for Test** instructor-led workshop. It's an MkDocs site that walks testers through UiPath Test Cloud, from requirements to a go/no-go release report, using AI agents at every stage.

## What the workshop covers

Learners work on a ready-made **UiBank** Test Manager project. In eight hands-on steps, they take a loan application requirement all the way to an automated test run. Then they ask an agent for a release report in plain English.

| Phase | Steps | What learners do | Tools |
|---|---|---|---|
| **1 · Set up** | 1–2 | Import the project, and configure the Orchestrator folder and robot | Test Manager, Orchestrator |
| **2 · Plan & test** | 3–5 | Evaluate the requirement, generate test cases, and run them manually | Test Manager, Autopilot for Testers, Delegate |
| **3 · Build** | 6 | Connect Studio, build the Object Repository, automate the test cases, generate test data, and publish | Studio, Autopilot, Delegate, Data Fabric |
| **4 · Run & report** | 7–8 | Create a test set, trigger it, and get a go/no-go PDF in one prompt | Test Manager, Delegate |

By the end, learners have:

✅ Used the agentic features in Test Manager: requirement evaluation, test case generation, autonomous execution, and exploration

✅ Used **Delegate** at different stages of testing, from running manual tests to building release reports

✅ Turned manual test cases into automations with **Autopilot for Testers** in Studio

**Delegate** is the main agent throughout. An optional section shows how to run the same steps with your own coding agent, such as Claude Code or OpenAI Codex, through the `uip` CLI and the `uipath-test` skill.

## Trainer setup

Learners complete their own [Prerequisites](docs/module-0-prerequisites/index.md), but those rely on setup only an organization or tenant admin can do. Complete this checklist **before the workshop**, ideally a few days ahead, and do a dry run with a test user.

### Organization and tenant

- [ ] Create the workshop **tenant** in an organization delivered through **Test Cloud**. Autonomous Test Execution and Autonomous Exploration (step 5) are only available in Test Cloud.
- [ ] Make sure the tenant has **Test Manager**, **Orchestrator**, and **Data Fabric** enabled.
- [ ] Make sure **Autopilot for Testers** is allowed for the tenant, in Test Manager and in Studio. Check that no AI Trust Layer or governance policy blocks it.
- [ ] Make sure learners can use **Delegate** in the organization.

### Users and group

- [ ] Create a **group** for the workshop.
- [ ] Invite each learner to the organization, and add them to the group.
- [ ] Give permissions to the **group**, not to individual users, so late joiners get everything at once.

### Licenses and runtimes

- [ ] Assign an **App Test Developer** user license to the group or to each learner. Learners need it to create and publish Test Automation projects in Studio (step 6).
- [ ] Allocate enough **App Test Robot** runtimes to the tenant: at least one per learner machine (step 2).
- [ ] For **Run autonomously** and **Autonomous Exploration**, make sure a supported, non-serverless robot is available in each project's default folder. The robot machine must run Windows, and its UiPath browser extension must have **Allow in Incognito** turned on.

### Test Manager

- [ ] Give the group a Test Manager role that can **import projects**, **edit requirements and test cases**, and **execute tests**. Autopilot's requirement evaluation needs requirement create and edit permissions, and Autonomous Exploration needs **Execute Automated Tests**.
- [ ] Learners download the **project file** (`.tmh`) from step 1. Check it imports into the workshop tenant.

### Orchestrator

- [ ] Create a parent **workshop folder**. In step 2, each learner creates their own subfolder under it.
- [ ] Give the group the roles it needs in step 2. At tenant level, learners must be able to set up their own user: **Personal Automation + Personal workspace**, the **Automation Developer** role, and **Custom Windows credentials**. On the workshop folder, they need **Folder Administrator** rights, to create subfolders and add machines and users. If you'd rather not grant these, do this part of step 2 for each learner before the session.
- [ ] If learners use credential assets in test cases, give them the **View** permission on **Assets**.

### Data Fabric

- [ ] Give the group **read-write access** to Data Fabric at **tenant level**: permission to **create entities**, and to create, read, and update **records** (step 6).
- [ ] Learners name their entity `LoanTestData<INITIALS>`, so names don't clash on the shared tenant.

### Learner machines and network

- [ ] Learners need **local admin rights** to install the Studio STS installer (about 760 MB) and the UiPath browser extension for Edge or Chrome.
- [ ] Learners can reach `cloud.uipath.com` and the UiBank app at `https://uibank.uipath.com`, without a proxy or firewall blocking them.
- [ ] For the optional [Use Your Own Coding Agent](docs/optional-coding-agents/index.md) section, learners also need to install npm packages and sign in to their coding agent.

### On the day

- [ ] Share the **organization name**, **tenant name**, and **workshop folder name** with learners.
- [ ] Do a dry run of steps 1, 2, 5, 6, and 8 with a test user in the learner group. These are the steps that depend most on permissions.

### After the workshop

- [ ] Clean up the imported projects, learner folders, Data Fabric entities, and robot runtime assignments. Remove learners from the group, or delete the tenant.

## How the guide is organized

| Folder | Section |
|---|---|
| [`docs/module-0-prerequisites/`](docs/module-0-prerequisites/) | Accounts, access, and installing Studio and Delegate |
| [`docs/module-1-introduction/`](docs/module-1-introduction/) | A short tour of Test Cloud, Test Manager, and the agents |
| [`docs/module-2-hands-on-workshop/`](docs/module-2-hands-on-workshop/) | The eight hands-on steps |
| [`docs/module-3-troubleshooting-and-next-steps/`](docs/module-3-troubleshooting-and-next-steps/) | More prompts to try, and fixes for common problems |
| [`docs/optional-coding-agents/`](docs/optional-coding-agents/) | Setting up your own coding agent instead of Delegate |
| [`docs/assets/`](docs/assets/) | Images, CSS, scripts, and downloadable files |

The navigation is defined in [`mkdocs.yml`](mkdocs.yml).

## Preview the guide locally

On Windows, double-click [`start-guide.bat`](start-guide.bat). On first run, it creates a Python virtual environment and installs `mkdocs-material`. Then it opens the guide at <http://127.0.0.1:8000>.

On any other system, with Python 3 installed:

```bash
pip install mkdocs-material
mkdocs serve
```

The preview reloads automatically when you save a page.

## Publishing

Every push to `main` publishes the site to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Contributing

- **Branches:** never commit directly to `main` or `dev`. Create a `feature/*`, `bugfix/*`, `enhancement/*`, or `hotfix/*` branch from `dev`, and open a pull request to `dev`. `dev` is merged to `main` when it's stable.
- **Content standards:** every page is reviewed against the standards in [`CLAUDE.md`](CLAUDE.md): completeness, accuracy, styling, learning flow, clarity, and compliance, scored out of 15.
