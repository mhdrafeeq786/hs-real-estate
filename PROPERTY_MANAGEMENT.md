# Property Data Management

This project now uses **Supabase (PostgreSQL)** for property data management, providing a robust database solution with built-in REST API, Dashboard UI, and optional authentication.

## Database Setup

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be set up (this may take a few minutes)

### 2. Configure Environment Variables
Update your `.env` file with your Supabase credentials:

```env
# Client-side (public)
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Server-side (keep secret!)
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Run Database Migration
Execute the SQL migration in your Supabase dashboard:

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of `supabase-migration.sql`
4. Run the migration

### 4. Seed Initial Data
Run the seed script to migrate existing JSON data to Supabase:

```bash
node scripts/seed-database.js
```

## API Endpoints

The server now provides REST API endpoints powered by Supabase:

### GET Properties
```
GET /api/properties/:area
```
Returns all properties for a specific area.

**Areas:** `dubai`, `abu-dhabi`, `al-ain`

### POST New Property
```
POST /api/properties/:area
Content-Type: application/json

{
  "title": "New Property Title",
  "price": "AED XXX,XXX/year",
  "image": "https://image-url.com/image.jpg",
  "beds": 3,
  "baths": 2,
  "size": "1,500 sqft",
  "area": "Area Name"
}
```

### Webhook for Third-Party Updates
```
POST /api/webhook/properties
Content-Type: application/json

{
  "area": "dubai",
  "properties": [
    {
      "title": "Property from External Source",
      "price": "AED 200,000/year",
      "image": "https://external-image.com/image.jpg",
      "beds": 2,
      "baths": 1,
      "size": "1,000 sqft",
      "area": "Business Bay"
    }
  ]
}
```

## Supabase Dashboard

### Managing Properties via Dashboard
1. Go to your Supabase project dashboard
2. Navigate to **Table Editor**
3. Select the `properties` table
4. Use the built-in editor to:
   - View all properties
   - Add new properties
   - Edit existing properties
   - Delete properties
   - Filter and search

### Real-time Updates
The dashboard provides real-time updates, so any changes made through the API or dashboard will be immediately visible.

## Third-Party Integration

### API Integration
```javascript
// Example: Fetching from a real estate API
const fetchPropertiesFromAPI = async () => {
  try {
    const response = await fetch('https://third-party-api.com/properties');
    const data = await response.json();

    // Transform data to match your format
    const transformedProperties = data.properties.map(property => ({
      title: property.name,
      price: `AED ${property.price}/year`,
      image: property.images[0],
      beds: property.bedrooms,
      baths: property.bathrooms,
      size: `${property.area} sqft`,
      area: property.location
    }));

    // Send to your webhook
    await fetch('https://your-domain.com/api/webhook/properties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        area: 'dubai', // or dynamically determine
        properties: transformedProperties
      })
    });
  } catch (error) {
    console.error('Failed to fetch properties:', error);
  }
};
```

### Zapier/IFTTT Integration
Set up automated workflows to sync data from third-party services directly to your Supabase database.

## Authentication (Optional)

If you want to add authentication:

1. Enable authentication in your Supabase project
2. Configure authentication providers (email, Google, etc.)
3. Update RLS policies to restrict access as needed
4. Add authentication to your frontend if required

## Benefits of Supabase Integration

- **Scalability**: Handle thousands of properties efficiently
- **Real-time**: Live updates across all connected clients
- **Security**: Built-in authentication and authorization
- **Dashboard**: User-friendly interface for data management
- **API**: Automatic REST API generation
- **Backup**: Automatic backups and point-in-time recovery
- **Performance**: Optimized queries with indexing

## Migration from JSON Files

The system has been migrated from static JSON files to a dynamic Supabase database. The frontend now fetches data via API calls, providing better performance and real-time capabilities.

## Monitoring and Maintenance

- **Logs**: Check Supabase dashboard for API usage and errors
- **Performance**: Monitor query performance in the dashboard
- **Backups**: Automatic daily backups included
- **Analytics**: Built-in analytics for database usage