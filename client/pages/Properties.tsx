import { Layout } from "@/components/Layout";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { slideInUp, staggerContainer } from "@/lib/animations";

import cities from "@/data/cities";

export default function Properties() {

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Residential":
        return "bg-blue-100 text-blue-800";
      case "Commercial":
        return "bg-green-100 text-green-800";
      case "Industrial":
        return "bg-orange-100 text-orange-800";
      case "Mixed-Use":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-brand-red">
              Properties Owned and Managed
            </h1>
            <p className="text-xl text-gray-300">
              Explore our comprehensive portfolio across Abu Dhabi, Al Ain, and Dubai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Properties by City */}
      {cities.map((city, cityIdx) => (
        <section
          key={city.name}
          className={`py-16 md:py-24 ${cityIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* City Header */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {city.name}
              </h2>
              <p className="text-xl text-gray-600">{city.description}</p>
            </motion.div>

            {/* Properties Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {city.properties.map((property) => (
                <motion.div
                  key={property.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  {/* Property Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <motion.img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Property Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 flex-1">
                        {property.name}
                      </h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-2 ${getTypeColor(property.type)}`}>
                        {property.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <p className="text-sm">{property.location}</p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {property.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Summary Section */}
      <section className="py-16 md:py-24 bg-brand-gradient text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Portfolio
            </h2>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto mt-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={slideInUp}>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-red-100">Properties</p>
              </motion.div>
              <motion.div variants={slideInUp}>
                <div className="text-4xl font-bold mb-2">3</div>
                <p className="text-red-100">Major Cities</p>
              </motion.div>
              <motion.div variants={slideInUp}>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-red-100">Owned & Managed</p>
              </motion.div>
            </motion.div>
            <p className="text-lg text-red-100 mt-12 max-w-2xl mx-auto">
              From residential apartments and luxury villas to commercial offices and industrial facilities, we maintain the highest standards across our entire portfolio.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
