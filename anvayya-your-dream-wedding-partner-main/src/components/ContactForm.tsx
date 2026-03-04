import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const data = new FormData(event.currentTarget);
      data.append("access_key", "91e0f665-db94-4792-9374-b71135b92ee6");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const result = await response.json();
      
      if (result.success) {
        setResult("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setResult("Failed to send message. Please try again.");
      }
    } catch (error) {
      setResult("Error sending message. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="font-body text-sm text-foreground">
              Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="font-body border-muted-foreground/20"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="font-body text-sm text-foreground">
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="font-body border-muted-foreground/20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="font-body text-sm text-foreground">
            Subject
          </label>
          <Input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            required
            className="font-body border-muted-foreground/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="font-body text-sm text-foreground">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your wedding plans..."
            required
            rows={6}
            className="font-body border-muted-foreground/20 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full font-body text-xs tracking-[0.2em] uppercase py-4 h-auto"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-4 rounded text-center font-body text-sm ${
              result.includes("success") || result.includes("successfully")
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {result}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
