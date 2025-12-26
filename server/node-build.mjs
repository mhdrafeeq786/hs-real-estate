import path from "path";
import "dotenv/config";
import * as express from "express";
import express__default from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
const handleDemo = (req, res) => {
  const response = {
    message: "Hello from Express server"
  };
  res.status(200).json(response);
};
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const isSupabaseConfigured = supabaseUrl && supabaseServiceKey && supabaseUrl !== "your_supabase_project_url" && supabaseServiceKey !== "your_supabase_service_role_key";
if (!isSupabaseConfigured) {
  console.warn("⚠️  Supabase not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env file.");
}
const supabase = isSupabaseConfigured ? createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
}) : null;
const router = express__default.Router();
router.get("/properties/:area", async (req, res) => {
  try {
    if (!supabase) {
      return res.status(503).json({
        error: "Database not configured",
        message: "Please configure Supabase environment variables"
      });
    }
    const { area } = req.params;
    const cityMap = {
      "dubai": "dubai",
      "abu-dhabi": "abu-dhabi",
      "al-ain": "al-ain"
    };
    const city = cityMap[area];
    if (!city) {
      return res.status(400).json({ error: "Invalid area" });
    }
    const { data: properties, error } = await supabase.from("properties").select("*").eq("city", city).order("created_at", { ascending: false });
    if (error) {
      throw error;
    }
    res.json(properties || []);
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ error: "Failed to fetch properties" });
  }
});
router.post("/properties/:area", async (req, res) => {
  try {
    if (!supabase) {
      return res.status(503).json({
        error: "Database not configured",
        message: "Please configure Supabase environment variables"
      });
    }
    const { area } = req.params;
    const propertyData = req.body;
    const cityMap = {
      "dubai": "dubai",
      "abu-dhabi": "abu-dhabi",
      "al-ain": "al-ain"
    };
    const city = cityMap[area];
    if (!city) {
      return res.status(400).json({ error: "Invalid area" });
    }
    const newProperty = {
      title: propertyData.title,
      price: propertyData.price,
      image: propertyData.image,
      beds: propertyData.beds,
      baths: propertyData.baths,
      size: propertyData.size,
      area: propertyData.area,
      city
    };
    const { data, error } = await supabase.from("properties").insert([newProperty]).select().single();
    if (error) {
      throw error;
    }
    res.json({ success: true, property: data });
  } catch (error) {
    console.error("Error adding property:", error);
    res.status(500).json({ error: "Failed to add property" });
  }
});
router.post("/webhook/properties", async (req, res) => {
  try {
    if (!supabase) {
      return res.status(503).json({
        error: "Database not configured",
        message: "Please configure Supabase environment variables"
      });
    }
    const { area, properties: newProperties } = req.body;
    const cityMap = {
      "dubai": "dubai",
      "abu-dhabi": "abu-dhabi",
      "al-ain": "al-ain"
    };
    const city = cityMap[area];
    if (!city) {
      return res.status(400).json({ error: "Invalid area" });
    }
    const propertiesToInsert = newProperties.map((prop) => ({
      title: prop.title,
      price: prop.price,
      image: prop.image,
      beds: prop.beds,
      baths: prop.baths,
      size: prop.size,
      area: prop.area,
      city
    }));
    const { data, error } = await supabase.from("properties").insert(propertiesToInsert).select();
    if (error) {
      throw error;
    }
    res.json({
      success: true,
      message: `Added ${data?.length || 0} properties to ${area}`,
      properties: data
    });
  } catch (error) {
    console.error("Error updating properties via webhook:", error);
    res.status(500).json({ error: "Failed to update properties" });
  }
});
function createServer() {
  const app2 = express__default();
  app2.use(cors());
  app2.use(express__default.json());
  app2.use(express__default.urlencoded({ extended: true }));
  app2.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });
  app2.get("/api/demo", handleDemo);
  app2.use("/api", router);
  return app2;
}
const app = createServer();
const port = process.env.PORT || 3e3;
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");
app.use(express.static(distPath));
app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});
app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});
process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
//# sourceMappingURL=node-build.mjs.map
