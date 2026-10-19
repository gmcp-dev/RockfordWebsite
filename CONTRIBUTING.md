# Contributing guide

Thank you for your interest in contributing to **Rockford Website**! All help is
welcome: bug fixes, design improvements, new sections, documentation, etc.

## Before you start

- Check the [open issues](https://github.com/gmcp-dev/RockfordWebsite/issues) to avoid
  duplicating work.
- If you plan a large change, open an issue first to discuss it.

## Workflow

1. Fork the repository.
2. Create a descriptive branch from `main`:
   ```bash
   git checkout -b feat/your-improvement-name
   ```
3. Make your changes following the conventions in this document.
4. Verify the site looks and works correctly by opening `index.html`.
5. Commit with clear messages (see convention below).
6. Open a Pull Request describing the changes and attaching screenshots if they affect the UI.

## Commit convention

[Conventional Commits](https://www.conventionalcommits.org/) is recommended:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting, whitespace, etc. (no logic changes)
- `refactor:` refactoring without changing functionality
- `chore:` maintenance tasks

Example: `feat: add server events section`

## Code style

- Keep HTML semantic and well indented (4 spaces).
- Reuse existing Bootstrap classes before creating new styles.
- Add custom styles in `assets/css/style.css`.
- JavaScript goes in `assets/js/index.js`; avoid new dependencies unless necessary.
- Images should be optimized (preferably `.webp`) and placed in `assets/images/`.
- Do not commit the `node_modules/` folder (already in `.gitignore`).

## Pull requests

- One PR per logical change; avoid mixing refactors with new features.
- Describe what changes and why.
- If you modify the UI, include screenshots or a GIF.
- Respond to review comments constructively.

## Code of conduct

This project fosters a respectful environment. Be kind, constructive, and patient
with the rest of the community. Offensive or discriminatory behavior is not tolerated.

## License

By contributing, you agree that your contributions will be published under the same
[MIT](LICENSE) license as the project.