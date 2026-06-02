// Importación clásica de Node
const { getReports } = require('./reportEngine.js');

jest.setTimeout(10000);

describe('Pruebas de Integración E2E Live Network — CityFix', () => {
  
  test('Debe conectar con Supabase y certificar la estructura de los datos', async () => {
    const reports = await getReports();

    expect(Array.isArray(reports)).toBe(true);
    expect(reports.length).toBeGreaterThan(0);

    const primerReporte = reports[0];
    expect(primerReporte).toHaveProperty('id');
    expect(primerReporte).toHaveProperty('title');
    expect(primerReporte).toHaveProperty('category');
    expect(primerReporte).toHaveProperty('votes');
    
    console.log(' ¡Búnker funcionando! Datos reales detectados:', reports.length);
    console.log(' Muestra del primer reporte extraído de la nube:', primerReporte);
  });
  
});