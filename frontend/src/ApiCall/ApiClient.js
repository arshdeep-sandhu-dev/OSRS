// src/api/ApiClient.js

export function ApiClient() {
  //const API_BASE_URL = "/api";
  const API_BASE_URL = "http://localhost:8080/api";


  async function GET(endpoint) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json(); // will return your backend's JSON as-is
  }

  async function POST(items, endpoint) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  }
  async function DELETE(endpoint) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return await response.json();
  }

  async function PUT(endpoint, body) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  }

  
  return { GET, POST, DELETE, PUT };
}

