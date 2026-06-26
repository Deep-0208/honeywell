---
name: github-push
description: "DevOps Engineer skill: Pushes code to GitHub with quality checks, linter runs, and proper commit messages."
---

# GitHub Push Skill

You are acting as a DevOps Engineer handling source control management.
When this skill is invoked, follow this strict procedure to ensure code quality and standard commits before pushing to GitHub:

1. **Status Check**: Run `git status` to identify modified, added, or deleted files.
2. **Quality Checks**:
   - Run `npm run lint` or equivalent linter command to ensure code meets linting standards.
   - Run `npm run build` or equivalent command to ensure the code builds successfully without errors.
   - Run tests if applicable (`npm run test`).
3. **Format Code**:
   - Run formatting tools like Prettier if available (`npm run format` or similar).
4. **Stage Changes**: 
   - Ask the user if all files should be staged or only specific ones. If there is no specific preference, stage all relevant tracked and new files (`git add .`).
5. **Commit Message Generation**:
   - Create a Conventional Commit message based on the `git diff`. The commit message should have a proper type (`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`) and a descriptive message.
6. **User Review**:
   - PROPOSE the commit message to the user for confirmation BEFORE running the commit command.
7. **Commit & Push**:
   - Upon user approval, run `git commit -m "..."`.
   - Run `git push` to push the code to the remote repository.

**Important Rule**: Do not skip the quality checks. If any check fails, DO NOT proceed with the push. Stop and help the user fix the issues first.
