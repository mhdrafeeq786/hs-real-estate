import { Layout } from "@/components/Layout";
import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cities from "@/data/cities";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface Property {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  area: string;
  type?: string;
}

export default function DubaiProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [activeTitle, setActiveTitle] = useState<string>("");

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
          type: (p as any).type || undefined,
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
      <section className="bg-black text-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-red">
            Properties in Dubai
          </h1>
          <p className="text-lg text-gray-100">
            Explore our premium collection of residential properties in Dubai
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 md:py-24 bg-gray-50">
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
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                <div className="w-full flex-shrink-0" style={{ aspectRatio: '3/4', backgroundColor: '#f8fafc' }}>
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover object-center rounded-t-lg" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.area}
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">
                        {property.title}
                      </h3>
                      {property.type && (
                        <span
                          className={`text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                            property.type.toLowerCase().includes('residential')
                              ? 'bg-blue-100 text-blue-800'
                              : property.type.toLowerCase().includes('commercial')
                              ? 'bg-green-100 text-green-800'
                              : property.type.toLowerCase().includes('industrial')
                              ? 'bg-gray-100 text-gray-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {property.type}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{property.description}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="text-xl font-bold text-brand-red">{property.price}</div>
                      <div>
                        <button
                          onClick={() => {
                            const imgs = (property as any).images ?? [property.image];
                            setActiveImages(imgs);
                            setActiveTitle(property.title);
                            setIsOpen(true);
                          }}
                          className="inline-flex items-center px-4 py-2 bg-brand-red text-white font-semibold rounded hover:opacity-90 transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* Image modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md w-full h-[85vh] max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle>{activeTitle}</DialogTitle>
            <DialogDescription>Property images</DialogDescription>
          </DialogHeader>

          <div className="relative mt-4 flex items-center justify-center h-full">
            <Carousel>
              <CarouselContent>
                {activeImages.map((src, idx) => (
                  <CarouselItem key={idx}>
                    <div style={{ aspectRatio: '3/4', width: '100%', maxWidth: 420, margin: '0 auto', backgroundColor: '#f8fafc' }}>
                      <img src={src} alt={`${activeTitle} ${idx + 1}`} className="w-full h-full object-contain rounded" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="!left-4 !z-20 bg-white/90 hover:bg-white cursor-pointer shadow-lg text-gray-800" />
              <CarouselNext className="!right-4 !z-20 bg-white/90 hover:bg-white cursor-pointer shadow-lg text-gray-800" />
            </Carousel>
          </div>

          <div className="mt-6 text-right">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
