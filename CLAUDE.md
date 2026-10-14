# Coding Agents for Test Workshop Guide - Development Guide

## Git Workflow

### Branching Strategy
This project follows a branching workflow to ensure code quality and organized development:

- **main**: Production-ready code only. No direct commits.
- **dev**: Integration branch for features and fixes.
- **feature/*, bugfix/*, enhancement/*, hotfix/*** branches: All changes (enhancements, hot fixes, new features) branch off from `dev`.

### How to Work

1. **Always create a new branch from `dev`** for any changes:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** on your feature branch (never directly on `main` or `dev`)

3. **Create a Pull Request** from your feature branch to `dev` for review

4. **After review and approval**, merge to `dev`

5. **Release to main** only when `dev` is stable and ready for production:
   ```bash
   git checkout main
   git pull origin main
   git merge dev
   git push origin main
   ```

### Key Rules
- ❌ Never commit directly to `main`
- ❌ Never commit directly to `dev` 
- ✅ Always use feature/bugfix/enhancement/hotfix branches off `dev`
- ✅ Use pull requests for code review before merging

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
