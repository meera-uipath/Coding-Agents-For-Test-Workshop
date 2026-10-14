# Test Cloud & Test Manager

A quick orientation before we get hands-on. Ten minutes of reading, then we build.

## What is Test Cloud?

**Test Cloud** is UiPath's enterprise cloud offering for application testers. It's a dedicated version of Automation Cloud, specialized for application testing, that brings together everything you need to build and run a robust test portfolio:

✅ **Test Manager** — plan, run, manage, and analyze testing

✅ **Studio** — build and automate test cases

✅ **Orchestrator** — execute and manage test automation at scale

✅ **Agentic Testing** — AI agents (Autopilot for Testers, custom agents, and coding agents) that accelerate every step

![Test Cloud Ecosystem](../assets/images/Test%20Cloud%20ecosystem.png)

## What is Test Manager?

**Test Manager** is the web application in Test Cloud where you **plan**, **run**, **manage**, and **analyze** application testing. It links development assets (requirements, user stories) to testing assets (test cases, test sets, executions, results), so you always know what's tested and what's failing.

![Test Manager](../assets/images/Test%20Manager_Full.png)

### The testing flow you'll follow today

!!! note "Your testing journey"

    ### Planning & Design

    ✅ Requirements live in Test Manager (created there or imported from tools such as Jira).

    ✅ **Autopilot** evaluates the requirements and generates test cases from them.

    ### Automation

    ✅ The **Terminal** captures the application's UI elements into Studio's Object Repository.

    ✅ In Studio, **Autopilot** automates the test cases, which stay linked to their Test Manager designs.

    ✅ **Autopilot** or the **Terminal** generates test data from the acceptance criteria.

    ✅ The automations are published to Orchestrator.

    ### Execution & Reporting

    ✅ Test sets group test cases and run them on a robot.

    ✅ The **Terminal** triggers the run, analyzes the results, and writes the release report.

## Autopilot for Testers

**Autopilot for Testers** is a set of AI agents built into Test Manager and Studio. Today you'll use:

✅ **Evaluation Agent** — checks requirements for clarity, completeness, and testability

✅ **Test Case Generation Agent** — generates test cases from requirements

✅ **Autopilot for Testers in Studio** — turns a manual test case into an automated one, low-code or coded (C#)

![Agent Type OOTB](../assets/images/Agent%20type%20OOTB.png)

## Coding Agents for Test

Coding agents can already read code and drive developer tools — but test management used to be a blind spot. Agents couldn't see what was tested, what was failing, or what coverage looked like.

**Coding Agents for Test** closes that gap. Through the `uip tm` CLI and the `uipath-test` skill, any coding agent (Claude Code, Codex, Cursor, GitHub Copilot Agent) can:

✅ **Read** test cases, execution results, and requirement coverage from Test Manager

✅ **Write** execution results, create defects linked to failing tests, and update test case metadata

✅ **Trigger** test sets and monitor their execution

It works as a three-layer pipeline:

| Layer | What it does |
|---|---|
| **TypeScript SDK** | Generated from the Test Manager API specification |
| **CLI tool** (`uip tm`) | Hand-crafted commands built on the SDK |
| **`uipath-test` skill** | A `SKILL.md` that teaches the agent when and how to use the CLI |

!!! example "What you'll ask in the Terminal at the end of today"
    *"Trigger the Regression Test Set of my project in Test Manager and wait for it to finish. Then create a release manager report in PDF. I need a go/no-go summary before tonight's sign-off meeting. Highlight the failures blocking the release."*

That's enough theory — let's build.

---

[Next → Hands-On Workshop](../module-2-hands-on-workshop/index.md){: .md-button .md-button--primary}

---
