import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { slideInUp, staggerContainer } from "@/lib/animations";

export default function About() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-brand-red">About Us</h1>
            <p className="text-xl text-gray-300">
              Learn about Home Sniper Real Estate and our commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <span className="font-bold text-red-600">Home Sniper Real Estate Gen. Cont. Sole Proprietorship L.L.C</span> is a
                  leading real estate management company with a strong presence in
                  Abu Dhabi, Al Ain, and Dubai, United Arab Emirates.
                </p>
                <p>
                  We specialize in managing our own extensive portfolio of properties
                  across these regions, while also offering comprehensive management
                  services to other property owners.
                </p>
                <p>
                  Our team of dedicated professionals combines market expertise with
                  personalized service to ensure every client receives exceptional
                  care and attention to detail.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/assets/aboutUsNew.jpeg"
                alt="Dubai - Al Varsan"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our <span className="text-red-600">Core Values</span>
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Professionalism",
                desc: "We maintain the highest standards in all our operations and client interactions.",
              },
              {
                title: "Integrity",
                desc: "Transparent and honest in all our dealings, building trust with our clients.",
              },
              {
                title: "Excellence",
                desc: "Committed to delivering exceptional service in every aspect of our business.",
              },
              {
                title: "Customer-Centric",
                desc: "Our clients' needs and satisfaction are at the heart of everything we do.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-200 min-h-[160px]"
                variants={slideInUp}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-2xl font-bold text-brand-red mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


            {/* Summary Section */}
            <section className="py-12 bg-brand-red text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                <div className="text-center">
                  <p className="text-xl text-white/90 mx-auto">
                    For enquiries about these properties, please contact us on +971 50 737 9111.
                  </p>
                </div>
                </motion.div>
              </div>
            </section>
    </Layout>
  );
}
