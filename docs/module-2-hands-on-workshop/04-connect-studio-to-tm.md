# 04. Connect Studio to Test Manager

## Why connect Studio?

Your test cases live in Test Manager, but automation is built in **UiPath Studio**. Connecting the two lets you see your **manual test cases** inside Studio, automate them, and keep every automation **linked** to its test case. That link is what lets Test Manager — and later a coding agent — run the tests and report on them.

!!! warning "Access required"
    Only **App Test Developer** users can create and publish Test Automation projects. Check with your trainer if you can't create one.

## Part 1 — Create a Test Automation project

A **Test Automation** project is a Studio project built for testing: its files are **test cases**, not processes, and it can be linked to a Test Manager project.

!!! example "It's your turn now!"
    1. Launch **UiPath Studio**.
    2. On the **Home** screen, under **New Project**, select **Test Automation** — *"Start with a blank project to create a new test project"*.

        ![New Test Automation project in Studio](../assets/images/New%20Test%20Automation%20Project.png)

    3. Enter a **Name**, for example `UiBank Loan Tests`.
    4. Click **Create**. Studio opens the new project.

!!! tip "Where your project is saved"
    Studio saves the project in `Documents\UiPath\<project name>`. Studio's **Terminal** panel opens in this folder, so a coding agent you start there in steps 5 and 6 works on this project.

## Part 2 — Link Studio to your Test Manager project

!!! example "It's your turn now!"
    1. In the **Design** ribbon, go to **Test Manager → Test Manager Settings**.
    2. Under **Test Manager Configuration**, enter your Test Manager URL from Automation Cloud.
    3. Click **Connect** and sign in.
    4. In **Default Project**, select the project you imported in step 1.
    5. Click **OK**. A green icon shows the connection is working.

![Connect to Test Manager](../assets/images/test-manager-connect.png)

## Part 3 — View your manual test cases

Open the **Test Explorer** panel. The test cases you generated in step 3 appear as **manual test cases**: they have steps, but no automation yet.

![Test Explorer](../assets/images/testExplorer.png)

**Check it:**

✅ The connection icon in Studio is green.

✅ Your test cases from step 3 appear in **Test Explorer**, with the same keys you noted (for example `UIBMK:5`).

## Nice work!

Studio and Test Manager are connected, and your manual test cases are ready to automate.

---

[Next → 05. Automate Test Cases](05-automate-test-cases.md){: .md-button .md-button--primary}

---
