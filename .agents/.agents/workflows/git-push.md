# Git Push & Quality Check Workflow

**Description**: Automates the process of pushing code to GitHub by first running quality checks (linting, building), formatting, and generating a standard commit message.

**When to use**: Use this workflow when you want to safely commit and push your current work to GitHub. You can invoke it by asking to "push code" or "commit to github".

## Workflow Steps

1. **Invoke Skill**: Engage the `github-push` skill.
2. **Check Status**: Agent will review modified files via `git status` and `git diff`.
3. **Run Checks**: Agent will execute build and lint commands.
   - If errors occur, the agent will pause and help fix them.
4. **Generate Commit**: Agent creates a conventional commit message.
5. **Review**: You will be prompted to approve the commit message.
6. **Push**: Agent commits and pushes to the current branch.
