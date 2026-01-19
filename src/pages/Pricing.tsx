import { motion } from "framer-motion";
import { Check, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";

export default function Pricing() {
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            No subscriptions. No hidden fees. Just privacy.
          </p>
        </motion.div>
      </section>

      {/* Pricing Card */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-12 text-center border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-primary to-secondary">
                <Lock className="w-10 h-10 text-primary-foreground" />
              </div>

              <h2 className="text-3xl font-bold mb-4">Free Beta</h2>

              <div className="mb-8">
                <div className="text-6xl font-bold mb-2">$0</div>
                <p className="text-muted-foreground">During beta period</p>
              </div>

              <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                {[
                  "Unlimited document uploads",
                  "All AI models included",
                  "No usage limits",
                  "Lifetime updates during beta",
                  "Priority support",
                  "All features unlocked",
                  "No credit card required",
                  "Zero telemetry",
                  "100% offline capable",
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="text-lg px-12 py-6" asChild>
                <Link to="/#download">Download Now</Link>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Pricing FAQ</h2>

          <div className="space-y-8">
            {[
              {
                q: "Will PrivacyThink always be free?",
                a: "During the beta period, PrivacyThink is completely free with no limitations. After beta, we may introduce optional paid features for advanced use cases, but the core functionality will remain free forever.",
              },
              {
                q: "Are there any hidden costs?",
                a: "No. PrivacyThink is free during beta with zero hidden fees. No credit card required, no trials, no upsells.",
              },
              {
                q: "Do I need to pay for AI model access?",
                a: "No. All AI models are included and run locally on your device. No API keys or subscriptions needed.",
              },
              {
                q: "What happens after the beta period?",
                a: "Beta users will retain full access to all features. Any future paid tiers will only offer advanced enterprise features.",
              },
              {
                q: "Is there a limit on document uploads?",
                a: "No limits. Upload as many documents as your disk space allows.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Compare to Cloud AI Tools
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">PrivacyThink</th>
                  <th className="text-center py-4 px-4">ChatGPT Plus</th>
                  <th className="text-center py-4 px-4">Claude Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Monthly Cost", privacy: "$0", chatgpt: "$20", claude: "$20" },
                  { feature: "Privacy", privacy: "100%", chatgpt: "None", claude: "None" },
                  { feature: "Offline", privacy: "Yes", chatgpt: "No", claude: "No" },
                  { feature: "Data Ownership", privacy: "You", chatgpt: "OpenAI", claude: "Anthropic" },
                  { feature: "Document Upload", privacy: "Unlimited", chatgpt: "Limited", claude: "Limited" },
                  { feature: "API Keys", privacy: "None", chatgpt: "Required", claude: "Required" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-primary font-semibold">{row.privacy}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.chatgpt}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.claude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
