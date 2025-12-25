import { Layout } from "@/components/Layout";
import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import cities from "@/data/cities";

interface Property {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  area: string;
}

export default function DubaiProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const city = cities.find((c) => c.name === "Dubai");
    if (city) {
      setProperties(
        city.properties.map((p, idx) => ({
          id: idx,
          title: p.name,
          price: "",
          image: p.image,
            description: p.description || "",
          area: p.location,
        }))
      );
      setError(null);
    } else {
      setError("No data available for Dubai");
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading properties...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-brand-red text-lg">Error: {error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-red">
            Properties in Dubai
          </h1>
          <p className="text-lg text-gray-100">
            Explore our premium collection of residential properties in Dubai
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Found {properties.length} properties available for leasing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover flex-shrink-0"
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.area}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{property.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-brand-red">
                        {property.price}
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-brand-red text-white font-semibold rounded hover:opacity-90 transition-colors">
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
