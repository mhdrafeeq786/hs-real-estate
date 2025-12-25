import express from 'express';
import { supabase, Property } from '../lib/supabase.js';

const router = express.Router();

// GET /api/properties/:area - Get properties for a specific area
router.get('/properties/:area', async (req, res) => {
  try {
    // Check if Supabase is configured
    if (!supabase) {
      return res.status(503).json({
        error: 'Database not configured',
        message: 'Please configure Supabase environment variables'
      });
    }

    const { area } = req.params;

    // Convert area name to city enum
    const cityMap: { [key: string]: Property['city'] } = {
      'dubai': 'dubai',
      'abu-dhabi': 'abu-dhabi',
      'al-ain': 'al-ain'
    };

    const city = cityMap[area];
    if (!city) {
      return res.status(400).json({ error: 'Invalid area' });
    }

    const { data: properties, error } = await supabase
      .from('properties')
      .select('*')
      .eq('city', city)
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    res.json(properties || []);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

// POST /api/properties/:area - Add new property to an area
router.post('/properties/:area', async (req, res) => {
  try {
    // Check if Supabase is configured
    if (!supabase) {
      return res.status(503).json({
        error: 'Database not configured',
        message: 'Please configure Supabase environment variables'
      });
    }

    const { area } = req.params;
    const propertyData = req.body;

    // Convert area name to city enum
    const cityMap: { [key: string]: Property['city'] } = {
      'dubai': 'dubai',
      'abu-dhabi': 'abu-dhabi',
      'al-ain': 'al-ain'
    };

    const city = cityMap[area];
    if (!city) {
      return res.status(400).json({ error: 'Invalid area' });
    }

    // Prepare property data
    const newProperty: Omit<Property, 'id' | 'created_at' | 'updated_at'> = {
      title: propertyData.title,
      price: propertyData.price,
      image: propertyData.image,
      beds: propertyData.beds,
      baths: propertyData.baths,
      size: propertyData.size,
      area: propertyData.area,
      city: city
    };

    const { data, error } = await supabase
      .from('properties')
      .insert([newProperty])
      .select()
      .single();

    if (error) {
      throw error;
    }

    res.json({ success: true, property: data });
  } catch (error) {
    console.error('Error adding property:', error);
    res.status(500).json({ error: 'Failed to add property' });
  }
});

// POST /api/webhook/properties - Webhook endpoint for third-party updates
router.post('/webhook/properties', async (req, res) => {
  try {
    // Check if Supabase is configured
    if (!supabase) {
      return res.status(503).json({
        error: 'Database not configured',
        message: 'Please configure Supabase environment variables'
      });
    }

    const { area, properties: newProperties } = req.body;

    // Convert area name to city enum
    const cityMap: { [key: string]: Property['city'] } = {
      'dubai': 'dubai',
      'abu-dhabi': 'abu-dhabi',
      'al-ain': 'al-ain'
    };

    const city = cityMap[area];
    if (!city) {
      return res.status(400).json({ error: 'Invalid area' });
    }

    // Prepare properties for insertion
    const propertiesToInsert = newProperties.map((prop: any) => ({
      title: prop.title,
      price: prop.price,
      image: prop.image,
      beds: prop.beds,
      baths: prop.baths,
      size: prop.size,
      area: prop.area,
      city: city
    }));

    const { data, error } = await supabase
      .from('properties')
      .insert(propertiesToInsert)
      .select();

    if (error) {
      throw error;
    }

    res.json({
      success: true,
      message: `Added ${data?.length || 0} properties to ${area}`,
      properties: data
    });
  } catch (error) {
    console.error('Error updating properties via webhook:', error);
    res.status(500).json({ error: 'Failed to update properties' });
  }
});

export default router;