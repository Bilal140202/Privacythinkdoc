import { motion } from "framer-motion";
import { Lock, Award } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function License() {
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
          <Award className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">License Agreement</h1>
          <p className="text-xl text-muted-foreground">
            Software license and usage rights.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground text-sm mb-12">
            Last updated: January 18, 2026
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">PrivacyThink Software License</h2>
              <p className="text-lg text-muted-foreground mb-8">
                This License Agreement governs your use of PrivacyThink software.
              </p>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">1. Grant of License</h3>
              <p className="text-muted-foreground mb-4">
                Subject to the terms of this agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Install and use PrivacyThink on devices you own or control</li>
                <li>Use PrivacyThink for personal, commercial, or professional purposes</li>
                <li>Process any type of document (including sensitive data)</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">2. Restrictions</h3>
              <p className="text-muted-foreground mb-4">You may NOT:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Reverse engineer, decompile, or disassemble the software</li>
                <li>Modify, adapt, or create derivative works</li>
                <li>Distribute, rent, lease, or lend the software to third parties</li>
                <li>Remove, alter, or obscure any proprietary notices</li>
                <li>Use the software for illegal or unauthorized purposes</li>
                <li>Attempt to extract or isolate AI models for separate use</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">3. Intellectual Property</h3>
              <p className="text-muted-foreground">
                PrivacyThink and all associated intellectual property rights remain the property of PrivacyThink and its licensors. This license does not grant you any ownership rights to the software.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">4. Your Data</h3>
              <p className="text-muted-foreground mb-4">
                You retain all rights, title, and interest in your documents and data processed by PrivacyThink. We make no claim to your data. Your data is:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Stored locally on your device only</li>
                <li>Never transmitted to our servers</li>
                <li>Never used to train AI models</li>
                <li>Entirely under your control</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">5. Open Source Components</h3>
              <p className="text-muted-foreground mb-4">
                PrivacyThink incorporates open source software and AI models licensed under various open source licenses, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>MIT License</li>
                <li>Apache License 2.0</li>
                <li>BSD Licenses</li>
              </ul>
              <p className="text-muted-foreground">
                These components retain their original licenses. See the About page in the application for full attribution and license texts.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">6. Beta Period</h3>
              <p className="text-muted-foreground">
                During the beta period, PrivacyThink is provided free of charge. This license is granted for the duration of the beta period and may transition to a different license model after beta concludes. Beta users will retain access to core features.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">7. Updates and Modifications</h3>
              <p className="text-muted-foreground">
                We may provide updates, patches, or modifications to PrivacyThink. These updates are subject to this license unless accompanied by a separate license agreement.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">8. Termination</h3>
              <p className="text-muted-foreground mb-4">
                This license is effective until terminated. Your rights under this license will terminate automatically if you fail to comply with any of its terms. Upon termination, you must:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Cease all use of PrivacyThink</li>
                <li>Uninstall the software from all devices</li>
                <li>Delete all copies of the software</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h3>
              <p className="text-muted-foreground">
                PrivacyThink is provided "AS IS" without warranty of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h3>
              <p className="text-muted-foreground">
                In no event shall PrivacyThink or its licensors be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">11. Export Compliance</h3>
              <p className="text-muted-foreground">
                You agree to comply with all applicable export and import laws and regulations. You may not export or re-export PrivacyThink to prohibited countries or entities.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">12. Governing Law</h3>
              <p className="text-muted-foreground">
                This license agreement is governed by the laws of the United States, without regard to conflict of law principles.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">13. Entire Agreement</h3>
              <p className="text-muted-foreground">
                This license agreement constitutes the entire agreement between you and PrivacyThink regarding the software and supersedes all prior agreements.
              </p>
            </Card>

            <Card className="p-8 border-primary/50 bg-primary/5">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-4">
                For questions about this license agreement, contact:
              </p>
              <p className="text-muted-foreground">
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@ansaribilal.com" className="text-primary hover:underline">
                  legal@ansaribilal.com
                </a>
              </p>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-muted/30 border border-border rounded-lg">
            <p className="text-sm text-muted-foreground">
              By downloading, installing, or using PrivacyThink, you acknowledge that you have read this license agreement, understand it, and agree to be bound by its terms and conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
