import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Lock,
  FileText,
  Zap,
  Brain,
  Code,
  Shield,
  Download,
  Github,
  CheckCircle2,
  XCircle,
  Server,
  HardDrive,
  Eye,
  EyeOff,
  Cpu,
  Database,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated grid background component
function PrivacyGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
    </div>
  );
}

// Floating lock animation
function FloatingLock() {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-20 right-20 opacity-10"
    >
      <Lock className="w-64 h-64 text-primary" />
    </motion.div>
  );
}

export default function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section - Bold and Privacy-Focused */}
      <section className="relative min-h-screen flex items-center justify-center">
        <PrivacyGrid />
        <FloatingLock />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Lock Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border-2 border-primary/50 bg-primary/10 backdrop-blur-sm"
            >
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold tracking-wider uppercase">Air-Gapped by Design</span>
            </motion.div>

            {/* Main Headline - Big and Bold */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="block text-foreground">Your Documents.</span>
              <span className="block text-primary mt-2">Your Device.</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-2">
                Zero Cloud.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Chat with PDFs, contracts & code using <span className="text-foreground font-semibold">local LLMs</span>.
              <br />
              Everything runs on <span className="text-primary font-semibold">your hardware</span>. Nothing ever leaves.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="text-lg px-10 py-7 rounded-xl font-bold shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 bg-gradient-to-r from-primary to-secondary group"
                asChild
              >
                <a href="https://github.com/Bilal140202/Privacythink/releases/download/v0.1.0/PrivacyThink_0.1.2_x64-setup.exe" download>
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download PrivacyThink
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">Free Beta</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 rounded-xl border-2 hover:bg-primary/10 font-semibold"
                asChild
              >
                <a href="https://github.com/Bilal140202/Privacythink" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View Source
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>100% Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>Zero Telemetry</span>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-primary" />
                <span>Runs Offline</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Privacy Statement - Bold Visual */}
      <AnimatedSection className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: The Problem */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30">
                <EyeOff className="w-4 h-4 text-destructive" />
                <span className="text-sm font-semibold">The Cloud Problem</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black">
                Stop Uploading Your
                <span className="block text-destructive mt-2">Private Documents</span>
              </h2>

              <div className="space-y-4">
                {[
                  "ChatGPT reads your contracts",
                  "Claude indexes your code",
                  "Gemini trains on your data",
                  "Your secrets become their product"
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: The Solution */}
            <Card className="p-12 border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-2xl">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/50">
                  <Eye className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold">The PrivacyThink Way</span>
                </div>

                <h3 className="text-3xl font-bold">
                  Your Data Never Leaves
                  <span className="block text-primary">Your Machine</span>
                </h3>

                <div className="space-y-3">
                  {[
                    "AI runs on your CPU",
                    "Database stays local",
                    "No internet required",
                    "You control everything"
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-lg font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground italic">
                    "Not just privacy by policy. Privacy by <span className="text-primary font-semibold">architecture</span>."
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Features - Technical & Powerful */}
      <AnimatedSection className="py-32 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/30">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Powered by Local Hardware</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Enterprise AI.
              <span className="block text-primary">Consumer Hardware.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Qwen 0.5B to Llama 7B. Running on your laptop, not our servers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Local LLMs",
                description: "Bundled with Qwen 0.5B. Download larger models up to 7B.",
                metric: "Sub-10ms",
                metricLabel: "inference"
              },
              {
                icon: Database,
                title: "Vector Search",
                description: "SQLite vector database for instant semantic search.",
                metric: "65+ Formats",
                metricLabel: "supported"
              },
              {
                icon: Code,
                title: "Code Aware",
                description: "Understands Python, Rust, JS. Preserves syntax.",
                metric: "100% Private",
                metricLabel: "guaranteed"
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-2 border-border hover:border-primary/50 transition-all hover:shadow-xl group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  <div className="pt-6 border-t border-border">
                    <div className="text-3xl font-black text-primary">{feature.metric}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{feature.metricLabel}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works - Visual Process */}
      <AnimatedSection className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Three Steps.
              <span className="block text-primary">Complete Privacy.</span>
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Drop Your Files",
                description: "PDFs, DOCX, code—anything. Drag and drop into PrivacyThink.",
                icon: FileText,
              },
              {
                step: "02",
                title: "Local Indexing",
                description: "AI chunks and embeds your documents. All processing happens on your CPU.",
                icon: Cpu,
              },
              {
                step: "03",
                title: "Ask Questions",
                description: "Get instant answers with citations. No API calls. No internet required.",
                icon: Zap,
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="p-10 border-2 border-border hover:border-primary/50 transition-all">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <step.icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-6xl font-black text-primary/20 mb-2">{step.step}</div>
                      <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                      <p className="text-xl text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>

                {i < 2 && (
                  <div className="flex justify-center py-6">
                    <ArrowRight className="w-8 h-8 text-primary rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Zero Telemetry Promise */}
      <AnimatedSection className="py-32 px-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-28 h-28 mb-8 rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl"
          >
            <Lock className="w-14 h-14 text-primary-foreground" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black mb-8">
            The Zero-Server
            <span className="block text-primary">Promise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-2 border-destructive/30 bg-destructive/5">
              <Server className="w-12 h-12 text-destructive mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">❌ No Servers</h3>
              <p className="text-muted-foreground">No cloud storage. No API endpoints. Nothing to hack.</p>
            </Card>
            <Card className="p-8 border-2 border-primary/30 bg-primary/5">
              <HardDrive className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">✓ Your Hardware</h3>
              <p className="text-muted-foreground">Everything runs and stays on your local machine.</p>
            </Card>
          </div>

          <blockquote className="text-2xl font-medium italic border-l-4 border-primary pl-8 text-left max-w-2xl mx-auto mb-12">
            "PrivacyThink can't see your data because we <span className="text-primary font-bold">architected it that way</span>.
            Not a privacy policy—a physical impossibility."
          </blockquote>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 rounded-full bg-background/80 border-2 border-primary/30 font-semibold">
              GDPR Compliant
            </div>
            <div className="px-6 py-3 rounded-full bg-background/80 border-2 border-primary/30 font-semibold">
              HIPAA Ready
            </div>
            <div className="px-6 py-3 rounded-full bg-background/80 border-2 border-primary/30 font-semibold">
              SOC 2 Aligned
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Download CTA - Strong and Clear */}
      <AnimatedSection className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to Reclaim
            <span className="block text-primary">Your Privacy?</span>
          </h2>
          <p className="text-2xl text-muted-foreground mb-12">
            Join professionals who refuse to compromise on data security.
          </p>

          <Card className="p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/30 shadow-2xl">
            <div className="space-y-8">
              <div>
                <div className="text-4xl font-black mb-2">PrivacyThink v0.1.2</div>
                <p className="text-lg text-muted-foreground">Windows 10/11 • 64-bit • ~500MB</p>
              </div>

              <Button
                size="lg"
                className="text-2xl px-16 py-10 rounded-xl font-black shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 bg-gradient-to-r from-primary to-secondary"
                asChild
              >
                <a href="https://github.com/Bilal140202/Privacythink/releases/download/v0.1.0/PrivacyThink_0.1.2_x64-setup.exe" download>
                  <Download className="mr-3 h-8 w-8" />
                  Download Now — Free
                </a>
              </Button>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Free during beta</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>No registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Works offline</span>
                </div>
              </div>

              <Accordion type="single" collapsible className="text-left max-w-md mx-auto">
                <AccordionItem value="requirements" className="border-border/50">
                  <AccordionTrigger className="text-base hover:text-primary">
                    System Requirements
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ul className="space-y-2 pl-4">
                      <li>• Windows 10/11 (64-bit)</li>
                      <li>• 8GB RAM minimum (16GB recommended)</li>
                      <li>• 5GB free disk space</li>
                      <li>• Internet for initial download only</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* FAQ - Minimal and Clean */}
      <AnimatedSection className="py-32 px-6 bg-muted/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Questions?
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "Is my data really private?",
                a: "Yes. Everything runs on your device. We can't access your data because we never receive it. This isn't a policy—it's how the software works."
              },
              {
                q: "Do I need internet after installation?",
                a: "No. After downloading PrivacyThink and the AI models, you can disconnect from the internet permanently. Everything runs locally."
              },
              {
                q: "What file formats work?",
                a: "65+ formats: PDF, DOCX, code files (Python, Rust, JS, Go, etc.), TXT, Markdown, and images with OCR support."
              },
              {
                q: "How much does it cost?",
                a: "Free during beta. No credit card, no account, no catch. We might add paid features later, but core functionality will remain free."
              },
              {
                q: "Will this run on my laptop?",
                a: "If you have 8GB RAM and Windows 10/11, yes. The bundled 0.5B model runs on any modern laptop. Larger models need more RAM."
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 hover:border-primary/50 transition-colors">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center mt-12 text-muted-foreground">
            More questions?{" "}
            <Link to="/contact" className="text-primary font-semibold hover:underline">
              Get in touch
            </Link>
          </p>
        </div>
      </AnimatedSection>

      {/* Footer - Clean and Professional */}
      <footer className="py-16 px-6 border-t-2 border-border bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-2xl font-black">PrivacyThink</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Privacy-first AI document analysis. Your data stays on your hardware.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link to="/download" className="hover:text-primary transition-colors">Download</Link></li>
                <li><Link to="/documentation" className="hover:text-primary transition-colors">Documentation</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link to="/license" className="hover:text-primary transition-colors">License</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold text-lg mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Bilal140202/Privacythink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 PrivacyThink. Built by <span className="font-semibold">Bilal Ansari</span>. All rights reserved.
            </p>
            <p className="text-center text-xs text-muted-foreground mt-2">
              <Lock className="inline w-3 h-3 mr-1" />
              Your Documents. Your AI. Your Privacy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
