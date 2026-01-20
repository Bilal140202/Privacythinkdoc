import { motion } from "framer-motion";
import { Download as DownloadIcon, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";

export default function Download() {
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
          <Button asChild variant="outline">
            <Link to="/features">Features</Link>
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
            Download PrivacyThink
          </h1>
          <p className="text-xl text-muted-foreground">
            Start analyzing documents privately in minutes.
          </p>
        </motion.div>
      </section>

      {/* Download Card */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-12 text-center border-primary/50 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">PrivacyThink v1.0</h2>
                <p className="text-muted-foreground">For Windows 10/11 (64-bit)</p>
                <p className="text-sm text-muted-foreground mt-2">Size: ~500MB</p>
              </div>

              <Button
                size="lg"
                className="text-xl px-12 py-8 mb-8 shadow-2xl hover:shadow-primary/50 transition-all"
                asChild
              >
                <a href="https://github.com/Bilal140202/Privacythinkdoc/releases/download/v0.1.2/PrivacyThink_0.1.2_x64-setup.exe" download>
                  <DownloadIcon className="mr-3 h-6 w-6" />
                  Download Installer
                </a>
              </Button>

              <p className="text-sm text-muted-foreground mb-8">
                Free during beta • No credit card required • Works offline
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-left">
                {[
                  "100% free during beta",
                  "No registration required",
                  "Automatic updates",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Installation Steps</h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Download the Installer",
                description: "Click the download button above to get the PrivacyThink installer.",
              },
              {
                step: "2",
                title: "Run the Installer",
                description: "Open the downloaded .exe file and follow the setup wizard.",
              },
              {
                step: "3",
                title: "First Launch",
                description: "PrivacyThink will download AI models on first launch (one-time, ~2GB).",
              },
              {
                step: "4",
                title: "Start Using",
                description: "Upload documents and start asking questions privately!",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xl font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">System Requirements</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Minimum</h3>
              <ul className="space-y-3">
                {[
                  "Windows 10 64-bit",
                  "Intel Core i3 or AMD equivalent",
                  "8GB RAM",
                  "5GB free disk space",
                  "No GPU required",
                ].map((req, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border-primary/50 bg-primary/5">
              <h3 className="text-2xl font-semibold mb-6">Recommended</h3>
              <ul className="space-y-3">
                {[
                  "Windows 11 64-bit",
                  "Intel Core i5 or AMD Ryzen 5",
                  "16GB RAM",
                  "10GB free disk space",
                  "NVIDIA GPU (optional, for faster processing)",
                ].map((req, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Platforms */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Other Platforms</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Currently, PrivacyThink is available for Windows only.
          </p>
          <Card className="p-8 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              Mac and Linux versions are in development. Sign up for updates to be notified when they're available.
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">Get Notified</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
