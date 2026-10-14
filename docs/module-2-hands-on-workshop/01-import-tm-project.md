# 01. Import the Test Manager Project

## Why import a project?

You can import projects into Test Manager from external sources, including other Application Lifecycle Management (ALM) systems. An import brings across the project's requirements, test cases, test sets, test results, labels, custom fields, and attachments.

The import file follows a schema that Test Manager can read, and the import runs **asynchronously** — it can take a minute to finish.

Today, the import gives you a ready-made project with requirements to work from, so you can get straight to the hands-on steps.

## Download the project file

!!! warning "Placeholder — project file coming soon"
    The workshop's Test Manager project file (`.tmh`) will be added here.

    :material-file-download: **`<PROJECT_FILE>.tmh`** — project import file for Test Manager

    <!-- TODO: add the .tmh file to docs/assets/Files/ and replace this block with a download link, e.g.
    [**Project.tmh**](../assets/Files/Project.tmh) -->

## Import it into Test Manager

!!! example "It's your turn now!"
    1. Open **Test Manager** in the workshop tenant your trainer shared.
    2. From the **Projects** page, choose to **import** a project and select the `.tmh` file you downloaded.
    3. Change the **Name** and **Prefix** by adding your name, for example `UiBank_{your name}` and `UIB{initials}`. This keeps your project separate from everyone else's.
    4. Start the import and wait for it to finish.
    5. Open the project and look around: **Requirements**, **Test Cases**, **Test Sets**, and **Execution**.

    This is the project you'll work in for the rest of the workshop.

!!! tip "Write down your project key"
    The **prefix** you chose is your **project key** (for example `UIBMK`). You'll need it in your Terminal prompts in steps 5, 7 and 11.

## Check it from the CLI (optional)

Your project should now be visible to the UiPath CLI too:

```powershell
uip tm project list --filter <YOUR_PROJECT_KEY> --output json
```

✅ Your project appears in the output.

!!! note
    `--filter` matches the **start** of the project name or key, not text anywhere inside it.

---

[Next → 02. Evaluate Requirements](02-evaluate-requirements.md){: .md-button .md-button--primary}

---
