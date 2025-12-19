import { Layout } from "@/components/Layout";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { slideInUp, staggerContainer } from "@/lib/animations";

export default function Properties() {
  const propertyImages = {
    tower: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop",
    apartments: "https://images.unsplash.com/photo-1512453150886-d6a135e9ca15?w=600&h=400&fit=crop",
    villa: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    commercial: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&fit=crop",
    industrial: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
  };

  const cities = [
    {
      name: "Abu Dhabi",
      description: "The capital city of the UAE we offer a wide range of properties for lease on both short-term and long-term basis including Residential Commercial & Industrial properties",
      properties: [
        {
          id: "ad-1",
          name: "Al Ameerah Tower",
          location: "Raha-beach area",
          type: "Residential",
          description: "located in the prime location in Raha-beach area Offering stunning views and top-notch amenities. Available with modern finishes, sea views, and access to amenities like pools, gym, children play area etc.",
          image: propertyImages.tower,
        },
        {
          id: "ad-2",
          name: "Khalifa City Apartments",
          location: "Khalifa city apartments",
          type: "Residential",
          description: "including 2 and 3bedroom options with al amenities",
          image: propertyImages.apartments,
        },
        {
          id: "ad-3",
          name: "Al Saada Tower",
          location: "Ma'mourah Al Nahayan",
          type: "Commercial",
          description: "Located in Ma'mourah Al Nahayan, offering a wide range of office and commercial spaces in the heart of Abu Dhabi city, catering to diverse business needs. includes Luxury offices-working offices, commercial spaces and showrooms",
          image: propertyImages.commercial,
        },
        {
          id: "ad-4",
          name: "DHHG Building",
          location: "Musaffah M44",
          type: "Industrial",
          description: "Located in Musaffah M44, thriving industrial and commercial Hub offering small and large ware houses for logistics and distribution. Retail spaces for business looking to establish a presence in the area. Labor accommodation options for workers and labors.",
          image: propertyImages.industrial,
        },
        {
          id: "ad-5",
          name: "HS Building",
          location: "Madinat Riyad",
          type: "Commercial",
          description: "Located in Madinat Riyad offering Retail units and showrooms",
          image: propertyImages.commercial,
        },
        {
          id: "ad-6",
          name: "HS-Buildings",
          location: "Musaffah M44",
          type: "Industrial",
          description: "Located in Musaffah M44, thriving industrial and commercial Hub offering small and large ware houses for logistics and distribution. Retail spaces for business looking to establish a presence in the area. Labor accommodation options for workers and labors and show rooms for varies leading brands.",
          image: propertyImages.industrial,
        },
        {
          id: "ad-7",
          name: "HS-Investments",
          location: "ICAD-3",
          type: "Industrial",
          description: "Located in ICAD-3 upcoming industrial hub offering various properties for lease like large and small ware houses, Industrial Lands, Land for marine activities sharing with sea, like yacht stations, Drydocking and maintenance Etc.",
          image: propertyImages.industrial,
        },
      ],
    },
    {
      name: "Al Ain",
      description: "Eastern Region- Emirate of Abu Dhabi",
      properties: [
        {
          id: "aa-1",
          name: "HS Buildings (3A,3B,3C,3D)",
          location: "Al Ain, industrial Area near to Bawadi mall",
          type: "Industrial",
          description: "offering Retail units, ware houses.",
          image: propertyImages.industrial,
        },
        {
          id: "aa-2",
          name: "HS Building (No:9)",
          location: "industrial area",
          type: "Industrial",
          description: "with Labor Accommodation and ware houses",
          image: propertyImages.industrial,
        },
        {
          id: "aa-3",
          name: "HS Building (No:7)",
          location: "industrial area",
          type: "Industrial",
          description: "with Labor Accommodation",
          image: propertyImages.industrial,
        },
        {
          id: "aa-4",
          name: "HS Building (No:17A)",
          location: "industrial area",
          type: "Industrial",
          description: "with Labor Accommodation, Ware houses, showrooms and retail units",
          image: propertyImages.industrial,
        },
        {
          id: "aa-5",
          name: "HS Building (No:25C)",
          location: "industrial area",
          type: "Industrial",
          description: "with Labor Accommodation.",
          image: propertyImages.industrial,
        },
        {
          id: "aa-6",
          name: "Sheikh Hamad Building",
          location: "Al Ain, Al Saniya",
          type: "Mixed-Use",
          description: "with Offices, Accommodation and retail units.",
          image: propertyImages.commercial,
        },
        {
          id: "aa-7",
          name: "Al Jimi Villas (No:89,115,117,119)",
          location: "close to AL Jimi Mall",
          type: "Residential",
          description: "includes staff and family accommodations",
          image: propertyImages.villa,
        },
        {
          id: "aa-8",
          name: "Al Jimi Villas (No:121,123,125,127,129)",
          location: "close to AL Jimi Mall",
          type: "Residential",
          description: "includes staff and family accommodations",
          image: propertyImages.villa,
        },
        {
          id: "aa-9",
          name: "Awad Al Kuwaiti Villa (No:118)",
          location: "close to AL Jimi Mall",
          type: "Residential",
          description: "includes staff and family accommodations",
          image: propertyImages.villa,
        },
        {
          id: "aa-10",
          name: "Falah Al Otaibi Villa (No:48,50)",
          location: "town center",
          type: "Residential",
          description: "includes staff and family accommodations",
          image: propertyImages.villa,
        },
        {
          id: "aa-11",
          name: "Nehayan bin Hamad Villa (No:36)",
          location: "Oud AL Thoba Town Center",
          type: "Residential",
          description: "includes staff and family accommodations",
          image: propertyImages.villa,
        },
        {
          id: "aa-12",
          name: "Al Amerah Complex (No:58)",
          location: "AL Amerah",
          type: "Commercial",
          description: "includes retail units",
          image: propertyImages.commercial,
        },
      ],
    },
    {
      name: "Dubai",
      description: "Dubai [ logo NR ] & fotos",
      properties: [
        {
          id: "db-1",
          name: "NR Building",
          location: "Al Muhaisna Dubai",
          type: "Residential",
          description: "includes residential flats with G+4 floors",
          image: propertyImages.apartments,
        },
        {
          id: "db-2",
          name: "NR Building",
          location: "AL Warqa-1 Dubai",
          type: "Mixed-Use",
          description: "includes Residential apartments and Retail units with G+6+Roof",
          image: propertyImages.apartments,
        },
        {
          id: "db-3",
          name: "NR Building",
          location: "Al Warqa -1 Dubai",
          type: "Residential",
          description: "includes residential apartments G+6+Roof Floors",
          image: propertyImages.apartments,
        },
        {
          id: "db-4",
          name: "NR Building",
          location: "Al Warsan- Dubai Al Warsan-4",
          type: "Residential",
          description: "includes residential apartments G+4 Floors",
          image: propertyImages.apartments,
        },
        {
          id: "db-5",
          name: "The ICON Tower",
          location: "Dubai Silicon Oasis",
          type: "Commercial",
          description: "includes Commercial offices and Retail Units.G+8 Floors",
          image: propertyImages.commercial,
        },
      ],
    },
  ];

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              PROPERTIES OWNED AND MANAGED
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="text-4xl font-bold mb-2">60+</div>
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
