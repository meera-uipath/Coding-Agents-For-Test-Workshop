# Coding Agents for Test Workshop Guide - Development Guide

## Git Workflow

Single developer. `main` is the live site: every push to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.

### How to Work
- **Small fixes** (typos, wording, a broken link): commit directly to `main` and push.
- **Bigger changes** (new pages, restructuring, multi-page edits): use a short-lived `feature/*` branch off `main`, preview with `mkdocs serve`, then merge to `main`. A PR is optional.

### Claude Sessions
- ✅ Treat every instruction from the owner as a hotfix: once the change is committed, merge it into `main` and push to `origin` without asking. This applies even when the session works on a `claude/*` branch.

### Key Rules
- ✅ `main` must always build and be fit for learners to see
- ✅ Preview multi-page changes with `mkdocs serve` before pushing to `main`
- ✅ Delete feature branches after merging
- ❌ No `dev` branch: don't branch from or target `dev`

## Content Review Standards

**Use these parameters for every page review:**

### 1. Information Completeness (Scoring: 1-3 points)
- ✅ All learning objectives clear (what will learner know/do)
- ✅ Concepts explained with definitions
- ✅ Real-world examples or use cases provided
- ✅ Practical steps or instructions included
- ✅ Key terms defined (not assumed knowledge)
- ✅ Links to related topics where relevant

### 2. Data & Content Accuracy (Scoring: 1-3 points)
- ✅ Technical information is correct
- ✅ Screenshots/images match current product versions
- ✅ URLs and links are working
- ✅ Terminology is consistent with product docs
- ✅ No contradictions with other pages
- ✅ Numbers, versions, and specifications are current

### 3. Theme & Styling Consistency (Scoring: 1-2 points)
- ✅ Uses ✅ emoji for lists (not bullets or other)
- ✅ Uses HTML `<a>` tags with `target="_blank"` for external links
- ✅ Headers use single blue color (#2196F3)
- ✅ Info/warning boxes use proper Material admonition syntax (!!!)
- ✅ Code blocks formatted with proper syntax highlighting
- ✅ Consistent button format: `[Next → ](path){: .md-button .md-button--primary}`

### 4. Learning Flow & Structure (Scoring: 1-2 points)
- ✅ Content flows logically (from concept to practice)
- ✅ Builds on previous page's knowledge
- ✅ Introduces one main concept per section
- ✅ Visual hierarchy is clear (h1 > h2 > h3)
- ✅ Transitions between sections are smooth
- ✅ Conclusion or summary before "Next" button

### 5. Clarity & Engagement (Scoring: 1-2 points)
- ✅ Language is clear and professional (avoid jargon without explanation)
- ✅ Sentences are concise (avoid walls of text)
- ✅ Active voice used primarily
- ✅ Engaging tone for learners (not dry/robotic)
- ✅ Visuals (diagrams, screenshots) enhance understanding
- ✅ "It's your turn now!" or practice sections engage learner

### 6. Standards Compliance (Scoring: 1-2 points)
- ✅ Page has clear title (h1)
- ✅ Next button points to correct next page
- ✅ No orphaned sections without context
- ✅ Page length is reasonable (not too long)
- ✅ Mobile-friendly formatting
- ✅ No spelling or grammar errors

**Total Score: Out of 15 points**
- 13-15: Excellent (90-100%)
- 11-12: Good (73-80%)
- 9-10: Fair (60-67%)
- <9: Needs improvement (<60%)
