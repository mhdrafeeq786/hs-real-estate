import { supabase } from './server/lib/supabase.js';
import { promises as fs } from 'fs';
import path from 'path';

// Seed script to migrate existing JSON data to Supabase
async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    // Read existing JSON files
    const areas = ['dubai', 'abu-dhabi', 'al-ain'];

    for (const area of areas) {
      const fileName = `${area}-properties.json`;
      const filePath = path.join(process.cwd(), 'client', 'data', fileName);

      try {
        const data = await fs.readFile(filePath, 'utf8');
        const properties = JSON.parse(data);

        // Convert area name to city enum
        const cityMap: { [key: string]: string } = {
          'dubai': 'dubai',
          'abu-dhabi': 'abu-dhabi',
          'al-ain': 'al-ain'
        };

        const city = cityMap[area];

        // Prepare properties for insertion
        const propertiesToInsert = properties.map((prop: any) => ({
          title: prop.title,
          price: prop.price,
          image: prop.image,
          beds: prop.beds,
          baths: prop.baths,
          size: prop.size,
          area: prop.area,
          city: city
        }));

        // Insert properties
        const { data: insertedData, error } = await supabase
          .from('properties')
          .insert(propertiesToInsert)
          .select();

        if (error) {
          console.error(`Error inserting ${area} properties:`, error);
        } else {
          console.log(`Successfully inserted ${insertedData?.length || 0} properties for ${area}`);
        }
      } catch (error) {
        console.error(`Error reading ${fileName}:`, error);
      }
    }

    console.log('Database seeding completed!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// Run the seed function
seedDatabase();