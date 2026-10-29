# 02. Configure the Test Manager Folder

To run tests automatically, your project needs an **Orchestrator folder** with a **machine** that has an **App Testing** runtime, linked to the project.

## Part 1 — Set up your folder and robot

!!! example "Exercise 1 — Create your folder"
    1. Create a personal folder, as your trainer guides you. You'll assign your machine to it.
    2. Enable your user for **Personal Automation + Personal workspace**, with the **Automation Developer** role.
    3. In the Enterprise setup, use **Custom Windows credentials**: your `domain\username`, no password.
    4. Add your user to your folder.

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

!!! example "Exercise 2 — Give your machine an App Testing runtime"
    1. Edit your machine template. Under **Runtime details**, set **App Testing** to **1**, and save.
    2. In your folder, open **Machines → Manage Machines in Folder**, and add the machine.

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

## Part 2 — Link the project to the folder

!!! example "It's your turn now!"
    In your Test Manager project, go to **Project Settings**, open the **Automation** tab, set **Default Folder** to the folder you created in Part 1, and click **Save**.

!!! failure "Skipped this step?"
    Runs fail with `HTTP 400: Please assign folder to project level before executing testcases.`

## Nice work!

Your project has a folder and a robot to run its tests.

---

[Next → 03. Evaluate Requirements](03-evaluate-requirements.md){: .md-button .md-button--primary}

---
