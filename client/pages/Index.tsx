import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { ArrowRight, CheckCircle2, Home, Building2, Wrench, Users } from "lucide-react";
import {
  fadeInUp,
  slideInUp,
  staggerContainer,
} from "@/lib/animations";
import cities from "@/data/cities";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section - Company Profile */}
      <section className="relative min-h-screen bg-brand-gradient text-white overflow-hidden flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: "url('/assets/landing new.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[rgba(196,23,31,0.45)] to-black/75" />
        </div>

        <div className="relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-16">
          <motion.div
            className="flex flex-col md:flex-row items-start justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left-aligned content */}
            <div className="w-full md:w-1/2 mt-4">
              <motion.div
                className="text-left bg-gradient-to-br"
                style={{ textShadow: '0 10px 30px rgba(0,0,0,0.65)', WebkitTextStroke: '0.5px rgba(0,0,0,0.12)' }}
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-black mb-3 leading-tight tracking-wider"
                  style={{ 
                    textShadow: '2px 2px 0px rgba(0,0,0,0.2), 4px 4px 0px rgba(0,0,0,0.15), 6px 6px 0px rgba(0,0,0,0.1)',
                    letterSpacing: '0.15em'
                  }}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <span className="text-brand-red" style={{ textShadow: '2px 2px 0px rgba(139,0,0,0.3), 4px 4px 0px rgba(100,0,0,0.2), 6px 6px 0px rgba(50,0,0,0.1)' }}>HOME</span>
                  <span className="mx-2 text-black" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.2), 6px 6px 0px rgba(0,0,0,0.15)' }}>SNIPER</span>
                </motion.h1>

                {/* Logo for mobile - just below HOME SNIPER */}
                {/* <div className="flex md:hidden justify-center my-8">
                  <img 
                    src="/assets/logo 3d new.PNG" 
                    alt="Home Sniper Logo" 
                    className="w-48 h-48 sm:w-64 sm:h-64 drop-shadow-2xl object-contain"
                  />
                </div> */}

                <motion.div className="mb-4" variants={fadeInUp}>
                  <span className="inline-block text-sm md:text-base px-3 py-1 bg-white/10 rounded-full text-white/90 font-semibold" style={{ textShadow: '0 4px 14px rgba(0,0,0,0.6)' }}>Trusted since 1999</span>
                </motion.div>

                <motion.p
                  className="text-lg md:text-xl text-gray-100 mb-6 max-w-xl"
                  style={{ textShadow: 'rgb(189 0 0) 0px 6px 20px' }}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Expert property management and leasing across Abu Dhabi, Al Ain and Dubai. Lease directly from owners — no middlemen.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-4 mb-6" variants={fadeInUp}>
                  <Link
                    to="/properties"
                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:opacity-95 transition-colors shadow-lg uppercase tracking-wide"
                  >
                    Explore Properties
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors uppercase tracking-wide"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </motion.div>

            </div>

            {/* Company Logo - Right Side (Desktop only) */}
            <div className="hidden md:flex items-start justify-center w-1/2 -mt-8">
              <img 
                src="/assets/logo 3d new.PNG" 
                alt="Home Sniper Logo" 
                className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] drop-shadow-2xl object-contain"
              />
            </div>

          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white">
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-brand-red">Us</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <span className="font-bold text-brand-red">Home Sniper Real Estate Gen. Cont. Sole Proprietorship L.L.C</span> is a
                leading real estate management company with a strong presence in
                Abu Dhabi, Al Ain, and Dubai, in United Arab Emirates. We
                specialize in managing our own extensive portfolio of properties
                across these regions, while also offering comprehensive
                management services to other property owners.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team of dedicated professionals combines market expertise with
                personalized service to ensure every client receives exceptional
                care and attention.
              </p>
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
                alt="Dubai - Silicon"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div> 
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-16 md:py-24 bg-gray-50">
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
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/assets/chairman.jpeg"
                alt="Chairman - HE. Nehayan Hamad Balrakkad Al Ameri"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Chairman's <span className="text-brand-red">Message</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  As the owner of Home Sniper Real Estate, I am proud to lead our organization towards delivering exceptional real estate management and leasing services. With a diverse portfolio spanning Abu Dhabi, Al Ain, and Dubai, we have built a reputation for excellence and reliability.
                </p>
                <p>
                  Our mission is not merely to manage properties, but to create lasting partnerships with our clients. We believe in transparency, professionalism, and a deep commitment to understanding each client's unique needs. Every property we manage is treated with the same care and attention we would give our own.
                </p>
                <p>
                  We remain steadfast in our dedication to setting the highest standards in the real estate industry across the UAE.
                </p>
              </div>
              <p className="mt-8 font-bold text-gray-900">
                HE. Nehayan Hamad Balrakkad Al Ameri
              </p>
              <p className="text-gray-600 text-sm">
                Founder & Chairman
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Mission & <span className="text-brand-red">Vision</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          >
            {/* Mission */}
            <motion.div
              className="bg-brand-red text-white p-8 md:p-10 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              whileHover={{ y: -8 }}
            >
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                At Home Sniper Real Estates, our mission is to deliver exceptional real estate management and leasing services that exceed our clients' expectations. We are committed to building long-term relationships, ensuring properties are managed with care and expertise, and providing tailored solutions to meet unique needs.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-gray-900 text-white p-8 md:p-10 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              whileHover={{ y: -8 }}
            >
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                Our vision is to be the leading real estate management and leasing company in the UAE, renowned for our professionalism, integrity, and customer-centric approach. We strive to maintain the highest standards of service, ensuring our clients' properties are managed with precision and care.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Service <span className="text-brand-red">We Offer</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          >
            {[
              {
                icon: Home,
                title: "Property Leasing",
                desc: "We offer a diverse portfolio of properties for lease, carefully curated to meet the needs of our tenants.",
              },
              {
                icon: Building2,
                title: "Property Management",
                desc: "Our experienced team handles all aspects of property management, ensuring properties are well-maintained and running smoothly.",
              },
              {
                icon: Wrench,
                title: "Maintenance Services",
                desc: "Our dedicated maintenance team is available 24/7 to address any issues or concerns.",
              },
              {
                icon: Users,
                title: "Tenant Support",
                desc: "We provide personalized support to our tenants, ensuring their needs are met and exceeded.",
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="w-12 h-12 text-brand-red" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits of Leasing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Benefits of <span className="text-brand-red">Leasing with Us</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          >
            {[
              "Leasing directly with owner without an intermediate",
              "Hassle-free experience",
              "Well-maintained properties",
              "Responsive maintenance team",
              "Personalized support",
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              >
                <CheckCircle2 className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why <span className="text-brand-red">Choose Us</span>?
            </h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience unparalleled comfort in your second home with us. By leasing directly from the owner, you eliminate intermediaries and enjoy:
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          >
            {[
              {
                title: "Full-fledged Services",
                desc: "Comprehensive property management services covering all aspects of leasing and maintenance.",
              },
              {
                title: "Enhanced Security",
                desc: "Top-notch security measures to protect your property and ensure peace of mind.",
              },
              {
                title: "24/7 Maintenance Team",
                desc: "Our dedicated maintenance team is available around the clock to address any concerns.",
              },
              {
                title: "Clean and Calm Atmosphere",
                desc: "Our commitment to delivering exceptional living experiences makes us the perfect choice for your home away from home.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-6 rounded-lg border border-brand-red"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-xl font-bold text-brand-red mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Properties by Area */}
      <section className="py-16 md:py-24 bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              HS <span className="text-gray-900">PROPERTIES</span>
            </h2>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Discover our extensive portfolio of properties across the UAE's most prominent cities.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          >
            {cities.slice(0, 3).map((area, idx) => {
              const firstImage = area.properties?.[0]?.image || "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop";
              const link = `/properties/${area.name.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <Link key={area.name} to={link}>
                  <motion.div
                    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col h-full min-h-[420px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="w-full flex-shrink-0" style={{ aspectRatio: '3/4', backgroundColor: '#f8fafc' }}>
                      <img src={firstImage} alt={`${area.name} properties`} className="w-full h-full object-cover object-center rounded-t-lg" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start mb-2">
                        <h3
                          className="text-2xl font-bold text-gray-900"
                          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                        >
                          {area.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">{area.description}</p>
                      <div className="mt-auto">
                        <div className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-brand-red text-brand-red font-bold rounded-lg hover:bg-brand-red hover:text-white transition-colors uppercase tracking-wider">
                          View Properties
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

            {/* Summary Section */}
      <section className="pb-12 bg-brand-red text-white">
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
