# Property Data Management

This project uses JSON files to manage property data, allowing you to add new properties without modifying the code.

## How to Add New Properties

### 1. Manual JSON Updates
Property data is stored in the `client/data/` directory:
- `abu-dhabi-properties.json` - Properties in Abu Dhabi
- `al-ain-properties.json` - Properties in Al Ain
- `dubai-properties.json` - Properties in Dubai

### 2. API Integration
The server now includes API endpoints for dynamic property management:

#### GET Properties
```
GET /api/properties/:area
```
Returns all properties for a specific area.

#### POST New Property
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

#### Webhook for Third-Party Updates
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

## Integration with Third-Party Services

### Best Approaches for Adding New Areas/Properties from External Sources:

### 1. **API Integration (Recommended)**
- **Pros**: Real-time updates, automated, scalable
- **Cons**: Requires development work
- **Implementation**:
  - Create scheduled jobs to fetch data from third-party APIs
  - Use webhooks to receive real-time updates
  - Implement authentication and rate limiting

### 2. **Webhook Integration**
- **Pros**: Real-time, event-driven, low latency
- **Cons**: Requires third-party service to support webhooks
- **Implementation**:
  - Expose `/api/webhook/properties` endpoint
  - Configure third-party service to send POST requests
  - Validate incoming data and update JSON files

### 3. **Database Integration**
- **Pros**: Better performance, advanced querying, relationships
- **Cons**: More complex setup
- **Implementation**:
  - Add database (PostgreSQL, MongoDB, etc.)
  - Create migration scripts
  - Update API endpoints to use database instead of JSON files

### 4. **Admin Dashboard**
- **Pros**: User-friendly, controlled access
- **Cons**: Additional development
- **Implementation**:
  - Create admin interface for property management
  - Add authentication and authorization
  - Allow bulk imports from CSV/Excel

### 5. **Zapier/IFTTT Integration**
- **Pros**: No-code solution, quick setup
- **Cons**: Limited customization, potential costs
- **Implementation**:
  - Use Zapier to connect third-party services
  - Set up zaps to POST data to your webhook endpoint
  - Automate data transformation

## Recommended Implementation Strategy

### Phase 1: Webhook Integration (Quick Win)
1. Set up webhook endpoint (already done)
2. Configure third-party service to send data
3. Add data validation and error handling

### Phase 2: Admin Interface (User-Friendly)
1. Create simple admin page for manual property entry
2. Add bulk import functionality
3. Implement basic authentication

### Phase 3: Full API Integration (Scalable)
1. Migrate to database
2. Implement comprehensive API
3. Add advanced features (search, filtering, analytics)

## Example Third-Party Integration Code

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

## Security Considerations

1. **API Keys**: Store securely, use environment variables
2. **Rate Limiting**: Implement to prevent abuse
3. **Data Validation**: Validate incoming data structure
4. **Authentication**: Use JWT or API keys for webhook authentication
5. **HTTPS**: Ensure all communications are encrypted

## Monitoring and Maintenance

1. **Logging**: Log all API calls and webhook events
2. **Error Handling**: Implement proper error responses
3. **Backup**: Regular backup of JSON files/database
4. **Testing**: Test integrations thoroughly before production

This setup provides flexibility for both manual updates and automated third-party integrations.