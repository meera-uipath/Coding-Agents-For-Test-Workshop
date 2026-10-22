# 05. Connect Studio to Test Manager

Connecting Studio to Test Manager brings your manual test cases into Studio and keeps each automation **linked** to its test case.

!!! warning "Access required"
    You need an **App Test Developer** license to create and publish Test Automation projects.

## Part 1 — Create a Test Automation project

!!! example "It's your turn now!"
    1. In **Studio**, on **Home → New Project**, select **Test Automation**.

        ![New Test Automation project in Studio](../assets/images/New%20Test%20Automation%20Project.png)

    2. Name it, for example `UiBank Loan Tests`, and click **Create**.

Studio saves it in `Documents\UiPath\<project name>`. You'll use this path in later Delegate prompts.

## Part 2 — Install the UI Automation package

!!! example "It's your turn now!"
    1. **Design** ribbon → **Manage Packages** → **All Packages**.
    2. Install the latest **UiPath.UIAutomation.Activities**, then click **Save**.

        ![Install the UiPath.UIAutomation.Activities package](../assets/images/Install%20Uiautomation%20library.png)

## Part 3 — Link Studio to your Test Manager project

!!! example "It's your turn now!"
    1. **Design** ribbon → **Test Manager → Test Manager Settings**.
    2. Enter your Test Manager URL, click **Connect**, and sign in.
    3. In **Default Project**, select your project from step 1, and click **OK**.

![Connect to Test Manager](../assets/images/test-manager-connect.png)

**Check it:** the connection icon is green, and **Test Explorer** lists your test cases from step 3 as manual test cases.

![Test Explorer](../assets/images/testExplorer.png)

## Nice work!

Studio and Test Manager are connected, and your manual test cases are ready to automate.

---

[Next → 06. Build the Object Repository](06-build-object-repository.md){: .md-button .md-button--primary}

---
