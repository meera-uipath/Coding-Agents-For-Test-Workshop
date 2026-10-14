content from: 

https://docs.uipath.com/coding-agents/standalone/latest/user-guide/skills-catalog


https://forum.uipath.com/t/coding-agents-for-test-public-preview/5759509



Coding Agents for Test — Now in Public Preview

We’re excited to announce that Coding Agents for Test is entering Public Preview. With this release, UiPath Test Manager becomes a first-class citizen in the AI coding agent ecosystem — enabling any coding agent (Claude Code, Cursor, GitHub Copilot Agent) to seamlessly read, act on, and update your testing data.



What’s New

Until now, coding agents could autonomously read codebases and interact with developer toolchains — but test management remained a blind spot. Agents had no way to know what’s been tested, what’s failing, or what coverage looks like. Engineers still had to manually triage failures and copy results into Test Manager.



Coding Agents for Test closes that gap.



Through a purpose-built CLI tool (uip tm) and a uipath-test Skill, agents can now:



Read test cases, execution results, and requirement coverage data from Test Manager



Write execution results, create defects linked to failing tests, and update test case metadata



Trigger test sets and monitor execution status



How It Works

The integration is built as a three-layer pipeline:



TypeScript SDK — auto-generated from the Test Manager Swagger spec



CLI Tool (@uipath/cli) — hand-crafted uip tm commands on top of the SDK



uipath-test Skill — a SKILL.md that teaches agents when and how to invoke the CLI



Getting started is a single install:npm install -g @uipath/cli → uip tools install @uipath/test-manager-tool → uip skills install → uip login



The skill auto-activates in Claude Code and OpenAI Codex environments via CLAUDE.md / AGENTS.md symlinks.



Example Workflows

1\. Morning standup brief



“Summarize yesterday’s test run — how many passed, failed, or were blocked?”

The agent fetches the latest execution results from Test Manager and returns a structured summary broken down by status, saving you the trip to the dashboard.



2\. Coverage check before a release



“What percentage of requirements are covered, and which ones have no test cases at all?”

The agent queries Test Manager for coverage data per requirement and surfaces uncovered areas, so you can decide what to address before shipping.



3\. Triggering a targeted test set



“Run the smoke test set on the UAT robot and let me know when it’s done.”

The agent triggers the specified test set in Test Manager, selects the robot, and monitors execution status — no manual setup in the UI required.



4\. Verify release with Test Manager



“Trigger the UiBank Smoke Test Set in Project UIB and wait for it to finish. Then generate a release manager report — I need a go/no-go summary before tonight’s sign-off meeting, with the failures blocking the release highlighted.”

The agent triggers the test set, monitors execution to completion, then produces a go/no-go summary from the results — with release-blocking failures called out.



Getting Started

Install the CLI:uip tools install @uipath/test-manager-tool



Run uip skills install to activate the uipath-test skill in your agent environment



Authenticate with uip login



Ask your agent to interact with Test Manager



For questions and feedback during Public Preview, join #help-coding-agents-for-test-preview on Slack.



Coding Agents for Test is currently in Public Preview. Features and APIs are subject to change before General Availability.# Coding Agents for Test — Now in Public Preview



We’re excited to announce that Coding Agents for Test is entering Public Preview. With this release, UiPath Test Manager becomes a first-class citizen in the AI coding agent ecosystem — enabling any coding agent (Claude Code, Cursor, GitHub Copilot Agent) to seamlessly read, act on, and update your testing data.



What’s New

Until now, coding agents could autonomously read codebases and interact with developer toolchains — but test management remained a blind spot. Agents had no way to know what’s been tested, what’s failing, or what coverage looks like. Engineers still had to manually triage failures and copy results into Test Manager.



Coding Agents for Test closes that gap.



Through a purpose-built CLI tool (uip tm) and a uipath-test Skill, agents can now:



Read test cases, execution results, and requirement coverage data from Test Manager



Write execution results, create defects linked to failing tests, and update test case metadata



Trigger test sets and monitor execution status



How It Works

The integration is built as a three-layer pipeline:



TypeScript SDK — auto-generated from the Test Manager Swagger spec



CLI Tool (@uipath/cli) — hand-crafted uip tm commands on top of the SDK



uipath-test Skill — a SKILL.md that teaches agents when and how to invoke the CLI



Getting started is a single install:npm install -g @uipath/cli → uip tools install @uipath/test-manager-tool → uip skills install → uip login



The skill auto-activates in Claude Code and OpenAI Codex environments via CLAUDE.md / AGENTS.md symlinks.



Example Workflows

1\. Morning standup brief



“Summarize yesterday’s test run — how many passed, failed, or were blocked?”

The agent fetches the latest execution results from Test Manager and returns a structured summary broken down by status, saving you the trip to the dashboard.



2\. Coverage check before a release



“What percentage of requirements are covered, and which ones have no test cases at all?”

The agent queries Test Manager for coverage data per requirement and surfaces uncovered areas, so you can decide what to address before shipping.



3\. Triggering a targeted test set



“Run the smoke test set on the UAT robot and let me know when it’s done.”

The agent triggers the specified test set in Test Manager, selects the robot, and monitors execution status — no manual setup in the UI required.



4\. Verify release with Test Manager



“Trigger the UiBank Smoke Test Set in Project UIB and wait for it to finish. Then generate a release manager report — I need a go/no-go summary before tonight’s sign-off meeting, with the failures blocking the release highlighted.”

The agent triggers the test set, monitors execution to completion, then produces a go/no-go summary from the results — with release-blocking failures called out.



Getting Started

1. Install the CLI:uip tools install @uipath/test-manager-tool

2. Run uip skills install to activate the uipath-test skill in your agent environment

3. Authenticate with uip login

4. Ask your agent to interact with Test Manager

