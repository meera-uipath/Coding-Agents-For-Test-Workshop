# 07. Publish Test Cases

To run your test cases from Test Manager, publish them to Orchestrator. Test cases and data-driven test cases are created as **drafts** by default, so you first need to set them as **publishable**.

When you publish a Test Automation package, Orchestrator automatically creates a matching process for it.

!!! warning "Before you publish"
    Make sure your **UiPath Assistant** (robot) is connected to Orchestrator — publishing requires it.

!!! example "Guided walkthrough"
    ### Step 1 — Set your test cases as publishable

    In the **Project** panel, select your test cases, right-click, and choose **Set as publishable**.

    ![Set as Publishable](../assets/images/Studio%20Set%20As%20Publishable.png)

    !!! note
        You can select several test cases and set them as publishable at once.

    ### Step 2 — Publish

    Click **Publish** on the ribbon.

    ![Publish Button](../assets/images/Studio%20Publish%20button.jpg)

    ### Step 3 — Confirm the publish

    Enter the project name and the version to publish, then confirm.

    ![Publish Test Case Window](../assets/images/Studio%20Publish%20TC%20Window.png)

!!! tip "Automated with a coding agent?"
    You can publish from Studio as shown above, or ask the agent in the same session: *"Publish this project to Orchestrator and link each coded test case to its Test Manager test case."* It packs and uploads the project, then links each automation with the `uipath-test` skill.

**Check it:**

✅ In Test Manager, open each automated test case: it now shows a linked **automation**.

!!! info "Why this matters for step 10"
    The coding agent can only trigger test cases that are **automated** — linked to a published automation. Manual test cases are skipped when a test set runs automatically.

## Nice work!

Your test cases are published and ready to run from Test Manager.

---

[Next → 08. Configure the Test Manager Folder](08-configure-tm-folder.md){: .md-button .md-button--primary}

---
