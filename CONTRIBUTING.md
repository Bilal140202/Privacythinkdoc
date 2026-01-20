# Contributing to PrivacyThink

Thank you for your interest in contributing to PrivacyThink! We welcome contributions from the community.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node version)
- **Error messages** or console logs

### Suggesting Features

Feature requests are welcome! Please:

- Use a clear and descriptive title
- Provide a detailed description of the feature
- Explain why this feature would be useful
- Include mockups or examples if applicable

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Test thoroughly** - ensure no regressions
4. **Run type checks**: `npx tsc -b --noEmit`
5. **Update documentation** if needed
6. **Write clear commit messages**
7. **Submit a pull request**

## Development Setup

```bash
# Fork and clone the repo
git clone https://github.com/Bilal140202/Privacythinkdoc.git
cd privacythink

# Install dependencies
pnpm install

# Start dev servers
npx convex dev
pnpm dev

# Type check
npx tsc -b --noEmit

# Build
pnpm build
```

## Coding Standards

### TypeScript
- Use TypeScript for all new code
- Enable strict type checking
- Avoid `any` types when possible
- Use proper types from Convex (`Doc<"table">`, `Id<"table">`)

### React
- Use functional components with hooks
- Follow React best practices
- Use proper prop types
- Implement error boundaries where appropriate

### Styling
- Use Tailwind CSS classes
- Follow the existing color scheme (purple/blue theme)
- Ensure mobile responsiveness
- Support both light and dark modes
- Use Shadcn UI components when possible

### Animations
- Use Framer Motion for animations
- Keep animations subtle and purposeful
- Ensure animations don't cause performance issues

### Code Organization
```
src/
├── pages/          # Page components
├── components/     # Reusable components
│   └── ui/         # Shadcn UI primitives
├── convex/         # Backend functions
├── hooks/          # Custom React hooks
├── lib/            # Utilities
└── index.css       # Global styles
```

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add new feature
fix: fix bug in component
docs: update README
style: format code
refactor: restructure component
test: add tests
chore: update dependencies
```

Examples:
- `feat: add pricing comparison table`
- `fix: resolve mobile menu overflow issue`
- `docs: update installation instructions`
- `style: format Landing component`

## Testing

Before submitting a PR:

1. Test in multiple browsers (Chrome, Firefox, Safari)
2. Test mobile responsiveness
3. Test both light and dark modes
4. Verify no TypeScript errors: `npx tsc -b --noEmit`
5. Check for console errors
6. Test all interactive elements

## Documentation

Update documentation when:
- Adding new features
- Changing APIs or interfaces
- Modifying configuration
- Adding new pages or routes

## Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited in CHANGELOG.md

## What to Contribute

### Good First Issues

Look for issues tagged `good first issue`:
- UI improvements
- Documentation updates
- Bug fixes
- Accessibility enhancements

### High Priority

- Mobile responsiveness improvements
- Performance optimizations
- Accessibility features
- Browser compatibility fixes
- Documentation improvements

### New Features

Before working on major features:
1. Open an issue to discuss the feature
2. Get approval from maintainers
3. Create a detailed implementation plan
4. Submit your PR with tests and docs

## Questions?

- Open a [Discussion](https://github.com/Bilal140202/Privacythinkdoc/discussions)
- Email: hello@ansaribilal.com
- Check existing [Issues](https://github.com/Bilal140202/Privacythinkdoc/issues)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to PrivacyThink! 🔒
