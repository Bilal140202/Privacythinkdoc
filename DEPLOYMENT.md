# Deployment Guide

This guide covers deploying PrivacyThink to various platforms.

## Table of Contents
- [Netlify Deployment](#netlify-deployment)
- [Vercel Deployment](#vercel-deployment)
- [GitHub Pages](#github-pages)
- [Environment Variables](#environment-variables)
- [Custom Domain](#custom-domain)

---

## Netlify Deployment

### Quick Deploy (Recommended)

1. **Connect Repository**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select the PrivacyThink repository

2. **Configure Build Settings**
   - Build command: `pnpm build` (auto-detected from netlify.toml)
   - Publish directory: `dist` (auto-detected)
   - Build settings are already configured in `netlify.toml`

3. **Set Environment Variables**
   - Go to Site settings → Environment variables
   - Add the following:
     ```
     VITE_CONVEX_URL=https://your-deployment.convex.cloud
     CONVEX_DEPLOYMENT=your-deployment-name
     ```

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live at `https://random-name.netlify.app`

### CLI Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify site (first time only)
netlify init

# Deploy to production
pnpm build
netlify deploy --prod --dir=dist
```

### Continuous Deployment

Automatic deployments are configured via `.github/workflows/deploy.yml`. Every push to `main` branch triggers a deployment.

**Required GitHub Secrets:**
- `NETLIFY_AUTH_TOKEN` - Get from Netlify User Settings → Applications
- `NETLIFY_SITE_ID` - Get from Netlify Site Settings → General
- `VITE_CONVEX_URL` - Your Convex deployment URL
- `CONVEX_DEPLOYMENT` - Your Convex deployment name

---

## Vercel Deployment

### Quick Deploy

1. **Connect Repository**
   - Go to [Vercel](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository

2. **Configure Settings**
   - Framework Preset: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

3. **Environment Variables**
   ```
   VITE_CONVEX_URL=https://your-deployment.convex.cloud
   CONVEX_DEPLOYMENT=your-deployment-name
   ```

4. **Deploy**
   - Click "Deploy"
   - Site will be live at `https://your-project.vercel.app`

### CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
pnpm build
vercel --prod
```

---

## GitHub Pages

### Setup

1. **Create gh-pages branch**
   ```bash
   git checkout --orphan gh-pages
   git reset --hard
   git commit --allow-empty -m "Init gh-pages"
   git push origin gh-pages
   git checkout main
   ```

2. **Configure vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/privacythink/', // Your repo name
     // ... other config
   });
   ```

3. **Deploy**
   ```bash
   pnpm build

   # Using gh-pages package
   npx gh-pages -d dist
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages / root
   - Save

**Note**: GitHub Pages doesn't support server-side redirects for SPAs. You'll need to use hash routing or 404.html workaround.

---

## Environment Variables

### Required Variables

```bash
# Convex Backend
VITE_CONVEX_URL=https://your-deployment.convex.cloud
CONVEX_DEPLOYMENT=your-deployment-name
```

### Optional Variables

```bash
# Analytics (if implemented)
VITE_ANALYTICS_ID=G-XXXXXXXXXX

# Sentry Error Tracking (if implemented)
VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx

# Environment
NODE_ENV=production
```

### Setting Environment Variables

**Netlify:**
- Site settings → Environment variables → Add variable

**Vercel:**
- Project settings → Environment Variables → Add

**GitHub Actions:**
- Repository settings → Secrets and variables → Actions → New secret

---

## Custom Domain

### Netlify

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `privacythink.com`)
4. Add DNS records to your domain provider:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```
5. Enable HTTPS (automatic with Let's Encrypt)

### Vercel

1. Go to Project settings → Domains
2. Add your domain
3. Configure DNS with your provider:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. HTTPS is automatic

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Test both light and dark modes
- [ ] Check all links work
- [ ] Verify environment variables are set
- [ ] Test form submissions (if any)
- [ ] Check console for errors
- [ ] Test on multiple browsers
- [ ] Verify analytics tracking (if enabled)
- [ ] Test 404 page
- [ ] Check page load performance
- [ ] Verify SEO meta tags

---

## Performance Optimization

### Netlify-specific

Already configured in `netlify.toml`:
- Asset caching (31536000 seconds for immutable assets)
- Security headers
- SPA fallback routing
- Lighthouse CI integration

### General Optimizations

```bash
# Analyze bundle size
pnpm build
npx vite-bundle-visualizer

# Check lighthouse scores
npx lighthouse https://your-site.com --view

# Test performance
npx pagespeed https://your-site.com
```

---

## Troubleshooting

### Build Fails

1. Check Node version (requires 18+)
2. Verify environment variables are set
3. Clear cache: `rm -rf node_modules .pnpm-store && pnpm install`
4. Check build logs for specific errors

### 404 on Refresh

- Ensure SPA fallback is configured (already in netlify.toml)
- For other platforms, add redirect rules

### Environment Variables Not Working

- Variables must start with `VITE_` to be exposed to client
- Rebuild after changing variables
- Check variable names match exactly

### Slow Build Times

- Use pnpm instead of npm (faster)
- Enable build cache in CI
- Consider reducing bundle size

---

## Support

Need help with deployment?
- Email: support@privacythink.com
- Documentation: [/documentation](/documentation)
- Issues: [GitHub Issues](https://github.com/yourusername/privacythink/issues)

---

**Happy Deploying! 🚀**
