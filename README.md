# 🔒 PrivacyThink

**Privacy-first, local-only document intelligence.**

PrivacyThink is a secure, high-performance desktop application that enables you to chat with your documents using Large Language Models (LLMs) without any data ever leaving your device.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows%2010%2F11-lightgrey.svg)](https://github.com)
[![Version](https://img.shields.io/badge/version-0.1.0-green.svg)](https://github.com/releases)

---

## ✨ Features

- **Local LLM Inference**: Run powerful AI models (Qwen, Llama 3) entirely on your CPU. No API keys, no internet required.
- **Private RAG Pipeline**: Securely index PDFs, DOCX, and Code files into a local SQLite vector database.
- **Smart Document Filtering**: Focus your AI's context on specific documents for more relevant answers.
- **Real-time Performance**: Monitor RAM usage and inference speed in real-time.
- **Zero-Dependency Core**: Ships with a default model (Qwen 0.5B) so you can start chatting immediately.
- **Professional Export**: Export your private insights to clean Markdown files.

---

## 🚀 Getting Started

### Installation

1. Download the latest `PrivacyThink_0.1.0_x64-setup.exe` from the [Releases](https://github.com/releases) page.
2. Run the installer.
3. Launch PrivacyThink and follow the **System Check** to ensure optimal performance.

### Bundled AI

PrivacyThink comes pre-bundled with **Qwen 2.5 0.5B**, an ultra-fast model perfect for immediate testing. For better reasoning, you can download larger models (up to 7B) directly within the Models manager.

---

## 🛠️ Technology Stack

### Desktop Application
- **Frontend**: React, Tailwind (Modern UI), Lucide Icons, Framer Motion
- **Backend**: Rust (Tauri v2), SQLite (Vector Storage)
- **AI Core**: llama.cpp (Subprocess Sidecar), fastembed-rs (Local Embeddings)
- **Bundler**: NSIS/WiX

### Landing Page (This Repository)
- **Frontend**: React 19 + Vite + TypeScript
- **Styling**: Tailwind CSS v4 + Shadcn UI
- **Routing**: React Router v7
- **Animations**: Framer Motion
- **Backend**: Convex (for auth and backend services)
- **Package Manager**: pnpm

---

## 🛡️ Privacy Guarantee

PrivacyThink is built on the principle of **Zero-Server Architecture**.

❌ No cloud storage.
❌ No tracking or telemetry.
❌ No data collection for "model training".
✅ **Your data stays on your hardware.**

---

## 🌐 Web Landing Page

This repository contains the marketing website for PrivacyThink. Visit [https://privacythink.com](https://privacythink.com) to learn more.

### Pages
- **/** - Home page with hero, features, and FAQ
- **/features** - Detailed feature list with technical specs
- **/pricing** - Pricing information (free during beta)
- **/download** - Download page with installation instructions
- **/documentation** - Complete documentation and troubleshooting
- **/privacy** - Privacy policy
- **/terms** - Terms of service
- **/license** - Software license agreement
- **/contact** - Contact information and support

---

## 📦 Development

### Prerequisites

- Node.js 18+ and pnpm
- Convex account (for backend)

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/privacythink.git
cd privacythink

# Install dependencies
pnpm install

# Start Convex dev server
npx convex dev

# Start Vite dev server (in a new terminal)
pnpm dev

# Type check
npx tsc -b --noEmit

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Project Structure

```
privacythink/
├── src/
│   ├── pages/          # React pages (Landing, Features, etc.)
│   ├── components/     # Reusable UI components
│   │   └── ui/         # Shadcn UI primitives
│   ├── convex/         # Convex backend functions
│   ├── hooks/          # React hooks
│   ├── lib/            # Utilities and helpers
│   └── index.css       # Global styles with Tailwind
├── public/             # Static assets
├── convex/             # Convex configuration
├── index.html          # Entry HTML
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

---

## 🚀 Deployment

### Netlify (Recommended)

This project is optimized for Netlify deployment:

1. **Connect Repository**: Link your GitHub repo to Netlify
2. **Configure Build**: Settings are auto-detected from `netlify.toml`
3. **Environment Variables**: Add your Convex environment variables:
   - `VITE_CONVEX_URL`
   - `CONVEX_DEPLOYMENT`
4. **Deploy**: Click deploy!

Alternatively, deploy via CLI:

```bash
# Build the project
pnpm build

# Deploy to Netlify
npx netlify deploy --prod --dir=dist
```

### Other Platforms

**Vercel:**
```bash
pnpm build
npx vercel --prod
```

**GitHub Pages:**
```bash
pnpm build
# Configure base in vite.config.ts first
```

---

## 🎨 Design System

### Colors
The project uses a purple/blue theme defined in `src/index.css`:
- Primary: Purple (#7c3aed / oklch 285°)
- Secondary: Blue (#6366f1 / oklch 265°)
- Accent: Pink (#ec4899 / oklch 330°)

### Components
All UI components are from Shadcn UI and located in `src/components/ui/`. They support both light and dark modes.

### Animations
Framer Motion is used throughout for:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading states

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Use TypeScript for type safety
- Ensure mobile responsiveness
- Add animations for new components
- Test in both light and dark modes
- Run `npx tsc -b --noEmit` before committing

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Built by Bilal Ansari**

- GitHub: [@bilalansari](https://github.com/bilalansari)
- Email: hello@privacythink.com
- Website: [privacythink.com](https://privacythink.com)

---

## 🙏 Acknowledgments

- [llama.cpp](https://github.com/ggerganov/llama.cpp) for local inference
- [Tauri](https://tauri.app/) for the desktop framework
- [Qwen](https://github.com/QwenLM/Qwen) for the bundled AI model
- [Convex](https://convex.dev/) for the backend platform
- [Shadcn UI](https://ui.shadcn.com/) for beautiful components
- All open-source contributors who make privacy-preserving AI possible

---

## 📧 Support

- **Email**: support@privacythink.com
- **Documentation**: [/documentation](/documentation)
- **Issues**: [GitHub Issues](https://github.com/yourusername/privacythink/issues)
- **Privacy Questions**: privacy@privacythink.com

---

## 🔒 Security

We take security seriously. If you discover a security vulnerability, please email security@privacythink.com instead of using the issue tracker.

---

<div align="center">
  <strong>Your Documents. Your AI. Your Privacy.</strong>
  <br />
  <br />
  <a href="https://privacythink.com">Website</a> •
  <a href="/documentation">Documentation</a> •
  <a href="/download">Download</a>
</div>
