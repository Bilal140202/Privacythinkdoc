import { motion } from "framer-motion";
import { Lock, FileText, Zap, Brain, Code, FileCheck, Shield, Database, Cpu, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";

export default function Features() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Lock className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">PrivacyThink</span>
          </Link>
          <Button asChild>
            <Link to="/#download">Download</Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Features Built for Privacy
          </h1>
          <p className="text-xl text-muted-foreground">
            Every feature designed with one goal: keep your data yours.
          </p>
        </motion.div>
      </section>

      {/* Core Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "100% Air-Gapped",
                description: "Works completely offline after installation. Your data never touches the internet.",
                details: ["No cloud sync", "No external API calls", "Zero network requests", "Complete isolation"],
              },
              {
                icon: FileText,
                title: "Universal Document Support",
                description: "65+ file formats supported including PDF, Word, Markdown, and code files.",
                details: ["PDF parsing", "Office documents", "Code syntax highlighting", "OCR for scanned docs"],
              },
              {
                icon: Zap,
                title: "Instant Answers",
                description: "Sub-10ms semantic search with cited responses from your documents.",
                details: ["Vector similarity search", "Semantic chunking", "Source attribution", "Context-aware"],
              },
              {
                icon: Brain,
                title: "Multiple AI Models",
                description: "Choose from 0.5B to 7B parameter models based on your hardware.",
                details: ["Phi-2 (0.5B)", "Mistral (7B)", "Local inference", "No API keys needed"],
              },
              {
                icon: Code,
                title: "Code-Aware Analysis",
                description: "Understands code structure across Python, Rust, JavaScript, and more.",
                details: ["Syntax preservation", "Function boundaries", "Import tracking", "Multi-language"],
              },
              {
                icon: FileCheck,
                title: "Smart Citations",
                description: "Every AI response includes clickable references to source documents.",
                details: ["Page numbers", "Chunk references", "Confidence scores", "Context preview"],
              },
              {
                icon: Shield,
                title: "Zero Telemetry",
                description: "Absolutely no tracking, analytics, or data collection of any kind.",
                details: ["No crash reports", "No usage stats", "No fingerprinting", "Complete privacy"],
              },
              {
                icon: Database,
                title: "Local Database",
                description: "All embeddings and metadata stored in local SQLite database.",
                details: ["Fast queries", "Encrypted at rest", "No cloud sync", "Full ownership"],
              },
              {
                icon: Cpu,
                title: "Hardware Accelerated",
                description: "Leverages GPU when available for faster processing.",
                details: ["CUDA support", "Metal (Apple)", "CPU fallback", "Optimized inference"],
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-1 text-sm">
                    {feature.details.map((detail, j) => (
                      <li key={j} className="text-muted-foreground">• {detail}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <HardDrive className="w-6 h-6 text-primary" />
                System Requirements
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Minimum:</p>
                  <ul className="text-muted-foreground space-y-1 mt-1">
                    <li>• Windows 10 64-bit</li>
                    <li>• 8GB RAM</li>
                    <li>• 5GB free disk space</li>
                    <li>• 2-core CPU</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Recommended:</p>
                  <ul className="text-muted-foreground space-y-1 mt-1">
                    <li>• Windows 11 64-bit</li>
                    <li>• 16GB RAM</li>
                    <li>• 10GB free disk space</li>
                    <li>• 4-core CPU</li>
                    <li>• NVIDIA GPU (optional)</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Supported Formats
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Documents:</p>
                  <p className="text-muted-foreground mt-1">PDF, DOCX, DOC, TXT, MD, RTF, ODT</p>
                </div>
                <div>
                  <p className="font-semibold">Code:</p>
                  <p className="text-muted-foreground mt-1">
                    Python, JavaScript, TypeScript, Rust, Go, Java, C++, C#, Ruby, PHP, Swift, Kotlin
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Images (OCR):</p>
                  <p className="text-muted-foreground mt-1">PNG, JPG, JPEG, TIFF, BMP</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Download PrivacyThink and start analyzing documents privately.
          </p>
          <Button size="lg" asChild>
            <Link to="/#download">Download Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
