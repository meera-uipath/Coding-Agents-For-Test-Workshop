# 05. Automate Test Cases with Studio Desktop and Delegate

Automate your manual test cases in Studio with Delegate. Each automation stays **linked** to its test case in Test Manager.

!!! warning "Access required"
    You need an **App Test Developer** license to create and publish Test Automation projects.

## What you'll do

Seven steps take you from an empty Studio project to automated test cases, published and ready to run. Click a step to jump to it.

Remember - Paste the prompts in Delegate, wait and watch Delegate build it in Studio

<div class="flow">
  <a class="flow-step" href="#create-a-test-automation-project">Create a Test Automation project</a>
  <span class="flow-arrow"></span>
  <a class="flow-step" href="#install-the-ui-automation-package">Install the UI Automation package</a>
  <span class="flow-arrow"></span>
  <a class="flow-step" href="#link-studio-to-your-test-manager-project">Link Studio to your Test Manager project</a>
  <span class="flow-arrow"></span>
  <a class="flow-step" href="#build-the-object-repository">Build the Object Repository</a>
  <span class="flow-arrow"></span>
  <a class="flow-step" href="#automate-the-test-cases-with-studio-desktop">Automate the test cases</a>
  <span class="flow-arrow"></span>
  <a class="flow-step" href="#generate-test-data">Generate test data</a>
  <span class="flow-arrow"></span>
  <a class="flow-step" href="#publish-the-test-cases">Publish the test cases</a>
</div>



## Create a Test Automation project

```text
Create a Studio Test Automation project named UiBank Tests.
```

**Check it:** **UiBank Tests** opens in Studio, in `Documents\UiPath\UiBank Tests`.

## Install the UI Automation package

```text
Install the latest stable UI Automation activities package in UiBank Tests.
```

**Check it:** **Manage Packages → Project Dependencies** lists **UiPath.UIAutomation.Activities**.

## Link Studio to your Test Manager project

Replace `<YOUR_PROJECT_KEY>` with your project key, then paste:

```text
Connect this project to my Test Manager project <YOUR_PROJECT_KEY>, then open Test Explorer to show its test cases.
```

**Check it:** the connection icon is green, and **Test Explorer** lists your test cases.

## Build the Object Repository

The **Object Repository** stores the app's screens and UI elements for every test case to reuse. 


Building it by hand is usually one of the slowest parts of test automation: you capture every screen and element yourself. Tell Delegate what to capture, and it builds the repository for you. To cover every screen and element the test cases need, use the prompt below.


!!! example "Continue in Delegate.."
    1. Paste:

        ```text
        Create an Object Repository in UiPath Studio Desktop for the UiBank web app running in Chrome.

        Application
        - Name: UiBankORForChrome
        - Browser: Chrome
        - Capture each element live in the browser
        - Prefer stable selectors (id, name, aria-label, visible text) over index-based ones
        - Avoid dynamic values in selectors
        - Name each element exactly as listed below

        Screens and elements

        1. Screen: Welcome (https://uibank.uipath.com/welcome)
           - Username (input)
           - Password (input)
           - Sign In (button)
           - Products (dropdown menu)
           - Loans (menu item in the Products dropdown; open Products first so Loans is visible when you capture it)

        2. Screen: Loans (https://uibank.uipath.com/loans)
           - Apply For Loan (button)
           - Already Have A Loan (button)

        3. Screen: Loan Application (https://uibank.uipath.com/loans/apply)
           - Email Address of Requester (input)
           - Loan Amount Requested (input)
           - Loan Term (dropdown)
           - Current Yearly Income Before Taxes (input)
           - Age (input)
           - Submit Loan Application (button)

        4. Screen: Loan Result (the results view shown after you submit the loan application)
           - Result Text: the full text block of the response
           - Rate: only the number shown below "With a fantastic rate of:", without the "%" sign
           - Loan ID: the value shown below "Your new loan ID is:"
           Anchor these elements to their label text, not to the changing values, so the selectors work for any result.
           To reach this screen, submit the form with sample valid values. Save the Loan ID for screen 6.

        5. Screen: Loan Lookup (https://uibank.uipath.com/loans/lookup)
           - Loan ID (input)
           - Retrieve Loan Details (button)

        6. Screen: Loan Lookup Result (the results view shown after you look up a Loan ID)
           - Result Text: the full text block of the response
           - Loan ID: the value shown beside its label, anchored to the label text
           To reach this screen, look up the Loan ID you saved from screen 4.

        Acceptance criteria
        - All 6 screens and 20 elements exist under UiBankORForChrome, named as above
        - Every selector validates (highlights the correct element) on its live screen
        - Report any element you could not capture reliably, and why
        ```

    2. Don't use your desktop or browser while it captures.

!!! tip "Write your own Object Repository prompt"
    Describe what you need in plain language, such as the app, its screens, and the elements to capture. Delegate can also review and fine-tune your prompt, or fix it when something's missed.

**Check it:**

1. In Studio's **Object Repository** panel, expand **UiBankORForChrome**. It lists all 6 screens and their elements. If it's empty, reload the project.

    ![Object Repository panel](../assets/images/Object%20Repo.png){ width="300" }

2. Open UiBank in Chrome on the Welcome screen. Right-click an element, such as **Username**, and select **Highlight**.

    ![Highlight an element](../assets/images/Studio%20OR%20Highlight.png){ width="300" }

3. In the browser, the element is outlined in **green**, and its label anchor in **blue**. Repeat for a few elements on each screen.

    ![Highlighted element in UiBank](../assets/images/UiBank%20Highlight.png)

If an element doesn't highlight, ask Delegate to recapture it.

!!! warning "Complete this step before you continue"
    **Autopilot for Testers** builds your test cases from the Object Repository elements. Without them, it can't automate the test cases in the next step.


## Automate the test cases with Studio Desktop

!!! example "It's your turn now!"
    1. In **Test Explorer**, right-click a manual test case → **Generate Test Case with Autopilot**.
    2. Check it uses **Object Repository** elements and the expected results. If not, ask Delegate to fix it.
    3. Check the **Use Application/Browser** cards. The data-driven test in the next section must open and close the app once per row, and your requirement and test case may not say so.
        - **First card:** set **Open** to **Always**.
        - **Last card:** set **Close** to **Always**.
        - **Cards in between:** keep **Open** and **Close** as **Never**.
    4. **Run** it locally.

![Test Explorer](../assets/images/testExplorer.png)

**Check it:** at least **2** automated test cases pass locally.

??? example "Optional: Fix the activity display names"
    Autopilot names each activity after its manual step, including the test data, which makes long, hard-to-read display names.

    1. Replace **Submit Short-Term Request** with the name of the test case you generated, then paste in Delegate:

        ```text
        I've created test case Submit Short-Term Request using autopilot feature in Studio. Fix the Display names. Provide appropriate names.
        ```

    2. Reload the test case in Studio and check the new names.

## Generate test data

TBD

## Publish the test cases

```text
Set the <your test case> test case in UiBank Tests as publishable and publish the project.
```

**Check it:** in Orchestrator, each automated test case shows in **Test Cases**.

## Nice work!

Your test cases are automated, data-driven, and published, ready to run from Test Manager.

---

[Next → 06. Configure the Test Manager Folder](06-configure-tm-folder.md){: .md-button .md-button--primary}

---
