import { Layout } from "@/components/Layout";
import { MapPin } from "lucide-react";

export default function DubaiProperties() {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Downtown Dubai",
      price: "AED 250,000/year",
      image:
        "https://images.unsplash.com/photo-1512453150886-d6a135e9ca15?w=500&h=400&fit=crop",
      beds: 2,
      baths: 2,
      size: "1,200 sqft",
      area: "Downtown Dubai",
    },
    {
      id: 2,
      title: "Spacious Family Home in Dubai",
      price: "AED 350,000/year",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
      beds: 3,
      baths: 2,
      size: "1,800 sqft",
      area: "Dubai Marina",
    },
    {
      id: 3,
      title: "Luxury Penthouse with Views",
      price: "AED 600,000/year",
      image:
        "https://images.unsplash.com/photo-1600573458265-adf1a8d8701d?w=500&h=400&fit=crop",
      beds: 3,
      baths: 3,
      size: "2,500 sqft",
      area: "Palm Jumeirah",
    },
    {
      id: 4,
      title: "Studio near Beach",
      price: "AED 80,000/year",
      image:
        "https://images.unsplash.com/photo-1600576621521-40ca62278f1a?w=500&h=400&fit=crop",
      beds: 1,
      baths: 1,
      size: "600 sqft",
      area: "Jumeirah Beach",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Properties in Dubai
          </h1>
          <p className="text-lg text-blue-100">
            Explore our premium collection of residential properties in Dubai
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Found {properties.length} properties available for leasing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.area}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {property.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex gap-4">
                      <span>{property.beds} Beds</span>
                      <span>{property.baths} Baths</span>
                      <span>{property.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-600">
                      {property.price}
                    </div>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
