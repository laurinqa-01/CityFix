const SUPABASE_URL = "https://hxdumbnctdonmrzfhixn.supabase.co"; 
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4ZHVtYm5jdGRvbm1yemZoaXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwMTUyNTAsImV4cCI6MjA5NTU5MTI1MH0.A7xOOmFeRUXWmFh53DheFjIRAp_7ObFtH-Oiz5CyJ7I";

async function getReports() {
  const url = `${SUPABASE_URL}/rest/v1/reports`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en el motor de conexión reportEngine:", error.message);
    throw error;
  }
}

// Exportación clásica de Node
module.exports = { getReports };