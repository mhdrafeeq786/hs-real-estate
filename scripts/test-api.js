// Test script for Supabase API endpoints
// Run with: node scripts/test-api.js

const testAPI = async () => {
  // Use environment override or fall back to the dev server URL Vite started on
  const baseURL = process.env.DEV_SERVER_URL || 'http://localhost:8081'; // adjust if your dev server runs on a different port

  console.log('Testing Supabase API endpoints...\n');

  try {
    // Test GET properties for Dubai
    console.log('1. Testing GET /api/properties/dubai');
    const getResponse = await fetch(`${baseURL}/api/properties/dubai`);
    if (getResponse.ok) {
      const properties = await getResponse.json();
      console.log(`✅ Successfully fetched ${properties.length} properties from Dubai`);
    } else {
      console.log('❌ Failed to fetch properties:', getResponse.status);
    }

    // Test POST new property
    console.log('\n2. Testing POST /api/properties/dubai');
    const testProperty = {
      title: "Test Property from API",
      price: "AED 150,000/year",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop",
      beds: 2,
      baths: 1,
      size: "800 sqft",
      area: "Test Area"
    };

    const postResponse = await fetch(`${baseURL}/api/properties/dubai`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testProperty)
    });

    if (postResponse.ok) {
      const result = await postResponse.json();
      console.log('✅ Successfully added new property:', result.property.title);
    } else {
      console.log('❌ Failed to add property:', postResponse.status);
    }

    // Test webhook endpoint
    console.log('\n3. Testing POST /api/webhook/properties');
    const webhookData = {
      area: "dubai",
      properties: [
        {
          title: "Webhook Test Property",
          price: "AED 200,000/year",
          image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=400&fit=crop",
          beds: 3,
          baths: 2,
          size: "1,200 sqft",
          area: "Webhook Area"
        }
      ]
    };

    const webhookResponse = await fetch(`${baseURL}/api/webhook/properties`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookData)
    });

    if (webhookResponse.ok) {
      const result = await webhookResponse.json();
      console.log(`✅ Webhook successfully added ${result.properties?.length || 0} properties`);
    } else {
      console.log('❌ Webhook failed:', webhookResponse.status);
    }

  } catch (error) {
    console.error('❌ Test failed:');
    console.error(error);
  }
};

// Run the test
testAPI();