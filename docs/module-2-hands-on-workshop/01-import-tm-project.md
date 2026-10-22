# 01. Import the Test Manager Project

## Why import a project?

An import brings across the project's requirements, test cases, test sets, test results, labels, custom fields, and attachments. The import file follows a schema that Test Manager can read, and the import runs **asynchronously** — it can take a minute to finish.

Today, the import gives you a ready-made project with requirements to work from, so you can get straight to the hands-on steps.

## Download the project file

!!! warning "Placeholder — project file coming soon"
    The workshop's Test Manager project file (`.tmh`) will be added here.

    :material-file-download: **`<PROJECT_FILE>.tmh`** — project import file for Test Manager

    <!-- TODO: add the .tmh file to docs/assets/Files/ and replace this block with a download link, e.g.
    [**Project.tmh**](../assets/Files/Project.tmh) -->

## Import it into Test Manager

✅ Open **Test Manager** in the workshop tenant your trainer shared.

✅ From the **Projects** page, choose to **import** a project and select the `.tmh` file you downloaded.

✅ Change the **Name** and **Prefix** (the project key) by adding your name, for example `UiBank_AlexS` and `UIBAS`. Everyone imports the same file into the same tenant, so this keeps your project separate from everyone else's.

✅ Start the import and wait for it to finish.

✅ Open the project and look around: **Requirements**, **Test Cases**, **Test Sets**, and **Execution**.

This is the project you'll work in for the rest of the workshop.

## Check it with Delegate

Your project should now be visible to Delegate too. [Open Delegate](../module-0-prerequisites/01-installation-guide.md#step-2-meet-delegate) and ask a few questions that only **read** from Test Manager, one at a time, to see how it finds its way around:

```text
Can you identify the Test Manager project created by me. Provide details.
```

```text
List the requirements in project <YOUR_PROJECT_KEY>, with the test cases linked to each.
```

```text
Which requirements in project <YOUR_PROJECT_KEY> don't have any test cases linked yet?
```

```text
Pick one test case in project <YOUR_PROJECT_KEY> and show me its manual steps and expected results.
```

✅ Delegate finds your project and answers each question from your real Test Manager data, without changing anything.

---

[Next → 02. Evaluate Requirements](02-evaluate-requirements.md){: .md-button .md-button--primary}

---
