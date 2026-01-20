import { motion } from "framer-motion";
import { Lock, Book, FileText, Code, HelpCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Documentation() {
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
          <Book className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Documentation</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know to get started with PrivacyThink.
          </p>
        </motion.div>
      </section>

      {/* Quick Start */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Quick Start Guide</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Getting Started
              </h3>
              <Card className="p-6">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-lg">
                    <span className="font-semibold">Install PrivacyThink</span>
                    <p className="text-muted-foreground ml-6 mt-1">
                      Download and run the installer. On first launch, AI models will be downloaded (~2GB).
                    </p>
                  </li>
                  <li className="text-lg">
                    <span className="font-semibold">Upload Documents</span>
                    <p className="text-muted-foreground ml-6 mt-1">
                      Drag and drop PDF, Word, code files, or any supported format into the Library view.
                    </p>
                  </li>
                  <li className="text-lg">
                    <span className="font-semibold">Wait for Indexing</span>
                    <p className="text-muted-foreground ml-6 mt-1">
                      Documents are automatically chunked and embedded. This happens locally on your device.
                    </p>
                  </li>
                  <li className="text-lg">
                    <span className="font-semibold">Ask Questions</span>
                    <p className="text-muted-foreground ml-6 mt-1">
                      Open the Chat view and ask questions about your documents. Responses include source citations.
                    </p>
                  </li>
                </ol>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Supported File Formats
              </h3>
              <Card className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Documents</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• PDF</li>
                      <li>• DOCX, DOC</li>
                      <li>• TXT</li>
                      <li>• Markdown (MD)</li>
                      <li>• RTF</li>
                      <li>• ODT</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Code</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Python (.py)</li>
                      <li>• JavaScript (.js)</li>
                      <li>• TypeScript (.ts)</li>
                      <li>• Rust (.rs)</li>
                      <li>• Go (.go)</li>
                      <li>• Java (.java)</li>
                      <li>• C/C++ (.c, .cpp)</li>
                      <li>• And 40+ more...</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Images (OCR)</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• PNG</li>
                      <li>• JPG, JPEG</li>
                      <li>• TIFF</li>
                      <li>• BMP</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                AI Models
              </h3>
              <Card className="p-6">
                <p className="text-muted-foreground mb-4">
                  PrivacyThink includes multiple AI models. Choose based on your hardware:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold">Phi-2 (0.5B parameters)</p>
                    <p className="text-sm text-muted-foreground">
                      Fast and lightweight. Works on any laptop with 8GB RAM.
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="font-semibold">Mistral 7B (7B parameters)</p>
                    <p className="text-sm text-muted-foreground">
                      More accurate responses. Requires 16GB RAM. GPU recommended.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-primary" />
            Common Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "How do I change AI models?",
                a: "Go to Settings > AI Model and select your preferred model. The app will download the model if it's not already cached.",
              },
              {
                q: "Can I delete documents?",
                a: "Yes. Right-click any document in the Library view and select Delete. This removes the document and its embeddings from the local database.",
              },
              {
                q: "Does PrivacyThink use my GPU?",
                a: "Yes, if you have a compatible NVIDIA GPU (CUDA) or Apple Silicon (Metal), PrivacyThink will automatically use hardware acceleration for faster inference.",
              },
              {
                q: "How do I export chat history?",
                a: "Click the Export button in the Chat view to save your conversation as a Markdown file.",
              },
              {
                q: "Can I use PrivacyThink offline?",
                a: "Yes. After initial installation and model download, PrivacyThink works 100% offline. No internet connection required.",
              },
              {
                q: "How much disk space do AI models use?",
                a: "Phi-2: ~500MB, Mistral 7B: ~4GB. Models are cached locally so you only download once.",
              },
              {
                q: "What if I have a problem?",
                a: "Visit our GitHub Issues page or email support@ansaribilal.com. Check logs in Settings > Advanced > View Logs.",
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
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Troubleshooting</h2>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">App won't start</h3>
              <p className="text-muted-foreground">
                Ensure you have Windows 10/11 64-bit and at least 8GB RAM. Check Windows Event Viewer for crash logs.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Documents not indexing</h3>
              <p className="text-muted-foreground">
                Check Settings → Storage to ensure you have at least 2GB free disk space. Try re-uploading the document.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Slow performance</h3>
              <p className="text-muted-foreground">
                Switch to a smaller AI model (Phi-2) in Settings. Close other applications to free up RAM. Ensure you have at least 50% free disk space.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Need more help?</h3>
              <p className="text-muted-foreground mb-4">
                Visit our GitHub repository for detailed documentation, or contact support.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
