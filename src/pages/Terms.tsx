import { motion } from "framer-motion";
import { Lock, FileText } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function Terms() {
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
          <FileText className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">
            Simple, fair terms for using PrivacyThink.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground text-sm mb-12">
            Last updated: January 18, 2026
          </p>

          <h2 className="text-3xl font-bold mb-6">Terms of Service</h2>
          <p className="text-lg text-muted-foreground mb-8">
            By downloading and using PrivacyThink, you agree to these terms.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">1. License Grant</h3>
              <p className="text-muted-foreground">
                PrivacyThink is provided free during the beta period. You are granted a personal, non-transferable, non-exclusive license to use the software on devices you own or control.
              </p>
              <p className="text-muted-foreground mt-4">
                You may:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                <li>Install and use PrivacyThink on multiple devices</li>
                <li>Use PrivacyThink for personal or commercial purposes</li>
                <li>Process sensitive documents (legal, medical, etc.)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">2. Restrictions</h3>
              <p className="text-muted-foreground">
                You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>Reverse engineer, decompile, or disassemble the software</li>
                <li>Redistribute or resell PrivacyThink</li>
                <li>Remove or modify any copyright notices</li>
                <li>Use PrivacyThink for illegal activities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">3. Ownership</h3>
              <p className="text-muted-foreground">
                You own all documents, data, and content you process with PrivacyThink. We make no claim to your data. All AI-generated responses based on your documents are your property.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">4. Beta Software</h3>
              <p className="text-muted-foreground">
                PrivacyThink is currently in beta. This means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>The software may contain bugs or errors</li>
                <li>Features may change or be removed</li>
                <li>We may discontinue the beta at any time</li>
                <li>Beta users will receive updates and new features for free</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">5. No Warranty</h3>
              <p className="text-muted-foreground">
                PrivacyThink is provided "as is" without warranty of any kind. We do not guarantee that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>The software will be error-free or uninterrupted</li>
                <li>AI responses will be accurate or complete</li>
                <li>The software will meet your specific requirements</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Always verify AI responses</strong>, especially for critical use cases like legal or medical decisions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h3>
              <p className="text-muted-foreground">
                We are not liable for any damages arising from your use of PrivacyThink, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>Loss of data</li>
                <li>Business interruption</li>
                <li>Incorrect AI responses</li>
                <li>Hardware damage</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You use PrivacyThink at your own risk. We recommend backing up important documents before processing them.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">7. Open Source Components</h3>
              <p className="text-muted-foreground">
                PrivacyThink uses open source AI models and libraries. These components are subject to their own licenses (MIT, Apache 2.0, etc.). See the About page in the app for full attribution.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">8. Updates</h3>
              <p className="text-muted-foreground">
                We may release updates to PrivacyThink. Updates may:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>Fix bugs or security vulnerabilities</li>
                <li>Add new features</li>
                <li>Improve performance</li>
                <li>Update AI models</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You can disable automatic updates in settings, but we recommend keeping PrivacyThink up to date.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">9. Termination</h3>
              <p className="text-muted-foreground">
                You may stop using PrivacyThink at any time by uninstalling the software. We may terminate your license if you violate these terms.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">10. Governing Law</h3>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the United States. Any disputes will be resolved in the courts of the United States.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">11. Changes to Terms</h3>
              <p className="text-muted-foreground">
                We may update these terms from time to time. Continued use of PrivacyThink after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">12. Contact</h3>
              <p className="text-muted-foreground">
                Questions about these terms? Contact us at{" "}
                <a href="mailto:legal@privacythink.com" className="text-primary hover:underline">
                  legal@privacythink.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-muted/30 border border-border rounded-lg">
            <p className="text-sm text-muted-foreground">
              By using PrivacyThink, you acknowledge that you have read and understood these terms and agree to be bound by them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
