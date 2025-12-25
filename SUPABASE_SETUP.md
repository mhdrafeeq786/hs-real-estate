# Supabase Setup Guide

This guide will help you set up Supabase for your Home Sniper Real Estate project.

## Prerequisites

- Node.js installed
- A Supabase account (sign up at [supabase.com](https://supabase.com))

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New project"
3. Fill in your project details:
   - **Name**: Home Sniper Real Estate
   - **Database Password**: Choose a strong password
   - **Region**: Select the closest region to your users
4. Click "Create new project"
5. Wait for the project to be fully set up (this may take a few minutes)

## Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL**: `https://your-project-id.supabase.co`
   - **anon/public key**: The public anonymous key
   - **service_role key**: The secret service role key (keep this secure!)

## Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_URL=https://your-project-id.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

## Step 4: Set Up Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the entire contents of `supabase-migration.sql`
3. Paste it into the SQL Editor
4. Click "Run" to execute the migration

This will create:
- The `properties` table with all necessary columns
- Indexes for performance
- Row Level Security policies
- Triggers for automatic timestamp updates

## Step 5: Seed Initial Data

Run the seed script to migrate your existing JSON data to Supabase:

```bash
pnpm seed
```

This will:
- Read your existing JSON files (`dubai-properties.json`, `abu-dhabi-properties.json`, `al-ain-properties.json`)
- Insert all properties into the Supabase database
- Preserve all existing property data

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Test the API endpoints:
   ```bash
   node scripts/test-api.js
   ```

3. Visit your website and check that properties load correctly from the database

## Step 7: Using the Supabase Dashboard

### Managing Properties
1. Go to your Supabase dashboard
2. Navigate to **Table Editor**
3. Select the `properties` table
4. You can now:
   - View all properties
   - Add new properties manually
   - Edit existing properties
   - Delete properties
   - Filter and search properties

### Real-time Features
- Changes made in the dashboard are immediately reflected on your website
- The dashboard shows live data from your database

## API Endpoints

Your application now provides these REST API endpoints:

### Get Properties
```
GET /api/properties/dubai
GET /api/properties/abu-dhabi
GET /api/properties/al-ain
```

### Add New Property
```
POST /api/properties/{area}
Content-Type: application/json

{
  "title": "Luxury Villa",
  "price": "AED 500,000/year",
  "image": "https://example.com/image.jpg",
  "beds": 4,
  "baths": 3,
  "size": "2,500 sqft",
  "area": "Palm Jumeirah"
}
```

### Webhook for Third-Party Integration
```
POST /api/webhook/properties
Content-Type: application/json

{
  "area": "dubai",
  "properties": [...]
}
```

## Optional: Enable Authentication

If you want to restrict access to property management:

1. In Supabase dashboard, go to **Authentication** → **Settings**
2. Enable the authentication providers you want (Email, Google, etc.)
3. Update the Row Level Security policies in the SQL Editor if needed

## Troubleshooting

### Database Connection Issues
- Check that your environment variables are correct
- Ensure your Supabase project is active
- Verify that the service role key has the necessary permissions

### Migration Issues
- Make sure the `properties` table doesn't already exist
- Check the SQL Editor for any error messages
- Try running the migration again

### Data Seeding Issues
- Ensure your JSON files exist in `client/data/`
- Check that the JSON format is valid
- Look for any duplicate data issues

## Next Steps

1. **Test thoroughly**: Make sure all properties display correctly
2. **Set up monitoring**: Check Supabase dashboard for API usage
3. **Configure backups**: Supabase provides automatic backups
4. **Add authentication**: If you need user management features
5. **Integrate with third parties**: Use the webhook endpoint for external data sources

## Support

- Supabase Documentation: [supabase.com/docs](https://supabase.com/docs)
- Check the PROPERTY_MANAGEMENT.md file for detailed API documentation