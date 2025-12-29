import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import propertiesRouter from "./routes/properties";
import { handleSendEmail } from "./routes/send-email";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Send email from contact form (server-side, keep SMTP credentials private)
  app.post('/api/send-email', handleSendEmail);

  // Properties API routes
  app.use('/api', propertiesRouter);

  return app;
}
