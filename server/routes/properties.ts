import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';

const router = express.Router();

// GET /api/properties/:area - Get properties for a specific area
router.get('/properties/:area', async (req, res) => {
  try {
    const { area } = req.params;
    const fileName = `${area}-properties.json`;
    const filePath = path.join(process.cwd(), 'client', 'data', fileName);

    const data = await fs.readFile(filePath, 'utf8');
    const properties = JSON.parse(data);

    res.json(properties);
  } catch (error) {
    res.status(404).json({ error: 'Area not found' });
  }
});

// POST /api/properties/:area - Add new property to an area
router.post('/properties/:area', async (req, res) => {
  try {
    const { area } = req.params;
    const newProperty = req.body;

    const fileName = `${area}-properties.json`;
    const filePath = path.join(process.cwd(), 'client', 'data', fileName);

    // Read existing properties
    let properties = [];
    try {
      const data = await fs.readFile(filePath, 'utf8');
      properties = JSON.parse(data);
    } catch (error) {
      // File doesn't exist, start with empty array
    }

    // Add new property with auto-incremented ID
    const newId = properties.length > 0 ? Math.max(...properties.map(p => p.id)) + 1 : 1;
    newProperty.id = newId;
    properties.push(newProperty);

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(properties, null, 2));

    res.json({ success: true, property: newProperty });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add property' });
  }
});

// POST /api/webhook/properties - Webhook endpoint for third-party updates
router.post('/webhook/properties', async (req, res) => {
  try {
    const { area, properties: newProperties } = req.body;

    const fileName = `${area}-properties.json`;
    const filePath = path.join(process.cwd(), 'client', 'data', fileName);

    // Read existing properties
    let existingProperties = [];
    try {
      const data = await fs.readFile(filePath, 'utf8');
      existingProperties = JSON.parse(data);
    } catch (error) {
      // File doesn't exist
    }

    // Merge new properties
    const mergedProperties = [...existingProperties, ...newProperties];

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(mergedProperties, null, 2));

    res.json({ success: true, message: `Added ${newProperties.length} properties to ${area}` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update properties' });
  }
});

export default router;