import { motion } from "framer-motion";
import { Lock, Shield } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function Privacy() {
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
          <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Your privacy is our foundation.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground text-sm mb-12">
            Last updated: January 18, 2026
          </p>

          <h2 className="text-3xl font-bold mb-6">Our Privacy Commitment</h2>
          <p className="text-lg text-muted-foreground mb-8">
            PrivacyThink is designed from the ground up to protect your privacy. Unlike cloud-based AI tools, we don't collect, store, or transmit any of your data.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">1. Data Collection</h3>
              <p className="text-muted-foreground">
                We collect <strong>zero data</strong>. PrivacyThink operates entirely on your local device. We do not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>Collect your documents or files</li>
                <li>Track your usage or behavior</li>
                <li>Store your questions or AI responses</li>
                <li>Access your file system beyond what you explicitly upload</li>
                <li>Use analytics or telemetry of any kind</li>
                <li>Deploy cookies or tracking pixels</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">2. Data Storage</h3>
              <p className="text-muted-foreground">
                All data is stored locally on your device in a SQLite database. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>Document embeddings (vector representations)</li>
                <li>Document metadata (filename, upload date, file size)</li>
                <li>Chat history (optional, can be disabled in settings)</li>
                <li>Application preferences</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Important:</strong> This data never leaves your computer. It is not synced to the cloud or transmitted over the internet.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">3. AI Processing</h3>
              <p className="text-muted-foreground">
                All AI inference happens locally on your device using downloaded models. Your documents and questions are processed entirely offline. No API calls are made to external servers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">4. Network Requests</h3>
              <p className="text-muted-foreground">
                PrivacyThink makes network requests only for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>Initial AI model downloads (one-time, during first launch)</li>
                <li>Optional software updates (can be disabled in settings)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                After initial setup, you can disconnect from the internet entirely and PrivacyThink will continue to work.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">5. Third-Party Services</h3>
              <p className="text-muted-foreground">
                PrivacyThink does not integrate with any third-party services, analytics platforms, or advertising networks. We do not share data with third parties because we don't collect data in the first place.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">6. Compliance</h3>
              <p className="text-muted-foreground">
                Because PrivacyThink operates entirely offline and collects no data, it is compliant with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li><strong>GDPR</strong> (General Data Protection Regulation)</li>
                <li><strong>CCPA</strong> (California Consumer Privacy Act)</li>
                <li><strong>HIPAA</strong> (Health Insurance Portability and Accountability Act)</li>
                <li><strong>SOC 2</strong> data privacy standards</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Since your data never leaves your device, there is no risk of unauthorized access or data breaches on our end.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">7. Crash Reports</h3>
              <p className="text-muted-foreground">
                PrivacyThink does <strong>not</strong> automatically send crash reports. If the application crashes, logs are stored locally on your device. You can manually review and share them with support if you choose to.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">8. Updates to This Policy</h3>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be reflected in the "Last updated" date at the top. We will never change our core commitment to zero data collection.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">9. Contact</h3>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@ansaribilal.com" className="text-primary hover:underline">
                  privacy@ansaribilal.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-primary/10 border border-primary/30 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Privacy by Design</h3>
            <p className="text-muted-foreground">
              Our architecture makes it impossible for us to access your data. This isn't just a promise—it's built into the software itself. Your privacy is guaranteed by design, not by policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
