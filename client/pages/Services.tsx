import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { slideInUp, staggerContainer } from "@/lib/animations";
import { CheckCircle2, Home, Building2, Wrench, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Property Leasing",
      description:
        "We offer a diverse portfolio of properties for lease, carefully curated to meet the needs of our tenants.",
      features: [
        "Wide selection of properties",
        "Flexible lease terms",
        "Professional leasing consultation",
        "Direct leasing from owner",
      ],
    },
    {
      icon: Building2,
      title: "Property Management",
      description:
        "Our experienced team handles all aspects of property management, ensuring properties are well-maintained and running smoothly.",
      features: [
        "Comprehensive management services",
        "Tenant screening & verification",
        "Rent collection & accounting",
        "Regular inspections & maintenance",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description:
        "Our dedicated maintenance team is available 24/7 to address any issues or concerns.",
      features: [
        "24/7 emergency response",
        "Preventive maintenance",
        "Professional repairs",
        "Quality assurance",
      ],
    },
    {
      icon: Users,
      title: "Tenant Support",
      description:
        "We provide personalized support to our tenants, ensuring their needs are met and exceeded.",
      features: [
        "Responsive support team",
        "Personalized assistance",
        "Issue resolution",
        "Enhanced security",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-brand-red"
                  variants={slideInUp}
                  whileHover={{ y: -8 }}
                >
                  <Icon className="w-12 h-12 text-brand-red mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose <span className="text-brand-red">Our Services</span>
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "Leasing directly with owner without intermediates",
              "Hassle-free experience with professional team",
              "Well-maintained properties across UAE",
              "Responsive 24/7 maintenance team",
              "Personalized support tailored to your needs",
              "Full-fledged property management services",
              "Enhanced security and access control",
              "Clean, calm atmosphere and community",
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                variants={slideInUp}
              >
                <CheckCircle2 className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-red text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact our team today to discuss how we can help with your real estate needs.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-white text-brand-red font-bold rounded-lg hover:bg-gray-100 transition-colors uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </section>
    </Layout>
  );
}
