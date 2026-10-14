# Welcome to the Coding Agents for Test Workshop

![Get robots that execute tests](assets/images/Get%20robots%20that%20execute%20tests.png)

**Thank you for joining the UiPath Coding Agents for Test Workshop!**

This **Learner's Handbook** is your hands-on guide for the workshop. We keep the theory short and get you building fast: in a few hours you'll take a set of requirements all the way to an automated test run, and finish by asking a coding agent for a **go/no-go release report** in plain English.

!!! info "Before the workshop"
    Complete the **[Prerequisites](module-0-prerequisites/index.md)** before the session starts. Installing the tools takes about 30–45 minutes, and the hands-on steps depend on them.

    Your **trainer will share the organization and tenant** you'll use during the workshop.

## What You'll Build

You'll walk through the full testing lifecycle in UiPath Test Cloud, with AI at every step:

<div class="wf-map">
  <div class="wf-phase">
    <div class="wf-phase-head">
      <span class="wf-phase-kicker">Phase 1 · Plan</span>
      <span class="wf-phase-title">Test Manager</span>
    </div>
    <div class="wf-steps">
      <a class="wf-step" href="module-2-hands-on-workshop/01-import-tm-project/"><span class="wf-num">1</span>Import the project</a>
      <a class="wf-step" href="module-2-hands-on-workshop/02-evaluate-requirements/"><span class="wf-num">2</span>Evaluate requirements</a>
      <a class="wf-step" href="module-2-hands-on-workshop/03-generate-test-cases/"><span class="wf-num">3</span>Generate test cases</a>
    </div>
    <div class="wf-phase-foot">Assisted by <strong>Autopilot for Testers</strong></div>
  </div>
  <div class="wf-arrow" aria-hidden="true"></div>
  <div class="wf-phase">
    <div class="wf-phase-head">
      <span class="wf-phase-kicker">Phase 2 · Build</span>
      <span class="wf-phase-title">Studio + Data Fabric</span>
    </div>
    <div class="wf-steps">
      <a class="wf-step" href="module-2-hands-on-workshop/04-connect-studio-to-tm/"><span class="wf-num">4</span>Connect Studio to TM</a>
      <a class="wf-step" href="module-2-hands-on-workshop/05-automate-test-cases/"><span class="wf-num">5</span>Automate test cases</a>
      <a class="wf-step" href="module-2-hands-on-workshop/06-generate-test-data/"><span class="wf-num">6</span>Generate test data</a>
      <a class="wf-step" href="module-2-hands-on-workshop/07-publish-test-cases/"><span class="wf-num">7</span>Publish test cases</a>
    </div>
    <div class="wf-phase-foot">Assisted by <strong>Autopilot</strong> or a <strong>coding agent</strong></div>
  </div>
  <div class="wf-arrow" aria-hidden="true"></div>
  <div class="wf-phase">
    <div class="wf-phase-head">
      <span class="wf-phase-kicker">Phase 3 · Prepare</span>
      <span class="wf-phase-title">Orchestrator + TM</span>
    </div>
    <div class="wf-steps">
      <a class="wf-step" href="module-2-hands-on-workshop/08-configure-tm-folder/"><span class="wf-num">8</span>Configure the folder</a>
      <a class="wf-step" href="module-2-hands-on-workshop/09-create-test-set/"><span class="wf-num">9</span>Create a test set</a>
    </div>
    <div class="wf-phase-foot">Folder, robot, and a <strong>smoke or regression</strong> set</div>
  </div>
  <div class="wf-arrow" aria-hidden="true"></div>
  <div class="wf-phase wf-phase--outcome">
    <div class="wf-phase-head">
      <span class="wf-phase-kicker">Phase 4 · Run &amp; report</span>
      <span class="wf-phase-title">Coding agent</span>
    </div>
    <div class="wf-steps">
      <a class="wf-step" href="module-2-hands-on-workshop/10-run-and-report/"><span class="wf-num">10</span>Run and report</a>
    </div>
    <div class="wf-phase-foot"><strong>Claude Code</strong> or <strong>Codex</strong> → go/no-go PDF</div>
  </div>
</div>

<p class="wf-caption">Select a step to jump to it.</p>

1. **Import a Test Manager project** — your workspace for the day.
2. **Evaluate requirements** — let Autopilot check them for clarity, completeness, and testability.
3. **Generate test cases** — let Autopilot design test cases from the requirements.
4. **Connect Studio to Test Manager** — see your manual test cases in Studio.
5. **Automate test cases** — with Autopilot in Studio or a coding agent.
6. **Generate test data** — with Autopilot, or with a coding agent that stores it in Data Fabric.
7. **Publish** — send the automations to Orchestrator so Test Manager can run them.
8. **Configure the Test Manager folder** — give the project a folder and a robot to execute on.
9. **Create a test set** — group your automated test cases into a smoke or regression set.
10. **Run and report** — ask a coding agent to run the test set and produce a go/no-go PDF report.

## Learning Objectives

By the end of this workshop, you will:

✅ Import a test project into Test Manager and find your way around it

✅ Use Autopilot for Testers to evaluate requirements and generate test cases

✅ Automate test cases in Studio with Autopilot for Developers or a coding agent, and publish them to Orchestrator

✅ Generate test data with Autopilot, or with a coding agent that stores it in Data Fabric

✅ Configure a Test Manager project and a test set so they can run automatically

✅ Set up a coding agent (Claude Code or OpenAI Codex) with the UiPath CLI and skills

✅ Ask a coding agent to trigger a test set, analyze the results, and produce a go/no-go release report

**Real deliverable:** By the end of the workshop, you'll have a **PDF release report** with a go/no-go recommendation, generated by a coding agent from a real test run in your own Test Manager project.

## How This Guide Is Organized

| Section | What's inside |
|---|---|
| **[Prerequisites](module-0-prerequisites/index.md)** | Accounts, coding agent concepts, and step-by-step installation |
| **[Introduction](module-1-introduction/index.md)** | A short tour of Test Cloud, Test Manager, and Coding Agents for Test |
| **[Hands-On Workshop](module-2-hands-on-workshop/index.md)** | The ten hands-on steps, from import to the go/no-go report |
| **[Troubleshooting & Next Steps](module-3-troubleshooting-and-next-steps/index.md)** | More prompts to try and fixes for common problems |

---

[Next → Prerequisites](module-0-prerequisites/index.md){: .md-button .md-button--primary}

---

!!! quote "Here's something worth holding onto as you work through this workshop"
    Coding agents don't replace testers — they give testers a new way to work. Instead of clicking through dashboards to find out what failed and why, you ask a question in plain English and get an answer grounded in your real test data.

    Robots bring determinism and control, agents bring adaptability and reasoning. **This workshop is about putting the two together.**
