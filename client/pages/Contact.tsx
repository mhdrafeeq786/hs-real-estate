import { Layout } from "@/components/Layout";
import { Logo } from "@/components/Logo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { slideInUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clear field error on change
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        return undefined;
      case "email": {
        if (!value.trim()) return "Email is required.";
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(value)) return "Enter a valid email address.";
        return undefined;
      }
      case "phone": {
        if (!value.trim()) return "Phone number is required.";
        const cleaned = value.replace(/[\s-()]/g, "");
        if (cleaned.length < 7) return "Enter a valid phone number.";
        return undefined;
      }
      default:
        return undefined;
    }
  };

  const validateAll = () => {
    const next: typeof errors = {};
    next.name = validateField("name", formData.name);
    next.email = validateField("email", formData.email);
    next.phone = validateField("phone", formData.phone);
    setErrors(next);
    return !next.name && !next.email && !next.phone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) {
      toast({ title: "Validation", description: "Please fix the errors in the form.", variant: "destructive" });
      return;
    }

    setIsSending(true);
    const sendAttempt = async () => {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        })
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || 'Send failed');
      }
      return res;
    };

    // retry/backoff: 3 attempts with exponential backoff
    const maxAttempts = 3;
    let attempt = 0;
    let success = false;
    let lastErr: any = null;
    while (attempt < maxAttempts && !success) {
      try {
        attempt += 1;
        if (attempt > 1) {
          const wait = 500 * Math.pow(2, attempt - 2); // 500ms, 1000ms, ...
          await new Promise((r) => setTimeout(r, wait));
          toast({ title: `Retrying (${attempt}/${maxAttempts})`, description: 'Attempting to resend message...' });
        }
        await sendAttempt();
        success = true;
      } catch (err) {
        lastErr = err;
        console.error('Send attempt failed', attempt, err);
      }
    }

    if (!success) {
      console.error('All send attempts failed', lastErr);
      toast({ title: 'Send failed', description: 'Unable to send message. Please try again later.', variant: 'destructive' });
      setIsSending(false);
      return;
    }

    toast({ title: 'Message sent', description: 'Thank you — we received your message and will reply soon.' });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSending(false);
  };



  const offices = [
    {
      title: "Al Ain Office",
      location: "HS Building, Al Noud, Al Ain Abu Dhabi",
      country: "United Arab Emirates",
      phone: "+971 3 7627689",
    },
    {
      title: "Abu Dhabi",
      location: "Al Saada Tower, M1, Al Nahayan Camp, Al Mamoura",
      country: "Abu Dhabi, United Arab Emirates",
      phone: "+971 50 591 1125",
    },
    {
      title: "Dubai",
      location: "GF 01 The Icon Tower, Dubai Silicon Oasis, Dubai",
      country: "United Arab Emirates",
      phone: "+971 50 737 9111",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-4">
              <h1 className="text-5xl md:text-6xl font-bold text-brand-red">Contact Us</h1>
              <div className="w-16 h-16 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '50%', boxShadow: '0 20px 50px rgba(0,0,0,0.28)'}}>
                <Logo className="w-17 h-17" />
              </div>
            </div>
            <p className="text-xl text-gray-300">
              Get in touch with our team to discuss your real estate needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gray-50 p-6 rounded-lg text-center"
              variants={slideInUp}
              whileHover={{ y: -8 }}
            >
              <Mail className="w-8 h-8 text-brand-red mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:info@home-sniper.com"
                className="text-brand-red hover:opacity-90"
              >
                info@home-sniper.com
              </a>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg text-center"
              variants={slideInUp}
              whileHover={{ y: -8 }}
            >
              <Phone className="w-8 h-8 text-brand-red mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Corporate</h3>
              <p className="text-gray-700">+971 50 737 9111</p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg text-center"
              variants={slideInUp}
              whileHover={{ y: -8 }}
            >
              <MapPin className="w-8 h-8 text-brand-red mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">PO Box</h3>
              <p className="text-gray-700">16356</p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg text-center"
              variants={slideInUp}
              whileHover={{ y: -8 }}
            >
              <Clock className="w-8 h-8 text-brand-red mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-700 text-sm">Mon - Fri: 9 AM - 6 PM</p>
            </motion.div>
          </motion.div>

          {/* Contact Form & Additional Info */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We would be happy to hear from you.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-brand-red">*</span>
                  </label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={(e) => setErrors((p) => ({ ...p, name: validateField("name", e.target.value) }))}
                    required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address <span className="text-brand-red">*</span>
                  </label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={(e) => setErrors((p) => ({ ...p, email: validateField("email", e.target.value) }))}
                    required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number <span className="text-brand-red">*</span>
                  </label>
                    <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={(e) => setErrors((p) => ({ ...p, phone: validateField("phone", e.target.value) }))}
                    required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  />
                  {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                    <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  ></textarea>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    className={`w-full px-6 py-4 bg-brand-red text-white font-semibold rounded-lg transition-all shadow-md uppercase tracking-wider ${isSending ? 'opacity-70 pointer-events-none' : 'hover:opacity-90'}`}
                    whileHover={!isSending ? { scale: 1.02, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)" } : undefined}
                    whileTap={!isSending ? { scale: 0.98 } : undefined}
                    aria-busy={isSending}
                  >
                    {isSending ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin h-4 w-4 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Our Offices
              </h3>
              <motion.div
                className="space-y-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {offices.map((office, idx) => (
                  <motion.div
                    key={idx}
                    className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
                    variants={slideInUp}
                  >
                    <h4 className="font-bold text-brand-red mb-3 uppercase tracking-wider text-sm">
                      {office.title}
                    </h4>
                    <p className="text-gray-700 mb-1 font-medium">{office.location}</p>
                    <p className="text-gray-600 text-sm mb-3">{office.country}</p>
                    <motion.p
                      className="text-brand-red font-semibold flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <Phone className="w-4 h-4" />
                      {/* {office.phone} */}
                      +971 50 737 9111
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="border-t border-gray-300 pt-6 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700">
                  <span className="font-bold">Website:</span>{" "}
                    <motion.a
                    href="https://www.home-sniper.com"
                    className="text-brand-red hover:opacity-90 transition-colors"
                    whileHover={{ textDecoration: "underline" }}
                  >
                    www.home-sniper.com
                  </motion.a>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
