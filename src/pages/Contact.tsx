import { motion } from "framer-motion";
import { Lock, Mail, MessageSquare, Github, Bug } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Contact() {
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
          <MessageSquare className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            We're here to help with questions, feedback, or support.
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "General Inquiries",
                description: "Questions about PrivacyThink? Reach out anytime.",
                contact: "connect@ansaribilal.com",
                href: "mailto:connect@ansaribilal.com",
              },
              {
                icon: Bug,
                title: "Technical Support",
                description: "Experiencing issues? We're here to help.",
                contact: "connect@ansaribilal.com",
                href: "mailto:connect@ansaribilal.com",
              },
              {
                icon: Github,
                title: "Report a Bug",
                description: "Found a bug? Open an issue on GitHub.",
                contact: "GitHub Issues",
                href: "https://github.com/Bilal140202/Privacythinkdoc/issues",
              },
              {
                icon: MessageSquare,
                title: "Feature Requests",
                description: "Have an idea? We'd love to hear it.",
                contact: "connect@ansaribilal.com",
                href: "mailto:connect@ansaribilal.com",
              },
            ].map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <method.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-primary hover:underline"
                  >
                    {method.contact}
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Redirect */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Looking for Answers?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Check our documentation and FAQ section first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/documentation">View Documentation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/#faq">Read FAQ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-3xl font-bold mb-6">Response Time</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We aim to respond to all inquiries within 24-48 hours during business days. For urgent technical issues, please include "URGENT" in your email subject.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "General Inquiries",
                  time: "24-48 hours",
                },
                {
                  title: "Technical Support",
                  time: "12-24 hours",
                },
                {
                  title: "Bug Reports",
                  time: "Varies",
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-primary/50">
            <div className="flex gap-4">
              <Lock className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Privacy Note</h3>
                <p className="text-muted-foreground">
                  When contacting us, please do not include sensitive documents or personal data in your email. If you need help with a specific document, describe the issue without sharing the actual content. Remember: PrivacyThink processes everything locally, so we never have access to your data.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
