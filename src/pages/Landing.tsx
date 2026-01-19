import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lock,
  FileText,
  Zap,
  Brain,
  Code,
  FileCheck,
  Shield,
  Globe,
  Download,
  Github,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ExternalLink,
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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-2xl"
            >
              <Lock className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Your Documents.
              <br />
              Your AI. Your Privacy.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Analyze contracts, code, and documents with AI—100% locally.
              <br />
              <span className="text-foreground font-semibold">
                No cloud. No tracking. No subscriptions.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
                <Download className="mr-2 h-5 w-5" />
                Download for Windows
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16"
            >
              <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Stop Feeding Your Data to the Cloud
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cloud AI Tools */}
            <Card className="p-8 border-destructive/50 bg-destructive/5">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-destructive" />
                <h3 className="text-2xl font-semibold">Cloud AI Tools</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Uploads your files",
                  "$20-30/month",
                  "Requires internet",
                  "Data sold to advertisers",
                  "Terms of service trap",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>

            {/* PrivacyThink */}
            <Card className="p-8 border-primary/50 bg-primary/5">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold">PrivacyThink</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Files stay on your device",
                  "One-time payment",
                  "Works offline",
                  "Zero telemetry",
                  "You own everything",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Grid */}
      <AnimatedSection className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Built for Professionals Who Value Privacy
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Everything you need to work securely with AI
          </p>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Lock,
                title: "100% Air-Gapped",
                description:
                  "Works without internet. Your data never leaves your computer.",
                gradient: "from-primary to-secondary",
              },
              {
                icon: FileText,
                title: "Universal Document Support",
                description:
                  "PDF, Word, code files (65+ formats) even scanned documents with OCR.",
                gradient: "from-secondary to-accent",
              },
              {
                icon: Zap,
                title: "Instant Answers",
                description:
                  "Ask questions, get cited responses. Sub-10ms semantic search.",
                gradient: "from-accent to-primary",
              },
              {
                icon: Brain,
                title: "Multiple AI Models",
                description:
                  "Choose from 0.5B to 7B models. Runs on any laptop (8GB+ RAM).",
                gradient: "from-primary to-accent",
              },
              {
                icon: Code,
                title: "Code-Aware Analysis",
                description:
                  "Understands Python, Rust, JS, etc. Preserves function boundaries.",
                gradient: "from-secondary to-primary",
              },
              {
                icon: FileCheck,
                title: "Smart Citations",
                description:
                  "Every answer shows source pages. Click to see original context.",
                gradient: "from-accent to-secondary",
              },
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="p-6 h-full backdrop-blur-sm bg-card/50 border-border/50 hover:bg-card/80 transition-all hover:shadow-lg group">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            From Upload to Insight in 3 Steps
          </h2>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-32 left-1/2 -translate-x-1/2 h-64 w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-16 lg:space-y-32">
              {[
                {
                  number: "1",
                  title: "Upload",
                  description: "Drag & drop any document",
                  detail: "Supports PDF, Word, Markdown, code files, and more",
                },
                {
                  number: "2",
                  title: "Index",
                  description: "AI creates private searchable index",
                  detail: "Local embedding generation with semantic chunking",
                },
                {
                  number: "3",
                  title: "Ask",
                  description: "Get instant, cited answers",
                  detail: "RAG-powered responses with source attribution",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground text-2xl font-bold shadow-xl">
                      {step.number}
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                    <p className="text-xl text-foreground mb-2">
                      {step.description}
                    </p>
                    <p className="text-muted-foreground">{step.detail}</p>
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Privacy Guarantee */}
      <AnimatedSection className="py-24 px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl"
          >
            <Shield className="w-12 h-12 text-primary-foreground" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Data. Your Device. Period.
          </h2>

          <Card className="p-12 mb-12 backdrop-blur-sm bg-card/50 border-primary/30">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  On Your Device
                </h3>
                <ul className="space-y-2 text-left text-muted-foreground">
                  <li>✓ Local AI processing</li>
                  <li>✓ Local database</li>
                  <li>✓ Local models</li>
                  <li>✓ Offline capable</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-destructive flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Never Leaves
                </h3>
                <ul className="space-y-2 text-left text-muted-foreground">
                  <li>✗ No cloud sync</li>
                  <li>✗ No analytics</li>
                  <li>✗ No tracking</li>
                  <li>✗ No telemetry</li>
                </ul>
              </div>
            </div>

            <blockquote className="text-lg italic text-foreground leading-relaxed border-l-4 border-primary pl-6">
              PrivacyThink is air-gapped by design. Your documents, questions,
              and AI responses never touch the internet. Perfect for lawyers,
              engineers, and anyone who values true digital privacy.
            </blockquote>
          </Card>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Lock, text: "GDPR Compliant" },
              { icon: Shield, text: "HIPAA Ready" },
              { icon: Globe, text: "Works Offline" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg"
              >
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="font-semibold">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Download CTA */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Reclaim Your Privacy?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join thousands of professionals using PrivacyThink
          </p>

          <Card className="p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">PrivacyThink v1.0</h3>
              <p className="text-muted-foreground">For Windows 10/11 (64-bit)</p>
            </div>

            <Button
              size="lg"
              className="text-xl px-12 py-8 mb-8 shadow-2xl hover:shadow-primary/50 transition-all"
            >
              <Download className="mr-3 h-6 w-6" />
              Download Now (Free)
            </Button>

            <Accordion type="single" collapsible className="text-left max-w-md mx-auto">
              <AccordionItem value="requirements" className="border-border/50">
                <AccordionTrigger className="hover:text-primary">
                  System Requirements
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Windows 10/11</li>
                    <li>• 8GB RAM (16GB recommended)</li>
                    <li>• 5GB free disk space</li>
                    <li>• No internet required after installation</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="py-24 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "Does PrivacyThink require internet?",
                a: "Only for the initial download. After installation, it works 100% offline.",
              },
              {
                q: "What file formats are supported?",
                a: "65+ formats including PDF, Word, code files (Python, JavaScript, Rust, etc.), and images with OCR.",
              },
              {
                q: "How much does it cost?",
                a: "Free for unlimited use. Includes all updates and new models all for free during beta.",
              },
              {
                q: "Is my data really private?",
                a: "Yes. Everything runs on your device. Zero telemetry, no cloud servers, no data collection.",
              },
              {
                q: "What are the system requirements?",
                a: "Windows 10/11, 8GB+ RAM, 5GB disk space. Works on any modern laptop.",
              },
              {
                q: "Can I use it for legal/medical documents?",
                a: "Absolutely. HIPAA and GDPR compliant because your data never leaves your device.",
              },
              {
                q: "Which AI models are included?",
                a: "Open Source Models. All running locally on your hardware.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center mt-12 text-muted-foreground">
            Still have questions?{" "}
            <a
              href="mailto:support@privacythink.com"
              className="text-primary hover:underline"
            >
              Email us
            </a>
          </p>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-16 px-6 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">PrivacyThink</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Privacy-first AI document analysis
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/features" className="hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/download" className="hover:text-primary transition-colors">
                    Download
                  </Link>
                </li>
                <li>
                  <Link to="/documentation" className="hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/license" className="hover:text-primary transition-colors">
                    License Agreement
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 PrivacyThink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
