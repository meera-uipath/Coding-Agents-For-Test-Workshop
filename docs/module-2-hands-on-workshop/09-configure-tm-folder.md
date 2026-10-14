# 09. Configure the Test Manager Folder

Before Test Manager — or your Terminal — can run your test cases automatically, two things need to be in place:

✅ An **Orchestrator folder** you can run in, with a **machine and robot** that can execute tests

✅ Your Test Manager project **linked to that folder**

In step 10, you'll add the third: a **test set** that groups your automated test cases.

## Orchestrator folders in a nutshell

Folders in Orchestrator organize automation resources — packages, processes, assets, and robots — and control who can access them. Roles assigned at folder level apply only to that folder and its subfolders.

**App Test Robot** runtimes determine how many test cases can run at the same time on a machine.

## Part 1 — Set up your folder and robot

!!! example "Exercise 1 — Create your folder"
    Create your own folder under the workshop folder your trainer points you to.

    Enable your user for **Personal Automation + Personal workspace**, give it the **Automation Developer** role, and — in the Enterprise setup — use **Custom Windows credentials**, specifying your `domain\username` without the password. Then add your user to your folder.

    <div class="carousel">
      <input type="radio" name="oc-settings-carousel" id="carousel-slide-1" checked>
      <input type="radio" name="oc-settings-carousel" id="carousel-slide-2">
      <div class="carousel-slides">
        <div class="carousel-slide slide-1">
          <img src="../../assets/images/OC%20Settings%20Enterprize%20setup.png" alt="Orchestrator Enterprise setup settings">
        </div>
        <div class="carousel-slide slide-2">
          <img src="../../assets/images/OC%20Settings%20Folder%20Admin.png" alt="Orchestrator Folder Admin settings">
        </div>
      </div>
      <div class="carousel-nav">
        <label class="label-1" for="carousel-slide-1"></label>
        <label class="label-2" for="carousel-slide-2"></label>
      </div>
    </div>

!!! example "Exercise 2 — Add a machine with an App Test Robot license"
    Add an **App Test Robot** license to your machine, then add the machine to the folder you just created.

    <div class="carousel">
      <input type="radio" name="oc-exercise2-carousel" id="carousel-slide-3" checked>
      <input type="radio" name="oc-exercise2-carousel" id="carousel-slide-4">
      <div class="carousel-slides">
        <div class="carousel-slide slide-3">
          <img src="../../assets/images/OC%20App%20testing%20license.png" alt="Orchestrator App Testing license settings">
        </div>
        <div class="carousel-slide slide-4">
          <img src="../../assets/images/OC%20Manage%20machine.png" alt="Orchestrator Manage Machine settings">
        </div>
      </div>
      <div class="carousel-nav">
        <label class="label-3" for="carousel-slide-3"></label>
        <label class="label-4" for="carousel-slide-4"></label>
      </div>
    </div>

!!! tip "Publish to this folder"
    If you published in step 8 before creating this folder, make sure the package is available in your folder (republish from Studio and choose your folder, or deploy the process to it in Orchestrator).

## Part 2 — Link the project to the folder

!!! example "It's your turn now!"
    1. Open your project in **Test Manager**.
    2. Open the **project settings** and set your Orchestrator folder as the project's **default execution folder**.
    3. Save.

!!! failure "Skipped this step?"
    Running a test set without a project-level folder fails with:

    `HTTP 400: Please assign folder to project level before executing testcases.`

## Nice work!

Your project has a folder and a robot to run its tests. Next, you'll group your automated test cases into a test set.

---

[Next → 10. Create a Test Set](10-create-test-set.md){: .md-button .md-button--primary}

---
